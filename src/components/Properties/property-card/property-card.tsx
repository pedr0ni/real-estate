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
import {Link} from 'react-router-dom';
import {Property} from '../../../types/property';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({property}: PropertyCardProps) {
  return (
    <Card maxW="sm" borderRadius="1rem">
      <Image
        borderTopLeftRadius="1rem"
        borderTopRightRadius="1rem"
        src={Decorado}
      />
      <CardBody>
        <Stack mt="2" spacing="3">
          <Heading size="md">{property.title}</Heading>
          <Text color="purple.600" fontSize="2xl" fontWeight="medium">
            R$ {property.price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            as={Link}
            to={`/property/${property._id}`}
            variant="solid"
            colorScheme="purple"
          >
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
