import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Tag,
} from '@chakra-ui/react';
import {Property} from '../../../types/property';

interface PropertyDescriptionProps {
  property: Property;
}

export default function PropertyDescription({
  property,
}: PropertyDescriptionProps) {
  return (
    <Card w="4xl">
      <CardHeader>
        <Heading size="md">Descrição</Heading>
      </CardHeader>
      <CardBody>{property.description}</CardBody>
      <CardHeader>
        <Heading size="md">Propriedade</Heading>
      </CardHeader>
      <CardBody>
        <Stack direction="row">
          {property.features.map(feature => (
            <Tag colorScheme="purple">{feature}</Tag>
          ))}
        </Stack>
      </CardBody>
      <CardHeader>
        <Heading size="md">Condmínio</Heading>
      </CardHeader>
      <CardBody>
        <Stack direction="row">
          {property.amenities.map(amenity => (
            <Tag colorScheme="purple">{amenity}</Tag>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}
