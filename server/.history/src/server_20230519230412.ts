import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
app.register(fastifyCors, {
  origin: true,
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀Http Server running on http://localhost:3333')
  })
