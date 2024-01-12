import {
  Box,
  Divider,
  HStack,
  IconButton,
  Link,
  LinkProps,
  Stack,
  Text,
  VStack,
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
      _hover={{textDecoration: 'underline'}}
      {...props}
    >
      {children}
    </Link>
  );
};

export default function Footer() {
  return (
    <Box p={{base: 5, md: 8}} mt="2rem" maxW="5xl" marginInline="auto">
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
          <Text mt={2} color="gray.500" fontSize="md">
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
              Produtos
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Landing Pages</CustomLink>
              <CustomLink>Aplicativos</CustomLink>
              <CustomLink>Infraestrutura</CustomLink>
              <CustomLink>SEO</CustomLink>
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

      <Divider my={4} />

      <Stack
        direction={{base: 'column', md: 'row'}}
        spacing={3}
        justifyContent="space-between"
      >
        <Text fontSize="md">
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
          />
        </Stack>
      </Stack>
    </Box>
  );
}
