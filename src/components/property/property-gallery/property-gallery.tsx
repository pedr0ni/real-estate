import {Card, CardBody, CardHeader, Flex, Image} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {Property} from '../../../types/property';

interface PropertyGalleryProps {
  property: Property;
}

export default function PropertyGallery({property}: PropertyGalleryProps) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    setImage(property.image);
  }, [property]);

  return (
    <Card w="4xl">
      <CardHeader overflowX="scroll" maxW="calc(100% - 20px)">
        <Flex justifyContent="flex-start" alignItems="center" gap="1rem">
          {property.gallery.map(image => (
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
  );
}
