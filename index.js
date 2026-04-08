
const express = require("express")
const app = express()
app.use(express.json())
let notes = []



app.post("/notes",function (req,res) {
    const note = req.body.note
    notes.push(note)
    
    res.json({ 
        message : "done "
    })
})

app.get("/notes",function (req,res) {
    res.json({
        notes
    })
})
app.get("/",function(req,res){
    res.sendFile("/home/hritik/Work/web_development/javascript/lecture/without_auth/frontend/index.html")
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})