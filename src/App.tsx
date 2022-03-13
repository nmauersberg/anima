import { FadeIn, getIncrementor, ZoomIn } from './lib/index';
import tw, { styled } from 'twin.macro';
import { FadeInExample } from './examples/FadeInExample';
import { ZoomInExample } from './examples/ZoomInExample';
import { Headline } from './components';
import README from '../README.md';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AppFrame = tw.div`flex flex-col items-center justify-center min-h-screen pt-16 bg-gradient-to-b from-set to-rise`;
const MarkdownFrame = tw.div`mx-auto my-16 w-3/5`;

const App = () => {
  const getDelay = getIncrementor(0, 0.25);

  return (
    <AppFrame>
      <ZoomIn>
        <Headline>anima-react</Headline>
      </ZoomIn>

      <ZoomIn delay={getDelay()} orientation="up" distance={20} duration={0.25}>
        <FadeInExample initDelay={getDelay()} />
      </ZoomIn>

      <ZoomIn delay={getDelay()} orientation="up" distance={20} duration={0.25}>
        <ZoomInExample initDelay={getDelay()} />
      </ZoomIn>

      <MarkdownFrame>
        <ReactMarkdown children={README} remarkPlugins={[remarkGfm]} />
      </MarkdownFrame>
    </AppFrame>
  );
};

export default App;
