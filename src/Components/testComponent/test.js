import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { positions } from '@material-ui/system';
import { Grid } from '@material-ui/core';
import Radium from 'radium'



 const styles = {
    styleNavbutton : {
        ':hover' : {
            'border-top' : '0.1875rem solid var(--primary-dark)',
           }
    }
}


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

const Navigationbar = props => { 
    const navStyle = styles
   console.log(navStyle)
   return(
    <React.Fragment>
    <CssBaseline />
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
        <Grid md={6}><Typography variant="h6">Here will be my logo</Typography></Grid>
        <Grid container justify='flex-end'>
            <Grid  md= {2} xs= {4}>   
            <span style={styles.styleNavbutton}><Button  variant='text' color='inherit'> About me </Button></span>
            </Grid>  
            <Grid md= {2} xs={4}>
            <Button color='inherit'>Home</Button>     
            </Grid>
            <Grid md={2} xs={4}>
            <Button color='inherit'>Contact me</Button>     
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
    <Container>
      <Box my={2}>
        <h2>Here will contain the picture </h2>
      </Box>
    </Container>
  </React.Fragment>
   );
} 
export default Radium(Navigationbar) 
