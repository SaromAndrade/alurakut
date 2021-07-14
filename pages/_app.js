import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons';
const GlobalStyle = createGlobalStyle`
  /* Reset CSS*/
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    font-family:sans-serif;
    background: url('https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo.png');
    background-repeat: no-repeat, repeat;
    background-position: center;
    height: 890px;
  };
  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img{
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
