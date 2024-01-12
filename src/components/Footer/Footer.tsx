import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  LinkProps,
  Stack,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import {
  IoHome,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
} from 'react-icons/io5';

const CustomLink = ({children, ...props}: LinkProps) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      color="gray.700"
      _hover={{textDecoration: 'underline'}}
      {...props}
    >
      {children}
    </Link>
  );
};

export default function Footer() {
  const {toggleColorMode} = useColorMode();

  return (
    <>
      <Box bgColor="purple.100">
        <Container maxW="container.lg" py="2rem">
          <Stack
            spacing={{base: 8, md: 0}}
            justifyContent="space-between"
            direction={{base: 'column', md: 'row'}}
          >
            <Box maxW="300px">
              <IconButton
                isRound={true}
                variant="solid"
                colorScheme="purple"
                aria-label="Done"
                fontSize="20px"
                icon={<IoHome />}
              />
              <Text mt={2} color="gray.700" fontSize="md">
                Inovação, excelência e parceria para o sucesso do seu projeto
                online.
              </Text>
            </Box>
            <HStack
              spacing="3rem"
              display={{base: 'none', sm: 'flex'}}
              justifyContent={{sm: 'space-between', md: 'normal'}}
            >
              <VStack spacing={4} alignItems="flex-start">
                <Text fontSize="md" fontWeight="bold">
                  Imóveis
                </Text>
                <VStack spacing={2} alignItems="flex-start" color="gray.500">
                  <CustomLink>Comprar</CustomLink>
                  <CustomLink>Vender</CustomLink>
                  <CustomLink>Financiamento</CustomLink>
                  <CustomLink>Precificação</CustomLink>
                </VStack>
              </VStack>
              <VStack spacing={4} alignItems="flex-start">
                <Text fontSize="md" fontWeight="bold">
                  Empresa
                </Text>
                <VStack spacing={2} alignItems="flex-start" color="gray.500">
                  <CustomLink>Avaliações</CustomLink>
                  <CustomLink>Parceiros</CustomLink>
                  <CustomLink>Sobre</CustomLink>
                  <CustomLink>Atendimento</CustomLink>
                </VStack>
              </VStack>
            </HStack>
          </Stack>
        </Container>
      </Box>

      <Box bgColor="black" py="0.5rem">
        <Container maxW="container.lg">
          <Stack
            direction={{base: 'column', md: 'row'}}
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text color="white" fontSize="md">
              © 2024 Real Estate - Desenvolvido por{' '}
              <Link href="https://devity.com.br" isExternal>
                Devity Agência Digital
              </Link>
            </Text>
            <Stack spacing={2} direction="row">
              <IconButton
                icon={<IoLogoWhatsapp />}
                aria-label="WhatsApp"
                colorScheme="whatsapp"
                fontSize="1.2rem"
              />
              <IconButton
                icon={<IoMailOutline />}
                aria-label="E-mail"
                colorScheme="blue"
                fontSize="1.2rem"
              />
              <IconButton
                icon={<IoLogoInstagram />}
                aria-label="Instagram"
                colorScheme="instagram"
                fontSize="1.2rem"
                onClick={toggleColorMode}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
