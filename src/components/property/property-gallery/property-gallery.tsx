import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  IconButton,
  Image,
} from '@chakra-ui/react';
import {useState} from 'react';
import {Property} from '../../../types/property';
import {IoChevronBack, IoChevronForward} from 'react-icons/io5';

interface PropertyGalleryProps {
  property: Property;
}

export default function PropertyGallery({property}: PropertyGalleryProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const goBack = () => {
    if (imgIndex > 0) {
      setImgIndex(prev => prev - 1);
    }
  };

  const goNext = () => {
    if (imgIndex + 1 < property.gallery.length) {
      setImgIndex(prev => prev + 1);
    }
  };

  return (
    <Card w="4xl">
      <CardHeader overflowX="scroll" maxW="calc(100% - 20px)">
        <Flex justifyContent="flex-start" alignItems="center" gap="1rem">
          {property.gallery.map((image, index) => (
            <Image
              onClick={() => setImgIndex(index)}
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
        <Box position="relative">
          <Image mt="1rem" src={property.gallery[imgIndex]} />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            left={0}
            top={0}
            height="100%"
            width="100%"
            padding={2}
          >
            <IconButton
              isRound={true}
              variant="solid"
              bgColor="whiteAlpha.500"
              aria-label="Done"
              fontSize="20px"
              onClick={goBack}
              icon={<IoChevronBack />}
            />
            <IconButton
              isRound={true}
              variant="solid"
              bgColor="whiteAlpha.500"
              aria-label="Done"
              fontSize="20px"
              onClick={goNext}
              icon={<IoChevronForward />}
            />
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
}
