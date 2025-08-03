"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Globe,
  Shield,
  Zap,
  Star,
  Menu,
  X,
  Code,
  Users,
  Calendar,
  Smartphone,
  Lock,
  Webhook,
  Terminal,
  Activity,
  FileText,
  Clock,
  DollarSign,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"

export default function OnetapayHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: "Developer-First API",
      description:
        "RESTful API with comprehensive SDKs, webhooks, and 99.99% uptime. Build custom payment flows in minutes.",
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-600" />,
      title: "Enterprise Security",
      description:
        "PCI DSS Level 1, SOC 2 Type II certified. Advanced fraud detection with machine learning risk scoring.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Global Processing",
      description:
        "Accept payments in 195+ countries, 135+ currencies with local acquiring and smart routing optimization.",
    },
    {
      icon: <Activity className="h-8 w-8 text-yellow-600" />,
      title: "Real-Time Analytics",
      description:
        "Advanced reporting, transaction monitoring, revenue analytics, and customizable business intelligence dashboards.",
    },
    {
      icon: <Lock className="h-8 w-8 text-yellow-600" />,
      title: "Compliance Suite",
      description:
        "Built-in KYC/AML, automated tax reporting, GDPR compliance, and regulatory reporting across jurisdictions.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-600" />,
      title: "Crypto Payments",
      description:
        "Accept Bitcoin, Ethereum, and 50+ cryptocurrencies with instant conversion to fiat and enterprise-grade security.",
    },
  ]

  const testimonials = [
    {
      name: "David Kim",
      role: "CTO, TechFlow",
      company: "SaaS Platform",
      content: "Onetapay's API integration was seamless. Our payment success rate improved by 15% immediately.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Head of Payments, GlobalShop",
      company: "E-commerce",
      content: "The fraud detection saved us $2M+ in chargebacks. Best payment gateway we've ever used.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Founder, CreatorSpace",
      company: "Marketplace",
      content:
        "Multi-party payouts and marketplace features are exactly what we needed. Excellent developer experience.",
      rating: 5,
    },
  ]

  const pricingPlans = [
    {
      name: "Developer",
      price: "2.9%",
      description: "Perfect for startups and small businesses",
      features: [
        "Payment processing API",
        "Basic fraud protection",
        "Standard support",
        "Webhook notifications",
        "Basic analytics",
      ],
    },
    {
      name: "Business",
      price: "2.7%",
      description: "For growing companies",
      features: [
        "Everything in Developer",
        "Advanced fraud detection",
        "Priority support",
        "Custom checkout",
        "Advanced analytics",
        "Multi-party payouts",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Everything in Business",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "Volume pricing",
        "White-label solutions",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Onetapay</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                Platform
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                Pricing
              </Link>
              <Link href="#docs" className="text-gray-600 hover:text-purple-600 transition-colors">
                Developers
              </Link>
              <Link href="#support" className="text-gray-600 hover:text-purple-600 transition-colors">
                Enterprise
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/dashboard" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Signin
                </Link>
                <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </div>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <Link href="#features" className="block text-gray-600">
                Platform
              </Link>
              <Link href="#pricing" className="block text-gray-600">
                Pricing
              </Link>
              <Link href="#docs" className="block text-gray-600">
                Developers
              </Link>
              <Link href="#support" className="block text-gray-600">
                Enterprise
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link href="/dashboard" className="block text-gray-600 mb-4">
                  Dashboard
                </Link>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Stripe Inspired */}
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-orange-500 text-white">
  {/* Background Blur Elements */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-orange-500/90"></div>
    <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-400/10 rounded-full blur-2xl"></div>
  </div>

  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[60vh] py-16 gap-12">
      {/* Left Text Block */}
      <div className="lg:max-w-xl space-y-6 text-center lg:text-left">
        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm w-fit mx-auto lg:mx-0">
          <Zap className="h-4 w-4 mr-2" />
          Processing $5B+ annually
        </Badge>

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Financial Infrastructure to{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">scale</span>{" "}
          your revenue
        </h1>

        <p className="text-lg text-purple-100">
          Onetapay helps you accept payments, embed financial services, and drive global growth with a powerful API.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Input
            type="email"
            placeholder="Your email"
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-purple-200 backdrop-blur-sm"
          />
          <Button size="lg" className="h-12 px-6 bg-white text-purple-700 hover:bg-gray-100 font-semibold">
            Start Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-purple-100 justify-center lg:justify-start pt-2">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-yellow-300 mr-2" />
            Free sandbox
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-yellow-300 mr-2" />
            No setup fees
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-yellow-300 mr-2" />
            24/7 support
          </div>
        </div>
      </div>

      {/* Optional Product Mockup or Remove to simplify */}
      <div className="hidden lg:block relative">
        <Card className="w-96 bg-white/95 shadow-xl backdrop-blur-sm border-0">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900 text-lg">Quick Checkout</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <Input placeholder="customer@example.com" />
            <Input placeholder="1234 1234 1234 1234" />
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="MM / YY" />
              <Input placeholder="CVC" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Pay $99</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wide font-medium">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {["OpenAI", "Amazon", "Google", "Anthropic", "Shopify"].map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-400">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-yellow-400 group-hover:scale-110 transition-transform">
                99.99%
              </div>
              <div className="text-purple-100">API Uptime</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-yellow-400 group-hover:scale-110 transition-transform">
                $5B+
              </div>
              <div className="text-purple-100">Processed Annually</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-yellow-400 group-hover:scale-110 transition-transform">
                {"<50ms"}
              </div>
              <div className="text-purple-100">Response Time</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-yellow-400 group-hover:scale-110 transition-transform">
                195+
              </div>
              <div className="text-purple-100">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
                Complete Payment Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, scale, and optimize your payment infrastructure with enterprise-grade
              reliability and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Accept Every Payment Method</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Support all major payment methods and local alternatives to maximize conversion rates globally.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Credit & Debit Cards</h3>
                    <p className="text-gray-600">
                      Visa, Mastercard, American Express, Discover, JCB, and 50+ local card networks worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Smartphone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Digital Wallets</h3>
                    <p className="text-gray-600">
                      Apple Pay, Google Pay, PayPal, Samsung Pay, and regional wallet solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Local Payment Methods</h3>
                    <p className="text-gray-600">
                      SEPA, iDEAL, Bancontact, Sofort, Alipay, WeChat Pay, and 100+ local methods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Buy Now, Pay Later</h3>
                    <p className="text-gray-600">
                      Klarna, Afterpay, Affirm, and other BNPL solutions to increase average order value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-purple-50 to-yellow-50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Global Coverage</h3>
                  <p className="text-gray-600">Payment methods by region</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { region: "North America", methods: "15+" },
                    { region: "Europe", methods: "25+" },
                    { region: "Asia Pacific", methods: "30+" },
                    { region: "Latin America", methods: "20+" },
                    { region: "Middle East", methods: "12+" },
                    { region: "Africa", methods: "18+" },
                  ].map((region, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-white shadow-sm">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{region.methods}</div>
                      <p className="text-sm text-gray-600">{region.region}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium">
                    <span className="text-purple-700">120+ payment methods</span> supported globally
                  </p>
                </div>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Payments Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-yellow-100 text-yellow-800">🚀 Now Supporting Crypto</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
                  Accept Cryptocurrency Payments
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Tap into the growing crypto economy. Accept Bitcoin, Ethereum, and 50+ cryptocurrencies with automatic
                conversion to your preferred fiat currency and enterprise-grade security.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bank-Grade Security</h3>
                    <p className="text-gray-600">
                      Multi-signature wallets, cold storage protection, and institutional-grade custody for all crypto
                      transactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Instant Conversion</h3>
                    <p className="text-gray-600">
                      Automatically convert crypto to USD, EUR, or your preferred fiat currency with competitive
                      exchange rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Activity className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Real-Time Processing</h3>
                    <p className="text-gray-600">
                      Lightning-fast transaction processing with real-time exchange rates and transparent fee structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Global Compliance</h3>
                    <p className="text-gray-600">
                      Full regulatory compliance across jurisdictions with automated AML/KYC and transaction monitoring.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-yellow-700"
                >
                  Enable Crypto Payments
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  View Crypto Docs
                  <Code className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Supported Cryptocurrencies</h3>
                  <p className="text-gray-600">50+ digital currencies accepted</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      name: "Bitcoin",
                      symbol: "BTC",
                      color: "text-orange-500",
                      bg: "bg-orange-100",
                    },
                    { name: "Ethereum", symbol: "ETH", color: "text-blue-500", bg: "bg-blue-100" },
                    { name: "Litecoin", symbol: "LTC", color: "text-gray-500", bg: "bg-gray-100" },
                    {
                      name: "Bitcoin Cash",
                      symbol: "BCH",
                      color: "text-green-500",
                      bg: "bg-green-100",
                    },
                    {
                      name: "Dogecoin",
                      symbol: "DOGE",
                      color: "text-yellow-500",
                      bg: "bg-yellow-100",
                    },
                    { name: "USDC", symbol: "USDC", color: "text-blue-600", bg: "bg-blue-100" },
                  ].map((crypto, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${crypto.bg} mx-auto mb-2 flex items-center justify-center`}
                      >
                        <span className={`${crypto.color} font-bold text-sm`}>{crypto.symbol.slice(0, 2)}</span>
                      </div>
                      <p className="text-xs font-medium">{crypto.name}</p>
                      <p className="text-xs text-gray-500">{crypto.symbol}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Processing Fee</span>
                      <span className="text-purple-600 font-bold">2.5% + $0.30</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-100 to-purple-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Settlement Time</span>
                      <span className="text-yellow-600 font-bold">Same Day</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-yellow-50 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium">
                    ✨ <span className="text-purple-700">New cryptocurrencies</span> added monthly
                  </p>
                </div>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
                Built for E-commerce
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamless integrations with leading e-commerce platforms. Get started in minutes with our native plugins
              and apps.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Shopify Integration */}
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <ShoppingCart className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Shopify Integration</h3>
                  <p className="text-gray-600">Native app with one-click installation</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>One-click installation from Shopify App Store</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Automatic order sync and inventory management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Multi-currency checkout with local payment methods</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Advanced fraud protection and risk scoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Crypto payments support for modern customers</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-700">Used by 25,000+ Shopify stores worldwide</span>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">
                Install Shopify App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            {/* WooCommerce Integration */}
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">WooCommerce Plugin</h3>
                  <p className="text-gray-600">Powerful WordPress integration</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span>Easy WordPress plugin installation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span>Customizable checkout experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span>Subscription and recurring payment support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span>Detailed analytics and reporting dashboard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span>Full crypto payment integration</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-700">
                    5-minute setup with 18,000+ active installations
                  </span>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Download Plugin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          {/* Additional E-commerce Features */}
          <div className="text-center">
            <Card className="p-8 max-w-4xl mx-auto shadow-lg border-0 bg-gradient-to-r from-purple-50 to-yellow-50">
              <h3 className="text-2xl font-bold mb-6">Complete E-commerce Solution</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShoppingCart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Cart Abandonment Recovery</h4>
                  <p className="text-sm text-gray-600">Automated email sequences to recover lost sales</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Conversion Optimization</h4>
                  <p className="text-sm text-gray-600">A/B test checkout flows and payment methods</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Fraud Protection</h4>
                  <p className="text-sm text-gray-600">AI-powered fraud detection for e-commerce</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="bg-transparent">
                  View All Integrations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-yellow-700">
                  Start Integration
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Experience Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for Developers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern APIs, comprehensive SDKs, and detailed documentation to get you up and running in minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* API Documentation */}
            <Card className="p-8 shadow-xl border-0 bg-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Comprehensive Docs</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Interactive API explorer</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Code samples in 8+ languages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Postman collections</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Video tutorials</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent">
                Explore Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            {/* SDKs */}
            <Card className="p-8 shadow-xl border-0 bg-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Native SDKs</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Node.js, Python, PHP, Ruby</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">iOS and Android SDKs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">React and Vue.js components</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">TypeScript support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent">
                Download SDKs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            {/* Testing */}
            <Card className="p-8 shadow-xl border-0 bg-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Webhook className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Testing Tools</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Sandbox environment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Webhook testing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Test card numbers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm">Scenario simulation</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent">
                Start Testing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          {/* Code Example */}
          <div className="mt-16">
            <Card className="p-8 bg-gray-900 border-0 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get started in minutes</h3>
                <p className="text-gray-400">Simple integration with our RESTful API</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="text-gray-400 mb-2">// Create a payment intent</div>
                <div className="text-purple-400">const</div> <span className="text-white">paymentIntent</span>{" "}
                <span className="text-white">=</span> <span className="text-purple-400">await</span>{" "}
                <span className="text-yellow-400">Onetapay</span>
                <span className="text-white">.paymentIntents.create({"{"}</span>
                <br />
                <span className="ml-4 text-yellow-400">amount</span>
                <span className="text-white">:</span> <span className="text-green-400">2000</span>
                <span className="text-white">,</span>
                <br />
                <span className="ml-4 text-yellow-400">currency</span>
                <span className="text-white">:</span> <span className="text-green-400">"usd"</span>
                <span className="text-white">,</span>
                <br />
                <span className="ml-4 text-yellow-400">payment_method_types</span>
                <span className="text-white">: [</span>
                <span className="text-green-400">"card"</span>
                <span className="text-white">],</span>
                <br />
                <span className="text-white">{"});"}</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">See what developers and businesses say about Onetapay</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-sm text-purple-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600">No hidden fees. No setup costs. Scale with confidence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-purple-500 shadow-2xl scale-105 bg-gradient-to-br from-purple-50 to-yellow-50"
                    : "border-gray-200 bg-white"
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-yellow-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-500"> + 30¢</span>}
                  </div>
                  <CardDescription className="mt-2 text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Start Building?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers and businesses building the future of payments with Onetapay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Schedule Demo
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-purple-100">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              5-minute setup
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Enterprise security
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              24/7 support
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Onetapay</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The modern payment infrastructure built for developers. Process payments globally with enterprise-grade
                security and reliability.
              </p>
              <div className="flex space-x-4">
                <Badge className="bg-purple-600">PCI DSS Level 1</Badge>
                <Badge className="bg-yellow-600">SOC 2 Type II</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Payment Processing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Fraud Prevention
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Webhooks
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Developers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    SDKs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status Page
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Onetapay. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
