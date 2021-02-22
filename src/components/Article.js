import styled from "styled-components"

const ArticleContainer = styled.div`
	width: 100%;
	height: auto;
	display: block;

	p.article-body {}

	p.article-subTitle {
		color: #d2d2d2;
	}
`

export const Article = ({ title, summary: subTitle, ...props }) => {
	return (
		<article id="content">
		  <ArticleContainer>
				<header>
					<h2>{ title }</h2>
					{ subTitle && <p className="article-subTitle">{ subTitle }</p>}
				</header>
				{typeof props.image === typeof 'str' && (
					<a href="#" className="image featured">
						<img src={ props.image } alt={ title } />
					</a>
				)}
				<p className="article-body">
					{ props.body || '' }
				</p>
			</ArticleContainer>
		</article>
	)
}
