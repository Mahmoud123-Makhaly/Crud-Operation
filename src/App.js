import { Route, Router, Routes } from "react-router-dom";
 import Navs from "./components/Navs";
import Sidebar from "./components/Sidebar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import AddProduct from "./components/Pages/AddProduct";
import VeiwDetails from "./components/Pages/VeiwDetails";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
function App() {
  const [Data, setData] = useState([]);
  const [fetchedError , setFetchedError] = useState(null);
  const[IsLoaded , setIsLoaded]= useState(true)
  const API_URL = "http://localhost:3500/products";
  const fetchedData = async () => {

    try {
      const api = await fetch(API_URL);
      if (!api.ok) throw Error("Is Loading");
      const res = await api.json();
      setData(res);
      setFetchedError(null)
    }
    catch (err) {
      setFetchedError(err.message)
      
    }
    finally{
      setIsLoaded(false)
    }
  }
  useEffect(() => {
  
setTimeout(()=>{
  (async () => await fetchedData())()
} , 2000)
  }, []);
  const onDelete = (product)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      fetch(`http://localhost:3500/products/${product.id}` , {method:"DELETE"}).then((res)=>res.json())
  .then(fetchedData()) 
    })
  
  }
  const AddItem = (item)=>{
 setData((prev)=>{
return[ ...prev,item ]
 })
  }
  return (
    <div className="App">
<Navs/>
 
<div className="row">
<div className="col-md-2 ">
<div className="sidebar">
 <Sidebar/> 
</div>

</div>
<div className="col-md-10">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Products" element={<About Data={Data} onDelete={onDelete} fetchedError={fetchedError} IsLoaded={IsLoaded}/>}/>
<Route path="/Products/AddProduct" element={<AddProduct   AddItem={AddItem} />}/>
<Route path="/Products/:ID" element={<VeiwDetails/>}/>


</Routes>

</div>
</div>
 
    </div>
  );
}

export default App;
