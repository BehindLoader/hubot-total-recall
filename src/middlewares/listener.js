module.exports = (context, next, _done) => {
  context.response.message.user.reminder = context.response.message.user.reminder || {}

  next()
}
