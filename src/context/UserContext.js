import React, { Component,createContext,useState } from 'react';

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const[users,setUsers] = useState([])

    const addUser = (user) =>{
        setUsers([...users,user])
    }

    const updateUser =  (obj) =>{
        let temp = [...users]
        temp = temp.filter(user=>user.UserName!=obj.UserName)
        temp.push(obj)
        setUsers(temp)
    }

    const deleteUser =  (us) =>{
        setUsers(users.filter(user=>user.UserName!=us))
    }
    return ( 
        <UserContext.Provider value={{users,addUser,updateUser,deleteUser}}>
            {props.children}
        </UserContext.Provider>
    );
}
 
export default UserContextProvider;