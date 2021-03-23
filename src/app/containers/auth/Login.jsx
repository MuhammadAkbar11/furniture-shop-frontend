import React from 'react';
import {
  Box,
  Link as MuiLink,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import Layout from '@components/Layouts/Layout';
import Breadcrumbs from '@components/UI/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';
import {
  FormBox,
  FormInputField,
  FormInputLabel,
  LoginCard,
  LoginContainer,
  LoginContent,
} from './Login.styled';
import Button from '../../components/UI/Button/Button';

const Login = () => {
  const breadcrumbsLinks = [
    {
      label: 'Home',
      url: '/',
      ac: false,
    },
    {
      label: 'Login',
      url: '/',
      ac: true,
    },
  ];

  return (
    <Layout>
      <Breadcrumbs title='Login' items={breadcrumbsLinks} />
      <LoginContainer>
        <LoginContent
          container
          direction='row'
          justify='center'
          alignItems='flex-start'
        >
          <Box clone px={3}>
            <Grid item xs={12} sm={8} md={6} lg={5}>
              <Box mb={3}>
                <Typography className='title' variant='h6' color='primary'>
                  Login
                </Typography>
              </Box>
              <LoginCard>
                <CardContent>
                  <FormBox>
                    <FormInputLabel>E-mail</FormInputLabel>
                    <FormInputField type='email' fullWidth />
                  </FormBox>
                  <FormBox>
                    <FormInputLabel>Password</FormInputLabel>
                    <FormInputField type='password' fullWidth />
                  </FormBox>
                  <FormBox>
                    <Button fullWidth>Login</Button>
                  </FormBox>
                  <FormBox
                    display='flex'
                    flexDirection='column'
                    justifyContent='flex-start'
                  >
                    <Typography variant='caption'>
                      Dont have any account?
                      <MuiLink
                        style={{ marginLeft: '.5rem' }}
                        component={Link}
                        to='/auth/register'
                      >
                        Sign up!
                      </MuiLink>
                    </Typography>
                    <Typography
                      variant='caption'
                      style={{
                        marginTop: '.4rem',
                      }}
                    >
                      <MuiLink component={Link} to='/auth/register'>
                        Forgot your password?
                      </MuiLink>
                    </Typography>
                  </FormBox>
                </CardContent>
              </LoginCard>
            </Grid>
          </Box>
        </LoginContent>
      </LoginContainer>
    </Layout>
  );
};

export default Login;
