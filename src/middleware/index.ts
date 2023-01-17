import { Express } from 'express'
import express from 'express'
import responseHeader from './responseHeader'
import validate from './validate'

function initMiddleware(app: Express) {
  app.use(express.json())
  app.use(responseHeader)
}

export default initMiddleware
