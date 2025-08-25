# Anik Sen - Portfolio Website

A modern, responsive portfolio website for Anik Sen, a Graduate Research Assistant specializing in Information Security, Machine Learning, and Computer Science.

## 🚀 Features

### Core Features
- **Multi-page Portfolio**: 9 comprehensive pages showcasing different aspects of Anik's professional journey
- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Mode Ready**: Built with dark mode support (toggle implementation ready)
- **SEO Optimized**: Proper meta tags, Open Graph tags, and structured data

### Pages
1. **Home** (`/`) - Hero section, featured publications, recent awards, research focus
2. **About** (`/about`) - Professional summary, contact info, research interests
3. **Experience** (`/experience`) - Work experience timeline with detailed responsibilities
4. **Education** (`/education`) - Academic journey, degrees, GPA, honors
5. **Publications** (`/publications`) - Research publications with search and filter
6. **Skills** (`/skills`) - Technical skills categorized by area with proficiency levels
7. **Awards** (`/awards`) - Awards and recognitions with filtering by category
8. **Activities** (`/activities`) - Professional and extra-curricular activities
9. **Contact** (`/contact`) - Contact form and academic references

### Technical Features
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for animations
- **GSAP** for advanced animations
- **Lucide Icons** for iconography
- **Back to Top** button
- **Breadcrumb Navigation**
- **Loading States**
- **404 Page**

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd anik-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
anik-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── awards/
│   │   ├── contact/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── publications/
│   │   ├── skills/
│   │   ├── activities/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/          # Page sections
│   │   │   └── Hero.tsx
│   │   └── ui/               # shadcn/ui components
│   ├── lib/
│   │   └── data/             # Data files
│   │       ├── personal.ts
│   │       ├── experience.ts
│   │       ├── education.ts
│   │       ├── publications.ts
│   │       ├── skills.ts
│   │       ├── awards.ts
│   │       ├── activities.ts
│   │       └── navigation.ts
│   ├── types/                # TypeScript interfaces
│   │   └── index.ts
│   └── hooks/                # Custom hooks
│       └── useGsap.ts
├── public/                   # Static assets
└── package.json
```

## 🎨 Customization

### Personal Information
Update the data files in `src/lib/data/` to customize the content:

- `personal.ts` - Personal info, contact details, social links
- `experience.ts` - Work experience entries
- `education.ts` - Educational background
- `publications.ts` - Research publications
- `skills.ts` - Technical skills and proficiency levels
- `awards.ts` - Awards and recognitions
- `activities.ts` - Professional activities

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update component styles in individual files
- Customize animations in `src/hooks/useGsap.ts`

### Components
- Add new UI components using `npx shadcn@latest add <component-name>`
- Create custom components in `src/components/`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Performance

- **Lighthouse Score**: Optimized for high performance
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `src/lib/data/navigation.ts`
4. Add breadcrumb support if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👤 About Anik Sen

Anik Sen is a Graduate Research Assistant at Multimedia University, Malaysia, specializing in Information Security and Machine Learning. This portfolio showcases his academic achievements, research contributions, and professional experience.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
