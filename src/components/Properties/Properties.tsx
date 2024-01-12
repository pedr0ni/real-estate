import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Topic from '../topic/topic';
import PropertyCard from './property-card/property-card';

export default function Properties() {
  return (
    <Box py="4rem">
      <Tabs variant="soft-rounded" colorScheme="purple">
        <Flex flexDirection="column">
          <Container
            maxW="container.lg"
            display="flex"
            flexDirection={{base: 'column', md: 'row'}}
            justifyContent="space-between"
            alignItems="center"
            gap="2rem"
          >
            <Topic
              text=""
              title="Confira os últimos lançamentos"
              label="NOVIDADES"
            />

            <TabList>
              <Tab>Todos</Tab>
              <Tab>Comprar</Tab>
              <Tab>Alugar</Tab>
            </TabList>
          </Container>

          <Container maxW="container.lg" marginTop="2rem">
            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  columns={{base: 1, sm: 3}}
                  spacing={{base: 6, sm: 4, md: 6}}
                >
                  <PropertyCard />
                  <PropertyCard />
                  <PropertyCard />
                </SimpleGrid>
              </TabPanel>
              <TabPanel>Two!</TabPanel>
            </TabPanels>
          </Container>
        </Flex>
      </Tabs>
    </Box>
  );
}
