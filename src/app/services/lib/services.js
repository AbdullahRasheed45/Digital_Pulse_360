import {
  Palette,
  Code,
  Search,
  Smartphone,
  Monitor,
  BarChart3,
  Layout,
  Users,
  Zap,
  Layers,
  Eye,
  Globe,
  Server,
  Shield,
  Rocket,
  Target,
  LineChart,
  Database,
  Lock,
  Cpu,
  Cloud,
  MessageSquare,
  TrendingUp,
  Share2,
  PieChart,
  FileText,
  BarChart2,
  Calculator,
  CreditCard,
  Receipt,
  DollarSign,
  Settings,
  Briefcase,
} from "lucide-react";

export const services = [
  {
    icon: Calculator,
    title: "Digital Accounting & Bookkeeping Automation",
    slug: "digital-accounting-bookkeeping-automation",
    shortDescription: "Smart books. Zero manual entry.",
    longDescription:
      "We don't just do bookkeeping — we streamline it. Our U.S.-registered team combines QuickBooks Online expertise with digital tools and API integration to help businesses move their entire accounting system to the cloud. We leverage cloud platforms and custom integrations to reduce manual entries and errors. Digital Pulse 360 also builds custom dashboards for cash flow & KPI tracking.",
    color: "#4646ff",
    features: [
      {
        icon: Shield,
        title: "IRS-compliant Bookkeeping",
        description:
          "Maintain accurate, compliant financial records that meet all IRS requirements and standards.",
      },
      {
        icon: Zap,
        title: "Bank Feed Automation",
        description:
          "Automatically sync and categorize bank transactions to eliminate manual data entry.",
      },
      {
        icon: Settings,
        title: "QuickBooks/Xero Setup & Migration",
        description:
          "Seamlessly set up or migrate your accounting system to cloud-based platforms.",
      },
      {
        icon: Receipt,
        title: "Expense Management & Receipt Digitization",
        description:
          "Streamline expense tracking with automated receipt capture and categorization.",
      },
      {
        icon: FileText,
        title: "Automated Monthly Reporting",
        description:
          "Generate comprehensive financial reports automatically every month.",
      },
      {
        icon: DollarSign,
        title: "W-9, 1099 & Tax Prep Support",
        description:
          "Handle all tax-related documentation and preparation with expert support.",
      },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    shortDescription:
      "Crafting intuitive and visually stunning user interfaces",
    longDescription:
      "Our UI/UX design service focuses on creating user-centric digital experiences that captivate and convert. We blend aesthetics with functionality to ensure your product stands out in the digital landscape.",
    color: "#4646ff",
    features: [
      {
        icon: Layout,
        title: "User Interface Design",
        description:
          "Create visually appealing and intuitive interfaces that align with your brand identity.",
      },
      {
        icon: Users,
        title: "User Experience Design",
        description:
          "Develop user-centric experiences that enhance satisfaction and engagement.",
      },
      {
        icon: Zap,
        title: "Interaction Design",
        description:
          "Design seamless interactions that guide users through your digital product effortlessly.",
      },
      {
        icon: Layers,
        title: "Information Architecture",
        description:
          "Structure content and functionality for optimal user navigation and comprehension.",
      },
      {
        icon: Eye,
        title: "Visual Design",
        description:
          "Craft aesthetically pleasing designs that communicate your brand's message effectively.",
      },
      {
        icon: Palette,
        title: "Brand Identity Design",
        description:
          "Develop a cohesive visual language that represents your brand across all digital touchpoints.",
      },
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    slug: "web-development",
    shortDescription: "Building robust and scalable web applications",
    longDescription:
      "From responsive websites to complex web applications, our development team leverages cutting-edge technologies to deliver high-performance, secure, and scalable digital solutions tailored to your business needs.",
    color: "#4646ff",
    features: [
      {
        icon: Globe,
        title: "Responsive Web Design",
        description:
          "Create websites that look and function flawlessly across all devices and screen sizes.",
      },
      {
        icon: Server,
        title: "Full-Stack Development",
        description:
          "End-to-end web application development using modern front-end and back-end technologies.",
      },
      {
        icon: Shield,
        title: "Secure Development",
        description:
          "Implement robust security measures to protect your web applications and user data.",
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description:
          "Optimize your web applications for speed and efficiency, ensuring a smooth user experience.",
      },
      {
        icon: Code,
        title: "Custom CMS Development",
        description:
          "Build tailored content management systems that meet your specific business needs.",
      },
      {
        icon: Smartphone,
        title: "Progressive Web Apps",
        description:
          "Develop progressive web apps that offer native app-like experiences on the web.",
      },
    ],
  },
  {
    icon: Search,
    title: "SEO and Marketing",
    slug: "seo-and-marketing",
    shortDescription:
      "Comprehensive digital marketing and search engine optimization solutions",
    longDescription:
      "Transform your online presence with our integrated SEO and marketing services. We combine data-driven SEO strategies with powerful digital marketing campaigns to increase your visibility, drive qualified traffic, and convert visitors into loyal customers. Our holistic approach ensures sustainable growth across all digital channels.",
    color: "#4646ff",
    features: [
      {
        icon: Target,
        title: "Strategic Keyword Optimization",
        description:
          "In-depth keyword research and implementation to target high-intent search queries and capture valuable organic traffic.",
      },
      {
        icon: Share2,
        title: "Content Marketing",
        description:
          "Create and promote engaging, SEO-optimized content that resonates with your audience and establishes thought leadership.",
      },
      {
        icon: Globe,
        title: "Technical SEO Excellence",
        description:
          "Comprehensive technical optimization ensuring perfect crawlability, indexing, and mobile-first performance.",
      },
      {
        icon: MessageSquare,
        title: "Social Media Marketing",
        description:
          "Strategic social media campaigns that boost engagement, brand awareness, and drive qualified traffic.",
      },
      {
        icon: TrendingUp,
        title: "Conversion Rate Optimization",
        description:
          "Data-driven strategies to improve user experience and increase conversion rates across all digital touchpoints.",
      },
      {
        icon: Search,
        title: "Local SEO & Business Presence",
        description:
          "Dominate local search results and enhance your business visibility in targeted geographical areas.",
      },
    ],
  },

  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    shortDescription:
      "We build sleek, scalable apps — so your business is always one tap away.",
    longDescription:
      "We turn your ideas into powerful mobile apps that work beautifully on both iOS and Android. From user-friendly interfaces to smooth backend integrations, we handle everything — design, development, and post-launch support. Perfect for startups, service businesses, e-commerce, financial tools, booking apps, and more.",
    color: "#4646ff",
    features: [
      {
        icon: Smartphone,
        title: "Cross-platform Development",
        description:
          "Build apps that work seamlessly on both iOS and Android using React Native and Flutter.",
      },
      {
        icon: Eye,
        title: "Clean, Intuitive UI/UX for Mobile",
        description:
          "Create beautiful, user-friendly interfaces specifically designed for mobile experiences.",
      },
      {
        icon: CreditCard,
        title: "Payment & API Integrations",
        description:
          "Integrate with Stripe, CRMs, databases, and other essential business tools.",
      },
      {
        icon: Users,
        title: "Admin Dashboards & User Management",
        description:
          "Build comprehensive admin panels and user management systems for your app.",
      },
      {
        icon: Settings,
        title: "Ongoing Maintenance & Feature Updates",
        description:
          "Continuous support and feature enhancements to keep your app current and competitive.",
      },
      {
        icon: Briefcase,
        title: "Business-Ready Solutions",
        description:
          "Ideal for startups, service businesses, e-commerce, financial tools, and booking platforms.",
      },
    ],
  },
];