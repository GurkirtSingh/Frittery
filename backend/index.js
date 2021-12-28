const fastify = require("fastify")({"logger": true})
const PORT = 8080

// Run the server!
const start = async () => {
    try {
      await fastify.listen(PORT)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
start()