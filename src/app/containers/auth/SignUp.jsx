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
  AuthCard,
  AuthContainer,
  AuthContent,
} from './Auth.styled';
import Button from '../../components/UI/Button/Button';

const Login = () => {
  const breadcrumbsLinks = [
    {
      label: 'Home',
      url: '/',
      ac: false,
    },
    {
      label: 'Sign Up',
      url: '/',
      ac: true,
    },
  ];

  return (
    <Layout>
      <Breadcrumbs title='Sign Up' items={breadcrumbsLinks} />
      <AuthContainer>
        <AuthContent
          container
          direction='row'
          justify='center'
          alignItems='flex-start'
        >
          <Box
            clone
            px={{
              md: 3,
            }}
          >
            <Grid item xs={12} sm={8} md={6} lg={5}>
              <Box mb={3}>
                <Typography className='title' variant='h6' color='primary'>
                  Sign Up
                </Typography>
              </Box>
              <AuthCard>
                <CardContent>
                  <FormBox>
                    <FormInputLabel>Username</FormInputLabel>
                    <FormInputField type='text' fullWidth />
                  </FormBox>
                  <FormBox>
                    <FormInputLabel>E-mail</FormInputLabel>
                    <FormInputField type='email' fullWidth />
                  </FormBox>
                  <FormBox>
                    <FormInputLabel>Password</FormInputLabel>
                    <FormInputField type='password' fullWidth />
                  </FormBox>
                  <FormBox>
                    <FormInputLabel>Confirmation password</FormInputLabel>
                    <FormInputField type='password' fullWidth />
                  </FormBox>
                  <FormBox>
                    <Button fullWidth>Sign Up </Button>
                  </FormBox>
                  <FormBox
                    display='flex'
                    flexDirection='column'
                    justifyContent='flex-start'
                  >
                    <Typography variant='caption'>
                      Already have an account?
                      <MuiLink
                        style={{ marginLeft: '.5rem' }}
                        component={Link}
                        to='/auth/login'
                      >
                        Login!
                      </MuiLink>
                    </Typography>
                    <Typography
                      variant='caption'
                      style={{
                        marginTop: '.4rem',
                      }}
                    >
                      <MuiLink component={Link} to='/auth/forgot-password'>
                        Forgot your password?
                      </MuiLink>
                    </Typography>
                  </FormBox>
                </CardContent>
              </AuthCard>
            </Grid>
          </Box>
        </AuthContent>
      </AuthContainer>
    </Layout>
  );
};

export default Login;
