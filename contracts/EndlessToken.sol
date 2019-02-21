pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';

contract EndlessToken is ERC20Detailed, ERC20Mintable {
    constructor () public ERC20Detailed('Endless Token', 'ENDS', 18) {}
}
