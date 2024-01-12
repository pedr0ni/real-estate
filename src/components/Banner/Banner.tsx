import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import AnimatedView from '../animated/animated-view';
import Bg from '../../assets/img/bg.svg';
import Decorado1 from '../../assets/img/decorado-1.jpeg';
import Header from '../header/header';

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
        <Header />

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

                <Image borderRadius="1rem" src={Decorado1} />
              </Flex>
              <Card minW="sm" borderRadius="1rem">
                <Tabs colorScheme="purple">
                  <CardHeader>
                    <TabList>
                      <Tab flex={1}>Alugar</Tab>
                      <Tab flex={1}>Comprar</Tab>
                    </TabList>
                  </CardHeader>
                  <CardBody>
                    <TabPanels>
                      <TabPanel>
                        <Flex gap="1rem" flexDirection="column">
                          <FormControl>
                            <FormLabel>Cidade</FormLabel>
                            <Input placeholder="Campinas" />
                          </FormControl>

                          <FormControl>
                            <FormLabel>Bairro</FormLabel>
                            <Input placeholder="Mansões Santo Antônio" />
                          </FormControl>

                          <Flex gap="1rem">
                            <FormControl flex={1}>
                              <FormLabel>Valor máximo</FormLabel>
                              <Input placeholder="R$ 1500,00" />
                            </FormControl>

                            <FormControl flex={1}>
                              <FormLabel>Quartos</FormLabel>
                              <Input placeholder="2" />
                            </FormControl>
                          </Flex>

                          <Button colorScheme="purple">Buscar imóveis</Button>
                        </Flex>
                      </TabPanel>
                      <TabPanel>
                        <p>two!</p>
                      </TabPanel>
                    </TabPanels>
                  </CardBody>
                </Tabs>
              </Card>
            </Container>
          </AnimatedView>
        </Flex>
      </Box>
    </Box>
  );
}
