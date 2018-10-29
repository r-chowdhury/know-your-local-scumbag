import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
      <div className={this.props.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
            Welcome to Know Your Local Scumbag
          </Typography>
          <Button color="inherit" onClick={e => this.props.handleClick(e)}>Create An Account</Button>
          <Button color="inherit" onClick={e => this.props.handleClick(e)}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )}
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);