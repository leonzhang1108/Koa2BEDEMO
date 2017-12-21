import Koa from 'koa'
import logger from './middleware/logger-async'
import Router from 'koa-router'
import path from 'path'
import bodyParser from 'koa-bodyparser'
import koa_static from 'koa-static'
import {
  render
} from './utils/util'
const app = new Koa()

// middleware
// logger 
app.use(logger())
// bodyParser
app.use(bodyParser())

// response 
app.use(koa_static(
  path.join(__dirname)
))

app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(3000, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('localhost:3000')
})