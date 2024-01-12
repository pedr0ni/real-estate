import {ChakraProvider, Flex, Spinner} from '@chakra-ui/react';
import theme from './theme/theme';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import {useEffect, useState} from 'react';
import Builders from './components/Builders/Builders';
import About from './components/About/About';
import Properties from './components/Properties/Properties';

function App() {
  const [loading, setLoading] = useState(
    process.env.NODE_ENV !== 'development'
  );

  useEffect(() => {
    // amplitude.init('c64932dc234e2c07ce015b09ccb634a2');
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Spinner color="brand.500" size="xl" />
        </Flex>
      ) : (
        <>
          <Banner />
          <Builders />
          <About />
          <Properties />
          <Footer />
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
