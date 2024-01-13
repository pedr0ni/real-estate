import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Decorado from '../assets/img/decorado-1.jpeg';
import Bg from '../assets/img/bg.svg';
import ContactCard from '../components/contact-card/contact-card';

export default function PropertyDetails() {
  const priceColor = useColorModeValue('purple.500', 'purple.300');

  return (
    <Box
      width="100%"
      py={{base: '1rem', md: '0'}}
      position="relative"
      overflow="hidden"
      backgroundImage={`url(${Bg})`}
      backgroundSize={{base: 'cover', md: 'contain'}}
      backgroundPosition={{base: 'top', md: 'center'}}
      backgroundRepeat="no-repeat"
    >
      <Box pt="6rem" pb="4rem" position="relative">
        <Container maxW="container.xl">
          <Card>
            <CardBody>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Heading size="lg">
                    Cobertura ao lado da lagoa do Taquaral
                  </Heading>
                  <Text>Rua José Luis Camargo Moreira, 202</Text>
                </Stack>

                <Stack alignItems="flex-end">
                  <Heading color={priceColor} size="lg">
                    R$ 938.000
                  </Heading>
                  <Text>R$ 8395,00/m²</Text>
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        </Container>
        <Container
          maxW="container.xl"
          display="flex"
          mt="2rem"
          flexDirection={{base: 'column', md: 'row'}}
          justifyContent="space-between"
          alignItems="flex-start"
          gap="2rem"
        >
          <Card maxW="4xl">
            <CardHeader>
              <Flex justifyContent="space-between" alignItems="center">
                {[1, 2, 3, 4].map(item => (
                  <Image key={item} src={Decorado} w={160} />
                ))}
              </Flex>

              <Image mt="1rem" src={Decorado} />
            </CardHeader>
          </Card>
          <ContactCard />
        </Container>

        <Container
          maxW="container.xl"
          display="flex"
          mt="2rem"
          flexDirection={{base: 'column', md: 'row'}}
          justifyContent="space-between"
          alignItems="flex-start"
          gap="2rem"
        >
          <Card maxW="4xl">
            <CardHeader>
              <Heading size="md">Descrição</Heading>
            </CardHeader>
            <CardBody>
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </CardBody>
            <CardHeader>
              <Heading size="md">Propriedade</Heading>
            </CardHeader>
            <CardBody>
              <Stack direction="row">
                <Tag colorScheme="purple">3 Quartos</Tag>
                <Tag colorScheme="purple">2 Banheiros</Tag>
                <Tag colorScheme="purple">Churrasqueira</Tag>
                <Tag colorScheme="purple">2 Vagas</Tag>
              </Stack>
            </CardBody>
            <CardHeader>
              <Heading size="md">Condmínio</Heading>
            </CardHeader>
            <CardBody>
              <Stack direction="row">
                <Tag colorScheme="purple">Academia</Tag>
                <Tag colorScheme="purple">Piscina</Tag>
                <Tag colorScheme="purple">Salão de Festas</Tag>
                <Tag colorScheme="purple">Portaria 24h</Tag>
              </Stack>
            </CardBody>
          </Card>
          <Card minW="sm">
            <CardHeader>
              <Heading size="md">Localização</Heading>
            </CardHeader>
            <CardBody>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.6525913324376!2d-47.04876832408887!3d-22.85233923592865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c5ce7e759781%3A0xebd474abc6154706!2sR.%20Jos%C3%A9%20Lu%C3%ADs%20Camargo%20Moreira%20-%20Mans%C3%B5es%20Santo%20Ant%C3%B4nio%2C%20Campinas%20-%20SP%2C%2013087-511!5e0!3m2!1spt-BR!2sbr!4v1705096377761!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{
                  border: 0,
                  borderRadius: '0.5rem',
                  width: '100%',
                  height: 200,
                }}
                loading="lazy"
              ></iframe>
            </CardBody>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
