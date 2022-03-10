import tw from 'twin.macro'

const styles = {
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-set to-rise`,
  ],
}

const App = () => <div css={styles.container({ hasBackground: true })} />

export default App
