import moment from "jalali-moment"

const getCurrentDate = () => {
  let date = null
  moment.locale("fa")
  date = moment().format("jYYYY/jMM/jDD")

  return date
}

export default getCurrentDate
