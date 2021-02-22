import styled, { createGlobalStyle } from 'styled-components'

export const ThemeGlobalStyle = createGlobalStyle`
	body, html {
		height: 100%;
		color: ${ props => props.theme.colors.text };
		background-color: ${ props => props.theme.colors.background };
	}

	body, h1, h2 h3, p, pre, ul, ol, li {
		margin: 0px;
		padding: 0px;
	}

	* {
		box-sizing: border-box;
		font-family: 'Roboto', 'Arial', Helvetica, sans-serif;
	}

	img {
		pointer-events: none;
		border: 0px none transparent;
		outline: none;
	}

	ul, ol, li {
		list-style: none;
		list-style-type: none;
	}

	a {
		cursor: pointer;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`

export const ThemeContainer = styled.div`
	width: 100%;
	height: auto;
`

export const Container = styled.div`
	width: 100%;
	height: auto;
	display: block;
	position: relative;
`

export const HomeTitle = styled.h1`
	color: black;
`

export const ContactFormWrapper = styled.div`
	border-radius: 117px;
`

export const ContactFormTitle = styled.h1`
	font-size: 34px;
	color: #444444;
	display: block;
	padding: .0px .0px 31px;
	font-weight: bold;

	span {
		color: #9b9694;
		display: inherit;
		width: inherit;
		padding: 17px .0px .0px;
		font-size: 24px;
	}
`

