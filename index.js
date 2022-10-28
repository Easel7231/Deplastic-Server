const mysql = require ("mysql2")
const app =require("express")
const { json } = require("express")

let con = mysql.createConnection({
    host : env.process.host ,
    user : env.process.user ,
    password : env.process.password ,
    database : env.process.database 

})

app.get("/api/users",(res,req)=>{
    
con.createConnection(function(err){
    if (err) throw err
    else {
        console.log("Connected to DB")
       
        con.query("SELECT * FROM users", function(err,result,fields){
            if (err) throw err;
            console.log(result)
            res.en(JSON.stringify(fields))
        })    
        
        con.end(function(err){
            if (err){
                return console.log("error:"+err.message)
            }
            console.log("Closed connection with DB")
        })
    }
})
})


app.get("/api/markers",(res,req)=>{
    
    con.createConnection(function(err){
        if (err) throw err
        else {
            console.log("Connected to DB")
            con.query("SELECT * FROM markers", function(err,result,fields){
                if (err) throw err;
                console.log(result)
                res.en(JSON.stringify(fields))
            })    
            
            con.end(function(err){
                if (err){
                    return console.log("error:"+err.message)
                }
                console.log("Closed connection with DB")
            })
        }
    })
    })

