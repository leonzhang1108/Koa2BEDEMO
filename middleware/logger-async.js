

module.exports = () => {
  return async (ctx, next) => {
    let start = new Date()
    await next()
    let ms = new Date() - start
    console.log(`${ms}ms`, ctx.method, ctx.header.host + ctx.url)
  }
}