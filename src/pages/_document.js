import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class ApplicationDocument extends Document {
	static async getInitialProps ( context ) {
		const stylesheet = new ServerStyleSheet()
		const renderPage = context.renderPage 

		try {
			context.renderPage = () => renderPage ({
				enhanceApp: App => props => stylesheet.collectStyles (
					<App { ...props } />
				)
			})

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
}
