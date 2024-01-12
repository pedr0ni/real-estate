import {ChakraProvider, Flex, Spinner} from '@chakra-ui/react';
import theme from './theme/theme';
import {useEffect, useState} from 'react';
import Home from './routes/home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

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
        <RouterProvider router={router} />
      )}
    </ChakraProvider>
  );
}

export default App;
