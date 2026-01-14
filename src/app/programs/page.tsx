import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Car,
  GraduationCap,
  Handshake,
  CheckCircle2,
  Users,
  TrendingUp,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore Veterans Thrive Foundation programs: Veteran Business Directory, Kids Electric Car Program, After-School Programs, and Licensing Opportunities.",
};

const programs = [
  {
    id: "business-directory",
    icon: Building2,
    title: "Veteran Business Directory",
    tagline: "Connecting Veteran-Owned Businesses with Supporters",
    description:
      "A searchable online directory connecting veteran-owned businesses with consumers who want to support veterans. Our directory helps veteran entrepreneurs gain visibility and grow their customer base while making it easy for consumers to find and support veteran-owned businesses in their community.",
    serves: "Veteran-owned businesses and consumers who want to support veterans",
    benefits: [
      "Increased visibility for veteran-owned businesses",
      "Easy discovery for consumers seeking to support veterans",
      "Free listing for verified veteran-owned businesses",
      "Searchable by location, industry, and service type",
      "Credibility badge for verified veteran ownership",
    ],
    howItWorks: [
      "Veterans register their business and verify ownership",
      "Businesses are listed in our searchable directory",
      "Consumers search for veteran-owned businesses by location or service",
      "Businesses receive increased visibility and customer traffic",
    ],
    cta: { text: "List Your Business", href: "/contact" },
    stats: [
      { value: "70%", label: "of veteran businesses struggle with visibility" },
      { value: "60M+", label: "Americans want to support veteran businesses" },
    ],
  },
  {
    id: "electric-car",
    icon: Car,
    title: "Kids Electric Car Program",
    tagline: "Joy Rides for Military-Connected Children",
    description:
      "A therapeutic recreation program providing military-connected children with joy rides in kid-sized electric cars. This program creates positive experiences and stress relief for children dealing with deployment, relocation, and other military family challenges.",
    serves: "Military-connected children ages 3-10",
    benefits: [
      "Therapeutic stress relief for military children",
      "Positive experiences during challenging transitions",
      "Fun, safe, supervised activity",
      "Community connection with other military families",
      "Creates lasting positive memories",
    ],
    howItWorks: [
      "Families register for scheduled ride events",
      "Children receive safety briefing and supervision",
      "Kids enjoy supervised rides in age-appropriate electric cars",
      "Families connect with other military families at events",
    ],
    cta: { text: "Register for Events", href: "/contact" },
    stats: [
      { value: "6-9x", label: "Military children move during parent's career" },
      { value: "2M+", label: "Military-connected children in the US" },
    ],
  },
  {
    id: "after-school",
    icon: GraduationCap,
    title: "After-School Programs",
    tagline: "Academic Support for Military-Connected Youth",
    description:
      "Academic support and enrichment programs designed specifically for military-connected youth. Our programs address the unique challenges of frequent moves, parental deployment, and educational disruption that military children face.",
    serves: "Military-connected youth in grades K-12",
    benefits: [
      "Tailored academic support for military children",
      "Homework help and tutoring",
      "Social-emotional learning and peer connection",
      "Understanding of military family transitions",
      "Consistent support despite frequent moves",
    ],
    howItWorks: [
      "Families enroll children in age-appropriate programs",
      "Students receive academic support and tutoring",
      "Programs include social-emotional learning activities",
      "Children connect with peers who understand military life",
    ],
    cta: { text: "Enroll Your Child", href: "/contact" },
    stats: [
      { value: "35%", label: "of military children struggle academically" },
      { value: "3x", label: "more likely to need special support" },
    ],
  },
  {
    id: "licensing",
    icon: Handshake,
    title: "Licensing & Franchise Opportunities",
    tagline: "Expand Our Impact in Your Community",
    description:
      "Our licensing and franchise model enables veteran entrepreneurs nationwide to replicate our proven programs in their communities. This creates economic opportunity for veterans while expanding the impact of Veterans Thrive Foundation across the country.",
    serves: "Veteran entrepreneurs looking to make an impact",
    benefits: [
      "Proven program models with established success",
      "Comprehensive training and support",
      "Marketing and operational resources",
      "Part of a national network of veteran-serving organizations",
      "Economic opportunity while serving fellow veterans",
    ],
    howItWorks: [
      "Interested veterans apply for licensing opportunities",
      "Qualified candidates receive comprehensive training",
      "Licensees launch programs in their communities",
      "Ongoing support and resources from headquarters",
    ],
    cta: { text: "Explore Opportunities", href: "/contact" },
    stats: [
      { value: "200K+", label: "Veterans transition annually" },
      { value: "45%", label: "of veterans interested in entrepreneurship" },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#152A45] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Comprehensive support for veteran families through innovative
              programs that address real needs—from business growth to youth
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-[#B22234]">
                  <CardContent className="p-6 text-center">
                    <program.icon className="w-12 h-12 mx-auto text-[#1E3A5F] mb-4 group-hover:text-[#B22234] transition-colors" />
                    <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-600">{program.tagline}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-16 md:py-24 ${
            index % 2 === 0 ? "bg-[#f4f6f8]" : "bg-white"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-lg bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                  <program.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-2">
                    {program.title}
                  </h2>
                  <p className="text-lg text-[#B22234] font-medium">
                    {program.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {program.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {program.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-6 text-center shadow-sm border"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#B22234] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Who it serves */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-[#1E3A5F]" />
                      <h3 className="text-lg font-semibold text-[#1E3A5F]">
                        Who It Serves
                      </h3>
                    </div>
                    <p className="text-gray-600">{program.serves}</p>
                  </CardContent>
                </Card>

                {/* Key Benefits */}
                <Card className="lg:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-6 h-6 text-[#1E3A5F]" />
                      <h3 className="text-lg font-semibold text-[#1E3A5F]">
                        Key Benefits
                      </h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* How it works */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">
                    How It Works
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {program.howItWorks.map((step, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center font-bold mb-3">
                          {i + 1}
                        </div>
                        <p className="text-sm text-gray-600">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#B22234] hover:bg-[#8B1A29] text-white"
                >
                  <Link href={program.cta.href}>{program.cta.text}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto text-[#FFD700] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support Our Programs
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Your support helps us expand our programs and serve more veteran
              families across Nevada and beyond. Every contribution makes a
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#B22234] hover:bg-[#8B1A29] text-white"
              >
                <Link href="/contact">Support Our Veterans</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#FFD700] text-[#1E3A5F] hover:bg-[#E5C100]"
              >
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
