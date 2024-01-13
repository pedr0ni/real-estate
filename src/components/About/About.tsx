import {Box, Image, useColorModeValue} from '@chakra-ui/react';
import Topic from '../topic/topic';
import AboutStory from '../../assets/img/about-story.svg';
import BaseContainer from '../base-container/base-container';

export default function About() {
  const bgColor = useColorModeValue('gray.200', 'gray.900');

  return (
    <Box py="4rem" bgColor={bgColor}>
      <BaseContainer
        display="flex"
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent="space-between"
        alignItems="center"
        gap="2rem"
      >
        <Topic
          text="Desde a nossa fundação, dedicamo-nos a transformar sonhos imobiliários em realidade. Com uma equipe apaixonada e uma visão centrada no cliente, buscamos superar expectativas."
          title="Comprometidos em transformar sonhos imobiliários em realidade"
          label="SOBRE"
        />

        <Image src={AboutStory} boxSize="md" />
      </BaseContainer>
    </Box>
  );
}
