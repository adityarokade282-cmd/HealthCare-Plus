import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = [
  {
    title: 'Clinic',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Our Doctors', href: '#doctors' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'General Consultation', href: '#services' },
      { label: 'Family Medicine', href: '#services' },
      { label: 'Child Healthcare', href: '#services' },
      { label: 'Diabetes Consultation', href: '#services' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Book Appointment', href: '#appointment' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Patient Testimonials', href: '#testimonials' },
    ],
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="HealthCare Plus Clinic home">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-600 text-white">
                <HeartPulse className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">HealthCare Plus</span>
                <span className="text-xs font-medium text-primary-400">Clinic</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Compassionate care, trusted doctors, and better health for our community — every day.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800 text-slate-300 transition-all hover:bg-primary-600 hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} HealthCare Plus Clinic. All rights reserved. Placeholder content —
            replace with real clinic information.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-primary-600 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
