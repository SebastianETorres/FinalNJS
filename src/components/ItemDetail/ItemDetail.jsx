import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

    return (
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {nombre}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        Categoria: {categoria}
                    </p>
                    <p className='Info'>
                        Descripción: {descripcion}
                    </p>
                    <p className="Info">
                        Precio: ${precio}
                    </p>
                </section>
                <footer className="ItemFooter">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option'>Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada ', {quantity})} />
                        )
                    }
                </footer>
            </article>
    )
}

export default ItemDetail