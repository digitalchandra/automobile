import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import './Product.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import{Trash,Eye,PencilFill} from 'react-bootstrap-icons'

export default function Allproduct() {
    const[product, setProduct] = useState()

    const loadProduct = async ()=>{
        const recieveProduct = await axios.get("http://localhost:4000/products")
        setProduct(recieveProduct.data.reverse())
    }

   useEffect(()=>{
    loadProduct();
   },[])
   
   const deletProduct = async _id=>{
       await axios.delete(`http://localhost:4000/products/${product._id}`)
   }

  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <Topbar/>
            <div className="col-md-2">
                <Nav/>
            </div>
            <div className="col-md-10">
               <div className="addproduct">
               <Link to="/addproduct"> <button type="submit" className="btn btn-primary" > Add New Product</button> </Link>
               </div>
                <table className="table table-striped">
                    <thead className="bg-primary">
                        <tr>
                        <th scope="col">S.N.</th>
                        <th scope="col">Product title</th>
                        <th scope="col">Price</th>
                        <th scope="col">id</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product?.map((product, index)=>{

                               return(
                                <tr >
                                <th skey={index} scope="row"> {index+1} </th>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product._id}</td>
                                <td>
                                    <Link to={`/editproduct/${product._id}`}> <button className="btn btn-success"> <PencilFill/> </button> </Link>
                                    <button className="btn btn-primary ml-1"> <Eye/> </button>
                                    <button onClick={()=>deletProduct(product._id)} className="btn btn-danger">  <Trash/> </button>
                                </td>
                                </tr>
                               )

                            })
                      
                        }
                     
                      
                    </tbody>
                    </table>

            </div>
        </div>
    </div>
    </>
  )
}
