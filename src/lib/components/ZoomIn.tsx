import { ClassNames, keyframes } from '@emotion/react';
import React, { ReactElement } from 'react';

export type Orientation = 'left' | 'right' | 'up' | 'down' | 'none';

type ZoomInProps = {
  orientation?: Orientation;
  delay?: number;
  duration?: number;
  distance?: number;
  children: ReactElement | ReactElement[] | string;
};

export const ZoomIn = ({
  orientation = 'none',
  delay = 0,
  duration = 0.2,
  distance = 100,
  children,
}: ZoomInProps): ReactElement => {
  return (
    <ClassNames>
      {({ css /*cx*/ }) => {
        const animation = css`
          transform: scale(0);
          animation: ${zoomIn(orientation, distance)} ${duration}s ease-in-out
            ${delay}s forwards;
        `;
        return <div className={animation}>{children}</div>;
      }}
    </ClassNames>
  );
};

const zoomIn = (orientation: Orientation, distance: number): string => {
  return keyframes`
    0% {
        transform: scale(0) ${getTransform(orientation, distance)};
    }
    100% {
        transform: scale(1) translatex(0);
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
