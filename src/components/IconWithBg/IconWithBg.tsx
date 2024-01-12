import {As, Flex, Icon} from '@chakra-ui/react';

interface IconWithBgProps {
  icon: As;
}

export default function IconWithBg({icon}: IconWithBgProps) {
  return (
    <Flex
      width="48px"
      height="48px"
      borderRadius="6px"
      justifyContent="center"
      alignItems="center"
      bgColor="orange.100"
    >
      <Icon as={icon} w={6} h={6} color="orange.500" />
    </Flex>
  );
}
