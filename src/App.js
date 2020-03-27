import React, { useEffect, useState } from "react";
import UsersContainer from "./components/UsersContainer";
import UserForm from "./components/UserForm";
import { Container } from "react-bootstrap";

 function App () {
  // state = {
  //   users: []
  // };
  const [users, setUsers] = useState([])
    
  useEffect(() =>{
      getUsers(setUsers)
    },[])

    

    // useEffect(() => {

    // }, [])

    // componentDidMount() {
    //   this.getUsers();usersOBJ
    // }

  // HANDLE EVENT FUNCTIONS
  const handleAddUser = (e, name, username, email) => {
    e.preventDefault();
    this.postUser(name, username, email);
  };

  const handleDelete = id => {
    const resp = window.confirm(`Do you want to delete user with id ${id}?`);

    if (resp) {
      this.deleteUser(id);
    }
  };
  
 
  
  
  

  // FETCH FUNCTIONS

  //GET
  const getUsers = (setUsers) => {
    console.log(setUsers)
    fetch("http://localhost:3004/users")
      .then(resp => resp.json())
      .then(usersOBJ => {
        // console.log(usersOBJ)
           setUsers(usersOBJ)
        // this.setState({
        //   users: usersOBJ
        // });
      });
  };

  //POST
  const postUser = (name, username, email) => {
    fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        username,
        email
      })
    })
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          users: [...this.state.users, user]
        });
      });
  };

    //DELETE
  const deleteUser = id => {
    fetch(`http://localhost:3004/users/${id}`, {
      method: "DELETE"
    })
    .then(resp => {
        setUsers(users.filter(user => user.id !== id))
      // this.setState({
      //   users: this.state.users.filter(user => user.id !== id)
      // });
    });
  };

  return (
    <Container>
      <UserForm addUser={handleAddUser} />
      <UsersContainer users={users} deleteUser={deleteUser} />
    </Container>
  );
}

export default App;
