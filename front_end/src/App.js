import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; /* code change */
import LoginPage from "./components/LoginPage"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount = () => {
    
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: "guy fieri",
          email: 'guy@email.com',
          password: 'hi',
          address: "13531 Naples Bridge Road",
          city: "Sugar Land",
          state: "Texas",
          zip: "77478"
        }
      })
    })
      .then(r => r.json())
      .then(data => console.log(data))

  }


  render() {
    return(
      <LoginPage />
    )
    
  }

}

export default App