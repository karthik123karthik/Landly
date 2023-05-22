'use client';

import {useState} from 'react';
import {useProvider, useSigner, useContract} from "wagmi";
import { landContractABI } from '@/constants';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function search() {
 const[address, setAddress] = useState("");
 const [data, setData] = useState({})

 //////create interface for contract ////////////

 const provider = useProvider()
 const {data:signer} = useSigner()

 const landContract = useContract({
    addressOrName:address,
    contractInterface:landContractABI,
    signerOrProvider:signer ||  provider
 })


 function handleOnChange(e){
    setAddress(e.target.value);
 }

async function handleData(){

  try{
       let country = await landContract.country();
       let state = await landContract.state();
       let district = await landContract.district();
       let village = await landContract.village();
       let landaddress = await landContract.landaddress();
       let length = await landContract.length();
       let width = await landContract.width();
       let owner = await landContract.currentOwner()
       setData({
        country: country,
        state: state,
        district: district,
        village: village,
        landaddress: landaddress,
        length:length,
        width:width,
        owner: owner
       })

  }
  catch(err){
       toast.error("Your address is not valid")
  }
}

  return (
    <div>
    <h1 className="block text-center text-gray-100 text-xl font-bold my-2">SEARCH YOUR LAND ADDRESS</h1>
    <div className="w-[80vw] h-[20vh] mx-auto  flex flex-row justify-center items-center">
        <input className="shadow appearance-none border rounded w-[40vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="address" placeholder='Enter contract address' onChange={handleOnChange} autoComplete="off"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleData} >search</button>
    </div>
    {
    Object.keys(data).length > 0?
    <div className='w-[80vw] h-[20vh] mx-auto  flex flex-col  font-bold text-white'>
        <h1>{`COUNTRY - ${data.country}`}</h1>
        <h1>{`STATE - ${data.state}`}</h1>
        <h1>{`DISTRICT - ${data.district}`}</h1>
        <h1>{`VILLAGE - ${data.village}`}</h1>
        <h1>{`LAND ADDRESS - ${data.landaddress}`}</h1>
        <h1>{`LENGTH - ${data.length} in feets`}</h1>
        <h1>{`WIDTH - ${data.width} in feets`}</h1>
        <h1>{`OWNER - ${data.owner}`}</h1>
    </div>:""
}
    </div>
  )
}

export default search