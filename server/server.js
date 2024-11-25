const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
const port = 3001;
const nodemailer = require('nodemailer');

app.get('/', (req, res) => {
    res.send('Hello')
});


app.post('/contact', (req, res) => {
    try {
        const { name, email, regarding, news } = req.body

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use 'gmail' or specify your SMTP server
            auth: {
                user: 'zainmanzoor2003@gmail.com', // Replace with your email
                pass: 'dkxn wkli ucds ovjl',  // Replace with your email password or app-specific password
            },
        });

        // Configure email options
        const mailOptions = {
            from: 'zainmanzoor2003@gmail.com', // Sender address
            to: email, // Receiver email address
            subject: 'Email',
            text: `Your Name is ${name}, regarding news is ${regarding} and news ${news}`
        };

        // Send the email
        transporter.sendMail(mailOptions);
        res.send({ message: 'Contact data received successfully!' });
    } catch (err) {
        console.log(err.message);

    }
});


app.listen(port, () => {
    console.log('Server Connected at port', port);
});

