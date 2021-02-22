import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { ThemeContainer, ThemeGlobalStyle } from '@styles'
import { ApplicationContextProvider } from '@config/appContext'
import { applicationMetaDatas } from '@config/appMetaDatas'
import { theme } from '@config'

import "@stylesheets/animate.min.css"
import "@stylesheets/contact-form.css"
import "@stylesheets/swiper.min.css"
import "@stylesheets/txt.css"

import { ApplicationMetas } from '@components/ApplicationMetas'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { request } from '../config/api-request'

export default function App ({ Component: Main, pageProps, ...rest }) {
	const props = { ...pageProps,  ...applicationMetaDatas, ...rest }

  return (
  	<ApplicationContextProvider { ...props }>
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

App.getInitialProps = async () => {
	const applicationInitialProps = {}

	applicationInitialProps.services = await request.get('/services')
	applicationInitialProps.socialMedias = await request.get('/socialmedias')
	applicationInitialProps.company_informations = await request.get('/company-informations')
	
	
	return { ...applicationInitialProps }
}
