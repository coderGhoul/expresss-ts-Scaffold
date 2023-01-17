import { Express, Request, Response, Router } from 'express'
import commonRes from '../utils/commonRes'
import Banner from './banner.routes'

// 路由配置接口
interface RouterConf {
  path: string
  router: Router
  meta?: any
}

// 路由配置
const routerConf: Array<RouterConf> = [{ path: '/banner', router: Banner }]

export function routes(app: Express) {
  // 根目录
  app.get('/', (req: Request, res: Response) => {
    commonRes(res, { word: 'Hello Shinp!!!' }) // 成功
  })

  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}
