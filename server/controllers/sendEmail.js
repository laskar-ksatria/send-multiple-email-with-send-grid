const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (res) => {
    const mailOptions = {
        to: "laskar.ksatria12@gmail.com",
        from: "busdev@codeotoken.com",
        sucject: "Hallo",
        text: "TEst test 123"
    }

    sgMail.send(mailOptions, (err, result) => {
        if (err) {
            res.send("eer")
        }else {
            res.send('success')
        }
    })
    // return new Promise((res,rej) => {

    //     sgMail.send(mailOptions, (err,result) => {
    //         if (err) {
    //             console.log(err);
    //             rej(err)
    //         }else {
    //             res(result)
    //         }
    //     })
    // })
}


// function sendEmail(req,res,next) {
//     let admin = req.admin;
//     let link = `http://${req.headers.host}/api/auth/password/resetpassword/${admin.id}`;
//     const mailOptions = {
//         to: admin.email,
//         from: process.env.FROM_EMAIL,
//         subject: 'Account Verification',
//         text: `Hi ${admin.full_name} \n
//         Please click on the following link ${link} to verify your update password. \n\n 
//         If you did not request this, please ignore this email.\n`
//     };

//     sgMail.send(mailOptions, (error, result) => {
//         if (error) {
//             res.status(500).json({message: error.message, status})
//         }else {
//             res.status(200).json({message: 'A verification email has been sent to ' + admin.email, status: 200})
//         };
//     });
// };

module.exports = sendEmail;