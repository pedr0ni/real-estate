import {Flex, Spinner} from '@chakra-ui/react';

export default function LoadingPage() {
  return (
    <Flex
      h="calc(100vh - 212px - 56px)"
      w="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner color="purple" size="lg" />
    </Flex>
  );
}
