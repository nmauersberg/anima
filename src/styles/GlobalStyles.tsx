import React from 'react';
import { css, Global } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
};

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global
      styles={css`
        h1 {
          font-size: 3rem;
          margin: 0.5rem;
        }
        h2 {
          font-size: 2.5rem;
          margin: 0.5rem;
        }
        h3 {
          font-size: 1.5rem;
          margin: 0.5rem;
        }
        pre {
          background-color: #4e4e4e;
          padding: 1rem;
          margin: 1rem 0 2rem;
          color: white;
          border-radius: 15px;
        }
        table {
          width: 100%;
          margin-bottom: 1rem;
        }
        table,
        th,
        td {
          border: 1px solid;
        }
      `}
    />
  </>
);

export default GlobalStyles;
