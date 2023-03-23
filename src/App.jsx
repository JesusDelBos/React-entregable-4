
import { useState, useEffect } from "react";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import axios from "axios";

function App() {
  

  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState(null);

//GET --  TODOS(LISTADO DE USUARIOS) READ
  useEffect(()=>{
    getData()
  }, [])

  const getData = () =>{
    axios
    .get("https://products-crud.academlo.tech/products/")
    .then(resp => setUsers(resp.data) )
    .catch(error => console.error(error) )
  }

  //CREAR  PRODUCTO (AGREGAR)
  const addUser = userData => {
    /*
    axios
      .post("url", body)
    */
    axios
       .post("https://products-crud.academlo.tech/products/", {userData})
       .then(()=> getData() )
       //.catch( error =>console.error(error))

  };

  //DELETE   -  ELIMINAR
  const deleteUser = idUser => {
    /*
    axios
       .delete("url")
     */
       axios
       .delete(`https://products-crud.academlo.tech/products/${idUser}/`)
       .then(() => getData() ) //se pone getData para actualizar y setear el estado
       .catch(error =>console.error(error) )
    
  };

  const selectUser = userData => {
    setUserUpdate(userData);
  };

  //EDITAR
  const userActualization = userData => {
    /*
     axios
        .put("url", body)
    */
     axios
        .put(`https://products-crud.academlo.tech/products/${userData.id}/`, userData )
        .then(() =>{
          getData() 
          setUserUpdate(null)
        })
        .catch(error => console.error(error))

  };

  return (
    <div className="App">
      <h1>PRODUCTOS</h1>
      <br />
      <div>
      <ProductsForm
        createUser={(data) => addUser(data)}
        selectedUser={userUpdate}
        updateUser={(data) => userActualization(data)}
      />
      </div>
      <br />
      <div >
      <ProductsList
        usersData={users}
        deleteUserAction={(id) => deleteUser(id)}
        selectUser={(data) => selectUser(data)}
      />
      </div>
    </div>
  );
}

export default App;
