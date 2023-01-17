import { Router } from 'express'
import {
  createBannerHandler,
  searchAllBannerHandler,
} from '../controller/banner.container'
import validate from '../middleware/validate'
import { createBannerSchema } from '../schema/banner.schema'

const router = Router()

// 需要校验接口参数的，加上校验中间件
router.post('/create', validate(createBannerSchema), createBannerHandler)

router.get('/list', searchAllBannerHandler)
export default router
