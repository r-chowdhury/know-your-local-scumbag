import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; /* code change */
import {displayUsers} from './actions/userActions'
import {displayPoliticians} from './actions/politicianActions'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(data => {
      this.props.getUsers(data)
    })
    
    fetch("http://localhost:3000/politicians")
    .then(resp => resp.json())
    .then(politicians => {
      this.props.getPoliticians(politicians)
    })

    fetch("http://localhost:3000/user_politicians")
    .then(resp => resp.json())
    .then(userPoliticians => {
      let politician_ids = userPoliticians.map(userPolitician => {
        return userPolitician.politician_id
      })

      
    })
  }

  renderNames = () =>{
    let users = this.props.users
    
    return users.map(user =>{
      return (
        <React.Fragment>
          <h1>{user.name}</h1>
        </React.Fragment> 
      )
    })
   }


  render() {
    console.log(this.props.politicians)
    if (this.props.users.length > 0) {
      return (
        <div>
          {this.renderNames()}
        </div>
      )  
    } else {
      return (<p>Loading...</p>);
    }
  }

}

function mapStateToProps(state){
  debugger
  return {
    users: state.users.users,
    politicians: state.politicians.politicians
  }
}

function mapDispatchToProps(dispatch){
  return {
    getUsers: (users) => dispatch(displayUsers(users)),
    getPoliticians: (politicians) => dispatch(displayPoliticians(politicians))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)