import {
    Button,
    Container,
    Heading,
    Input,
    VStack,
    Text,
    Avatar,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>React Chakra</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />

            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
            />

            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgetpassword'}>forget Password?</Link>
            </Button>
  
            <Button colorScheme={'purple'} type="submit">
              Sign Up
            </Button>
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;
  