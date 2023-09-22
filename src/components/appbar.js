import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

const PREFIX = 'AppBar'

const classes = {
  appbarStyle: `${PREFIX}-appbarStyle`,
  categoriesStyle: `${PREFIX}-categoriesStyle`,
}

const AppBarContainer = styled('div')((
  {
    theme
  }
) => {
  return {
    [`& .${classes.appbarStyle}`]: {
      display: 'flex',
      // width: '100%',
      minHeight: '64px',
      // padding: '0',
      zIndex: '1',
      justifyContent: 'flex-end',
    },
    [`& .${classes.categoriesStyle}`]: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '0.75rem',
      transition: 'transform linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%) 1s',
      // marginLeft: '10px',
      padding: '5px 10px 5px 10px',
      '&:hover': {
        backgroundColor: '#8A4DDC',
        boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.6)',
        borderRadius: '40px',
        transform: 'translateY(-5px)',
        cursor: 'pointer',
      }
    },
  }
})

function MyAppBar() {
  return (
    <AppBarContainer>
        <AppBar position="fixed">
          <Toolbar className={classes.appbarStyle}>
            <Typography className={classes.categoriesStyle} variant="h6" component="div">
              Accueil
            </Typography>
            <Typography className={classes.categoriesStyle} variant="h6" component="div">
              Présentation
            </Typography>
            <Typography className={classes.categoriesStyle} variant="h6" component="div">
              Projets
            </Typography>
            <Typography className={classes.categoriesStyle} variant="h6" component="div">
              Compétences
            </Typography>
          </Toolbar>
        </AppBar>
    </AppBarContainer>
  );
}

export default MyAppBar;