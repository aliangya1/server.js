console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

if (path === '/index.html') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    let string = fs.readFileSync('public/index.html').toString()
    const page1 = fs.readFileSync('db/page1.json').toString()
    const array = JSON.parse(page1)
    const result = array.map(item => `<li>${item.id}</li>`).join('')
    string = string.replace('{{page1}}', `<ul id="xxx">${result}</ul>`)
    response.write(string)
    response.end()
} else if (path === '/main.js') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('public/main.js'))
    response.end()
} else if (path === '/style.css' || path === '/2.css') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(fs.readFileSync('public/style.css'))
    response.end()
} else if (path === '/2.js') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('public/2.js'))
    response.end()
} else if (path === '/3.html') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(fs.readFileSync('public/3.html'))
    response.end()
} else if (path === '/4.xml') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/xml;charset=utf-8')
    response.write(fs.readFileSync('public/4.xml'))
    response.end()
} else if (path === '/5.json') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('public/5.json'))
    response.end()
} else if (path === '/page2') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('db/page2.json'))
    response.end()
} else if (path === '/page3') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('db/page3.json'))
    response.end()
} else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你输入的路径不存在对应的内容`)
    response.end()
}