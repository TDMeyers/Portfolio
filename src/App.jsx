import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import { green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Dylan Meyers Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green[500],
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Dylan Meyers
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Simplicity with Purpose
            </Typography>
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h5" align="justify" color="text.secondary" paragraph>
                Hey, I&apos;m a software engineer and web developer who&apos;s about building solutions that really make a difference. My main focus is is full-stack web development based on JavaScript. I&apos;m really good at tackling tough problems and getting them solved, and I love picking up new skills and technologies.
                < br />
                What really gets me excited is working with a team of people who are passionate about what they do and are committed to making a difference in the world. I&apos;m looking for a team that&apos;s focused on building something that matters, and I&apos;d love to be a part of it.
                < br />
                In my spare time, I also want to be able to work on contributions to Free and Open Source Software (FOSS) projects. I&apos;m a big believer in the power of FOSS to make the world a better place, and I want to be a part of that.

                Also, cats.
              </Typography>

              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <a href='/src/assets/T. Dylan Meyers Resume.pdf' download ><Button variant="contained" >Download my CV</Button></a>
                <Button variant="outlined" href='https://www.linkedin.com/in/tdylanmeyers/'>Get in touch</Button>
              </Stack>
            </Paper>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://placekitten.com/262/147"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Browser Game
                  </Typography>
                  <Typography>
                    HTML, CSS, and JavaScript brower game built up from scratch. No frameworks or libraries used. Focused on responsive design and maintaining feel across devices.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href='https://github.com/TDMeyers/TDMeyers.github.io'>Visit</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://placekitten.com/261/147"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    D&D Compendium
                  </Typography>
                  <Typography>
                    Given that there are a few very solid API&apos;s available for D&D, I decided to make an encyclopedia type website to display the available information. I picked this format to challenge myself to utilize many of the features available with React. Including and focused on Router and Redux. This website will also be a good chance to expand my CSS styling capabilities. I will be learning how to create pop-up lists and display cards for multiple elements.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href='https://github.com/TDMeyers/Mod-2---DnD-Compendium'>Visit</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://placekitten.com/263/147"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cat-A-Base
                  </Typography>
                  <Typography>
                    A MERN stack based website focused on cats, cats, cats. It is connected with The Cats Api to import a variety of pictures and lots of information about various breeds.
                    Users can make an account and save favorites to their profile to view later.
                    An extended goal is to future utilize the MERN stack and allow for multiple-user interaction by allowing for comments to be tagged by both user, location, and breed.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href='https://github.com/TDMeyers/Mod-3---Catabase'>Visit</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Mysterious Links to Eclectic Places
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <a href='https://www.linkedin.com/in/tdylanmeyers/'> <LinkedInIcon /></a> <a href='https://github.com/TDMeyers'><GitHubIcon /></a> <a href='https://www.activatework.org/'><SchoolIcon /></a>
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}