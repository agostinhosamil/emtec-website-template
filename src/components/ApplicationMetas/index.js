
export const ApplicationMetas = props => {

	const metaTagNames = 'author description keywords'.split(/\s+/)

	return (
		<>
			{metaTagNames.map((name, index) => (
				props[ name ] && <meta key={ index } name={ name } content={ props[ name ] } />
			))}
		</>
	)
}
