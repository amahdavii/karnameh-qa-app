import axios from "axios"
const { REACT_APP_API_ENDPOINT: baseUrl } = process.env

const Request = (config) => {
  const finalUrl = baseUrl + config.url
  axios.interceptors.request.use(
    async function (config) {
      config.url = finalUrl
      return config
    },
    function (error) {
      alert("Somthing Wrong error...")
    }
  )

  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      alert("Somthing Wrong error...")
    }
  )
  return axios.request(config)
}
export default Request
