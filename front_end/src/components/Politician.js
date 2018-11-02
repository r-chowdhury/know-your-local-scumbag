import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const Politician = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.politician.name} - {props.politician.position} </Typography> 
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
              <img src={props.politician.photo_url} class="Profile-image" alt="Profile image" height="300" width="auto"/>
              <li><strong>Address:</strong> {props.politician.address !== "Unknown" ? <a href={props.politician.address_url} target="_blank">{props.politician.address}</a> : "Unknown"}</li>
              <li><strong>Party:</strong> {props.politician.party}</li>
              <li><strong>Website:</strong> {props.politician.website_url !== "Unknown" ? <a href={props.politician.website_url} target="_blank">{props.politician.website_url}</a> : "Unknown"}</li>
              <li><strong>Website:</strong> {props.politician.phone_number !== "Unknown" ? props.politician.phone_number : "Unknown"}</li>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

Politician.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Politician);