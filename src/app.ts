import express from 'express'
// import routes from './routes' // 路由
import logger from './utils/logger'
import config from '../config/default.json'
import { Express } from 'express-serve-static-core'
import { routes } from './routes'
import initMiddleware from './middleware'
import dbConnect from './utils/dbConnect'
import bodyParser from 'body-parser'

export const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
//拿到端口
const PORT: number = config.port
// 注册中间件
initMiddleware(app)
// 启动
app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  await dbConnect()
  routes(app)
})
