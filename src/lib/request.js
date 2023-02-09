import axios from "axios"

const Request = (config) => {
  axios.interceptors.request.use(
    async function (config) {
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
