import styled, { createGlobalStyle } from 'styled-components'

export const ThemeGlobalStyle = createGlobalStyle`
	body, html {
		height: 100%;
	}

	body, h1, h2 h3, p, pre {
		margin: 0px;
		padding: 0px;
	}

	* {
		box-sizing: border-box;
	}
`

export const ThemeContainer = styled.div`
	width: 100%;
	height: auto;
	background-color: ${ props => props.theme.background.primary };
`
