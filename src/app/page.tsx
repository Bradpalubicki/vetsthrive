import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Car,
  GraduationCap,
  Handshake,
  Heart,
  Users,
  Target,
  Star,
  ChevronDown,
  ArrowRight,
  Shield,
  Award,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Briefcase,
  Home,
  BookOpen,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

const stats = [
  { value: 200000, label: "Veterans Served", suffix: "+" },
  { value: 4, label: "Core Programs", suffix: "" },
  { value: 50, label: "Communities", suffix: "+" },
  { value: 10, label: "Years of Impact", suffix: "+" },
];

const trustPartners = [
  { name: "VFW", abbrev: "VFW" },
  { name: "American Legion", abbrev: "AL" },
  { name: "DAV", abbrev: "DAV" },
  { name: "USO", abbrev: "USO" },
  { name: "Wounded Warrior", abbrev: "WWP" },
];

const programs = [
  {
    icon: Building2,
    title: "Veteran Business Directory",
    description:
      "Connect with veteran-owned businesses and support those who served through commerce.",
    href: "/programs#business-directory",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Car,
    title: "Kids Electric Car Program",
    description:
      "Therapeutic recreation bringing joy and stress relief to military-connected children.",
    href: "/programs#electric-car",
    image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: GraduationCap,
    title: "After-School Programs",
    description:
      "Academic support and enrichment designed specifically for military-connected youth.",
    href: "/programs#after-school",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Handshake,
    title: "Licensing & Franchise",
    description:
      "Empower veteran entrepreneurs to replicate our proven programs nationwide.",
    href: "/programs#licensing",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Connect With Us",
    description: "Reach out through our contact form or give us a call to learn about our programs.",
  },
  {
    step: 2,
    title: "Find Your Program",
    description: "We'll help match you with the program that best fits your family's needs.",
  },
  {
    step: 3,
    title: "Get Started",
    description: "Begin your journey with personalized support from our dedicated team.",
  },
  {
    step: 4,
    title: "Thrive Together",
    description: "Join our community of veteran families building brighter futures.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Family Support",
    description: "Comprehensive resources for the entire military family unit.",
  },
  {
    icon: Briefcase,
    title: "Economic Opportunity",
    description: "Business development and career advancement for veterans.",
  },
  {
    icon: BookOpen,
    title: "Youth Education",
    description: "Academic programs tailored to military-connected children.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Build lasting relationships with fellow veteran families.",
  },
  {
    icon: Shield,
    title: "Trusted Support",
    description: "Backed by years of experience serving those who served.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Programs designed to help families reach their full potential.",
  },
];

const testimonials = [
  {
    quote: "Veterans Thrive gave my family the support we needed during a difficult transition. The community here is incredible, and I finally feel like we belong somewhere.",
    name: "Michael Rodriguez",
    role: "Army Veteran, 15 Years",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "The business directory helped my veteran-owned company reach customers who wanted to support veterans. Our sales increased 40% in the first year.",
    name: "Sarah Thompson",
    role: "Marine Corps Veteran",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "My kids absolutely love the electric car program! It's given them so much joy during my deployment, and knowing they're happy makes everything easier.",
    name: "David Martinez",
    role: "Navy Active Duty",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "The after-school program has been life-changing for my daughter. Her grades improved and she's made wonderful friends who understand military life.",
    name: "Jennifer Williams",
    role: "Air Force Spouse",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source
            src="https://videos.pexels.com/video-files/4761085/4761085-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628]/90" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <FadeIn direction="none" delay={0.2}>
            <Image
              src="/logo-white.svg"
              alt="VetsThrive Foundation"
              width={320}
              height={80}
              className="h-16 md:h-20 w-auto mb-8"
              priority
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-lg max-w-5xl">
              Empowering Veteran Families
              <br />
              <span className="text-[#C9A227]">to Thrive</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              Through economic opportunity, youth enrichment, and community connection —
              we help those who served build brighter futures.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg">
                <Heart className="w-5 h-5" />
                Support Our Veterans
              </Link>
              <Link href="/programs" className="btn-secondary text-lg">
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="animate-bounce-slow">
              <ChevronDown className="w-8 h-8 text-[#C9A227]" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="bg-[#F9FAFB] py-8 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Proudly Supporting Veterans Alongside
            </span>
            <div className="flex items-center gap-8 md:gap-12">
              {trustPartners.map((partner) => (
                <div
                  key={partner.abbrev}
                  className="text-gray-400 font-bold text-xl md:text-2xl tracking-wider opacity-60 hover:opacity-100 transition-opacity"
                >
                  {partner.abbrev}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="bg-[#0A1628] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="stat-number mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <div className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MISSION SECTION (Two-Column) ==================== */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Veterans community gathering"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 md:right-8 bg-[#C9A227] rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-[#0A1628]" />
                    <div className="text-[#0A1628]">
                      <div className="font-bold text-lg">10+ Years</div>
                      <div className="text-sm">of Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm">
                  Our Mission
                </span>
                <h2 className="heading-lg text-[#0A1628] mt-3 mb-6">
                  Serving Those Who
                  <span className="text-[#C9A227]"> Served Us</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Veterans Thrive Foundation empowers veteran families to thrive
                  through economic opportunity, youth enrichment, and community
                  connection. We believe every veteran family deserves the
                  resources, support, and community to not just survive, but
                  thrive beyond service.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Based in Las Vegas and serving Southern Nevada, we&apos;re building
                  a network of support that extends far beyond traditional veteran
                  services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="btn-navy">
                    Learn Our Story
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="section-padding bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm">
                Get Started
              </span>
              <h2 className="heading-lg text-[#0A1628] mt-3 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Getting support for your family is simple. Here&apos;s how to begin
                your journey with Veterans Thrive.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.15}>
                <div className="relative text-center">
                  {/* Connector line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#C9A227] to-[#C9A227]/20" />
                  )}

                  <div className="relative z-10">
                    <div className="number-circle mx-auto mb-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== PROGRAMS SECTION ==================== */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm">
                What We Offer
              </span>
              <h2 className="heading-lg text-[#0A1628] mt-3 mb-4">
                Our Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive support for veteran families through innovative
                programs designed to address real needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <FadeIn key={program.title} delay={index * 0.15}>
                <Link href={program.href} className="group block h-full">
                  <div className="card-premium h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 rounded-xl bg-[#C9A227] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <program.icon className="w-7 h-7 text-[#0A1628]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#C9A227] transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">{program.description}</p>
                      <span className="inline-flex items-center gap-2 text-[#C9A227] font-semibold">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/programs" className="btn-ghost">
                View All Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== BENEFITS GRID ==================== */}
      <section className="section-padding bg-[#0A1628]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="heading-lg text-white mt-3 mb-4">
                The VetsThrive Difference
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We offer comprehensive support that addresses every aspect of
                veteran family life.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <div className="group card-glass p-6 h-full">
                  <div className="icon-box mb-4">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="section-padding bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm">
                Success Stories
              </span>
              <h2 className="heading-lg text-[#0A1628] mt-3 mb-4">
                What Families Are Saying
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from real families whose lives have been transformed
                through our programs.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <TestimonialCarousel testimonials={testimonials} />
          </FadeIn>
        </div>
      </section>

      {/* ==================== FEATURE SECTION (Two-Column Alternating) ==================== */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div>
                <span className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm">
                  Our Founder
                </span>
                <h2 className="heading-lg text-[#0A1628] mt-3 mb-6">
                  Built by a Veteran Family,
                  <span className="text-[#C9A227]"> For Veteran Families</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Veterans Thrive Foundation was founded by Gabby, a military spouse
                  who experienced firsthand the challenges veteran families face
                  during and after service.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Her vision was simple: create a community where veteran families
                  don&apos;t just survive — they thrive. Today, that vision has grown
                  into a comprehensive support system serving thousands of families
                  across Southern Nevada.
                </p>

                <div className="flex items-center gap-4">
                  <Link href="/about" className="btn-primary">
                    Read Our Story
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Military family"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
                />
                {/* Decorative element */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#C9A227] rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C9A227]/10 rounded-2xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== LOCATION CALLOUT ==================== */}
      <section className="py-16 bg-[#F9FAFB] border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-[#C9A227]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0A1628]">
                  Proudly Serving Southern Nevada
                </h3>
                <p className="text-gray-600">
                  Based in Las Vegas, supporting veteran families across the region
                </p>
              </div>
              <Link href="/contact" className="btn-primary flex-shrink-0">
                Get In Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1046896/pexels-photo-1046896.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="American flag background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 to-[#0A1628]/85" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <Sparkles className="w-12 h-12 mx-auto text-[#C9A227] mb-6" />
              <h2 className="heading-xl text-white mb-6">
                Ready to Support Our Veterans?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of supporters helping veteran families thrive.
                Every contribution makes an impact — whether you donate, volunteer,
                or list your veteran-owned business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
                <Link href="/programs#business-directory" className="btn-secondary text-lg">
                  List Your Business
                </Link>
                <Link href="/contact" className="btn-secondary text-lg">
                  Volunteer
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
