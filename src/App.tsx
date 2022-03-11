import { FadeIn, getIncrementor, ZoomIn } from './lib/index';
import tw, { styled } from 'twin.macro';
import { FadeInExample } from './examples/FadeInExample';
import { ZoomInExample } from './examples/ZoomInExample';
import { Headline } from './components';

const styles = {
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center min-h-screen`,
    hasBackground && tw`bg-gradient-to-b from-set to-rise`,
  ],
};

const App = () => {
  const getDelay = getIncrementor(0, 0.25);
  return (
    <div css={styles.container({ hasBackground: true })}>
      <ZoomIn>
        <Headline>anima-react</Headline>
      </ZoomIn>

      <ZoomIn delay={getDelay()} orientation="up" distance={20} duration={0.25}>
        <FadeInExample initDelay={getDelay()} />
      </ZoomIn>

      <ZoomIn delay={getDelay()} orientation="up" distance={20} duration={0.25}>
        <ZoomInExample initDelay={getDelay()} />
      </ZoomIn>
    </div>
  );
};

export default App;
