const scheduler = require('node-schedule')
const uuid = require('uuidv4')
const chrono = require('chrono-node')

const config = require('../config')
const { formatString } = require('../utils')

module.exports = (msg) => {
  const task = msg.match[1]
  const time = msg.match[2]

  const cron = chrono.parseDate(time)

  const job = scheduler.scheduleJob(
    cron,
    () => {
      msg.send(task)
    }
  )
  const jobID = uuid.uuid()

  msg.message.user.reminder[jobID] = {
    task, time, job
  }

  msg.send(formatString(config.BOT_ANSWER_CREATED, { user: msg.message.user.name }))
}
