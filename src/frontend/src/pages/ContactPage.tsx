import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Leaf,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate sending
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-green py-20 md:py-28 overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-10 text-white text-[280px] leading-none pointer-events-none select-none">
          🌿
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-brand-gold/20 text-brand-gold border-brand-gold/40 font-semibold tracking-wide">
              Get in Touch
            </Badge>
            <h1 className="font-display text-5xl font-bold text-white sm:text-6xl leading-tight">
              Begin Your Journey
              <span className="block text-brand-gold">to Natural Healing</span>
            </h1>
            <p className="text-lg text-white/75 md:text-xl">
              Reach out to us for appointments, inquiries, or to learn how
              homeopathic treatment can help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <div className="mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-widest">
                <Leaf className="h-4 w-4" />
                Book Appointment
              </div>
              <h2 className="font-display text-3xl font-bold">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                We'll respond within 24 hours on working days.
              </p>
            </div>

            {isSuccess ? (
              <Card
                data-ocid="contact.form.success_state"
                className="border-2 border-brand-green/30 bg-brand-green-pale"
              >
                <CardContent className="p-10 text-center space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-white mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-green">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours to confirm your appointment.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 shadow-green-sm font-semibold"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-brand-green/15 shadow-green-sm">
                <CardContent className="p-8">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="font-semibold text-foreground"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        data-ocid="contact.form.input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="border-2 border-border focus:border-brand-green transition-colors"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="font-semibold text-foreground"
                        >
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          data-ocid="contact.form.email.input"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className="border-2 border-border focus:border-brand-green transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="font-semibold text-foreground"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          data-ocid="contact.form.phone.input"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          className="border-2 border-border focus:border-brand-green transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="font-semibold text-foreground"
                      >
                        Message / Symptoms{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        data-ocid="contact.form.textarea"
                        placeholder="Briefly describe your health concern or the appointment you'd like to book..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-2 border-border focus:border-brand-green transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-destructive text-sm font-medium">
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      data-ocid="contact.form.submit_button"
                      disabled={isSubmitting}
                      className="w-full bg-brand-green hover:bg-brand-green/90 text-white rounded-full font-bold shadow-green-sm transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Leaf className="h-5 w-5 mr-2" />
                          Book Appointment
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Clinic Info */}
            <Card className="border-2 border-brand-green/15 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-brand-green to-brand-green-light" />
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  Clinic Information
                </CardTitle>
                <CardDescription>
                  Visit or reach us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green flex-shrink-0 shadow-green-sm">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Herbal Care Homeopathic Clinic
                      <br />
                      Main Street, Near City Hospital
                      <br />
                      City, State — 000000, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green flex-shrink-0 shadow-green-sm">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-brand-green transition-colors"
                      >
                        +91 98765 43210
                      </a>
                      <br />
                      <a
                        href="tel:+919876543211"
                        className="hover:text-brand-green transition-colors"
                      >
                        +91 98765 43211
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green flex-shrink-0 shadow-green-sm">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <a
                        href="mailto:info@herbalcare.com"
                        className="hover:text-brand-green transition-colors"
                      >
                        info@herbalcare.com
                      </a>
                      <br />
                      <a
                        href="mailto:appointments@herbalcare.com"
                        className="hover:text-brand-green transition-colors"
                      >
                        appointments@herbalcare.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="border-2 border-brand-gold/30 bg-brand-gold/5">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold shadow-gold-sm flex-shrink-0">
                    <Clock className="h-5 w-5 text-brand-green" />
                  </div>
                  <CardTitle className="font-display text-xl">
                    Working Hours
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    day: "Monday – Friday",
                    hours: "9:00 AM – 7:00 PM",
                    open: true,
                  },
                  { day: "Saturday", hours: "9:00 AM – 5:00 PM", open: true },
                  { day: "Sunday", hours: "10:00 AM – 2:00 PM", open: true },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground/70 font-medium">
                      {item.day}
                    </span>
                    <span
                      className={`font-semibold ${item.open ? "text-brand-green" : "text-muted-foreground"}`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-brand-green-pale rounded-lg border border-brand-green/20">
                  <p className="text-xs text-brand-green font-semibold text-center">
                    🕐 Emergency consultations available on WhatsApp
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social */}
            <Card className="border-2 border-brand-green/15">
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-xl">
                  Follow Us
                </CardTitle>
                <CardDescription>
                  Stay connected for health tips and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted hover:bg-brand-green hover:text-white text-foreground/70 transition-all border-2 border-border"
                    aria-label="Facebook"
                  >
                    <SiFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted hover:bg-brand-green hover:text-white text-foreground/70 transition-all border-2 border-border"
                    aria-label="Instagram"
                  >
                    <SiInstagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick CTA */}
            <div className="bg-brand-green rounded-2xl p-6 text-white space-y-3">
              <h3 className="font-display text-xl font-bold">
                Prefer to call directly?
              </h3>
              <p className="text-white/75 text-sm">
                Our reception team is available during working hours to book
                your appointment.
              </p>
              <a href="tel:+919876543210">
                <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-green font-bold rounded-full shadow-gold-sm w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now: +91 98765 43210
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-brand-green-pale flex items-center justify-center border-t border-brand-green/15">
        <div className="text-center space-y-2">
          <MapPin className="h-8 w-8 text-brand-green mx-auto" />
          <p className="text-brand-green font-semibold font-display">
            Find Us on the Map
          </p>
          <p className="text-muted-foreground text-sm">
            Main Street, Near City Hospital, India
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-brand-green/30 text-brand-green hover:bg-brand-green-pale mt-2"
            >
              Open in Google Maps
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
