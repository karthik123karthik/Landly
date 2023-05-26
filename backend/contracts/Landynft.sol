//SPDX-License-Identifier : MIT
//address = 0xEA25113989EC962c90dc0e0Dc71233353fc1eAD8

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Landly is ERC721URIStorage {

uint tokenId;

constructor()ERC721("LANDLY", "LDY"){} 

function mint(string memory _tokenURI, address _owner)public returns(uint) {
     tokenId++;
    _safeMint(_owner, tokenId);
    _setTokenURI(tokenId, _tokenURI);
    return tokenId;
}

}