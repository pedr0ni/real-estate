import {Button, ButtonProps} from '@chakra-ui/react';

export default function HeaderLink(props: ButtonProps) {
  return (
    <Button
      variant="link"
      colorScheme="gray.600"
      _hover={{textDecoration: 'none', bgColor: 'purple.200'}}
      fontWeight="medium"
      borderRadius="1rem"
      padding="0.5rem 1rem"
      bgColor="purple.50"
      {...props}
    >
      {props.children}
    </Button>
  );
}
