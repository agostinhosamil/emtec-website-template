import { request, setResponseHeader } from '@config/api-request'

export default async function socialmedias (req, res) {
	const socialmedias = await request.getFromAPI('/socialmedias')

	setResponseHeader(res)

	res.json (socialmedias || [])
}
