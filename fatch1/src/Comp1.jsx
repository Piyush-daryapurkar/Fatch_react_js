import './Comp1.css'
import React from 'react'
import { useState, useEffect } from 'react'

const Comp1 = () => {

    const[initial, final] = useState([]);

    useEffect(()=>{
        const myfun=async()=>{
            const response=await fetch('https://fakestoreapi.com/products');
            const data=await response.json();
            // console.log(data);
            final(data);
        }
        myfun();
    },[])


    
  return (
    <>
    <h1 className='heading'>this is fake api</h1>
    
    <table border=" ">
        <tr>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>image</th>
            <th>action</th>
        </tr>

        {
                    initial.map((e)=>(
                        <>
                            <tr>
                                <td>{e.title}</td>
                                <td>{e.description}</td>
                                <td>{e.price}</td>
                                <td><img src={e.image} alt="image" style={{width:100}}
                                /></td>
                                <td><button>delete</button></td>
                                
                                
                            </tr>
                        </>
            
                    ))
        }


    </table>

    </>
  )
}

export default Comp1
