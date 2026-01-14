import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Car,
  GraduationCap,
  Handshake,
  Heart,
  Users,
  Target,
  Star,
} from "lucide-react";

const programs = [
  {
    icon: Building2,
    title: "Veteran Business Directory",
    description:
      "A searchable online directory connecting veteran-owned businesses with consumers who want to support veterans.",
    href: "/programs#business-directory",
  },
  {
    icon: Car,
    title: "Kids Electric Car Program",
    description:
      "Therapeutic recreation providing military-connected children with joy rides and stress relief.",
    href: "/programs#electric-car",
  },
  {
    icon: GraduationCap,
    title: "After-School Programs",
    description:
      "Academic support and enrichment designed specifically for military-connected youth.",
    href: "/programs#after-school",
  },
  {
    icon: Handshake,
    title: "Licensing & Franchise",
    description:
      "Enabling veteran entrepreneurs nationwide to replicate our proven programs in their communities.",
    href: "/programs#licensing",
  },
];

const stats = [
  { value: "200,000+", label: "Veterans in Southern Nevada" },
  { value: "6-9x", label: "Military children move during parent's career" },
  { value: "70%", label: "Veteran businesses struggle with visibility" },
];

const values = [
  {
    icon: Heart,
    title: "Service",
    description: "Continuing our commitment to serve those who served",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections that strengthen veteran families",
  },
  {
    icon: Target,
    title: "Empowerment",
    description: "Providing tools and resources for lasting success",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Delivering programs that make a real difference",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#152A45] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Veteran Families to{" "}
              <span className="text-[#FFD700]">Thrive</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Veterans Thrive Foundation empowers veteran families through
              economic opportunity, youth enrichment, and community connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#B22234] hover:bg-[#8B1A29] text-white text-lg px-8"
              >
                <Link href="/contact">Support Our Veterans</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] text-lg px-8"
              >
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Veterans Thrive Foundation empowers veteran families to thrive
              through economic opportunity, youth enrichment, and community
              connection. We believe every veteran family deserves the
              resources, support, and community to not just survive, but thrive
              beyond service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#f4f6f8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#B22234] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for veteran families through innovative
              programs that address real needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Card
                key={program.title}
                className="group hover:shadow-lg transition-shadow border-t-4 border-t-[#B22234]"
              >
                <CardContent className="p-6">
                  <program.icon className="w-12 h-12 text-[#1E3A5F] mb-4 group-hover:text-[#B22234] transition-colors" />
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    href={program.href}
                    className="text-[#B22234] font-medium hover:underline inline-flex items-center"
                  >
                    Learn More &rarr;
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Veterans Thrive
              Foundation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFD700] flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#1E3A5F]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8B] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you want to support our mission, list your veteran-owned
              business, or volunteer your time, there&apos;s a place for you in
              the Veterans Thrive community.
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
                <Link href="/contact">List Your Business</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F]"
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
