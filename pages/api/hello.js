// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createTransport } from 'nodemailer'

require('dotenv').config()

export default function handler(req, res) {
  try{


    var transporter = createTransport({
    host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
        auth:{
            user: 'eli092011@gmail.com',
            pass: process.env.password
        }
    })
    
    var mailOptions ={
        from: 'eli092011@gmail.com',
        to: 'eli092011@gmail.com',
        subject: 'This is a test for nodeMailer',
        text:'testing123'
    }
    
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
        } else{
            console.log(info.response)
        }
    })
    res.status(200).json({messge:'Email sent successfully'})
  }
  catch{

  }
}
