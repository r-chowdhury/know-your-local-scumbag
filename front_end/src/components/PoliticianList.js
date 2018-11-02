import React, { Component, Fragment } from 'react'
import Politician from "./Politician"

class PoliticianList extends Component {
   constructor() {
     super() 
     this.state = {
       filteredPoliticianList: [],
       isLoaded: false
     }
   }

  componentDidMount = () => {
    fetch("http://localhost:3000/user_politicians", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        let x = data.filter(user_politician => {
          return user_politician.user_id === parseInt(localStorage.user_id, 10)
        })
        
        this.setState({
          filteredPoliticianList: x,
          isLoaded: !this.state.isLoaded
        })
      })
  }
  
  displayPolitician = (politicianList) => {
    return politicianList.map(user_politician => {
      return <Politician politician={user_politician.politician} user={user_politician.user}/>
    })
  }

  pageHeader = () => {
    return (
      <React.Fragment>
        <h1>Welcome {localStorage.name}</h1>
        <h2>Here's a list of your elected officials: </h2>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div>
        {this.pageHeader()}
        <ul>
          {this.displayPolitician(this.state.filteredPoliticianList)}
        </ul>
      </div>
    )
  }
}

export default PoliticianList