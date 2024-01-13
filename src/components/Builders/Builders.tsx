import {Box, Container, Image, Text} from '@chakra-ui/react';
import Amazon from '../../assets/img/amazon.svg';
import Google from '../../assets/img/google.svg';
import Logitech from '../../assets/img/logitech.svg';
import Netflix from '../../assets/img/netflix.svg';
import Samsung from '../../assets/img/samsung.svg';
import Spotify from '../../assets/img/spotify.svg';

const images = [Amazon, Google, Logitech, Netflix, Samsung, Spotify];

export default function Builders() {
  return (
    <Box py="4rem">
      <Container
        maxW="container.md"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
        mb="2rem"
      >
        <Text color="gray.600" textAlign="center">
          Construtoras parceiras
        </Text>
      </Container>

      <Container
        maxW="container.lg"
        display="flex"
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent="space-between"
        alignItems="center"
        gap={{base: '1rem', md: 0}}
      >
        {images.map((image, index) => (
          <Image key={index} src={image} filter="grayscale(100%)" />
        ))}
      </Container>
    </Box>
  );
}
