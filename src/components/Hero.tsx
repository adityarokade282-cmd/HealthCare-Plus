import { CalendarCheck, Stethoscope, ShieldCheck, Award, Users } from 'lucide-react';

const highlights = [
  { icon: Award, title: 'Experienced Doctors', desc: 'A team of board-certified specialists you can trust.' },
  { icon: Users, title: 'Patient-Centered Care', desc: 'Every plan is tailored around your individual needs.' },
  { icon: ShieldCheck, title: 'Modern Facilities', desc: 'State-of-the-art equipment for accurate diagnosis.' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-primary-100 blur-3xl opacity-60" />
        <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-teal-100 blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(36,121,234,0.06),transparent_60%)]" />
      </div>

      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* Text column */}
        <div className="animate-fade-up">
          <span className="section-eyebrow">
            <Stethoscope className="h-3.5 w-3.5" />
            Trusted Healthcare, Close to Home
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your Health,
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-accent-500 bg-clip-text text-transparent">
              Our Priority
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Compassionate care, trusted doctors, and better health — all under one roof. At HealthCare Plus
            Clinic, we put your wellbeing at the heart of everything we do.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#appointment" className="btn-primary">
              <CalendarCheck className="h-4 w-4" />
              Book an Appointment
            </a>
            <a href="#services" className="btn-secondary">
              Explore Our Services
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
            {[
              { value: '25k+', label: 'Patients Served' },
              { value: '15+', label: 'Expert Doctors' },
              { value: '4.9', label: 'Patient Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-primary-700 sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-sm text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image column */}
        <div className="relative animate-fade-in lg:pl-8">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-200 via-teal-100 to-accent-100 opacity-70 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary-900/15 ring-1 ring-white/40">
              <img
                src="https://images.pexels.com/photos/18788957/pexels-photo-18788957.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Friendly doctor smiling in a bright clinic"
                className="h-[520px] w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-card ring-1 ring-slate-100 backdrop-blur sm:flex">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-50 text-accent-600">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">Quality Certified</p>
                <p className="text-xs text-slate-500">Accredited care standards</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-3 top-8 flex animate-float items-center gap-2 rounded-2xl bg-primary-600 px-4 py-3 text-white shadow-xl shadow-primary-600/30">
              <CalendarCheck className="h-5 w-5" />
              <span className="text-sm font-semibold">Same-day visits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="container-x pb-16">
        <div className="grid gap-5 rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100 sm:grid-cols-3 sm:p-8">
          {highlights.map((h) => (
            <div key={h.title} className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-600">
                <h.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-slate-900">{h.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
