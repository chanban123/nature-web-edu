# Email Setup Guide for Nature Wave Music Academy

This guide will help you set up email functionality for your contact form and newsletter using **EmailJS** (free, no backend server required).

## Step-by-Step Setup

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a **free account**
- Verify your email

### 2. Add Email Service (Gmail)
1. Log in to EmailJS Dashboard
2. Click on **"Email Services"** in left sidebar
3. Click **"Add Service"** button
4. Select **"Gmail"**
5. Click **"Connect Account"**
6. Choose your Gmail account
7. Grant permission to EmailJS
8. Copy the **Service ID** (looks like: `service_xxx`)
9. Click **"Create Service"**

### 3. Create Email Templates

#### Template 1: Contact Form Emails
1. Click **"Email Templates"** in sidebar
2. Click **"Create New Template"**
3. Set Template Name: `contact_form_template`
4. Use this template content:

```
From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

5. Save Template and copy the **Template ID** (looks like: `template_xxx`)

#### Template 2: Newsletter Subscription
1. Click **"Create New Template"** again
2. Set Template Name: `newsletter_template`
3. Use this template content:

```
Hello,

Thank you for subscribing to Nature Wave Music Academy's newsletter!

We'll keep you updated with:
- New music classes and programs
- Special offers and discounts
- Student success stories
- Music tips and tricks
- Upcoming events and performances

Best regards,
Nature Wave Music Academy Team
```

4. Save and copy the **Template ID**

### 4. Get Your Public Key
1. Click **"Account"** in top right
2. Copy your **Public Key** (looks like: `xxx_xxxxxxxxxxxxxxxx`)

### 5. Update Your Code

Edit `js/script.js` and replace these lines at the top of the file:

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key

const SERVICE_ID = "YOUR_SERVICE_ID"; // Gmail or other email service
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Email template you create
```

With your actual credentials:

```javascript
emailjs.init("abc_def123456789_xyz"); // Your actual Public Key
const SERVICE_ID = "service_abc123def456"; // Your actual Service ID
const TEMPLATE_ID = "template_xyz789abc"; // Your actual Template ID
```

### 6. Test the Setup

1. Open `contact-us.html` in your browser
2. Fill out the contact form and submit
3. Check your email (naturewavemusic@gmail.com) - you should receive the message
4. The form should show "✓ Message Sent!" confirmation

## Email Variables Reference

### Contact Form Template Variables:
- `{{from_name}}` - Client's full name
- `{{from_email}}` - Client's email address
- `{{phone}}` - Client's phone number
- `{{subject}}` - Subject/reason for contact
- `{{message}}` - Full message content
- `{{to_email}}` - Academy's email (naturewavemusic@gmail.com)

### Newsletter Template Variables:
- `{{to_email}}` - Subscriber's email address
- `{{user_email}}` - Subscriber's email address

## Free Plan Limits

- **Email limit**: 200 emails per month (free plan)
- **Templates**: Unlimited
- **Services**: Unlimited
- Perfect for small businesses!

## Upgrade Options

If you exceed limits:
- Pro Plan: $14.99/month for 5,000 emails/month
- Premium: $99/month for unlimited emails

## Troubleshooting

### "Failed to send message"
- Check your Service ID is correct
- Check your Template ID is correct
- Check your Public Key is correct
- Make sure Gmail service is connected and active

### "Email not received"
- Check spam/junk folder
- Verify email service is still connected
- Check EmailJS dashboard for error logs

### "CORS Error"
- EmailJS handles CORS automatically
- Refresh page and try again

## Security Notes

- Your **Public Key** is safe to expose (it's meant to be public)
- Never expose your **Private Key** in client-side code
- All emails go through Gmail's secure servers
- EmailJS doesn't store form data

## Support

- EmailJS Support: https://www.emailjs.com/docs/
- Gmail Support: https://support.google.com/mail/

---

**Setup Time**: ~10 minutes
**Cost**: FREE (200 emails/month)
**No Backend Server Required**: Everything works client-side!
