import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { ThemeContainer, ThemeGlobalStyle } from '@styles'
import { ApplicationContextProvider, useAppContext } from '@config/appContext'
import { applicationMetaDatas } from '@config/appMetaDatas'
import { theme } from '@config'

import "@stylesheets/animate.min.css"
import "@stylesheets/contact-form.css"
import "@stylesheets/swiper.min.css"
import "@stylesheets/txt.css"

import { ApplicationMetas } from '@components/ApplicationMetas'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

export default function App ({ Component: Main, pageProps }) {
	const props = { ...pageProps,  ...applicationMetaDatas }

  return (
  	<ApplicationContextProvider initialProps={ props }>
			<ThemeProvider theme={ theme }>
				<ThemeContainer>
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
						<ApplicationMetas { ...applicationMetaDatas } />
					</Head>
					<ThemeGlobalStyle />
					<Header />
					<Main { ...props } />
					<Footer />
				</ThemeContainer>
			</ThemeProvider>
		</ApplicationContextProvider>
  )
}
