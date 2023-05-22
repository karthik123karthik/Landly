//SPDX-License-Identifier: MIT
//0xC24B708619085238170b807DbAD94686E9763f79

pragma solidity^0.8.0;

import "./Ownable.sol";

contract Landregister is Owner{
   
    string public country;
    string public state;
    string public district;
    string public village;
    string public landaddress;
    string public length;
    string public width;
    
    constructor(string memory _country, string memory _state, string memory _district, string memory _village,string memory _Address, string memory _width, string memory _height, address _owner)Owner(_owner){
        country = _country;
        state = _state;
        district = _district;
        village = _village;
        landaddress = _Address;
        length = _height;
        width = _width;
    }   

}

contract deploy{
    Landregister[] public contractaddress;

    function create_contract(string memory _country, string memory _state, string memory _district, string memory _village, string memory _Address, string memory _width, string memory _height, address buyer)public {
          Landregister newland = new Landregister(_country, _state, _district, _village, _Address, _width, _height, buyer);
          contractaddress.push(newland);
    }

    function getdeployedContractAddress()public view returns(address){
        require(contractaddress.length > 0, "there is no address available");
        return address(contractaddress[contractaddress.length - 1]);
    }

    function getallcontracts()public view returns(Landregister[]memory){
        return contractaddress;
    }
}