# Alexander Auto Repair Website

A professional, modern website for Alexander Auto Repair in Avon, Indiana.

## Features

### 🎨 Design
- Modern, responsive design that works on all devices (desktop, tablet, mobile)
- Color scheme matching the Alexander Auto Repair brand (red and black)
- Professional layout with smooth animations and transitions
- Mobile-first approach with hamburger menu for small screens

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with 4.8/5 star rating display
2. **Trust Indicators** - Certified technicians, quality guarantee, fast service, fair pricing
3. **Services** - 8 comprehensive service offerings with icons and descriptions
4. **About** - Company information, hours, location, and contact details
5. **Testimonials** - 6 authentic customer reviews with 5-star ratings
6. **Contact/Quote Form** - Full-featured form for customers to request quotes

### 🚀 Interactive Features
- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Contact form with validation
- Phone number auto-formatting
- Email validation
- Scroll-to-top button
- Animated elements on scroll
- Loading states for form submission

### 📞 Contact Integration
- Click-to-call phone buttons
- Email links
- Contact form that captures:
  - Customer name
  - Email and phone
  - Vehicle information
  - Service needed
  - Additional details

## Viewing the Website

### Local Development Server
The website is currently running at: **http://localhost:8080**

Open your browser and navigate to:
```
http://localhost:8080
```

### Starting the Server Manually
If you need to restart the server:
```bash
cd /tmp/alexander-auto-repair
python3 -m http.server 8080
```

Then open http://localhost:8080 in your browser.

## File Structure
```
alexander-auto-repair/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # Interactive features and form handling
├── images/
│   ├── logo.png        # Company logo
│   └── logo.svg        # SVG version of logo
└── README.md          # This file
```

## Deployment Options

### Option 1: Traditional Web Hosting
Upload all files to any web hosting service (Bluehost, HostGator, GoDaddy, etc.)

### Option 2: Free Static Hosting
- **Netlify**: Drag and drop the folder to netlify.com/drop
- **Vercel**: Connect via GitHub and deploy
- **GitHub Pages**: Push to GitHub and enable Pages
- **Cloudflare Pages**: Similar to Netlify, free and fast

### Option 3: Cloud Platforms
- **AWS S3 + CloudFront**: For scalable hosting
- **Google Cloud Storage**: Similar to S3
- **Azure Static Web Apps**: Microsoft's solution

## Customization

### Updating Contact Information
Edit the following in `index.html`:
- Phone number: Search for `(317) 272-7400`
- Email: Search for `info@alexanderautorepair.com`
- Address: Search for "Avon, Indiana 46123"

### Updating Business Hours
Located in the "About" section and footer

### Changing Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-red: #B22234;
    --dark-red: #8B1A2A;
    /* Other colors... */
}
```

### Adding/Removing Services
Edit the services grid section in `index.html`

### Updating Testimonials
Edit the testimonials section in `index.html`

## Form Integration

The contact form currently logs submissions to the browser console. To make it functional:

### Option 1: Email Service (Easy)
Use Formspree, EmailJS, or Form-Data:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Backend Integration
Connect to a backend API:
```javascript
// In js/script.js, replace the form submission with:
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

### Option 3: Google Sheets
Use a service like SheetDB to save form submissions to Google Sheets

## Analytics

To add Google Analytics:
1. Get your tracking ID from analytics.google.com
2. Add before `</head>` in index.html:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## SEO Optimization

The site includes:
- ✅ Semantic HTML5 elements
- ✅ Meta descriptions
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Mobile-responsive design
- ✅ Fast loading times

Additional recommendations:
- Add a sitemap.xml
- Create robots.txt
- Set up Google Business Profile
- Add schema.org markup for local business

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal external dependencies (only Font Awesome for icons)
- Optimized CSS with no unused styles
- Efficient JavaScript with event delegation
- Lazy loading images (when implemented)
- Fast page load times

## Support

For questions or customization help, contact the web developer or refer to the inline code comments.

## License

© 2026 Alexander Auto Repair. All rights reserved.
