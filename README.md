# Contact Form Email Service

A Node.js Express application that handles contact form submissions and sends emails to both the owner and the client.

## Features

- Express server with a dedicated contact form endpoint
- Email validation using express-validator
- Automated email notification to the owner with form details
- Confirmation email sent to clients with a personalized message
- Rate limiting to prevent abuse
- Cross-origin support for frontend integration
- Comprehensive error handling

## Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Email account for sending emails (Gmail recommended for simplicity)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```
4. Update the `.env` file with your email credentials

### Configuration

For Gmail users, you'll need to:
1. Enable 2-Step Verification
2. Generate an App Password (Settings > Security > App Passwords)
3. Use this App Password in your `.env` file

### Running the Application

Development mode:
```
npm run dev
```

Production mode:
```
npm start
```

## API Usage

### Contact Form Endpoint

```
POST /api/contact
```

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry about services",
  "message": "Hello, I would like to know more about your services."
}
```

Success Response:
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

## Frontend Integration

Here's a simple HTML form example:

```html
<form id="contactForm">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <input type="text" name="subject" placeholder="Subject" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = {
    name: this.name.value,
    email: this.email.value,
    subject: this.subject.value,
    message: this.message.value
  };
  
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Message sent successfully!');
      this.reset();
    } else {
      alert('Error: ' + (result.message || 'Failed to send message'));
    }
  } catch (error) {
    alert('Failed to send message. Please try again later.');
    console.error(error);
  }
});
</script>
```