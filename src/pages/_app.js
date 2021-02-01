import { ThemeProvider } from 'styled-components'
import { ThemeContainer, ThemeGlobalStyle } from '@styles'
import { theme } from '@config'

export default function App ({ Component, pageProps }) {
  return (
  	<ThemeProvider theme={ theme }>
  		<ThemeContainer>
  			<ThemeGlobalStyle />
  			<Component {...pageProps} />
  		</ThemeContainer>
  	</ThemeProvider>
  )
}
