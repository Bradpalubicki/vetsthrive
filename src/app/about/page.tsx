import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Lightbulb, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Veterans Thrive Foundation, our mission, and founder Gabby de la Torre. Empowering veteran families in Las Vegas, Nevada.",
};

const values = [
  {
    icon: Heart,
    title: "Service",
    description:
      "We continue our commitment to service by supporting those who have served our nation.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency and accountability in everything we do.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build lasting connections that strengthen and support veteran families.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We develop creative solutions to address the unique challenges veteran families face.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in our programs and services to maximize our impact.",
  },
];

const timeline = [
  {
    year: "2025",
    title: "Foundation Established",
    description:
      "Veterans Thrive Foundation was founded in Las Vegas, Nevada with a vision to transform how America supports veteran families.",
  },
  {
    year: "2025",
    title: "Programs Launch",
    description:
      "Launched our core programs including the Veteran Business Directory and Kids Electric Car Program.",
  },
  {
    year: "2026",
    title: "Community Growth",
    description:
      "Expanded our reach across Southern Nevada, serving more veteran families and building community partnerships.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#152A45] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Veterans Thrive Foundation
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Building a future where every veteran family has the resources,
              support, and community to thrive beyond service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Veterans Thrive Foundation empowers veteran families to thrive
                through economic opportunity, youth enrichment, and community
                connection.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that those who have served our nation deserve
                comprehensive support—not just for themselves, but for their
                entire families. From helping veteran entrepreneurs grow their
                businesses to providing enriching programs for military
                children, we&apos;re committed to addressing the real needs of
                veteran families.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A nation where every veteran family has the resources, support,
                and community to thrive beyond service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where veteran-owned businesses flourish,
                military children have access to programs that support their
                unique needs, and veteran families are connected to a
                supportive community that understands their experiences and
                celebrates their service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-[#f4f6f8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Placeholder for founder photo */}
              <div className="lg:col-span-1">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8B] rounded-lg flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#1E3A5F]">
                        G
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">Founder Photo</p>
                  </div>
                </div>
              </div>

              {/* Founder bio */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-2">
                  Meet Our Founder
                </h2>
                <h3 className="text-xl text-[#B22234] font-semibold mb-6">
                  Gabby de la Torre, Founder & Executive Director
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Gabby de la Torre is a U.S. military veteran, entrepreneur,
                    and passionate advocate for veteran families. After
                    experiencing firsthand the challenges military families
                    face—frequent relocations, deployment stress, and the
                    struggle to reintegrate into civilian life—she founded
                    Veterans Thrive Foundation to create the support system she
                    wished had existed.
                  </p>

                  <p>
                    As a Hispanic woman veteran, Gabby brings a unique
                    perspective on resilience, community, and the power of
                    connection. She understands that supporting veterans means
                    supporting entire families, and that children of service
                    members face their own set of challenges that deserve
                    attention and resources.
                  </p>

                  <p>
                    She is committed to ensuring that every veteran family has
                    the resources and support they need to not just survive, but
                    thrive. Based in Las Vegas, Nevada, Gabby is building a
                    national movement to transform how America supports its
                    veteran families.
                  </p>
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-[#B22234] hover:bg-[#8B1A29] text-white"
                  >
                    <Link href="/contact">Connect With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Veterans Thrive
              Foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="text-center border-t-4 border-t-[#FFD700]"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#1E3A5F] flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-[#FFD700]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From a vision to a movement—building support for veteran families.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1E3A5F] font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-[#FFD700]/30 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="text-sm text-[#FFD700] font-semibold mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Together, we can create a future where every veteran family
              thrives. Whether you want to donate, volunteer, or partner with
              us, there&apos;s a place for you in our community.
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
                variant="outline"
                className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
              >
                <Link href="/programs">Explore Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
