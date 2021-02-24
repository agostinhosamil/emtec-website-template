import { request, setResponseHeader } from '@config/api-request'

export default async function company_informations (req, res) {
	const company_informations = await request.getFromAPI('/company-informations')

	setResponseHeader(res)

	res.json (company_informations || [])
}
