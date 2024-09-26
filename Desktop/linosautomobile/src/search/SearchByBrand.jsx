import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './SearchPage.css'
import { Link } from 'react-router-dom'
export default function SearchByBrand() {
    const [search, setSearch] =useState([])

    const [result, setResult]= useState(search)

    useEffect(()=>{
        let url =(`${process.env.REACT_APP_SEARCH_BY_BRAND_ROOT_API}`)
        axios.get(url).then((res)=>{
            setSearch(res.data)
        }).catch(err=>{
            console.log('Error=>',err)
        })
    },[])

    const BrandFilter =(e)=>{
            if(e.target.value===''){
                setResult([])
            }else{
                setResult(search.filter(f=>f.name.toLowerCase().includes(e.target.value)))
            }
    }

  return (
        <>
        <div className="search-bran">
                <input type="text" 
                placeholder='Search By Brand'
                className='search-by-brand'
                onChange={BrandFilter} />
        </div>
        <div className="search-brand-result">
        <ul>
                {
                    result?.map((result)=>{
                        return(
                            <> 
                            <Link to={`/search/${result.slug}`}>
                                <li> {result.name}</li>
                            </Link>
                             
                            </>
                        )
                    })
                }
              </ul>
            
        </div>
        </>
  )
}
