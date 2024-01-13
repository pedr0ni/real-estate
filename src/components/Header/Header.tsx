import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import {IoHome, IoLogoWhatsapp} from 'react-icons/io5';
import {Link} from 'react-router-dom';

const items = [
  {label: 'Home', to: '/'},
  {
    label: 'Imóveis',
    to: '/properties',
  },
  {
    label: 'Financie',
    to: '/financie',
  },
  {
    label: 'Vender imóvel',
    to: '/vender-imovel',
  },
  {
    label: 'Sobre',
    to: '/sobre',
  },
];

export default function Header() {
  const bgColor = useColorModeValue('white', 'gray.700');
  return (
    <Box
      height="64px"
      width="100vw"
      position="fixed"
      bgColor={bgColor}
      zIndex={2}
    >
      <Container
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent={{base: 'center', md: 'space-between'}}
        maxW="container.lg"
        flexDirection={{base: 'column', md: 'row'}}
      >
        <Flex gap="1rem" display={{base: 'none', md: 'flex'}}>
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            icon={<IoHome />}
          />
          {items.map(item => (
            <Button
              key={item.label}
              as={Link}
              variant="ghost"
              colorScheme="gray"
              to={item.to}
            >
              {item.label}
            </Button>
          ))}
        </Flex>

        <Button
          leftIcon={<IoLogoWhatsapp fontSize="1.2rem" />}
          display={{base: 'none', md: 'flex'}}
          colorScheme="whatsapp"
        >
          Contato
        </Button>
      </Container>
    </Box>
  );
}
