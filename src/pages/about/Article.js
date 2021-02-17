
export const Article = ({ title, subTitle, ...props }) => {
	return (
		<article id="content">
		  <header>
		    <h2>{ title }</h2>
		    { subTitle && <p>{ subTitle }</p>}
		  </header>
		  <a href="#" className="image featured">
		  	<img src="images/pic02.jpg" alt="" />
		  </a>
		  <p>Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin rhoncus, sapien
		  mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum
		  condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
		  ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque
		  eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et
		  turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius.
		  Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
		  <p>Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta velit at elementum
		  gravida nibh eget, volutpat odio. Proin rhoncus, sapien
		  mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum
		  condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
		  ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque
		  eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et
		  turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius.
		  Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
		  <p>Vestibulum pellentesque posuere lorem non aliquam. Mauris eleifend eleifend
		  felis aliquet ornare. Vestibulum porta velit at elementum elementum.</p>
		</article>
	)
}
