import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VeiwDetails = () => {
    const[Details , setDetails] = useState([]);
    const params = useParams();
    useEffect(()=>{
const fetchedData = async()=>{
try{
const api  =  await fetch (`http://localhost:3500/products/${params.ID}`);
if(!api.ok) throw Error ("Data Not Loaded");
const res = await api.json();
setDetails(res)
}
catch(error){
console.log(error.message)
}
}
(async()=> await fetchedData())();
    } , []) 
  return (
    <div>VeiwDetails {Details.title} </div>
  )
}

export default VeiwDetails