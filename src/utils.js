function formatString (str, args) {
  let resultMessage = str

  for (const key in args) {
    const value = args[key]
    resultMessage = resultMessage.replace(`%{${key}}`, value)
  }

  return resultMessage
}

module.exports = {
  formatString
}
