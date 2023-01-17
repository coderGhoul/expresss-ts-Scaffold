import mongoose from 'mongoose'
import config from '../../config/default.json'
import logger from './logger'

async function dbConnect() {
  // console.log(config.DATABASE_URL)
  const dbUri = config.DATABASE_URL

  try {
    const connection = await mongoose.connect(dbUri)

    logger.info('DB connected', connection)

    return connection
  } catch (error) {
    logger.error('Could not connect to db')
    process.exit(1)
  }
}

export default dbConnect
