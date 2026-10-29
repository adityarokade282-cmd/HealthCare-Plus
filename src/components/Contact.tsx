import { MapPin, Phone, Mail, Clock, MessageCircle, Siren } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Visit Us',
    lines: ['123 Wellness Avenue, Suite 200', 'Healthville, CA 90210'],
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+1 555 010 0000', 'Mon–Sat during opening hours'],
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['care@healthcareplus.example.com', 'We reply within one business day'],
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    lines: ['Mon–Fri: 8:00 AM – 8:00 PM', 'Sat: 9:00 AM – 5:00 PM', 'Sun: 10:00 AM – 2:00 PM'],
  },
];

const whatsappNumber = '15550100000';
const emergencyNumber = '911';

export default function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            We're here when you need us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Reach out with any questions, or visit us at our clinic. Placeholder contact details below —
            replace them with your real clinic information.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact details */}
          <div className="reveal space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {contactDetails.map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-100"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-50 text-primary-600">
                    <d.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-slate-900">{d.label}</h3>
                  <div className="mt-1.5 space-y-0.5">
                    {d.lines.map((line) => (
                      <p key={line} className="text-sm text-slate-500">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-accent-600 px-6 py-4 text-white shadow-lg shadow-accent-600/25 transition-all hover:-translate-y-0.5 hover:bg-accent-700"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-semibold">Chat with us on WhatsApp</span>
            </a>

            <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-100 text-red-600">
                <Siren className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-sm font-bold text-red-900">Medical Emergency?</h3>
                <p className="mt-1 text-sm leading-relaxed text-red-700">
                  For urgent medical emergencies, do not book an appointment. Call your local emergency
                  number ({emergencyNumber}) immediately or go to the nearest emergency department.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-100">
              <iframe
                title="HealthCare Plus Clinic location"
                src="https://www.google.com/maps?q=Wellness+Avenue+Healthville&output=embed"
                className="h-full w-full"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
