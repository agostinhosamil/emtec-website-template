import { request, setResponseHeader } from '@config/api-request'

export default async function services (req, res) {
	const services = await request.getFromAPI('/services')

	setResponseHeader(res)

	res.json (services || [])
}
