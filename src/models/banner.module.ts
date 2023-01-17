import mongoose from 'mongoose'
import config from '../../config/default.json'

enum Type {
  URL,
  NETWORK,
}

// 模板接口
export interface BannerDocument extends mongoose.Document {
  id: string
  type: Type
  src: string
  createdAt: Date
  updatedAt: Date
}

// 模板校验规则
const bannerSchema = new mongoose.Schema({
  src: {
    type: String,
    require: true,
  },
})

// 创建模板 执行之后会自动在mongodb中创建相应的模板
const BannerModel = mongoose.model<BannerDocument>('Banner', bannerSchema)

export default BannerModel
