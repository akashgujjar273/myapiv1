const express=require("express")
const fullBody=require("./routes/getFullBody")
const app=express();


app.use(express.static(`${__dirname}/html`))
app.use("/api/v1",fullBody)

module.exports=app
