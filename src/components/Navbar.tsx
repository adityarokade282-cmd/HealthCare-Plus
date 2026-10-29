import { useEffect, useState } from 'react';
import { Menu, X, HeartPulse, CalendarCheck } from 'lucide-react';
import { useScrolled } from '@/hooks/useReveal';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 shadow-soft backdrop-blur-md ring-1 ring-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Main">
        <a href="#home" className="flex items-center gap-2.5" aria-label="HealthCare Plus Clinic home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-600 text-white shadow-lg shadow-primary-600/30">
            <HeartPulse className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold text-slate-900">HealthCare Plus</span>
            <span className="text-xs font-medium text-primary-600">Clinic</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#appointment" className="btn-primary">
            <CalendarCheck className="h-4 w-4" />
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`absolute inset-x-0 top-20 origin-top rounded-b-3xl bg-white px-5 pb-6 pt-4 shadow-xl ring-1 ring-slate-100 transition-all duration-300 ${
            open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-primary-50 hover:text-primary-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
