import axios from "axios";

export class request {
  static async get (url) {
    try {
      const response = await axios.get(process.env.API_URL + url)
      return response.data
    } catch (err) {
      return null
    }
  }
}
