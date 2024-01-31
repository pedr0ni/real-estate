import {Box, Container} from '@chakra-ui/react';
import Bg from '../assets/img/bg.svg';
import ContactCard from '../components/property/contact-card/contact-card';
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import propertyService from '../services/property/property.service';
import PropertyHeader from '../components/property/property-header/property-header';
import PropertyGallery from '../components/property/property-gallery/property-gallery';
import PropertyDescription from '../components/property/property-description/property-description';
import PropertyLocation from '../components/property/property-location/property-location';
import LoadingPage from '../components/loading-page/loading-page';

export default function PropertyDetails() {
  const {id} = useParams();

  const {data, isFetching} = useQuery(['properties', id], ({signal}) =>
    propertyService.getPropertyById(id, signal)
  );

  return isFetching ? (
    <LoadingPage />
  ) : (
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
        {data && <PropertyHeader property={data} />}
        <Container
          maxW="container.xl"
          display="flex"
          mt="2rem"
          flexDirection={{base: 'column', md: 'row'}}
          justifyContent="space-between"
          alignItems="flex-start"
          gap="2rem"
        >
          {data && <PropertyGallery property={data} />}
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
          {data && <PropertyDescription property={data} />}
          <PropertyLocation />
        </Container>
      </Box>
    </Box>
  );
}
