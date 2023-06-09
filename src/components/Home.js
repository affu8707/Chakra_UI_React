import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            recusandae quia maxime quibusdam tempora delectus animi non quaerat
            labore aspernatur sed sequi amet rem ullam, qui, culpa eum corrupti
            pariatur reprehenderit! Ut temporibus itaque, animi porro culpa non
            quae officiis nisi ad illum quibusdam reiciendis voluptatem, magnam
            ea tempore cumque eligendi sequi rerum fuga at! Dolorum fugiat
            culpa, architecto voluptatum quaerat qui sequi ratione quibusdam a
            officia deserunt omnis aut adipisci sit necessitatibus soluta
            commodi excepturi maiores corporis aliquid non quasi quae illum!
            Illo deleniti officiis accusamus repellendus cum? Dolores temporibus
            laboriosam inventore veritatis. Dolores blanditiis aliquid error
            minus.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    ;
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bg={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    ;
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming onConsole
      </Heading>
    </Box>
    ;
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
    ;
    <Box w={'full'} h={'100vh'}>
      <Image src={img5} />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    ;
  </Carousel>
);
export default Home;
