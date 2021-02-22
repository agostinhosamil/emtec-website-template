import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class ApplicationDocument extends Document {
	static async getInitialProps ( context ) {
		const stylesheet = new ServerStyleSheet()
		const renderPage = context.renderPage

		try {
			
			context.renderPage = async () => {
				return renderPage ({
					enhanceApp: App => props => stylesheet.collectStyles (
						<App { ...props } />
					)
				})
			}

			const initialProps = await Document.getInitialProps(
				context
			)

			return {
				...initialProps,
				styles: (
					<>
						{ initialProps.styles }
						{ stylesheet.getStyleElement() }
					</>
				)
			}
		} finally {
			stylesheet.seal()
		}
	}

	render () {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="/assets/css/main.css" />
				</Head>
				<body className="homepage is-preload">
					<div id="page-wrapper">
						<Main meuNome="Sammy" />
					</div>
					<NextScript />
					<script src="/assets/js/jquery.min.js"></script>
					<script src="/assets/js/jquery.dropotron.min.js"></script>
					<script src="/assets/js/browser.min.js"></script>
					<script src="/assets/js/breakpoints.min.js"></script>
					<script src="/assets/js/util.js"></script>
					<script src="/assets/js/main.js"></script>
				</body>			
			</Html>	
		)
	}
}
