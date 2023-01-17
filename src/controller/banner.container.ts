import { Request, Response } from 'express'
import commonRes from '../utils/commonRes'
import { CreateBannerInput } from '../schema/banner.schema'
import Banner_CRUD from '../service/banner.service'
import silentHandle from '../utils/silentHandle'

export async function createBannerHandler(
  req: Request<{}, {}, CreateBannerInput>,
  res: Response
) {
  const [e, banner] = await silentHandle(Banner_CRUD.create, req.body)
  return e ? commonRes.error(res, null, e.message) : commonRes(res, banner)
}

export async function searchAllBannerHandler(req: Request, res: Response) {
  const [e, banner] = await silentHandle(Banner_CRUD.find, req.body)
  return e ? commonRes.error(res, null, e.message) : commonRes(res, banner)
}
