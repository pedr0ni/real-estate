import {ChakraProvider, Flex, Spinner} from '@chakra-ui/react';
import theme from './theme/theme';
import {useEffect, useState} from 'react';
import Home from './routes/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PropertyDetails from './routes/property-details';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" h="100vh">
            <Spinner color="brand.500" size="xl" />
          </Flex>
        ) : (
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
