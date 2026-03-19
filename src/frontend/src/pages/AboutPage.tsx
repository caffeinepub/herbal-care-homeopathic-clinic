import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Eye,
  Heart,
  Leaf,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in homeopathic care, constantly updating our knowledge and practices.",
  },
  {
    icon: Users,
    title: "Patient-First",
    description:
      "Every treatment plan is uniquely crafted for each individual — no two patients receive the same protocol.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Honest diagnosis, transparent treatment plans, and genuine care define every interaction at our clinic.",
  },
  {
    icon: Eye,
    title: "Holism",
    description:
      "We consider the physical, mental, and emotional dimensions of health to achieve true, lasting healing.",
  },
];

const team = [
  {
    name: "Dr. Ravi Verma",
    role: "Chief Homeopathic Physician",
    qualification: "BHMS, MD (Hom)",
    experience: "15+ Years",
    specialty: "Chronic Diseases, Skin Disorders",
  },
  {
    name: "Dr. Sunita Patel",
    role: "Homeopathic Consultant",
    qualification: "BHMS, CCH",
    experience: "10+ Years",
    specialty: "Women's Health, Child Care",
  },
  {
    name: "Dr. Anil Sharma",
    role: "Senior Practitioner",
    qualification: "BHMS, PGDM",
    experience: "8+ Years",
    specialty: "Mental Wellness, Digestive Health",
  },
];

const milestones = [
  {
    year: "2009",
    event: "Herbal Care Clinic founded with a single consultation room",
  },
  {
    year: "2013",
    event: "Expanded to a full-service clinic with 4 treatment rooms",
  },
  { year: "2016", event: "Reached 2,000 successfully treated patients" },
  { year: "2019", event: "Introduced herbal medicine compounding laboratory" },
  {
    year: "2022",
    event: "Launched online consultation services for remote patients",
  },
  { year: "2024", event: "Celebrated 15 years and 5,000+ patients healed" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-green py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-white text-[300px] leading-none select-none pointer-events-none">
            🌿
          </div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-brand-gold/20 text-brand-gold border-brand-gold/40 font-semibold tracking-wide">
              About Our Clinic
            </Badge>
            <h1 className="font-display text-5xl font-bold text-white sm:text-6xl leading-tight">
              Rooted in Nature,
              <br />
              <span className="text-brand-gold">Guided by Science</span>
            </h1>
            <p className="text-lg text-white/75 md:text-xl leading-relaxed">
              For over 15 years, Herbal Care Homeopathic Clinic has been a
              sanctuary of natural healing in the heart of our community.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-brand-gold/15 rounded-3xl blur-xl" />
            <img
              src="/assets/generated/clinic-interior.dim_800x600.jpg"
              alt="Herbal Care Clinic interior"
              className="relative rounded-3xl shadow-green-md w-full"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
              <Leaf className="h-4 w-4" />
              Our Story
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight">
              A Journey of Healing Since 2009
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Herbal Care Homeopathic Clinic was born from a simple but
                profound belief: that the human body has an innate capacity to
                heal itself when given the right support. Founded in 2009 by Dr.
                Ravi Verma, our clinic started as a small practice focused on
                offering safe, natural alternatives to conventional medicine.
              </p>
              <p>
                Over the years, we have grown into a trusted multi-doctor
                clinic, serving thousands of patients across a wide spectrum of
                conditions. Our success lies not in quick fixes, but in deep
                understanding — taking the time to know each patient as an
                individual, not just a diagnosis.
              </p>
              <p>
                Today, Herbal Care stands as a beacon of holistic health,
                blending classical homeopathic principles with modern scientific
                understanding to deliver treatments that truly heal, not just
                suppress symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-green-pale py-20 md:py-28">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
              <Award className="h-4 w-4" />
              Our Journey
            </div>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              15 Years of Milestones
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-green/20 md:left-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-3 h-4 w-4 rounded-full bg-brand-gold border-4 border-white shadow-gold-sm -translate-x-1/2 md:left-1/2" />
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}
                  >
                    <Card className="border-2 border-brand-green/15 hover:border-brand-green/30 hover:shadow-green-sm transition-all">
                      <CardContent className="p-5">
                        <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                          {m.year}
                        </span>
                        <p className="mt-3 text-foreground/80">{m.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-2 border-brand-green/20 bg-brand-green text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 opacity-10 text-[120px] leading-none pointer-events-none select-none">
              🎯
            </div>
            <CardHeader className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold shadow-gold-sm">
                <Target className="h-7 w-7 text-brand-green" />
              </div>
              <CardTitle className="text-2xl font-display text-white">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-white/80 text-lg leading-relaxed">
                To provide effective, gentle, and affordable homeopathic
                healthcare to every individual and family — empowering our
                community to achieve vibrant health through the healing power of
                nature.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-brand-gold/30 bg-brand-gold overflow-hidden relative">
            <div className="absolute top-0 right-0 opacity-10 text-[120px] leading-none pointer-events-none select-none">
              👁
            </div>
            <CardHeader className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green shadow-green-sm">
                <Eye className="h-7 w-7 text-brand-gold" />
              </div>
              <CardTitle className="text-2xl font-display text-brand-green">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-brand-green/80 text-lg leading-relaxed">
                To become the most trusted name in natural healthcare,
                recognized for clinical excellence, compassionate care, and a
                commitment to healing that honors the whole person.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="bg-leaf-texture bg-brand-green-pale py-20 md:py-28">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
              <Heart className="h-4 w-4" />
              What Drives Us
            </div>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card
                key={v.title}
                className="border-2 border-transparent hover:border-brand-green/20 hover:shadow-green-md transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-13 w-13 h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white group-hover:scale-110 transition-transform duration-300">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-display">
                    {v.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {v.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container py-20 md:py-28">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
            <Users className="h-4 w-4" />
            Our Healers
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our qualified, compassionate physicians are dedicated to your
            wellbeing.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <Card
              key={member.name}
              className="border-2 border-brand-green/10 hover:border-brand-green/30 hover:shadow-green-md transition-all duration-300 overflow-hidden group"
            >
              <div className="h-2 bg-gradient-to-r from-brand-green to-brand-green-light" />
              <CardContent className="p-6 space-y-4">
                <div className="h-20 w-20 rounded-full bg-brand-green-pale border-4 border-brand-gold/30 flex items-center justify-center mx-auto group-hover:border-brand-gold/60 transition-all">
                  <span className="font-display text-3xl font-bold text-brand-green">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-brand-green font-semibold text-sm">
                    {member.role}
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-green flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {member.qualification}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-green flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {member.experience} Experience
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-16">
        <div className="container text-center space-y-6">
          <h2 className="font-display text-4xl font-bold text-white">
            Ready to Experience Natural Healing?
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Our team is here to guide you on your path to wellness. Book a
            consultation today.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-green font-bold rounded-full px-10 shadow-gold-sm"
            >
              Book a Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
