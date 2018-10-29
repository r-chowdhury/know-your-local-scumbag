import React, { Component, Fragment } from 'react';
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import SignUpPage from "./components/SignUpPage"
import PoliticianList from "./components/PoliticianList"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggingIn: false,
      isSigningUp: false,
      isLoggedIn: false,
    }
  }

  handleClick = (e) => {
    if (e.target.innerHTML === "Create An Account") {
      this.setState({
        isSigningUp: !this.state.isSigningUp
      })
    } else {
      this.setState({
        isLoggingIn: !this.state.isLoggingIn
      })
    }
  }

  changeLoginState = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      isLoggingIn: !this.state.isLoggingIn
    }, console.log)
  }

  render() {
    if (this.state.isLoggingIn === false && this.state.isSigningUp === false && this.state.isLoggedIn === false) {
      return (
        <div>
          <HomePage handleClick={this.handleClick}/>
        </div>
      )
    } else if (this.state.isLoggingIn === true && this.state.isSigningUp === false) {
      return (<LoginPage changeLoginState={this.changeLoginState}/>)
    } else if (this.state.isSigningUp === true && this.state.isLoggingIn === false) {
      return (<SignUpPage />)
    } else if (this.state.isLoggedIn === true) {
      return (<PoliticianList userPoliticianList={this.state.userPoliticianList}/>)
    }
    
  }

}

export default App