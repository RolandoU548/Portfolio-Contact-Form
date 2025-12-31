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

exports.clientEmailTemplateEn = ({ name }) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thanks for contacting me</title>
    <style>
      /* Estilos base para evitar problemas en Gmail */
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      table {
        border-spacing: 0;
      }
      img {
        border: 0;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
      }
      .header {
        background-color: #16162d;
        padding: 40px;
        text-align: center;
      }
      .content {
        padding: 40px;
        color: #333333;
        line-height: 1.6;
      }
      .footer {
        background-color: #f9f9f9;
        padding: 20px;
        text-align: center;
        font-size: 12px;
        color: #888888;
      }
      .button {
        background-color: #0070f3;
        color: white;
        padding: 15px 25px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        display: inline-block;
        margin-top: 20px;
      }
      h1 {
        color: #ffffff;
        margin: 0;
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <table role="presentation" class="container">
      <tr>
        <td class="header">
          <h1>Rolando Uzcátegui</h1>
        </td>
      </tr>
      <tr>
        <td class="content">
          <h2 style="color: #1a1a1a">Thanks for your message!</h2>
          <p>Hello, ${name}</p>
          <p>
            I have received your request through my contact form. I greatly
            value your interest and the time you have taken to write to me.
          </p>
          <p>
            This is an automated message to confirm that
            <strong>your message has arrived correctly</strong>. I will review
            the information and get in touch with you as soon as possible
            (usually in less than 24 hours).
          </p>
          <p>
            In the meantime, if you want to see more of my work, you can visit
            my website again:
          </p>
          <a href="https://www.rolandouzcategui.com" class="button"
            >Back to website</a
          >
        </td>
      </tr>
      <tr>
        <td class="footer">
          <p>
            Rolando Uzcátegui | Web Developer<br />
            You have received this email because you wrote at rolandouzcategui.com
          </p>
          <div style="margin-top: 10px">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rolando-uzc%C3%A1tegui"
              style="color: #0070f3; text-decoration: none; margin: 0 10px"
              >LinkedIn</a
            >
            <a
              target="_blank"
              href="https://github.com/RolandoU548"
              style="color: #0070f3; text-decoration: none; margin: 0 10px"
              >GitHub</a
            >
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
};

exports.clientEmailTemplateEs = ({ name }) => {
  return `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gracias por contactarme</title>
    <style>
      /* Estilos base para evitar problemas en Gmail */
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      table {
        border-spacing: 0;
      }
      img {
        border: 0;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
      }
      .header {
        background-color: #16162d;
        padding: 40px;
        text-align: center;
      }
      .content {
        padding: 40px;
        color: #333333;
        line-height: 1.6;
      }
      .footer {
        background-color: #f9f9f9;
        padding: 20px;
        text-align: center;
        font-size: 12px;
        color: #888888;
      }
      .button {
        background-color: #0070f3;
        color: white;
        padding: 15px 25px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        display: inline-block;
        margin-top: 20px;
      }
      h1 {
        color: #ffffff;
        margin: 0;
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <table role="presentation" class="container">
      <tr>
        <td class="header">
          <h1>Rolando Uzcátegui</h1>
        </td>
      </tr>
      <tr>
        <td class="content">
          <h2 style="color: #1a1a1a">¡Gracias por tu mensaje!</h2>
          <p>Hola, ${name}</p>
          <p>
            He recibido tu solicitud a través de mi formulario de contacto.
            Valoro mucho tu interés y el tiempo que te has tomado para
            escribirme.
          </p>
          <p>
            Este es un mensaje automático para confirmarte que
            <strong>tu mensaje ha llegado correctamente</strong>. Revisaré la
            información y me pondré en contacto contigo a la brevedad posible
            (generalmente en menos de 24 horas).
          </p>
          <p>
            Mientras tanto, si quieres ver más de mi trabajo, puedes volver a
            visitar mi sitio web:
          </p>
          <a href="https://www.rolandouzcategui.com" class="button"
            >Volver al sitio web</a
          >
        </td>
      </tr>
      <tr>
        <td class="footer">
          <p>
            Rolando Uzcátegui | Desarrollador Web<br />
            Has recibido este correo porque escribiste en rolandouzcategui.com
          </p>
          <div style="margin-top: 10px">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rolando-uzc%C3%A1tegui"
              style="color: #0070f3; text-decoration: none; margin: 0 10px"
              >LinkedIn</a
            >
            <a
              target="_blank"
              href="https://github.com/RolandoU548"
              style="color: #0070f3; text-decoration: none; margin: 0 10px"
              >GitHub</a
            >
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
};
