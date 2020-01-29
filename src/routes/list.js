const routines = require('hubot-routines')

const { BOT_ANSWER_LIST, BOT_ANSWER_LIST_EMPTY } = require('../config')

module.exports = (msg) => {
  if (!Object.keys(msg.message.user.reminder).length) {
    msg.send(BOT_ANSWER_LIST_EMPTY)

    return
  }

  const eventList = []
  for (const key in msg.message.user.reminder) {
    const { task, time } = msg.message.user.reminder[key]
    eventList.push(
      [
        `${task} - ${time}`,
        `reminder remove ${key}`
      ]
    )
  }

  const buttonsMessage = routines.buildMessageWithButtons(
    BOT_ANSWER_LIST,
    eventList
  )

  msg.send(buttonsMessage)
}
