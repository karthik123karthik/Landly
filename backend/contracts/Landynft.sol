//SPDX-License-Identifier : MIT
//address = 0xDC5c874D2C3f5e3A2BCC7ab7e9b0A4Dd12b956B0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Landly is ERC721URIStorage {

uint tokenId;

mapping(address => uint)public gettokenid;

constructor()ERC721("LANDLY", "LDY"){} 

function mint(string memory _tokenURI, address _owner, address _contract)public returns(uint) {
     tokenId++;
    _safeMint(_owner, tokenId);
    _setTokenURI(tokenId, _tokenURI);
    gettokenid[_contract] = tokenId;
    return tokenId;
}

}