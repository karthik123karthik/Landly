//SPDX-License-Identifier : MIT
//address = 0x84A69Ebc12dDF7D5344eDAdB2D9A9a40dC825781

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