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
  CheckCircle2,
  Heart,
  Leaf,
  Shield,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Natural Treatment",
    description:
      "Harnessing the power of nature with time-tested homeopathic remedies free from harmful side effects.",
    color: "bg-brand-green text-white",
  },
  {
    icon: Shield,
    title: "Expert Care",
    description:
      "Our qualified homeopathic physicians bring decades of experience in gentle, holistic healing.",
    color: "bg-brand-gold text-brand-green",
  },
  {
    icon: Heart,
    title: "Holistic Healing",
    description:
      "We treat the whole person — mind, body, and spirit — for lasting wellness and vitality.",
    color: "bg-brand-green text-white",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Patients Treated" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "50+", label: "Conditions Treated" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    condition: "Chronic Migraine",
    text: "After years of suffering, Dr. Verma's homeopathic treatment gave me my life back. No more migraines for 8 months!",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    condition: "Skin Eczema",
    text: "My eczema has cleared up completely. The treatment was gentle and the results are permanent. Highly recommend!",
    rating: 5,
  },
  {
    name: "Meena Joshi",
    condition: "Digestive Issues",
    text: "The holistic approach here is wonderful. My digestion problems resolved in just 3 months of treatment.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-banner.dim_1400x500.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 via-brand-green/75 to-brand-green/40" />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 border border-brand-gold/40 px-4 py-2">
              <Leaf className="h-4 w-4 text-brand-gold" />
              <span className="text-sm font-semibold text-brand-gold tracking-wide">
                Trusted Homeopathic Care Since 2009
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
              Welcome to <span className="text-brand-gold">Herbal Care</span>
              <br />
              Homeopathic Clinic
            </h1>

            <p className="text-xl text-white/85 leading-relaxed max-w-xl">
              Experience the gentle power of nature-based healing. We combine
              ancient homeopathic wisdom with modern medical knowledge to
              restore your health naturally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  data-ocid="home.hero.primary_button"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-green font-bold rounded-full px-8 text-base shadow-gold-sm hover:shadow-gold-sm transition-all"
                >
                  <Leaf className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/60 text-white hover:bg-white/10 rounded-full px-8 text-base font-semibold backdrop-blur-sm"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative leaf */}
        <div className="absolute bottom-8 right-8 text-white/5 text-[200px] select-none pointer-events-none hidden lg:block font-display">
          🌿
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-gold py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-display font-bold text-brand-green">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-brand-green/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container py-20 md:py-28">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
            <Leaf className="h-4 w-4" />
            Why Choose Us
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Healing the Natural Way
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our clinic blends holistic homeopathic principles with personalized
            care to help you achieve lasting wellness.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-2 border-transparent hover:border-brand-green/20 hover:shadow-green-md transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} shadow-green-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl font-display">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* About Preview / Doctor Section */}
      <section className="bg-leaf-texture bg-brand-green-pale py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-gold/20 rounded-3xl blur-2xl" />
              <img
                src="/assets/generated/doctor-portrait.dim_600x700.jpg"
                alt="Dr. Ravi Verma - Chief Homeopathic Physician"
                className="relative rounded-3xl shadow-green-md w-full object-cover max-h-[520px]"
              />
              {/* Badge overlay */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-green-md p-4 flex items-center gap-3">
                <div className="h-12 w-12 bg-brand-gold rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    BHMS, MD (Hom)
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Board Certified
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
                <Leaf className="h-4 w-4" />
                Meet Our Expert
              </div>
              <h2 className="font-display text-4xl font-bold leading-tight">
                Dr. Ravi Verma
                <span className="block text-brand-green text-3xl mt-1">
                  Chief Homeopathic Physician
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 15 years of experience in classical homeopathy, Dr.
                Verma has helped thousands of patients find relief from chronic
                conditions. His patient-centered approach combines rigorous
                diagnosis with gentle, effective remedies.
              </p>
              <ul className="space-y-3">
                {[
                  "BHMS, MD Homeopathy from a recognized university",
                  "Specialist in chronic and acute disease management",
                  "Trained in constitutional homeopathy",
                  "Over 5,000 successful patient cases",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 shadow-green-sm font-semibold">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-20 md:py-28">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
            <Heart className="h-4 w-4" />
            Patient Stories
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Healing That Speaks for Itself
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-2 border-brand-green/10 hover:border-brand-green/30 hover:shadow-green-md transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className="flex gap-1"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                  <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                  <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                  <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                  <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="pt-2 border-t border-border">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-brand-green">{t.condition}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-green py-16">
        <div className="container text-center space-y-6">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Schedule a consultation today and discover the power of natural,
            personalized homeopathic care.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-green font-bold rounded-full px-10 text-base shadow-gold-sm transition-all"
            >
              <Leaf className="h-5 w-5 mr-2" />
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
