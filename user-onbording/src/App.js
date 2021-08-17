import logo from './logo.svg';
import './App.css';
import Form from './Form'
import React, { useState } from 'react'
import axios from 'axios';

 
const defaultFormValues = {name:'', email:'', password:'', service: false 
}
function App() {

  const [formValues, setFormValues] = useState(defaultFormValues);

  const [user, setUser ] = useState([])
  function addUser () {
      //add user from form to page
      const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        service: formValues.service === false ? false : true
      }
      axios.post('https://reqres.in/api/users', newUser).then((res) => {
        console.log(res.data);
      })
     // const newUser = user.concat([formValues])
     const newest = [...user, newUser]
      setUser(newest)
      console.log(newUser)

      
  }
  function update(formName, formValue) {
    const newForm = {...formValues, [formName]: formValue}
    setFormValues(newForm)
  }
  return (
    <div className="App">
      {user.map((u) => {
        return  <h1>name: {u.name}</h1>
      })}
     
     <Form addUser={addUser} updateUser={update} users={user}/>
    </div>
  );
}

export default App;
