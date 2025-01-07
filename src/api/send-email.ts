import sgMail from '@sendgrid/mail';

export const sendEmail = async (req: Request) => {
  const { name, email, subject, message } = await req.json();

  // Initialize SendGrid with API key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const msg = {
    to: 'your-email@example.com', // Replace with your email
    from: 'your-verified-sender@example.com', // Replace with your SendGrid verified sender
    subject: `Contact Form: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};