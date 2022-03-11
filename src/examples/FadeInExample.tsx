import React from 'react';
import { FadeIn, getIncrementor } from './../lib/index';
import tw, { styled } from 'twin.macro';
import { SubHeadline } from '../components';

const Container = styled.div(() => [
  tw`flex flex-row items-center justify-center`,
]);

const Box = styled.div(() => [
  `background: gray;
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  border: 1px solid black;
  `,
]);

type FadiInExampleProps = {
  initDelay: number;
};

export const FadeInExample = ({ initDelay }: FadiInExampleProps) => {
  const getDelay = getIncrementor(initDelay, 0.5);

  return (
    <>
      <SubHeadline>FadeIn:</SubHeadline>
      <Container>
        <FadeIn
          delay={getDelay()}
          orientation="left"
          distance={20}
          duration={0.5}
        >
          <Box />
        </FadeIn>

        <FadeIn
          delay={getDelay()}
          orientation="up"
          distance={20}
          duration={0.5}
        >
          <Box />
        </FadeIn>

        <FadeIn
          delay={getDelay()}
          orientation="none"
          distance={20}
          duration={0.5}
        >
          <Box />
        </FadeIn>

        <FadeIn
          delay={getDelay()}
          orientation="down"
          distance={20}
          duration={0.5}
        >
          <Box />
        </FadeIn>

        <FadeIn
          delay={getDelay()}
          orientation="right"
          distance={20}
          duration={0.5}
        >
          <Box />
        </FadeIn>
      </Container>
    </>
  );
};
