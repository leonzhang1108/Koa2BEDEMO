import Koa from 'koa'
import logger from './middleware/logger-async'
import bodyParser from 'koa-bodyparser'
import { render } from './utils/util'
import page from './src/index'

const app = new Koa()

app.use(logger())

app.use(async ctx => {
  ctx.body = page
})


app.listen(3000, err => {
  console.log(err || '[demo] session is starting at port 3000')
})
