import { CalendarCheck, ArrowRight } from 'lucide-react';
import { services } from '@/data/clinic';
import { useReveal } from '@/hooks/useReveal';

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="bg-slate-50/70 py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Medical Services</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Comprehensive care for every stage of life
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From everyday check-ups to specialized consultations, our services are designed to keep you
            and your family healthy and informed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.id}
              className="reveal group card-base overflow-hidden p-7 hover:-translate-y-1.5 hover:shadow-card-hover"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary-50 to-teal-50 text-primary-600 ring-1 ring-primary-100 transition-colors group-hover:from-primary-600 group-hover:to-teal-500 group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{service.description}</p>
              <a
                href="#appointment"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all hover:gap-2.5 hover:text-primary-700"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
