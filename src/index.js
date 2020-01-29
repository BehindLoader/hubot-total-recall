module.exports = (robot) => {
  robot.listenerMiddleware(
    require('./middlewares/listener')
  )

  robot.respond(
    /remind "(.+)" (.+)\s*$/i,
    require('./routes/add')
  )

  robot.respond(
    /reminder list\s*$/i,
    require('./routes/list')
  )

  robot.respond(
    /reminder remove ([\w\d-]+)\s*/i,
    require('./routes/remove')
  )
}
