const { BOT_ANSWER_REMOVE, BOT_ANSWER_REMOVE_EMPTY } = require('../config')

module.exports = (msg) => {
  const jobID = msg.match[1]
  const job = msg.message.user.reminder[jobID]

  if (!job) {
    msg.send(BOT_ANSWER_REMOVE_EMPTY)

    return
  }

  job.job.cancel()
  delete msg.message.user.reminder[jobID]

  msg.send(BOT_ANSWER_REMOVE)
}
