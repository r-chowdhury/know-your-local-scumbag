import React, { Component } from 'react';
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import SignUpPage from "./components/SignUpPage"
import PoliticianList from "./components/PoliticianList"
import PoliticianListAppBar from "./components/PoliticianListAppBar"

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

  logOutClick = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
    localStorage.name = undefined
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
    } else if (this.state.isLoggedIn === true && !!localStorage.token === true) {
      return (
        <div>
          <PoliticianListAppBar logOutClick={this.logOutClick}/>
          <PoliticianList userPoliticianList={this.state.userPoliticianList}/>
        </div>
      )}
    
  }

}

export default App