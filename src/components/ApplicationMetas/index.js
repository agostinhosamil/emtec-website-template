
export const ApplicationMetas = props => {

	const metaTagNames = 'author description keywords'.split(/\s+/)

	return (
		<>
			{metaTagNames.map(name => (
				props[ name ] && <meta name={ name } content={ props[ name ] } />
			))}
		</>
	)
}
