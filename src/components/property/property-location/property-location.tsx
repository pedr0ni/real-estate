import {Card, CardBody, CardHeader, Heading} from '@chakra-ui/react';

export default function PropertyLocation() {
  return (
    <Card w="md">
      <CardHeader>
        <Heading size="md">Localização</Heading>
      </CardHeader>
      <CardBody>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.6525913324376!2d-47.04876832408887!3d-22.85233923592865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c5ce7e759781%3A0xebd474abc6154706!2sR.%20Jos%C3%A9%20Lu%C3%ADs%20Camargo%20Moreira%20-%20Mans%C3%B5es%20Santo%20Ant%C3%B4nio%2C%20Campinas%20-%20SP%2C%2013087-511!5e0!3m2!1spt-BR!2sbr!4v1705096377761!5m2!1spt-BR!2sbr"
          style={{
            border: 0,
            borderRadius: '0.5rem',
            width: '100%',
            height: 200,
          }}
          loading="lazy"
        ></iframe>
      </CardBody>
    </Card>
  );
}
