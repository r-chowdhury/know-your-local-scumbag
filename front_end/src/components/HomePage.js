import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import homePageStyles from "../styles/HomePage.css"

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
};

class HomePage extends Component {
  render () {
    return (
      <div style={{height:`${window.innerHeight-1}px`}}>
        <section id="banner" style={{ height: '100%' }}>
          <div style={{transform: 'translate(0,50%)'}}>
          <h2>Publicum Peritus</h2>
          <p>Sign up today to see who represents you!</p>
          <div className="actions">
            <a href="#" className="button" onClick={this.props.handleClick}>Create An Account</a>
            <a href="#" className="button" onClick={this.props.handleClick}>Sign In</a>
          </div>
          </div>
        </section>
    </div>
  )}
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);