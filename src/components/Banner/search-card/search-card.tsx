import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

export default function SearchCard() {
  return (
    <Card minW="sm" borderRadius="1rem">
      <Tabs colorScheme="purple">
        <CardHeader>
          <TabList>
            <Tab flex={1}>Alugar</Tab>
            <Tab flex={1}>Comprar</Tab>
          </TabList>
        </CardHeader>
        <CardBody>
          <TabPanels>
            <TabPanel>
              <Flex gap="1rem" flexDirection="column">
                <FormControl>
                  <FormLabel>Cidade</FormLabel>
                  <Input placeholder="Campinas" />
                </FormControl>

                <FormControl>
                  <FormLabel>Bairro</FormLabel>
                  <Input placeholder="Mansões Santo Antônio" />
                </FormControl>

                <Flex gap="1rem">
                  <FormControl flex={1}>
                    <FormLabel>Valor máximo</FormLabel>
                    <Input placeholder="R$ 1500,00" />
                  </FormControl>

                  <FormControl flex={1}>
                    <FormLabel>Quartos</FormLabel>
                    <Input placeholder="2" />
                  </FormControl>
                </Flex>

                <Button colorScheme="purple">Buscar imóveis</Button>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </CardBody>
      </Tabs>
    </Card>
  );
}
