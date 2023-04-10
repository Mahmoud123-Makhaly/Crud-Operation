import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddProduct = ( {AddItem}) => {
  const[title ,setTitle] = useState("");
  const[price , setPrice] = useState("");
  const usenavigate = useNavigate()
 const handleSubmit =async (e)=>{
e.preventDefault();;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Created successfully'
})
const data = {
  title:title,
  price:price
}
await fetch(`http://localhost:3500/products` , {
  method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data)
}).then((res)=>res.json()).then((items)=>{AddItem(items)});
usenavigate("/Products")
}
  return (
   <>
   <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder='Product Title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input onChange={(e)=>setPrice(e.target.value)}  type="number" placeholder='Product Price' className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button   type="submit" className="btn btn-primary">Add</button>
</form>
   </>
    
  )
}

export default AddProduct