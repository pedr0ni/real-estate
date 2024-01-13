import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import AnimatedView from '../animated/animated-view';
import Bg from '../../assets/img/bg.svg';
import Decorado from '../../assets/img/decorado-1.jpeg';
import SearchCard from './search-card/search-card';

export default function Banner() {
  const headerColor = useColorModeValue('gray.700', 'white');
  const textColor = useColorModeValue('gray.600', 'white');

  return (
    <Box id="home">
      <Box
        width="100%"
        height={{md: '100vh'}}
        py={{base: '1rem', md: '0'}}
        position="relative"
        overflow="hidden"
        backgroundImage={`url(${Bg})`}
        backgroundSize={{base: 'cover', md: 'contain'}}
        backgroundPosition={{base: 'top', md: 'center'}}
        backgroundRepeat="no-repeat"
      >
        <Flex
          marginTop={{base: '2rem', md: '6rem'}}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <AnimatedView animation="from-bottom">
            <Container
              maxW="container.lg"
              display="flex"
              flexDirection={{base: 'column', md: 'row'}}
              justifyContent="space-between"
              alignItems="flex-end"
              gap="2rem"
              mt="4rem"
            >
              <Flex flexDirection="column" gap="1.5rem">
                <Heading color={headerColor} as="h1" size="2xl">
                  Seu novo empreendimento está aqui na Real Estate!
                </Heading>
                <Text color={textColor}>
                  Descubra uma variedade de propriedades únicas - residências,
                  escritórios e terrenos - cada uma contando sua história. Com
                  detalhes envolventes, fotos deslumbrantes e uma busca
                  intuitiva, simplificamos sua jornada para encontrar o lar
                  ideal.
                </Text>

                <Image borderRadius="1rem" src={Decorado} />
              </Flex>
              <SearchCard />
            </Container>
          </AnimatedView>
        </Flex>
      </Box>
    </Box>
  );
}
