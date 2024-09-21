
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Vercel!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = app;
// const crypto = require('crypto');
// const express = require('express');
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// const port = 8082;

// const workingKey = '53B5D52CF34999B7C9389C775F39F993';  //replace with your WORKING_KEY
// const accessCode = 'ATCU05LI95BM02UCMB'; //REPLACE WITH YOUR ACCESS CODE
// const merchantId = '3421419'; //REPLACE WITH YOUR MERCHANT_ID
// const responseUrl = 'http://192.168.29.85:3000/ccavResponseHandler'; //Redirect URL or CANCEL URL

// // Encryption Function
// function encrypt(plainText, key) {
//     const md5Key = crypto.createHash('md5').update(key).digest('hex');
//     const secretKey = Buffer.from(md5Key, 'hex');
//     const initVector = Buffer.from('000102030405060708090a0b0c0d0e0f', 'hex');
//     const cipher = crypto.createCipheriv('aes-128-cbc', secretKey, initVector);
//     let encrypted = cipher.update(plainText, 'utf-8', 'hex');
//     encrypted += cipher.final('hex');
//     return encrypted;
// }

// app.post('/ccavRequestHandler', (req, res) => {
//     let merchantData = '';
//     const orderId = "ORD" + Math.floor(10000 + Math.random() * 89999999) + Date.now(); // Generate random order ID

//     // Collecting the form data
//     Object.keys(req.body).forEach(key => {
//         merchantData += `${key}=${req.body[key]}&`;
//     });

//     // Append additional parameters
//     merchantData += `merchant_id=${merchantId}&`;
//     merchantData += `order_id=${orderId}&`;
//     merchantData += `redirect_url=${responseUrl}&`;
//     merchantData += `cancel_url=${responseUrl}&`;

//     // Encrypt merchant data
//     const encryptedData = encrypt(merchantData, workingKey);

//     // Create JSON response with encrypted data and access code
//     const data = {
//         enc_val: encodeURIComponent(encryptedData),
//         access_code: encodeURIComponent(accessCode),
//     };

//     res.json(data);
// });

// function decrypt(encryptedText, key) {
//     const md5Key = crypto.createHash('md5').update(key).digest('hex');
//     const secretKey = Buffer.from(md5Key, 'hex');
//     const initVector = Buffer.from('000102030405060708090a0b0c0d0e0f', 'hex');
//     const encryptedBuffer = Buffer.from(encryptedText, 'hex');
//     const decipher = crypto.createDecipheriv('aes-128-cbc', secretKey, initVector);
//     let decrypted = decipher.update(encryptedBuffer, 'hex', 'utf-8');
//     decrypted += decipher.final('utf-8');
//     return decrypted;
// }

// app.post('/ccavResponseHandler', (req, res) => {
//     console.log("+++++>>");
//     const encResponse = req.body.encResp; // The response sent by the CCAvenue Server
//     const rcvdString = decrypt(encResponse, workingKey); // Decrypt the response
//     const decryptValues = rcvdString.split('&');
//     const responseMap = {};

//     decryptValues.forEach((item) => {
//         const [key, value] = item.split('=');
//         responseMap[key] = value;
//     });

//     const orderStatus = responseMap['order_status'];
    
//     res.json(responseMap);
// });

// app.get("/",(req,res)=>{
// res.send("HEllo");
// })

// app.listen(port, () => {
//     console.log(`Server running on port `+port);
// });


// exports.app = app;