import {Container, ContainerProps} from '@chakra-ui/react';

export default function BaseContainer(props: ContainerProps) {
  return (
    <Container
      maxW={{base: 'container.md', md: 'container.lg', lg: 'container.xl'}}
      {...props}
    >
      {props.children}
    </Container>
  );
}
