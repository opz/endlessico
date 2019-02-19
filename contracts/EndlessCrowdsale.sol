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

    function _getTokenAmount(uint256 weiAmount)
        internal
        view
        returns (uint256)
    {
        uint256 start = token().totalSupply();
        uint256 b = start.mul(2).add(1).div(2);

        uint256 root = sqrt(b.mul(b).add(weiAmount.mul(2))).sub(b);

        return root;
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
