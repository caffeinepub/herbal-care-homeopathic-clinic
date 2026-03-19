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
  Activity,
  ArrowRight,
  Baby,
  Brain,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Homeopathy Consultation",
    description:
      "In-depth one-on-one consultation to understand your complete health history, constitution, and vital force. We identify the root cause, not just the symptoms.",
    highlights: [
      "60-min detailed assessment",
      "Constitutional analysis",
      "Personalized remedy selection",
    ],
  },
  {
    icon: FlaskConical,
    title: "Herbal Medicine",
    description:
      "Expertly formulated herbal preparations using sustainably sourced, potency-tested botanicals. Our in-house compounding ensures freshness and efficacy.",
    highlights: [
      "Custom herbal formulations",
      "Tinctures, teas & capsules",
      "No harmful additives",
    ],
  },
  {
    icon: Activity,
    title: "Chronic Disease Treatment",
    description:
      "Specialized protocols for managing and reversing chronic conditions including diabetes support, arthritis, hypertension, thyroid disorders, and autoimmune diseases.",
    highlights: [
      "Long-term management plans",
      "Regular follow-up care",
      "Symptom-free outcomes",
    ],
  },
  {
    icon: Droplets,
    title: "Skin & Hair Care",
    description:
      "Natural treatment for eczema, psoriasis, acne, alopecia, dandruff, and other skin-hair conditions that address internal imbalances causing external symptoms.",
    highlights: [
      "Eczema & psoriasis",
      "Acne & pigmentation",
      "Hair fall & alopecia",
    ],
  },
  {
    icon: Heart,
    title: "Digestive Health",
    description:
      "Effective homeopathic care for IBS, gastritis, colitis, acid reflux, constipation, and other digestive disorders. Restore your gut to optimal health naturally.",
    highlights: [
      "IBS & gastritis",
      "Acid reflux relief",
      "Constipation & bloating",
    ],
  },
  {
    icon: Baby,
    title: "Child Health",
    description:
      "Safe and gentle homeopathic treatment for children — from infants to teenagers. Addressing allergies, frequent infections, growth issues, behavioral concerns, and more.",
    highlights: [
      "Safe for all ages",
      "Allergies & infections",
      "Behavioral support",
    ],
  },
  {
    icon: Sparkles,
    title: "Women's Health",
    description:
      "Comprehensive care for menstrual disorders, PCOS, menopause symptoms, fertility support, and postpartum recovery. Gentle, hormone-free approaches for women's unique needs.",
    highlights: [
      "PCOS & menstrual care",
      "Fertility support",
      "Menopause management",
    ],
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description:
      "Holistic support for anxiety, depression, stress, sleep disorders, and emotional imbalances. Homeopathy works with your mind-body connection to restore emotional equilibrium.",
    highlights: [
      "Anxiety & depression",
      "Sleep disorders",
      "Stress management",
    ],
  },
];

const faqs = [
  {
    q: "Is homeopathy safe for children?",
    a: "Yes, homeopathic remedies are completely safe, non-toxic, and free from side effects — making them ideal for infants and children.",
  },
  {
    q: "How long does treatment take?",
    a: "Acute conditions may resolve in days to weeks. Chronic conditions typically require 3–12 months for lasting improvement.",
  },
  {
    q: "Can I take homeopathy alongside conventional medicine?",
    a: "Absolutely. Homeopathic remedies are complementary and do not interfere with conventional medications.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes, we provide teleconsultation for patients who cannot visit in person. Contact us to schedule.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-green py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute bottom-0 right-0 text-white text-[280px] leading-none">
            🌱
          </div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-brand-gold/20 text-brand-gold border-brand-gold/40 font-semibold tracking-wide">
              What We Offer
            </Badge>
            <h1 className="font-display text-5xl font-bold text-white sm:text-6xl leading-tight">
              Our Homeopathic
              <span className="block text-brand-gold">Treatment Services</span>
            </h1>
            <p className="text-lg text-white/75 md:text-xl leading-relaxed">
              From acute conditions to complex chronic diseases, we offer a full
              spectrum of natural, evidence-based homeopathic treatments for all
              ages.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-20 md:py-28">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
            <Leaf className="h-4 w-4" />
            All Services
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Comprehensive Natural Care
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every service is delivered with deep clinical expertise and a
            compassionate, personalized approach.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {services.map((service, i) => (
            <Card
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              className="border-2 border-transparent hover:border-brand-green/20 hover:shadow-green-md transition-all duration-300 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-brand-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-green-sm">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-display mb-1">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-brand-green flex-shrink-0" />
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link to="/contact">
                    <Button
                      variant="ghost"
                      className="text-brand-green hover:bg-brand-green-pale group/btn p-0 h-auto font-semibold text-sm"
                    >
                      Book This Service
                      <ArrowRight className="h-4 w-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-green-pale py-20 md:py-28">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
              <Activity className="h-4 w-4" />
              Our Process
            </div>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              How Your Treatment Works
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-brand-gold/30" />

            {[
              {
                step: "01",
                title: "Initial Consultation",
                desc: "Detailed case history, constitution analysis, and symptom review.",
              },
              {
                step: "02",
                title: "Custom Prescription",
                desc: "Personalized remedy selection based on your unique profile.",
              },
              {
                step: "03",
                title: "Treatment & Monitoring",
                desc: "Begin your healing regimen with regular check-ins and adjustments.",
              },
              {
                step: "04",
                title: "Lasting Wellness",
                desc: "Achieve symptom-free living and maintain your optimal health.",
              },
            ].map((s) => (
              <div key={s.step} className="relative text-center group">
                <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-white border-4 border-brand-gold shadow-gold-sm mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="font-display text-2xl font-bold text-brand-green">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
              <Leaf className="h-4 w-4" />
              Common Questions
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight">
              Frequently Asked
              <span className="block text-brand-green">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Have more questions? We're happy to answer them — get in touch
              with our team.
            </p>
            <Link to="/contact">
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 shadow-green-sm font-semibold">
                Contact Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card
                key={faq.q}
                className="border-2 border-brand-green/10 hover:border-brand-green/25 transition-all"
              >
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-16">
        <div className="container text-center space-y-6">
          <h2 className="font-display text-4xl font-bold text-white">
            Start Your Healing Today
          </h2>
          <p className="text-white/75 text-lg max-w-lg mx-auto">
            Schedule a consultation and let our expert physicians create a
            personalized treatment plan for you.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-green font-bold rounded-full px-10 shadow-gold-sm"
            >
              Book an Appointment
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
