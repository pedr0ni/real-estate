import {Box, Container, Image} from '@chakra-ui/react';
import Topic from '../Topic/Topic';
import AboutStory from '../../assets/img/about-story.svg';

export default function About() {
  return (
    <Box py="4rem" bgColor="gray.200">
      <Container
        maxW="container.lg"
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
      </Container>
    </Box>
  );
}
