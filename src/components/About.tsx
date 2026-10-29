import { Target, Eye, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const reasons = [
  'Board-certified, compassionate doctors',
  'Patient-first approach to every visit',
  'Modern, well-equipped facilities',
  'Short wait times and flexible scheduling',
  'Transparent pricing with no hidden fees',
  'Confidential, respectful environment',
];

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Image */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-teal-100 to-primary-100 opacity-60 blur-2xl" />
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-100">
              <img
                src="https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&h=650&w=500"
                alt="Doctor consulting a patient"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-100">
                <img
                  src="https://images.pexels.com/photos/7108399/pexels-photo-7108399.jpeg?auto=compress&cs=tinysrgb&h=400&w=500"
                  alt="Modern clinic exam room"
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl bg-primary-600 p-5 text-white shadow-lg shadow-primary-600/25">
                <p className="font-display text-3xl font-extrabold">15+ yrs</p>
                <p className="mt-1 text-sm text-primary-50">serving our community with trusted care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="reveal order-1 lg:order-2" style={{ transitionDelay: '120ms' }}>
          <span className="section-eyebrow">About HealthCare Plus</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Caring for our community, one patient at a time
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            HealthCare Plus Clinic was founded on a simple belief: that everyone deserves access to
            compassionate, high-quality healthcare. From everyday consultations to preventive care, our
            experienced team is here to support you and your family at every stage of life.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-100">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">Our Mission</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                To deliver accessible, patient-centered care that improves the health and wellbeing of
                every person we serve.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-100">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-50 text-primary-600">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">Our Vision</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                To be the most trusted clinic in our community — known for excellence, compassion, and
                innovation in everyday care.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-slate-900">
              <HeartHandshake className="h-5 w-5 text-accent-600" />
              Why choose our clinic?
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
