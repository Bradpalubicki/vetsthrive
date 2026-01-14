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
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const programs = [
  {
    icon: Building2,
    title: "Veteran Business Directory",
    description:
      "A searchable online directory connecting veteran-owned businesses with consumers who want to support veterans.",
    href: "/programs#business-directory",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Car,
    title: "Kids Electric Car Program",
    description:
      "Therapeutic recreation providing military-connected children with joy rides and stress relief.",
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
      "Enabling veteran entrepreneurs nationwide to replicate our proven programs in their communities.",
    href: "/programs#licensing",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const stats = [
  { value: 200000, label: "Veterans in Southern Nevada", suffix: "+" },
  { value: 4, label: "Programs Serving Families", suffix: "" },
  { value: 50, label: "Communities Reached", suffix: "+" },
  { value: 95, label: "Family Satisfaction Rate", suffix: "%" },
];

const values = [
  {
    icon: Heart,
    title: "Service",
    description: "Continuing our commitment to serve those who served our nation",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting connections that strengthen veteran families",
  },
  {
    icon: Target,
    title: "Empowerment",
    description: "Providing tools and resources for lasting personal success",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Delivering innovative programs that make a real difference",
  },
];

const testimonials = [
  {
    quote: "Veterans Thrive gave my family the support we needed during a difficult transition. The community here is incredible.",
    name: "Michael R.",
    role: "Army Veteran",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "The business directory helped my veteran-owned company reach customers who wanted to support veterans. Sales increased 40%.",
    name: "Sarah T.",
    role: "Marine Corps Veteran",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "My kids love the electric car program! It's given them so much joy during my deployment.",
    name: "David M.",
    role: "Navy Active Duty",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/80 via-[#1E3A5F]/70 to-[#152A45]/90" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white pt-20">
          <FadeIn direction="none" delay={0.2}>
            <Image
              src="/logo.svg"
              alt="Veterans Thrive Foundation"
              width={280}
              height={70}
              className="mx-auto mb-8 h-16 md:h-20 w-auto brightness-0 invert"
              priority
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Empowering Veteran
              <br />
              Families to{" "}
              <span className="text-[#FFD700] drop-shadow-lg">Thrive</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Building stronger communities through economic opportunity,
              youth enrichment, and lasting connections for those who served.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Heart className="w-5 h-5" />
                Support Our Veterans
              </Link>
              <Link
                href="/programs"
                className="btn-outline flex items-center justify-center gap-2 text-lg"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#FFD700]" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D5A8B] py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-[#FFD700] mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <div className="text-sm md:text-base text-gray-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Veterans community"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FFD700] rounded-2xl p-6 shadow-xl">
                  <Shield className="w-12 h-12 text-[#1E3A5F]" />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-[#B22234] font-semibold uppercase tracking-wider text-sm">
                  Our Mission
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mt-3 mb-6">
                  Serving Those Who
                  <br />
                  <span className="text-[#B22234]">Served Us</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Veterans Thrive Foundation empowers veteran families to thrive
                  through economic opportunity, youth enrichment, and community
                  connection. We believe every veteran family deserves the
                  resources, support, and community to not just survive, but
                  thrive beyond service.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8B] border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    Join <strong>1,000+</strong> supporters
                  </span>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#B22234] transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#B22234] font-semibold uppercase tracking-wider text-sm">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mt-3 mb-4">
                Our Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive support for veteran families through innovative
                programs that address real needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <FadeIn key={program.title} delay={index * 0.15}>
                <Link href={program.href} className="group block">
                  <div className="card-premium h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 rounded-xl bg-[#FFD700] flex items-center justify-center shadow-lg">
                          <program.icon className="w-7 h-7 text-[#1E3A5F]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3 group-hover:text-[#B22234] transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <span className="inline-flex items-center gap-2 text-[#B22234] font-semibold">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1E3A5F]/95" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#FFD700] font-semibold uppercase tracking-wider text-sm">
                Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                Core Values
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do at Veterans Thrive
                Foundation.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="card-glass p-8 text-center h-full">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#E5C100] flex items-center justify-center shadow-lg">
                    <value.icon className="w-10 h-10 text-[#1E3A5F]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#B22234] font-semibold uppercase tracking-wider text-sm">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mt-3 mb-4">
                Stories of Impact
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.15}>
                <div className="bg-[#f8fafc] rounded-2xl p-8 h-full relative">
                  <div className="text-6xl text-[#FFD700]/30 font-serif absolute top-4 left-6">
                    &ldquo;
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 relative z-10 pt-8">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-[#1E3A5F]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-[#1E3A5F] flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1E3A5F]">
                  Proudly Serving Southern Nevada
                </h3>
                <p className="text-gray-600">
                  Based in Las Vegas, supporting veteran families across the region
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1046896/pexels-photo-1046896.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="American flag"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 to-[#B22234]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center text-white">
              <Award className="w-16 h-16 mx-auto text-[#FFD700] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Join thousands of supporters helping veteran families thrive.
                Every contribution, every volunteer hour, every business listing
                makes an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-gold text-lg">
                  <Heart className="w-5 h-5 mr-2 inline" />
                  Donate Now
                </Link>
                <Link href="/contact" className="btn-outline text-lg">
                  List Your Business
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline text-lg border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1E3A5F]"
                >
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
