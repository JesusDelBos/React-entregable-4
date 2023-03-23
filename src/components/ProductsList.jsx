import React from 'react';

const ProductsList = ( { usersData, deleteUserAction, selectUser } ) => {
    
    const confirmDelete = (id) =>{
        const resultConfirm = confirm("Deseas eliminar el producto?")
           if(resultConfirm ){
            deleteUserAction(id)
           }
    }


    
    return (
        
        <ul className="product__list">
            {
                usersData?.map( user => (
                <li className='box__list' 
                key={ user.id }>
                    <h4><span>Nombre del producto:</span> {user.name}  </h4>
                    <h4><span>Categoria:</span> {user.category} </h4>
                    <h4><span>Precio:</span> {user.price} </h4>
                    <h4><span>Discponible:</span> {user.isAvailable} </h4>

                    <button onClick={ () => confirmDelete( user.id ) }>Eliminar</button>
                    <button onClick={ () => selectUser(user) } >Editar</button>
                </li>
                ))
            }
            
        </ul>
        
        
    );  
}


export default ProductsList;