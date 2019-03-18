const express = require('express')

const app =express()

app.use(date=(req,res,next)=>{
let requestAt=new Date()

console.log(requestAt)
if(requestAt.getHours()>=17||requestAt.getHours()<=8){

    res.send('Our office is not open now')
}
next()
})




app.use(express.static(__dirname+'/public'))

app.listen(3000,(err)=>{
    if(err) console.log('server is not running')
    else console.log('server is running on post 3000')
})                  



