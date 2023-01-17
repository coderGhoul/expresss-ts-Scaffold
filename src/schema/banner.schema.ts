import { object, string, TypeOf } from 'zod'
// 创建接口
export const createBannerSchema = object({
  body: object({
    src: string({ required_error: '上传图片不为空' }),
  }),
})

export type CreateBannerInput = Omit<TypeOf<typeof createBannerSchema>, 'body'>
