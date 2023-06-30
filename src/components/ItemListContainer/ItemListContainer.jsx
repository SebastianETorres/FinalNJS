import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';

import { useParams } from "react-router-dom";


import { getDocs, collection, query, where, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    const category = categoryId;
    useEffect(() => {
        setLoading(true)
    
        const collectionRef = categoryId 
            ? query(collection(db, 'items'), where('categoria', '==', category))
            : collection(db, 'items')
    
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    
    

    return (
        <div className="gr">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
}
 
export default ItemListContainer;
