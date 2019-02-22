pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/IERC20.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol';

contract EndlessCrowdsale is MintedCrowdsale {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    uint256 constant public minContribution = 1000000000000000;
    uint256 constant public rateDecimals = 18;
    uint256 constant private rateDecimalsMultiply = 10 ** rateDecimals;

    constructor (IERC20 token)
        public
        Crowdsale(1000000000000000000000000, msg.sender, token)
    {}

    function getTokenAmount(uint256 weiAmount)
        external
        view
        returns (uint256)
    {
        return _getTokenAmount(weiAmount);
    }

    function _preValidatePurchase(address beneficiary, uint256 weiAmount)
        internal
        view
    {
        super._preValidatePurchase(beneficiary, weiAmount);
        require(
            weiAmount >= minContribution,
            'Contribution must be at least 0.001 ETH'
        );
    }

    function _getTokenAmount(uint256 weiAmount)
        internal
        view
        returns (uint256)
    {
        uint256 aInverse = rate().mul(2);
        uint256 b = getLinearCoefficient(aInverse);
        uint256 tokenAmount = getRoot(aInverse, b, weiAmount);

        return tokenAmount;
    }

    function getLinearCoefficient(uint256 aInverse)
        private
        view
        returns (uint256)
    {
        // Adjust for decimal places
        uint256 start = token().totalSupply().mul(rateDecimalsMultiply);
        uint256 oneDecimals = rateDecimalsMultiply;

        uint256 b = start.mul(2).add(oneDecimals).div(aInverse);

        return b;
    }

    function getRoot(uint256 aInverse, uint256 b, uint256 cNegative)
        private
        pure
        returns (uint256)
    {
        uint256 discriminant = getDiscriminant(aInverse, b, cNegative);

        // Adjust for decimal places
        uint256 discriminantDecimals = discriminant.mul(rateDecimalsMultiply);

        uint256 root = sqrt(discriminantDecimals).sub(b).div(2).mul(aInverse);

        // Adjust for decimal places
        root = root.div(rateDecimalsMultiply);

        return root;
    }

    function getDiscriminant(uint256 aInverse, uint256 b, uint256 cNegative)
        private
        pure
        returns (uint256)
    {
        // Adjust for decimal places
        uint256 bSquaredDecimals = b.mul(b).div(rateDecimalsMultiply);
        uint256 cNegativeDecimals = cNegative.mul(rateDecimalsMultiply);

        return bSquaredDecimals.add(cNegativeDecimals.mul(4).div(aInverse));
    }

    function sqrt(uint256 x) private pure returns (uint256) {
        uint256 z = x.add(1).div(2);
        uint y = x;

        while (z < y) {
            y = z;
            z = x.div(z).add(z).div(2);
        }

        return y;
    }
}
