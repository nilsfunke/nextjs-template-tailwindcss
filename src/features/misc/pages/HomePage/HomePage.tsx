import React from 'react';

import { Container, Grid, Heading, Section, Text } from '@/components/ui';

const HomePage: React.FC = () => {
  return (
    <Section id={''} className={'h-screen text-center'}>
      <Container>
        <Grid>
          <div className={'col-span-full'}>
            <Heading as={'h1'} className={'text-56'}>
              NextJS Template
            </Heading>

            <div className={'h-16'} />

            <Text as={'p'} className={'text-18'}>
              This is an awesome NextJS template for production
            </Text>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export { HomePage };
