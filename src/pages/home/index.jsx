import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { banners, SERVICES } from '../../appconstants';
// import Experts  from '../../assets/experts';
import Experts  from '../../assets/experts-animation.svg';
import Carousel from '../../components/carosule'
import Image from '../../components/Image'
import ServiceCard from '../../components/ServicesCard';
import { LeftGrid, Subheading } from './styles'

const Home = () => {
  return (
    <Box>
        <Grid container>
            <LeftGrid item xs={12} md={6}>
                <Typography sx={{
                    fontSize: 40,
                }}>
                    We are Creative and End to End IT solution Provider
                </Typography>
                <p style={{ fontWeight: 200}}>We constantly push ourselves to be our best, we focus on solutions, and we arrive every day inspired to make an impact through our talents, passion and hard work.</p>
                <Button variant='contained' disableElevation={true} sx={{
                    borderRadius: 10,
                    color: '#fff',
                    paddingLeft: 4,
                    paddingRight: 4,
                    background: '#f4b41a',
                    alignSelf: 'flex-start',
                    "&:hover": {
                        background: '#f4b41a'
                    }
                }}>Learn More</Button>
            </LeftGrid>
            <Grid item xs={12} md={6}>
                <img src={Experts}/>
                {/* <Experts />         */}
            </Grid>
        </Grid>
        <Grid container sx={{
            paddingTop: 10,
            paddingBottom: 10,
            background: '#fafafa'
        }}>
            <Grid item xs={12} md={6} sx={{
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                    <div style={{ border: '1px solid rgba(0,0,0,0.10)', padding:10,borderRadius: 10,  minWidth: 350,maxWidth:350,minHeight: 350, maxHeight: 350}}>
                        <Image
                            src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg"
                        />
                    </div>

                
            </Grid>
            <Grid item xs={12} md={6} sx={{paddingLeft: 5,paddingRight: 5}}>
                <Subheading variant='h4' sx={{fontSize: 40, paddingRight: 10}}>
                    <span style={{color: '#f4b41a'}}>The Best Consulting</span> For Your Need
                </Subheading>
                <Typography variant="h3" style={{padding: 10}}></Typography>
                <Typography variant='p' style={{fontWeight: 200}}>
                    We work with various professional organizations to provide recruitments for them. Our recruitment process involves best practices and planning, providing the best candidates for a permanent role in any company. KPIT Solutions is involved in developing a wide range of solutions in finding the perfect candidate who has a strong knowledge in his/her work and suits the company work culture..
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{
            paddingTop: 10,
            paddingBottom: 10,
        }}>
            <Grid item xs={12} md={12} sx={{paddingLeft: 5,paddingRight: 5, display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
                <Subheading variant='h4' sx={{fontSize: 40, paddingRight: 10, textAlign: 'center'}}>
                    We Provide <span style={{color: '#f4b41a'}}> Best Services</span>
                </Subheading>
                <Typography variant='p' style={{ fontWeight: 200, fontSize: 20,textAlign: 'center',padding: '10px 0px 10px 0px', marginLeft: '20%', marginRight: '20%'}}>
                Build Interactive digital experiences to help companies and enterprises develop innovative technologies and drive attention.
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{marginTop: 5}}>
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {SERVICES.map((item,key)=>(
                            <ServiceCard content={item} key={key}/>
                        ))}
                    </Grid>
                </Container>
            </Grid>
        </Grid>
        <Grid container sx={{
            paddingTop: 10,
            paddingBottom: 10
        }}>
            <Grid item  container xs={12} md={12} sx={{
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
            }}>
                {/* {banners.map((i)=>(
                    <Grid item xs={12} lg={3}>
                        <img src={i} width="500px"/>
                    </Grid>
                ))} */}
                <Carousel banners={banners}/>
            </Grid>
        </Grid>
    </Box>

  )
}

export default Home