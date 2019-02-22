pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

contract EndlessToken is ERC20Detailed, ERC20Mintable {
    using SafeMath for uint256;

    constructor (uint256 initialMint)
        public
        ERC20Detailed('Endless Token', 'ENDS', 18)
    {
        if (initialMint > 0) {
            _mint(msg.sender, initialMint);
        }
    }
}
