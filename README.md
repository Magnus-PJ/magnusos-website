# MagnusOS.ai - AI-First Healthcare Operating System Website

## Overview

MagnusOS.ai is a next-generation AI-powered healthcare operating system designed to integrate clinical workflows, radiology, fertility medicine, diagnostics, and hospital management into a single modular platform. This repository contains the official website for MagnusOS.ai, built with modern web technologies and designed to showcase the platform's capabilities.

## 🚀 Features

### Core Platform Capabilities
- **Unified Healthcare Platform**: HIS, CRM, ERP, Radiology, Labs, Fertility, Pharmacy, Telehealth
- **AI-Powered Automation**: Radiology pre-reads, IVF embryo grading, NLP-based EMR documentation
- **Interoperability**: HL7, FHIR R4/R5, DICOMweb, NDHM/ABHA integration
- **Compliance**: HIPAA, GDPR, CDSCO Class C/D regulatory pathways
- **Hybrid Cloud**: Multi-center SaaS or on-premise edge integration
- **Blockchain Security**: Zero-trust architecture with immutable patient consent logs

### Website Features
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Persona-Driven Content**: Personalized experience for different healthcare roles
- **Interactive Components**: Animated sections with Framer Motion
- **SEO Optimized**: Comprehensive metadata and structured content
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Multilingual Support**: English, Spanish, and Hindi ready

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Heroicons**: Icon library

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
magnusos-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/             # Reusable components
│   ├── HeroSection.tsx    # Hero section with CTA
│   ├── PersonaSelector.tsx # Role-based content selector
│   ├── MagnusOSHighlights.tsx # Platform features
│   ├── TestimonialsSection.tsx # Success stories
│   └── Footer.tsx         # Site footer
├── public/                 # Static assets
├── .cursor/                # Cursor IDE configuration
│   └── rules/             # Project coding rules
├── package.json            # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/magnusos-website.git
   cd magnusos-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (#0ea5e9) - Main brand color
- **Healthcare**: Blue variants (#3b82f6) - Medical/healthcare elements
- **Success**: Green tones (#22c55e) - Positive actions/outcomes
- **Warning**: Orange tones (#f59e0b) - Caution/attention
- **Error**: Red tones (#ef4444) - Errors/danger

### Typography
- **Headings**: Poppins font family for display text
- **Body**: Inter font family for readable content
- **Responsive**: Scalable typography system

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Hover effects and shadows
- **Forms**: Consistent input styling
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly interactions
- Optimized images and assets
- Progressive enhancement

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast text options
- Screen reader compatibility

## 🔍 SEO Features

- Comprehensive metadata
- Open Graph tags
- Twitter Card support
- Structured data (Schema.org)
- Sitemap generation
- Meta descriptions optimization
- Canonical URLs

## 🌐 Internationalization

Ready for multiple languages:
- English (default)
- Spanish (Español)
- Hindi (हिंदी)

Language switching infrastructure is in place for future implementation.

## 📊 Performance

- Next.js Image optimization
- Code splitting and lazy loading
- Optimized fonts and assets
- CSS purging with Tailwind
- Progressive Web App ready

## 🔒 Security

- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure headers configuration
- HTTPS enforcement

## 📈 Analytics & Monitoring

Ready for integration with:
- Google Analytics
- Google Tag Manager
- Hotjar
- Sentry error tracking

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Build settings for Next.js
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the established coding standards
- Use TypeScript for all new components
- Maintain accessibility standards
- Write meaningful commit messages
- Test across different devices and browsers

## 📝 Content Management

The website content is structured in components and can be easily updated:
- **Hero Section**: Main messaging and CTAs
- **Persona Content**: Role-specific information
- **Features**: Platform capabilities and benefits
- **Testimonials**: Customer success stories
- **Footer**: Links and company information

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-ga-id
```

### Tailwind Configuration
Custom colors, fonts, and animations are defined in `tailwind.config.js`

### TypeScript Configuration
Path aliases and strict type checking in `tsconfig.json`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [MagnusOS.ai Platform Documentation](https://docs.magnusos.ai)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Dr. Paul Joy** - Radiologist, Entrepreneur, AI Healthcare Architect
- **Dr. Ambily Jose** - Fertility & Reproductive Medicine Specialist
- **Development Team** - AI engineers, software developers, business strategists

## 📞 Contact

- **Email**: contact@magnusos.ai
- **Phone**: +1 (555) 123-4567
- **Website**: [https://magnusos.ai](https://magnusos.ai)
- **Locations**: Kerala, India | Dubai, UAE

## 🙏 Acknowledgments

- Healthcare professionals who provided insights
- Design inspiration from Apple and DeepMind
- Open source community contributions
- Healthcare compliance experts

---

**MagnusOS.ai** - Transforming healthcare with AI-powered, unified solutions.

