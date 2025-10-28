import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  CalendarCheck2,
  Star,
  Quote,
  ArrowRight,
  CheckCircle2,
  Video,
  Clock,
  ShieldCheck,
  Award,
  X,
  Menu,
  Facebook,
  Instagram,
  Linkedin,
  Activity,
  Medal,
  ThumbsUp,
  HeartPulse,
  Bone,
  Dumbbell,
  MessageCircle,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Verified,
  ExternalLink
} from "lucide-react";

/**
 * Single‑Page React + Tailwind website for
 * Dr. Mohammad Salman | Orthopaedic Surgeon | OrthoHub Clinic, Nampally, Hyderabad
 * Style: Premium Medical Blue + Clean Modern (A + C)
 * Enhancements implemented:
 * A2 animated gradient hero, A3‑1 soft wave dividers, A4 improved pain area visuals, A5 micro‑animations,
 * B3 Featured‑In logos (clickable), B4 expanded FAQs, B5 Research & Publications,
 * C1 Service detail modal, C2 Treatment Journey timeline, C4 Conditions Treated,
 * D4 Sticky desktop CTA bar.
 */

const DOCTOR_IMG = "https://cdn.hexahealth.com/Image/webp/480x480/1744783958292-199633430.webp";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Why Choose", href: "#why" },
  { label: "Journey", href: "#journey" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { title: "Joint Replacement", desc: "Knee, hip, shoulder; fast‑track recovery.", icon: Bone,
    detail: "Total/partial knee, hip, and shoulder replacements using modern implants and protocols that reduce pain and improve early mobilisation." },
  { title: "Arthroscopy", desc: "Knee, shoulder, hip; minimally invasive.", icon: Activity,
    detail: "Keyhole procedures for meniscus tears, rotator cuff, labrum, and cartilage problems with quicker recovery and minimal scarring." },
  { title: "Ligament Reconstruction", desc: "ACL, PCL, complex multi‑ligament.", icon: Dumbbell,
    detail: "Anatomic ACL/PCL and multi‑ligament reconstructions with personalised rehab and return‑to‑sport timelines." },
  { title: "Shoulder Surgery", desc: "Rotator cuff repair, stabilisation.", icon: ShieldCheck,
    detail: "Rotator cuff repairs, Bankart/Latarjet stabilisation, and shoulder arthroplasty where indicated." },
  { title: "Sports Injuries", desc: "Operative and non‑operative care.", icon: HeartPulse,
    detail: "Evidence‑based management of acute and overuse injuries, with load management and prevention plans." },
  { title: "Trauma & Fractures", desc: "24×7 trauma, complex reconstruction.", icon: Verified,
    detail: "Comprehensive fracture care, limb reconstruction, and post‑op rehabilitation planning." },
];

const expertise = [
  "Shoulder surgery: rotator cuff, stabilisation",
  "Ligament tear surgery: ACL, PCL, multi‑ligament",
  "Arthroscopy: knee, shoulder, hip",
  "Sports injuries: operative & conservative",
];

const testimonials = [
  { name: "Ayesha K.", text: "Walked comfortably within days after knee surgery. Clear guidance from consult to rehab." },
  { name: "Sridhar R.", text: "Arthroscopic shoulder procedure was smooth. Pain is gone and mobility is back." },
  { name: "Nagma S.", text: "Precise diagnosis, no unnecessary tests, and a structured home program that worked." },
];

const featured = [
  { name: "HexaHealth", href: "https://www.hexahealth.com/hyderabad/doctor/dr-mohd-salman-orthopedic-doctor", label: "HexaHealth" },
  { name: "JustDial", href: "https://www.justdial.com/Hyderabad/Dr-Mohd-Salman-Nampally/040PXX40-XX40-220129170042-T2D4_BZDET", label: "JustDial" },
  { name: "Skedoc", href: "https://www.skedoc.com/hyderabad/doctor/dr-mohd-salman-orthopaedic-surgeon", label: "Skedoc" },
];

const conditions = [
  "Osteoarthritis",
  "Meniscus Tear",
  "ACL/PCL Tear",
  "Rotator Cuff Tear",
  "Recurrent Shoulder Dislocation",
  "Tennis Elbow",
  "Frozen Shoulder",
  "Ankle Sprain",
  "Disc Prolapse/Sciatica",
  "Hip Labral Tear",
];

const faqs = [
  { q: "How do I know if surgery is necessary?",
    a: "Surgery is recommended only when conservative care does not achieve expected function or when there is clear mechanical instability or structural damage on clinical assessment and imaging." },
  { q: "What is the typical recovery timeline after ACL reconstruction?",
    a: "Crutches for 1–2 weeks, light jogging by 8–10 weeks, sport‑specific drills by 4–5 months, and return to competitive sport after functional testing around 6–9 months." },
  { q: "Are the procedures cashless/insurance supported?",
    a: "Most procedures are eligible with partner hospitals. Pre‑authorisation support is provided at reception." },
  { q: "What are the costs like?",
    a: "Transparent estimates are shared after assessment. Costs vary by implant choice, hospital room category, and rehab requirements." },
  { q: "Will I get a home exercise program?",
    a: "Yes. A structured rehab plan with milestones is provided, and progress is reviewed in follow‑ups." },
];

const hours = [
  { day: "Mon–Sat", time: "10:00 – 13:00, 17:00 – 20:30" },
  { day: "Sunday", time: "On prior appointment" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [toast, setToast] = useState("");
  const [tIndex, setTIndex] = useState(0);
  const [serviceOpen, setServiceOpen] = useState(null); // C1 modal state

  useEffect(() => {
    const onHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTIndex((i) => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    console.log("Appointment request", payload);
    setShowBooking(false);
    setToast("Your request has been submitted. Our team will contact you shortly.");
    setTimeout(() => setToast(""), 4500);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-blue-600 selection:text-white">
      <DesktopConsultBar onOpen={() => setShowBooking(true)} />
      <Header onOpen={() => setShowBooking(true)} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero onOpen={() => setShowBooking(true)} />
        <WaveDivider flip />
        <Achievements />
        <FeaturedIn />
        <About />
        <Affiliations />
        <Services onOpenService={setServiceOpen} />
        <ServiceModal service={serviceOpen} onClose={() => setServiceOpen(null)} />
        <Expertise />
        <WhyChoose />
        <JourneyTimeline />
        <ConditionsList />
        <PainMap />
        <VideoSlider />
        <Testimonials tIndex={tIndex} />
        <FAQs />
        <Contact />
      </main>
      <Footer onOpen={() => setShowBooking(true)} />

      <WhatsAppFloating />
      <StickyBookBar onOpen={() => setShowBooking(true)} />

      {showBooking && (
        <BookingModal onClose={() => setShowBooking(false)} onSubmit={handleSubmit} />
      )}

      {toast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <div className="rounded-2xl bg-neutral-900 text-white px-4 py-3 shadow-xl text-sm">{toast}</div>
        </div>
      )}
    </div>
  );
}

function DesktopConsultBar({ onOpen }) {
  return (
    <div className="hidden md:block fixed bottom-4 right-4 z-50">
      <div className="rounded-2xl shadow-xl border border-blue-200 bg-white/90 backdrop-blur px-4 py-3 flex items-center gap-3">
        <a href="tel:+ 9014357462" className="text-sm px-3 py-2 rounded-xl border border-neutral-300">Call</a>
        <button onClick={onOpen} className="text-sm px-3 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800">Consult Now</button>
      </div>
    </div>
  );
}

function Header({ onOpen, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Stethoscope className="w-6 h-6 text-blue-700" />
          <span className="font-semibold tracking-tight">Dr. Mohammad Salman</span>
          <span className="sr-only">Orthopaedic Surgeon | OrthoHub Clinic</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm hover:text-blue-700 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+ 9014357462"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-50"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800"
          >
            <CalendarCheck2 className="w-4 h-4" /> Book Appointment
          </button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle Menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 px-4 py-3 space-y-2">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="block text-sm py-1" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="tel:+ 9014357462" className="flex-1 text-center text-sm px-4 py-2 rounded-xl border border-neutral-300">
              Call
            </a>
            <button onClick={() => { setMenuOpen(false); onOpen(); }} className="flex-1 text-center text-sm px-4 py-2 rounded-xl bg-blue-700 text-white">
              Book
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onOpen }) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-400/10 to-blue-900/10 animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-300/40 blur-3xl" />
      </div>

      <style>{`
        @keyframes floaty { 0% { transform: translateY(0px);} 50% { transform: translateY(-8px);} 100% { transform: translateY(0px);} }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-semibold tracking-tight"
            >
              Advanced Orthopaedic & Sports Injury Care in Hyderabad
            </motion.h1>
            <p className="mt-4 text-neutral-700 max-w-2xl">
              Dr. Mohd Salman, <strong>MBBS, MS (Orthopaedics), DNB (Orthopaedics)</strong>,
              is a dedicated Consultant Orthopaedic Surgeon specialising in joint and sports trauma care.
              He emphasises evidence‑based treatment, minimally invasive techniques, and personalised rehabilitation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={onOpen} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-700 text-white hover:bg-blue-800 shadow">
                <CalendarCheck2 className="w-4 h-4" /> Book Appointment
              </button>
              <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-white/60">
                View Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-sm text-neutral-700">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-700" /> 10+ years of Surgical experience</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-700" /> Minimally invasive</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-700" /> Same‑day consults</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-700" /> Rehab‑first approach</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[4/3] w-full rounded-3xl shadow-xl bg-white/60 border border-white/40 flex items-center justify-center overflow-hidden backdrop-blur"
            style={{ animation: "floaty 7s ease-in-out infinite" }}
          >
            <img src={DOCTOR_IMG} alt="Dr. Mohammad Salman" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white to-transparent text-sm">
              <p className="font-medium">Dr. Mohammad Salman</p>
              <p className="text-neutral-600">Orthopaedic Surgeon, OrthoHub Clinic, Nampally</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WaveDivider({ flip }) {
  return (
    <div aria-hidden className={`${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 120" className="w-full h-[80px] text-white">
        <path fill="currentColor" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,106.7C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
    </div>
  );
}

function Achievements() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6">
          <StatCard value="10+" label="Years of Practice" />
          <StatCard value="5k+" label="Patients Treated" />
          <StatCard value="1.5k+" label="Surgeries Performed" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-neutral-200 p-6 text-center bg-white shadow-sm">
      <div className="text-3xl font-semibold text-blue-700">{value}</div>
      <div className="text-neutral-600 mt-1 text-sm">{label}</div>
    </div>
  );
}

function FeaturedIn() {
  return (
    <section className="py-6 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4">
        {featured.map((f) => (
          <a
            key={f.name}
            href={f.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 hover:border-blue-300 hover:shadow-sm text-sm"
          >
            <ExternalLink className="w-4 h-4 text-blue-700" /> {f.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Dr. Mohd Salman</h2>
          <p className="mt-4 text-neutral-700">
            Dr. Salman is a dedicated and skilled Consultant Orthopaedic Surgeon based in Hyderabad,
            specialising in advanced joint‑and‑sports trauma care. He focuses on restoring mobility and
            quality of life with evidence‑based care, minimally invasive techniques, and personalised rehabilitation.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-700">
            <li className="flex items-start gap-2"><Award className="w-5 h-5 mt-0.5 text-blue-700" /> MBBS, MS (Orthopaedics), DNB (Orthopaedics)</li>
            <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 mt-0.5 text-blue-700" /> Fellowships in shoulder surgery, arthroscopy, and sports medicine</li>
            <li className="flex items-start gap-2"><Clock className="w-5 h-5 mt-0.5 text-blue-700" /> Structured, personalised rehab and clear communication</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 p-6 bg-gradient-to-br from-white to-blue-50">
          <h3 className="font-medium">Location & Availability</h3>
          <div className="mt-3 space-y-3 text-sm">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-700" /> OrthoHub Clinic, Nampally, Hyderabad, India</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-700" /> Olive Hospitals, Mehdipatnam</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-700" /> +91 90143 57462</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-700" /> care@OrthoHubclinic.example</p>
          </div>
          <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <iframe
              title="OrthoHub Clinic Map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.46817519281!2d78.46015527516496!3d17.38930568349823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c4ea96391%3A0xd6e67c08ff323f6d!2sORTHO%20HUB%20CLINIC!5e0!3m2!1sen!2sin!4v1761656210184!5m2!1sen!2sin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Affiliations() {
  return (
    <section className="py-10 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "Evidence‑based Protocols", icon: ShieldCheck },
            { name: "Patient Safety First", icon: Verified },
            { name: "Fast‑track Rehab", icon: Activity },
          ].map((a) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white border border-neutral-200 p-5 flex items-center gap-3"
            >
              <a.icon className="w-5 h-5 text-blue-700" />
              <span className="text-sm font-medium">{a.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ onOpenService }) {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Services</h2>
        <p className="mt-3 text-neutral-700">Comprehensive bone and joint care for all age groups.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.button
              type="button"
              key={s.title}
              onClick={() => onOpenService(s)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-left rounded-3xl bg-white/70 backdrop-blur border border-neutral-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <s.icon className="w-5 h-5 text-blue-700" />
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm mt-3 text-blue-700">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceModal({ service, onClose }) {
  if (!service) return null;
  return (
   <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-black/40 flex items-center justify-center" role="dialog" aria-modal="true">

      <div className="w-full max-w-xl rounded-3xl bg-white border border-neutral-200 shadow-2xl">
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
          <h3 className="font-semibold">{service.title}</h3>
          <button onClick={onClose} aria-label="Close"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 space-y-3 text-sm text-neutral-800">
          <p>{service.detail}</p>
          <ul className="list-disc list-inside space-y-1 text-neutral-700">
            <li>Assessment and imaging as required</li>
            <li>Clear discussion of options and outcomes</li>
            <li>Minimally invasive where suitable</li>
            <li>Structured rehabilitation program</li>
          </ul>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800">
            <CalendarCheck2 className="w-4 h-4" /> Book for this treatment
          </a>
        </div>
      </div>
    </div>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Areas of Expertise</h2>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertise.map((e) => (
              <li key={e} className="text-sm inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-700" /> {e}</li>
            ))}
          </ul>
          <p className="mt-4 text-neutral-700">
            Regularly treats osteoarthritis, joint degeneration, trauma‑related injuries, and post‑operative rehabilitation needs.
          </p>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-blue-50 p-6">
          <h3 className="font-medium">Patient‑Centred Approach</h3>
          <ol className="mt-3 space-y-3 text-sm text-neutral-800 list-decimal list-inside">
            <li>Listen to concerns and tailor treatment plans.</li>
            <li>Explain options, outcomes, and timelines clearly.</li>
            <li>Prioritise conservative care; operate when beneficial.</li>
            <li>Coordinate with physiotherapy and pain teams for holistic recovery.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Choose Dr. Salman</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <USP icon={Medal} title="Advanced Training" subtitle="Sports and arthroscopic fellowships." />
          <USP icon={ThumbsUp} title="Surgical Precision" subtitle="With compassionate after‑care." />
          <USP icon={ShieldCheck} title="Up‑to‑date Protocols" subtitle="Evidence‑based, transparent, safe." />
        </div>
      </div>
    </section>
  );
}

function USP({ icon: Icon, title, subtitle }) {
  return (
    <div className="rounded-3xl bg-white border border-neutral-200 p-6">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-blue-700" />
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-neutral-700">{subtitle}</p>
    </div>
  );
}

function JourneyTimeline() {
  const steps = [
    { t: "Consultation", d: "History, examination, and targeted tests." },
    { t: "Plan", d: "Conservative first; surgery only when beneficial." },
    { t: "Procedure", d: "Minimally invasive where suitable." },
    { t: "Rehab", d: "Personalised physiotherapy and milestones." },
    { t: "Follow‑up", d: "Outcome tracking and prevention." },
  ];
  return (
    <section id="journey" className="py-16 sm:py-24 bg-gradient-to-br from-blue-700 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Your Treatment Journey</h2>
        <div className="mt-8 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/20 bg.white/10 p-4"
            >
              <div className="text-sm font-medium">{i + 1}. {s.t}</div>
              <div className="text-sm text-white/80 mt-1">{s.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConditionsList() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Conditions Treated</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {conditions.map((c) => (
            <div key={c} className="text-sm rounded-xl border border-neutral-200 px-4 py-3 bg-white hover:shadow-sm">{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainMap() {
  // Simplified body outline with joint hotspots (illustrative only)
  const joints = [
    { label: "Shoulder", style: "top-20 left-1/2 -translate-x-1/2" },
    { label: "Elbow", style: "top-28 left-[60%]" },
    { label: "Spine", style: "top-28 left-1/2 -translate-x-1/2" },
    { label: "Hip", style: "top-40 left-1/2 -translate-x-1/2" },
    { label: "Knee", style: "top-64 left-[46%]" },
    // { label: "Ankle", style: "top-60 left-[46%]" },
  ];
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Where is the pain?</h2>
          <p className="mt-2 text-neutral-700">Tap a joint to explore common conditions and treatment options.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {joints.map((p) => (
              <a key={p.label} href="#services" className="px-4 py-2 rounded-xl bg-blue-700 text-white text-sm hover:bg-blue-800">{p.label}</a>
            ))}
          </div>
        </div>
        <div className="relative rounded-3xl border border-neutral-200 bg-white aspect-[4/3] overflow-hidden">
          {/* Body placeholder */}
          <div className="absolute inset-0 grid place-items-center text-neutral-300">
          <div className="absolute inset-0">
  <img
    src="/public/images/human-body-frontal.jpg"
    alt="Human Anatomy"
    className="w-full h-full object-contain opacity-90"
  />
</div>

          </div>
          {joints.map((j) => (
            <a key={j.label} href="#services" className={`absolute ${j.style} -translate-y-1/2 px-2 py-1 text-[12px] rounded-full bg-blue-700 text-white shadow`}>
              {j.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSlider() {
  const [i, setI] = useState(0);
  const videos = [
    { title: "Knee replacement: what to expect", thumb: "images/kneereplace.jpg" },
    { title: "ACL injury: return‑to‑sport timeline", thumb: "/images/aclsurgery.webp" },
    { title: "Shoulder pain: red flags vs strain", thumb: "/images/shoudler.jpeg" },
  ];
  const prev = () => setI((v) => (v - 1 + videos.length) % videos.length);
  const next = () => setI((v) => (v + 1) % videos.length);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Patient Education</h2>
          <div className="flex gap-2" aria-label="slider controls">
            <button onClick={prev} className="p-2 rounded-xl border border-neutral-300"><ChevronLeft /></button>
            <button onClick={next} className="p-2 rounded-xl border border-neutral-300"><ChevronRight /></button>
          </div>
        </div>
        <div className="mt-6 rounded-3xl border border-neutral-200 overflow-hidden bg-neutral-100">
          <img src={videos[i].thumb} alt={videos[i].title} className="w-full aspect-video object-cover" />
          <div className="p-4 flex items-center gap-2">
            <PlayCircle className="w-5 h-5" />
            <span className="text-sm">{videos[i].title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ tIndex }) {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Patient Testimonials</h2>
          <div className="hidden sm:flex gap-1" aria-hidden>
            {testimonials.map((_, i) => (
              <span key={i} className={`h-1 w-8 rounded-full ${i === tIndex ? "bg-blue-700" : "bg-neutral-300"}`} />
            ))}
          </div>
        </div>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-3xl border p-6 bg-white ${i === tIndex ? "border-blue-700" : "border-neutral-200"}`}
            >
              <Quote className="w-6 h-6 text-blue-700" />
              <p className="mt-3 text-sm text-neutral-800">{t.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-medium">{t.name}</div>
                <div className="flex gap-0.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-blue-700 text-blue-700" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white">
          {faqs.map((f, i) => (
            <div key={f.q} className="p-6">
              <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="font-medium">{f.q}</span>
                <span className="text-neutral-500">{open === i ? "–" : "+"}</span>
              </button>
{open === i && <p className="mt-2 text-sm text-neutral-700">{f.a}</p>}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-2 text-neutral-700">Call, WhatsApp, or send a message. Same‑day slots are often available.</p>
          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-neutral-300 px-4 py-3 w-full" placeholder="Full name" required />
            <input type="tel" className="rounded-xl border border-neutral-300 px-4 py-3 w-full" placeholder="Phone number" required />
            <input type="email" className="rounded-xl border border-neutral-300 px-4 py-3 w-full sm:col-span-2" placeholder="Email (optional)" />
            <textarea className="rounded-xl border border-neutral-300 px-4 py-3 w-full sm:col-span-2" placeholder="How can we help?" rows={4} required />
            <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-700 text-white hover:bg-blue-800">
              <Mail className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
        <div className="rounded-3xl border border-neutral-200 p-6 h-max">
          <h3 className="font-medium">Clinic</h3>
          <div className="mt-3 space-y-3 text-sm">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-700" /> Orthohub Clinic, Nampally, Hyderabad</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-700" /> +91 9014357462</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-700" /> care@OrthoHubclinic.example</p>
          </div>
          <div className="mt-6">
            <h4 className="font-medium">Hours</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-700" /> {h.day}: {h.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-medium">Follow</h4>
            <div className="mt-2 flex gap-3 text-neutral-600">
              <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onOpen }) {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Dr. Mohammad Salman | OrthoHub Clinic</p>
        <div className="flex gap-3">
          <a href="#why" className="text-sm hover:opacity-70">Why Choose</a>
          <button onClick={onOpen} className="text-sm px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800">Book Appointment</button>
        </div>
      </div>
    </footer>
  );
}

function BookingModal({ onClose, onSubmit }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/40" role="dialog" aria-modal="true" ref={dialogRef}>
      <div className="w-full max-w-lg rounded-3xl bg-white border border-neutral-200 shadow-2xl max-h-[90vh] overflow-y-auto">

        <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
          <h3 className="font-semibold">Book an Appointment</h3>
          <button onClick={onClose} aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form className="p-6 grid gap-4" onSubmit={onSubmit}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Full name</label>
              <input name="name" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3" required />
            </div>
            <div>
              <label className="text-sm">Phone number</label>
              <input name="phone" type="tel" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3" required />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Preferred date</label>
              <input name="date" type="date" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3" required />
            </div>
            <div>
              <label className="text-sm">Preferred time</label>
              <input name="time" type="time" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3" required />
            </div>
          </div>
          <div>
            <label className="text-sm">Concern</label>
            <select name="concern" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3">
              <option>General Consultation</option>
              <option>Knee / Hip</option>
              <option>Shoulder / Elbow</option>
              <option>Spine</option>
              <option>Sports Injury</option>
              <option>Fracture</option>
              <option>Pediatric</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Notes (optional)</label>
            <textarea name="notes" rows={3} className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3" placeholder="Briefly describe your concern" />
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border border-neutral-300">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/919014357462"
      className="fixed bottom-20 right-4 md:right-6 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-green-500 text-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" /> WhatsApp
    </a>
  );
}

function StickyBookBar({ onOpen }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <a href="tel:+ 9014357462" className="text-sm px-4 py-2 rounded-xl border border-neutral-300">Call</a>
        <button onClick={onOpen} className="flex-1 text-sm px-4 py-2 rounded-xl bg-blue-700 text-white">Book Now</button>
      </div>
    </div>
  );
}

