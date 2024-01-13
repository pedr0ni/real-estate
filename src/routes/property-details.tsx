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
import Bg from '../assets/img/bg.svg';
import ContactCard from '../components/contact-card/contact-card';
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import propertyService from '../services/property/property.service';
import {useEffect, useState} from 'react';

export default function PropertyDetails() {
  const {id} = useParams();
  const priceColor = useColorModeValue('purple.500', 'purple.300');
  const [image, setImage] = useState<string>();

  const {data} = useQuery(['properties', id], () =>
    propertyService.getPropertyById(id)
  );

  useEffect(() => {
    if (data) {
      setImage(data.image);
    }
  }, [data]);

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
                  <Heading size="lg">{data?.title}</Heading>
                  <Text>{data?.address}</Text>
                </Stack>

                <Stack alignItems="flex-end">
                  <Heading color={priceColor} size="lg">
                    R$ {data?.price}
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
            <CardHeader overflowX="scroll" maxW="calc(100% - 20px)">
              <Flex justifyContent="flex-start" alignItems="center" gap="1rem">
                {data?.gallery.map(image => (
                  <Image
                    onClick={() => setImage(image)}
                    cursor="pointer"
                    key={image}
                    src={image}
                    w={160}
                    _hover={{boxShadow: 'md'}}
                  />
                ))}
              </Flex>
            </CardHeader>

            <CardBody pt={0}>
              <Image mt="1rem" src={image} />
            </CardBody>
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
          <Card minW="3xl">
            <CardHeader>
              <Heading size="md">Descrição</Heading>
            </CardHeader>
            <CardBody>{data?.description}</CardBody>
            <CardHeader>
              <Heading size="md">Propriedade</Heading>
            </CardHeader>
            <CardBody>
              <Stack direction="row">
                {data?.features.map(feature => (
                  <Tag colorScheme="purple">{feature}</Tag>
                ))}
              </Stack>
            </CardBody>
            <CardHeader>
              <Heading size="md">Condmínio</Heading>
            </CardHeader>
            <CardBody>
              <Stack direction="row">
                {data?.amenities.map(amenity => (
                  <Tag colorScheme="purple">{amenity}</Tag>
                ))}
              </Stack>
            </CardBody>
          </Card>
          <Card minW="md">
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
