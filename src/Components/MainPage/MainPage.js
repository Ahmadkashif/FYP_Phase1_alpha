import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Header from '../../Dashboard/Header/Header';
import Navigator from '../../Dashboard/Navigator/Navigator';
import Dashboard from '../../Dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom'

function MainPage(props) {

  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  
  return (
    <div>
      <BrowserRouter>
        <Dashboard/>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;