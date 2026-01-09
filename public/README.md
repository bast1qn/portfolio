# Portfolio Setup Instructions

## EmailJS Setup (Contact Form)

1. **Create EmailJS Account**:
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create Email Service**:
   - Add your email provider (Gmail, Outlook, etc.)
   - Verify your email address

3. **Create Email Template**:
   - Go to Email Templates → Create New Template
   - Use these variables in your template:
     ```
     {{from_name}} - Sender name
     {{from_email}} - Sender email
     {{subject}} - Email subject
     {{message}} - Email message
     {{to_name}} - Your name (Bastian Giersch)
     ```

4. **Get Your Credentials**:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account → General Keys

5. **Update Contact Component**:
   - Open `src/components/Contact.jsx`
   - Replace these values with your actual credentials:
     - `YOUR_SERVICE_ID` → Your Service ID
     - `YOUR_TEMPLATE_ID` → Your Template ID
     - `YOUR_PUBLIC_KEY` → Your Public Key

## Google Analytics Setup

1. **Create GA4 Property**:
   - Go to https://analytics.google.com/
   - Create a GA4 property
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Update index.html**:
   - Open `index.html`
   - Replace `G-MEASUREMENT_ID` with your actual Measurement ID

## Resume PDF

1. **Add Your Resume**:
   - Place your resume PDF as `public/resume.pdf`
   - The download button will automatically work

## Domain Configuration

✅ **Already configured for bastian-giersch.de**

All URLs have been updated to use `https://bastian-giersch.de` in:
- `index.html` (meta tags)
- `sitemap.xml`
- `robots.txt`

## OG Image (Optional)

- Add `public/og-image.jpg` (1200x630px recommended)
- Update path in index.html if needed

## Testing

- Test contact form with EmailJS
- Verify Google Analytics is receiving data
- Check sitemap.xml is accessible at /sitemap.xml
- Test PWA installation
- Test offline support
