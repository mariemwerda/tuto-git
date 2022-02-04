import React, { useState, useEffect } from 'react'
import Categorieservice from '../services/Categorie-service';

export default function Listcategories() {
    const [listProd, setListProd] = useState([]);
    useEffect(() => {
        Categorieservice.fetchCategories().then(res => {
            setListProd(res.data)
        })
    })



    return (
        <div>
            <table border>
                <thead >
                    <tr>
                        <th colspan="2">nom categorie</th>
                        <th colspan="2">image categorie</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {listProd.map((row) =>(
                                   <div key={row._id}><td>{row.nomcategorie}</td>
                                    <td><img src={row.imagecategorie} alt="" width="100"/></td></div>
                                
                            ))}
                        
                    </tr>
                </tbody>
            </table>
            
                        
        </div>
    )
}
