import React from 'react';
import { ZoomIn, getIncrementor } from './../lib/index';
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

export const ZoomInExample = ({ initDelay }: FadiInExampleProps) => {
  const getDelay = getIncrementor(initDelay, 0.25);

  return (
    <>
      <SubHeadline>ZoomIn:</SubHeadline>
      <Container>
        <ZoomIn delay={getDelay()} orientation="left" duration={0.5}>
          <Box />
        </ZoomIn>

        <ZoomIn delay={getDelay()} orientation="up" duration={0.5}>
          <Box />
        </ZoomIn>

        <ZoomIn delay={getDelay()} duration={0.5}>
          <Box />
        </ZoomIn>

        <ZoomIn delay={getDelay()} orientation="down" duration={0.5}>
          <Box />
        </ZoomIn>

        <ZoomIn delay={getDelay()} orientation="right" duration={0.5}>
          <Box />
        </ZoomIn>
      </Container>
    </>
  );
};
