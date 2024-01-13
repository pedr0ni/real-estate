import {
  Box,
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
  IoSunny,
} from 'react-icons/io5';
import BaseContainer from '../base-container/base-container';

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
        <BaseContainer py="2rem">
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
                Explore nossas propriedades, encontre seu lar perfeito e comece
                uma nova jornada.
              </Text>
            </Box>
            <HStack
              spacing="3rem"
              display={{base: 'none', sm: 'flex'}}
              justifyContent={{sm: 'space-between', md: 'normal'}}
            >
              <VStack spacing={4} alignItems="flex-start">
                <Text color="gray.800" fontSize="md" fontWeight="bold">
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
                <Text color="gray.800" fontSize="md" fontWeight="bold">
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
        </BaseContainer>
      </Box>

      <Box bgColor="black" py="0.5rem">
        <BaseContainer>
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
                variant="ghost"
                icon={<IoLogoWhatsapp />}
                aria-label="WhatsApp"
                color="white"
                fontSize="1.2rem"
              />
              <IconButton
                icon={<IoMailOutline />}
                variant="ghost"
                aria-label="E-mail"
                fontSize="1.2rem"
                color="white"
              />
              <IconButton
                variant="ghost"
                icon={<IoLogoInstagram />}
                aria-label="Instagram"
                fontSize="1.2rem"
                color="white"
              />
              <IconButton
                variant="ghost"
                icon={<IoSunny />}
                aria-label="Instagram"
                fontSize="1.2rem"
                color="white"
                onClick={toggleColorMode}
              />
            </Stack>
          </Stack>
        </BaseContainer>
      </Box>
    </>
  );
}
