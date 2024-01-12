import {Button, ButtonProps} from '@chakra-ui/react';

export default function HeaderLink(props: ButtonProps) {
  return (
    <Button variant="ghost" colorScheme="gray" {...props}>
      {props.children}
    </Button>
  );
}
