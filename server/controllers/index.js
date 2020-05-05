const Email = require('../models/email');
const sendEmail = require('./sendEmail');

class EmailController {

    static create(req,res,next) {
        let {email, name} = req.body;
        Email.create({email, name})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => console.log(err))
    };

    static readAll(req,res,next) {
        Email.find({})
            .then(emails => {
                res.status(200).json(emails)
            })
            .catch(err => console.log(err))
    };


    static sendEmail(req,res,next) {

        let { text, subject, from } = req.body;

        sendEmail(res);

        // sendEmail(from, "laskar.ksatria12@gmail.com", subject, text)
        //     .then(values => {
        //         console.log(values)
        //         res.send("oke")
        //     })
        //     .catch(err => res.send("errr"))

        // Email.find({})
        //     .then(emails => {
        //         let sending = [];
        //         emails.forEach(email => {
        //             console.log(email)
        //             let to = email.email
        //             sending.push(sendEmail(from, to, subject, text))
        //         })

        //         return Promise.all(sending)
        //     })
        //     .then(values => {
        //         console.log(values);
        //         res.status(200).json({message: 'Success sending to all member'})
        //     })
        //     .catch(err => res.send("Error"))
    };


};

module.exports = EmailController;
