require('dotenv').config();
require('express-async-errors')
const express = require('express');
const app = express();
const sendEmail = require('./controllers/sendEmail')


app
    .use(express.json())
    .use(express.static('./public'))
    .get('/send', sendEmail)    
    .get("./reset/id", function(req, res){
        res.send('<form>' +
        `Email:<br> <input type="text" name="email"<br><br>`+
        `New Password:<br> <input type="text" name="pass"<br><br>`+
        '</form><br><br>')
    })
    // .send('<form>' +
    // `Email:<br> <input type="text" name="email"<br><br>`+
    // `New Password:<br> <input type="text" name="pass"<br><br>`+
    // '</form><br><br>')


const port = process.env.PORT || 3000;

const start = () => {
    try{
        app.listen(port, console.log(`listening @ ${port}`))
    }
    catch(error){
        console.log(error);
    }
}
start();


