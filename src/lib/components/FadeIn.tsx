import { ClassNames, keyframes } from '@emotion/react';
import React, { ReactElement } from 'react';

export type Orientation = 'left' | 'right' | 'up' | 'down' | 'none';

type FadeInProps = {
  orientation?: Orientation;
  delay?: number;
  duration?: number;
  distance?: number;
  children: ReactElement | ReactElement[] | string;
};

export const FadeIn = ({
  orientation = 'left',
  delay = 0,
  duration = 0.2,
  distance = 10,
  children,
}: FadeInProps): ReactElement => {
  return (
    <ClassNames>
      {({ css /*cx*/ }) => {
        const animation = css`
          opacity: 0;
          animation: ${fadeIn(orientation, distance)} ${duration}s ease-in-out
            ${delay}s forwards;
        `;
        return <div className={animation}>{children}</div>;
      }}
    </ClassNames>
  );
};

const fadeIn = (orientation: Orientation, distance: number): string => {
  return keyframes`
    from {
        opacity:0;
        transform: ${getTransform(orientation, distance)};
    }
    to {
        opacity:1;
        transform: translatex(0);
    }
`;
};

const getTransform = (orientation: Orientation, distance: number) => {
  switch (orientation) {
    case 'left':
      return `translatex(-${distance}px)`;
    case 'right':
      return `translatex(${distance}px)`;
    case 'up':
      return `translatey(${distance}px)`;
    case 'down':
      return `translatey(-${distance}px)`;
    case 'none':
      return 'translatex(0)';
  }
};
