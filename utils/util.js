import fs from 'fs'

/**
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}      
 */
const render = page => {
  return new Promise((resolve, reject) => {
    let viewUrl = `./views/${page}`
    fs.readFile(viewUrl, "binary", (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

module.exports = {
  render
}