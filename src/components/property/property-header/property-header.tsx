import {
  Card,
  CardBody,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {Property} from '../../../types/property';

interface PropertyHeaderProps {
  property: Property;
}

export default function PropertyHeader({property}: PropertyHeaderProps) {
  const priceColor = useColorModeValue('purple.500', 'purple.300');

  return (
    <Container maxW="container.xl">
      <Card>
        <CardBody>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Heading size="lg">{property.title}</Heading>
              <Text>{property.address}</Text>
            </Stack>

            <Stack alignItems="flex-end">
              <Heading color={priceColor} size="lg">
                R$ {property.price}
              </Heading>
              <Text>R$ 8395,00/m²</Text>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}
