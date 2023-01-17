import { BaseCrudProvider } from '../utils/crudProvider'
import BannerModel, { BannerDocument } from '../models/banner.module'

const CRUD = BaseCrudProvider<
  BannerDocument,
  Omit<BannerDocument, 'createdAt'>
>(BannerModel)

export default CRUD
