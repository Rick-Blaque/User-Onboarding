import React, { useState } from 'react'

// const defaultValues = {name:'', email:'', password:'', service: false 
// }

export default function Form(props) {
    //const [users, newUser, updateUser] = props;

    function onSubmit(event) {
        event.preventDefault();
        // console.log(users);
        props.addUser()
         

    }

    function onChange(evt) {
        // setUsers({...users, [evt.target.name]: evt.target.value })
       // const [name, value] = evt.target
        props.updateUser(evt.target.name, evt.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name: </label>
                <input id='name-input' type='text' 
                name='name' 
                // value={props.users.name}
                placeholder='name' 
                onChange={onChange}/>
                <br/>
                <label htmlFor='email'>Email: </label>
                <input type='email' 
                name='email'id="email-input"
                // value={props.users.email}
                 placeholder='Email'
                  onChange={onChange}/>
                <br/>
                <label htmlFor='password'>Password: </label>
                <input type='password'
                 name='password' id="password-input"
                //  value={props.users.password}
                 placeholder='Password' onChange={onChange}/>
                <br/>
                <label htmlFor='service'>Terms of Service</label>
                <input type='checkbox'
                 name='service' 
                //  value={props.users.service}
                 onChange={onChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
