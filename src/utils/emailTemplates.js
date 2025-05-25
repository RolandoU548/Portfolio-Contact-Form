exports.ownerEmailTemplate = ({ name, email, subject, message }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #eee;
          border-radius: 5px;
        }
        .header {
          background-color: #4a6ee0;
          padding: 10px 20px;
          color: white;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
        }
        .field {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .value {
          padding: 10px;
          background-color: #f9f9f9;
          border-left: 3px solid #4a6ee0;
        }
        .footer {
          text-align: center;
          font-size: 0.8em;
          color: #777;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <p>You have received a new message from your website contact form.</p>
          
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${subject}</div>
          </div>
          
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

exports.clientEmailTemplate = ({ name }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #eee;
          border-radius: 5px;
        }
        .header {
          background-color: #4a6ee0;
          padding: 10px 20px;
          color: white;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
        }
        .thank-you {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #4a6ee0;
        }
        .footer {
          text-align: center;
          font-size: 0.8em;
          color: #777;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Thank You for Contacting Us</h2>
        </div>
        <div class="content">
          <p class="thank-you">Hello ${name},</p>
          
          <p>Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.</p>
          
          <p>In the meantime, please feel free to check out our website for more information about our services.</p>
          
          <p>Best regards,<br>The Team</p>
        </div>
        <div class="footer">
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
