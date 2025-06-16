# Mudas Herculândia Website

A modern, responsive website for Mudas Herculândia, a plant nursery business.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Mobile-friendly navigation
- Contact form for customer inquiries
- Product catalog with categories
- About page with company information

## Technologies Used

- HTML5
- JavaScript (ES6+)
- Tailwind CSS
- Custom CSS animations

## Project Structure

```
├── index.html          # Home page
├── sobre.html         # About page
├── produtos.html      # Products page
├── contato.html       # Contact page
├── styles.css         # Custom styles
├── script.js          # JavaScript functionality
└── tailwind.config.js # Tailwind CSS configuration
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Customization

- Colors and branding can be modified in the Tailwind configuration
- Images should be placed in an `images` directory
- Product information can be updated in `produtos.html`

## Contact Form

The contact form currently shows a success message but doesn't actually send data. To implement form submission:

1. Set up a backend server
2. Update the form submission handler in `script.js`
3. Add proper error handling and validation

## License

This project is licensed under the MIT License. 