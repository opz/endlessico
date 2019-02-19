pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/IERC20.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol';

contract EndlessCrowdsale is MintedCrowdsale {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    constructor (IERC20 token) public Crowdsale(100, msg.sender, token) {}

    function rate() public view returns (uint256) {
        revert();
    }

    function getCurrentRate() public view returns (uint256) {
        return token().totalSupply().add(1);
    }

    function getTokenAmount(uint256 weiAmount)
        external
        view
        returns (uint256)
    {
        return _getTokenAmount(weiAmount);
    }

    function _getTokenAmount(uint256 weiAmount)
        internal
        view
        returns (uint256)
    {
        uint256 decimals = 1000000000000000000;
        uint256 scale = 10000;

        uint256 tokenAmount = getRoot(weiAmount, scale, decimals);

        return tokenAmount;
    }

    function getLinearCoefficient(uint256 scale, uint256 decimals)
        private
        view
        returns (uint256)
    {
        uint256 start = token().totalSupply().mul(decimals);
        uint256 b = start.mul(2).add(1).div(2).div(scale);

        return b;
    }

    function getRoot(uint256 weiAmount, uint256 scale, uint256 decimals)
        private
        view
        returns (uint256)
    {
        uint256 b = getLinearCoefficient(scale, decimals);
        uint256 discriminant = getDiscriminant(weiAmount, b, scale, decimals);
        uint256 root = sqrt(discriminant).sub(b).mul(scale);

        return root;
    }

    function getDiscriminant(
        uint256 weiAmount,
        uint256 b,
        uint256 scale,
        uint256 decimals
    )
        private
        pure
        returns (uint256)
    {
        return b.mul(b).add(weiAmount.mul(decimals).mul(2).div(scale));
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
