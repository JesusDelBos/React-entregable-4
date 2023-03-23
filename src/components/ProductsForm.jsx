
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const ProductsForm = ( { createUser, selectedUser, updateUser } ) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    

    
    useEffect(() => {
      
        if( selectedUser ){ 
            reset( selectedUser )    
        }else{
            emptyForm()
        }

    }, [ selectedUser ]);


    const submit = data => {
        if( selectedUser ){
            updateUser( data )
        }else{
            createUser( data )
            emptyForm()
        }
    }

    
    const emptyForm = () => {
        reset(
            {
                name: "",
                category: "",
                price: "",
                isAvailable: "",
                
            }
        )
    }
    
    return (
        <div className="product__form">
            <form onSubmit={ handleSubmit( submit ) }>
                <div className="input-wrapper">
                    <label 
                    htmlFor="name">
                        Nombre del producto
                    </label>
                    <input 
                    type="text" 
                    id="name" 
                    placeholder="nombre"
                    { ...register("name", { required: true }) }
                    />
                </div>

                <div className="input-wrapper">
                    <label 
                    htmlFor="category">
                        Categoria
                    </label>
                    <input 
                    type="text" 
                    id="category" 
                    placeholder="categoria"
                    { ...register("category", { required: true }) }
                    />
                </div>

                <div className="input-wrapper">
                    <label 
                    htmlFor="price">
                        Precio
                    </label>
                    <input 
                    type="number" 
                    id="price" 
                    placeholder="$"
                    { ...register("price", { required: true }) }
                    />                
                </div>

                <div className="input-wrapper">
                    <label 
                    htmlFor="isAvailable">
                        Disponible
                    </label>
                    <input 
                    type="text" 
                    id="isAvailable" 
                    placeholder="disponible"
                    { ...register("isAvailable", { required: true }) }
                    />
                </div>

                <button type="submit">
                    Completar registro
                </button>
            </form>
        </div>
    );
}


export default ProductsForm;