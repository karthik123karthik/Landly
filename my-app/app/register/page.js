'use client';

import {useState} from "react";
import {useContract, useSigner, useProvider} from "wagmi";
import {deployerContractAddress, deployerContractABI} from "../../constants/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function register() {

  //////////////// building contract interaction ////////////////////////////

  const provider = useProvider();
  const {data:signer} = useSigner();
  const deployerContract = useContract({
    addressOrName: deployerContractAddress,
    contractInterface: deployerContractABI,
    signerOrProvider: signer || provider
  });
  

/////////////////////////////////////////////////////////////

 //// handle form data /////////////////////
  const [data, setData] = useState({
     country:"",
    state:"",
    district:"",
    village:"",
    landaddress:"",
    landwidth:"",
    landheight:"",
    owner:""
  });

////////// handle on change /////////////////
  function onInputChange(e){
    setData((prev) => {
      return {
        ...prev,
        [e.target.name] : e.target.value,
      };
    })
  }

  //////// handle on click ////////////////////
  async function  register(e){
      e.preventDefault();
      try{
       //const deploy = await deployerContract.create_contract(data.country,data.state, data.district, data.village, data.landaddress, data.landwidth, data.landheight, data.owner);      
       //await deploy.wait();
      //console.log("Transaction details", deploy);
      getNewlyDeployedContractAddress();
      }
      catch(err){
        console.error(err);
        toast.error("error occured see the console for details");
      }      
  }

  async function getNewlyDeployedContractAddress(){
    try{
       
      let address = await deployerContract.getdeployedContractAddress();
      
      console.log("Address here :", address);
      /*const copyAddress = address.then(
        (promise) => promise
      );*/

      await navigator.clipboard.writeText(address);
      toast.success("contract address added to clipboard successfully");

    }
    catch(err){
       console.error(err);
        toast.error("error occured see the console for details");  
    }
  }



  return (
    <div className="w-[80vw]  flex justify-center items-center">
    <div className="w-full p-3 max-w-xs">
      <h1 className="font-bold text-white text-xl">ENTER THE DETAILS OF LAND.</h1>
      <br></br>
      <form className="w-[40vw]  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={register} >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Country"
          >
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="country"
            type="text"
            placeholder="enter the country"
            onChange = {onInputChange}
            required={true}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="state"
            type="text"
            placeholder="enter the State"
            onChange = {onInputChange}
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="district"
          >
            District
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="district"
            type="text"
            placeholder="enter the district"
            onChange = {onInputChange}
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="village"
          >
            Village
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="village"
            type="text"
            placeholder="enter the village"
            onChange = {onInputChange}
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="landaddress"
          >
            Land Address
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="landaddress"
            type="text"
            placeholder="enter the Land Address"
            onChange = {onInputChange}
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="landwidth"
          >
            Land Width
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="landwidth"
            type="text"
            placeholder="enter landwidth in feet"
            onChange = {onInputChange}
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="landheight"
          >
            Land Width
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="landheight"
            type="text"
            placeholder="enter landheight in feet"
            onChange = {onInputChange}
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="owner"
          >
            Owner address
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="owner"
            type="text"
            placeholder="enter address of owner"
            onChange = {onInputChange}
            required={true}
          />
        </div>
        <div>        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 @karthikgk. All rights reserved.
      </p>
    </div>
    </div>
  );
}
