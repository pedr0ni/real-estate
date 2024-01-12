import {Flex, Heading, Text} from '@chakra-ui/react';

interface TopicProps {
  label: string;
  title: string;
  text: string;
}

export default function Topic({label, title, text}: TopicProps) {
  return (
    <Flex flexDirection="column" gap="0.8rem" maxW="lg">
      <Text color="purple.500" fontWeight="bold">
        {label}
      </Text>
      <Heading color="gray.700" as="h1" size="lg">
        {title}
      </Heading>
      <Text color="gray.600">{text}</Text>
    </Flex>
  );
}
