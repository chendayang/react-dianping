var app = require('koa')()
var router = require('koa-router')()
var koaBody = require('koa-body')()

router.get('/',function*(next){
  this.body="hello koa!"
})
router.get('/api',function*(next){
  this.body="api koa!"
})
router.get('/api1',function*(next){
  this.body="api1 koa!"
})

router.post('/api/post',koaBody,function*(next){
  console.log('body:',this.request.body)
  this.body=JSON.stringify(this.request.body)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)