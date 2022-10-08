// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] UserAddress;
    constructor(){
        console.log(" Hello World");
    }

    function WaveCount() public{
        totalWaves +=1;
        console.log("%s has waved", msg.sender);
    }

    function storeUserAddress() public{
        UserAddress.push(msg.sender);
    }

    function getTotalWaveCounts() public view returns ( uint256 ){
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getAllUserAddress() public view returns (address[] memory UserAddress) {
        return UserAddress;
    }

}