import React  from 'react'
import { Link } from 'react-router-dom'

const About = ({onDelete , fetchedError,IsLoaded,Data}) => {

 
 ///On Delete

  return (
  
    <div className='about'>
      <h3>Product Page</h3>
      <Link to="/Products/AddProduct">
        <button className='btn btn-success'>Add New Product</button>
      </Link>
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        {
          fetchedError&&<h4 style={{textAlign:"center" , color:"red"}}>{`Error: ${fetchedError}`}</h4>
        }
        {
          IsLoaded&&<h3 style={{textAlign:"center"}}>Your Data Is Loaded.....</h3>
        }
        <tbody> 
        {
         !fetchedError&& !IsLoaded&&
      
          Data.map((item) => {
            return (
              <>

              
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title} ...</td>
                    <td>{item.price}</td>
                    <td>
                      <button className='btn btn-danger btn-small' onClick={()=>{onDelete(item)}}>Delete</button>
                      <Link to={`/Products/${item.id}`} className='btn btn-info btn-small  mx-1'>Veiw</Link>
                      <button className='btn btn-primary btn-small'>Edit</button>
                    </td>
                  </tr>

              
              </>
            )
          })
        
        }
        </tbody>
      </table>
      </div>
  )
}

export default About