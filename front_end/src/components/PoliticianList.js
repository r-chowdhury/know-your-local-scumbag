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
      isLoaded: false,
      userPoliticians: []
    }
  }

  componentDidMount = () => {
    api.subscribe('Politicians', 'index', {
      'Authorization':`Bearer ${localStorage.token}`
    }, politicians => {
      this.setState({ filteredPoliticianList: politicians})
    })

    fetch('http://localhost:3000/user_politicians', {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then( resp => resp.json())
      .then( data => {
        this.setState({
          userPoliticians: data
        })
      })
      .then(() => console.log(this.state))
  }
  
  handleUpvoteButton = (politician, number_of_likes) => {
    const x = this.state.userPoliticians.filter(userPolitician => {
      return (userPolitician.user_id === parseInt(localStorage.user_id, 10) && userPolitician.politician_id === politician.id)
    })[0]
    if (x.upvote_toggled === false) {
      api.trigger('Politicians', 'update', {
        id: politician.id,
        number_of_likes,
        'Authorization': `Bearer ${localStorage.token}`
      })
      x.downvote_toggled = false
      x.upvote_toggled = true
      fetch(`http://localhost:3000/user_politicians/${x.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.token
        },
        body: JSON.stringify({
          user_politician: {
            upvote_toggled: x.upvote_toggled,
            downvote_toggled: x.downvote_toggled
          }
        })
      })
    }
  }

  handleDownvoteButton = (politician, number_of_likes) => {
    const x = this.state.userPoliticians.filter(userPolitician => {
      return (userPolitician.user_id === parseInt(localStorage.user_id, 10) && userPolitician.politician_id === politician.id)
    })[0]
    if (x.downvote_toggled === false) {
      api.trigger('Politicians', 'update', {
        id: politician.id,
        number_of_likes,
        'Authorization': `Bearer ${localStorage.token}`
      })
      x.downvote_toggled = true
      x.upvote_toggled = false
    } else {
      x.downvote_toggled = true
      x.upvote_toggled = false
      fetch(`http://localhost:3000/user_politicians/${x.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.token
        },
        body: JSON.stringify({
          user_politician: {
            upvote_toggled: x.upvote_toggled,
            downvote_toggled: x.downvote_toggled
          }
        })
      })
    }
  }
  
  displayPolitician = (politicianList) => {
    return politicianList.map( ( politician ) => {
      return <Politician politician={politician}  handleVoteButton={this.handleVoteButton} handleUpvoteButton={this.handleUpvoteButton} handleDownvoteButton = {this.handleDownvoteButton} />
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