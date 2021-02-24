import axios from "axios";

export class request {
  static async get (url) {
    try {
      const response = await axios.get(process.env.SITE_API_URL + url)
      return response.data
    } catch (err) {
    	// console.log ('I found Error..!', err, '\n\n\n\nEND\n\n\n')
      return null
    }
  }

  static async getFromAPI (url) {
  	try {
  	  const response = await axios.get(process.env.API_URL + url)
  	  return response.data
  	} catch (err) {
  	  return null
  	}
  }
}

export function setResponseHeader (response) {
	response.setHeader ('Cache-Control', `s-maxage=${ 60 * 60 * 24 *  30 }, stale-while-revalidate`)
}
