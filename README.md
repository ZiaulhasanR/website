# 🎨 Munifa Aktar - Portfolio Website

A modern, beautiful, and responsive portfolio website built with Next.js 16, featuring a stunning gradient color scheme and contemporary UI/UX design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.4-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design**: Gradient-based color scheme (Indigo → Purple → Pink)
- 🌈 **Glass Morphism**: Frosted glass effects on components
- 🎭 **Smooth Animations**: Floating elements, fade-ins, and hover effects
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Static generation with Next.js
- 🎯 **SEO Optimized**: Meta tags and semantic HTML
- ♿ **Accessible**: WCAG compliant design

## 🎯 Sections

1. **Hero** - Eye-catching landing section with animated background
2. **About** - Personal introduction with profile card
3. **Skills** - Technical and professional skills with progress indicators
4. **Experience** - Timeline view of work history
5. **Projects** - Grid showcase of featured projects
6. **Contact** - Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd website

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System

### Color Palette

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Accent**: `#8b5cf6` (Purple)
- **Gradient**: Linear gradient combining all three colors

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design documentation.

## 📝 Customization

### Update Content

See [UPDATE_GUIDE.md](./UPDATE_GUIDE.md) for detailed instructions on:
- Adding your personal information
- Updating skills and experience
- Customizing colors
- Adding your photo and CV

### Quick Updates

1. **Personal Info**: Edit `app/components/Hero.tsx` and `app/components/About.tsx`
2. **Skills**: Edit `app/components/Skills.tsx`
3. **Experience**: Edit `app/components/Experience.tsx`
4. **Projects**: Edit `app/components/Projects.tsx`
5. **Contact**: Edit `app/components/Contact.tsx`

## 🏗️ Project Structure

```
website/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Sticky navigation
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills section
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Projects.tsx     # Projects grid
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── globals.css          # Global styles & design system
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                  # Static assets
└── package.json
```

## 🛠️ Built With

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Turbopack](https://turbo.build/) - Fast bundler

## 📦 Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Netlify

1. Build: `npm run build`
2. Deploy the `.next` folder

## 📋 To-Do

- [ ] Add your CV PDF to `/public`
- [ ] Update personal information
- [ ] Add real project data
- [ ] Add profile photo
- [ ] Update social media links
- [ ] Test on all devices
- [ ] SEO optimization
- [ ] Add analytics

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Munifa Aktar**

- Portfolio: [Your Website]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

⭐ **Status**: Design complete, awaiting content from CV
📝 **Next Step**: Update with actual CV information using [UPDATE_GUIDE.md](./UPDATE_GUIDE.md)

Built with ❤️ using Next.js and modern web technologies
