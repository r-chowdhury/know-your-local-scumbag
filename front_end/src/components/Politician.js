import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class Politician extends React.Component {
  constructor() {
    super()
    this.state = {
      upVoteClicked: false,
      downVoteClicked: false
    }
  }

  upvoteLayout = () => {
    return (
      <div className="upvote">
        <Button variant="fab" color="primary" aria-label="Add" className={this.props.classes.button} onClick={e => this.props.handleVoteButton(localStorage.name, this.props.politician, this.props.politician.number_of_likes + 1)}>
          <div className="upvote">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="upvote"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" /></svg>
          </div>
        </Button>
      </div>
    )
  }

  downvoteLayout = () => {
    return (
      <div className="downvote">
        <Button variant="fab" color="secondary" aria-label="Edit" className={ this.props.classes.button} onClick={e => this.props.handleVoteButton(localStorage.name, this.props.politician, this.props.politician.number_of_likes - 1)} >
          <div className="downvote">
            <svg xmlns="http://www.w3.org/2000/svg" className="downvote" width="24" height="24" viewBox="0 0 24 24"><path fill="#010101" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /></svg>
          </div>
        </ Button>
      </div> 
    )
  }

  render() {
  return (
    <div className={this.props.classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={this.props.classes.heading}>{this.props.politician.name} - {this.props.politician.position} </Typography> 
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid container spacing={12} >
              <Grid item xs={1}>
                {this.upvoteLayout()}
                  <br/>
                    {this.props.politician.number_of_likes}
                  <br/>
                {this.downvoteLayout()}
            </Grid>
            <Grid item xs={11}>
                <Grid container spacing={12} >
                  <Grid item xs={12} >
                    <img src={this.props.politician.photo_url} class="Profile-image" alt="Profile image" height="300" width="auto" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      <li><strong>Address:</strong> {this.props.politician.address !== "Unknown" ? <a href={this.props.politician.address_url} target="_blank">{this.props.politician.address}</a> : "Unknown"}</li>
                      <li><strong>Party:</strong> {this.props.politician.party}</li>
                      <li><strong>Website:</strong> {this.props.politician.website_url !== "Unknown" ? <a href={this.props.politician.website_url} target="_blank">{this.props.politician.website_url}</a> : "Unknown"}</li>
                      <li><strong>Phone Number:</strong> {this.props.politician.phone_number !== "Unknown" ? this.props.politician.phone_number : "Unknown"}</li>
                    </Typography>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>

        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}
  // Politician.propTypes = {
  //   this.props.classes: PropTypes.object.isRequired,
  // };
}


export default withStyles(styles)(Politician);