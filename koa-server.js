import Koa from 'koa'
import logger from './middleware/logger-async'
import {
  render
} from './utils/util'
const app = new Koa()



/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */
async function route(url) {
  let view = '404.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }
  let html = await render(view)
  return html
}

// middleware 
app.use(logger())

// response 
app.use(async ctx => {
  let url = ctx.request.url
  let html = await route(url)
  ctx.body = html
})

app.listen(3000, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('localhost:3000')
})