import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


import { getDocs, collection, query, where, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loadign, setLoading] = useState(true)

    const { itemId } = useParams()
    useEffect(() => {
        setLoading(true)
    
        const docRef = doc(db, 'items', itemId)
    
        getDocs(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])
    
    
 
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer