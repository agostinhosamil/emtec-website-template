import { applicationMetaDatas } from './appMetaDatas'
import axios from 'axios'
export { theme } from './themes/default'

export async function setAplicationInitialProps () {
  try {
    const getServicesResponse = await axios.get (
      `${ process.env.API_URL }/services`
    )
	  applicationMetaDatas.services = getServicesResponse.data
  } catch (err) {
    console.log (err)
  }
}
