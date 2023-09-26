import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Backdrop, Box, Typography } from "@mui/material";


const PREFIX = 'footer'

const classes = {
  footerBox: `${PREFIX}-footerBox`,
  footerTextStyle: `${PREFIX}-footerTextStyle`,
  mentionsStyle: `${PREFIX}-mentionsStyle`,
  // backdropContainer: `${PREFIX}-backdropContainer`,
  // backdropTextStyle: `${PREFIX}-backdropTextStyle`,
  // backdropTextContainer: `${PREFIX}-backdropTextContainer`,
}

const FooterContainer = styled('div')((
  {
    theme
  }
) => {
  return {
    [`& .${classes.footerBox}`]: {
      marginTop: '64px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(0, 0, 0, 0.5)',
      width: '100vw',
      height: '64px',
      zIndex: '15',
    },
    [`& .${classes.footerTextStyle}`]: {
      color: "rgba(255, 255, 255, 1)",
      marginBottom: '1rem',
    },
    [`& .${classes.mentionsStyle}`]: {
      color: "rgba(255, 255, 255, 0.7)",
      marginBottom: '1rem',
      textDecoration: 'underline',
      '&:hover': {
        cursor: 'pointer',
      }
    },
  }
})

// const BackdropRoot = styled('div')((
//   {
//     theme
//   }
// ) => {
//   return {
//     [`& .${classes.backdropContainer}`]: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       width: '80%',
//       padding: '20px',
//       background: '#323232',
//       zIndex: '20',
//     },
//     [`& .${classes.backdropTextStyle}`]: {
//       display: 'flex',
//       justifyContent: 'center',
//       color: 'rgba(255, 255, 255, 1)',
//       marginBottom: '2rem',
//     },
//     [`& .${classes.backdropTextContainer}`]: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       maxHeight: '400px',
//       width: '100%',
//       marginTop: '1rem',
//       overflowY: 'auto'
//     },
//   }
// })

function MyFooter() {

  // const [openBackdropMentions, setOpenBackdropMentions] = useState(false)

  return (
    <>
      {/* <BackdropRoot sx={{ zIndex: '20' }}>
        <Backdrop
          open={openBackdropMentions}
          onClick={() => {
            setOpenBackdropMentions(false)
          }}
        >
          <div className={classes.backdropContainer}>
            <div className={classes.backdropTextContainer}>
              <Typography variant="body1" className={classes.backdropTextStyle}>
                {"RODA Kévin"}
              </Typography>
              <Typography variant="body1" className={classes.backdropTextStyle}>
                {"Domicilé au 2 Chemin du moulin, 31840 Seilh"}
              </Typography>
              <Typography variant="body1" className={classes.backdropTextStyle}>
                {"Contactable via l'adresse qui suit: kevin.gallau@outlook.fr"}
              </Typography>
            </div>
          </div>
        </Backdrop>
      </BackdropRoot> */}
      <FooterContainer>
        <Box className={classes.footerBox}>
          <Typography variant="caption" className={classes.footerTextStyle}>
            {"© 2023 Kévin RODA, Tous droits réservés."}
          </Typography>
          {/* <Typography
          variant="caption"
          className={classes.mentionsStyle}
            onClick={() => {
              setOpenBackdropMentions(true)
            }}
          >
            {"Mentions légales"}
          </Typography> */}
        </Box>
      </FooterContainer>
    </>
  )

}

export default MyFooter