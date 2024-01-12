import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import Decorado from '../../../assets/img/decorado-1.jpeg';

export default function PropertyCard() {
  return (
    <Card maxW="sm" borderRadius="1rem">
      <Image
        borderTopLeftRadius="1rem"
        borderTopRightRadius="1rem"
        src={Decorado}
      />
      <CardBody>
        <Stack mt="2" spacing="3">
          <Heading size="md">
            Cobertura ao lado da lagoa do taquaral, Campinas/SP
          </Heading>
          <Text color="purple.600" fontSize="2xl" fontWeight="medium">
            $450
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="purple">
            Detalhes
          </Button>
          <Button variant="ghost" colorScheme="purple">
            Contato
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
