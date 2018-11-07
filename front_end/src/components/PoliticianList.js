import React, { Component, Fragment } from 'react'
import Politician from "./Politician"
import WarpCable from 'warp-cable-client'

const API_DOMAIN = `http://localhost:3000/cable`
let api = WarpCable(API_DOMAIN)

class PoliticianList extends Component {
  constructor() {
    super() 
    this.state = {
      filteredPoliticianList: [],
      isLoaded: false
    }
  }

  componentDidMount = () => {
    api.subscribe('Politicians', 'index', {
      'Authorization':`Bearer ${localStorage.token}`
    }, politicians => {
      console.log(politicians)
      this.setState({ filteredPoliticianList: politicians})
    })
  }

  handleVoteButton = (name, politician, number_of_likes) => {
    api.trigger('Politicians', 'update', {
      id: politician.id,
      number_of_likes,
      'Authorization': `Bearer ${localStorage.token}`
    })
     
  }
  
  displayPolitician = (politicianList) => {
    return politicianList.map( ( politician ) => {
      return <Politician politician={politician}  handleVoteButton={this.handleVoteButton} />
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