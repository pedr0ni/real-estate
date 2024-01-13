import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import {IoLogoWhatsapp} from 'react-icons/io5';

export default function ContactCard() {
  return (
    <Card minW="md">
      <CardHeader>
        <Heading size="md">Estou interessado!</Heading>
      </CardHeader>
      <CardBody>
        <Flex gap="1rem" flexDirection="column">
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input placeholder="João Silva" />
          </FormControl>

          <FormControl>
            <FormLabel>Celular</FormLabel>
            <Input placeholder="(11) 91122-3344" />
          </FormControl>

          <FormControl>
            <FormLabel>Mensagem</FormLabel>
            <Textarea placeholder="Olá, gostaria de mais detalhes sobre este imóvel." />
          </FormControl>

          <Button colorScheme="purple">Enviar mensagem</Button>

          <Divider />

          <Heading size="sm">Falar com o corretor</Heading>

          <Text>(11) 91122-3344</Text>

          <Button
            leftIcon={<IoLogoWhatsapp fontSize="1.5rem" />}
            colorScheme="whatsapp"
          >
            WhatsApp
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}
