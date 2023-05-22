'use client';

import {useState} from 'react';
import {useProvider, useSigner, useContract} from "wagmi";
import { landContractABI } from '@/constants';

function search() {
 const[data, setData] = useState("")

 //////create interface for contract ////////////

 const provider = useProvider()
 const signer = useSigner()

 const landContract = useContract({
    addressOrName:data,
    contractInterface:landContractABI,
    signerOrProvider:signer | provider
 })


 function handleOnChange(e){
    setData(e.target.value);
 }

function handleData(){
  
}

  return (
    <div>
    <h1 className="block text-center text-gray-100 text-xl font-bold my-2">SEARCH YOUR LAND ADDRESS</h1>
    <div className="w-[80vw] h-[20vh] mx-auto  flex flex-row justify-center items-center">
        <input className="shadow appearance-none border rounded w-[40vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="address" placeholder='Enter contract address' onChange={handleOnChange} autoComplete="off"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleData} >search</button>
    </div>
    </div>
  )
}

export default search