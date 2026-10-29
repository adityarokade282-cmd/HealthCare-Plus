import { CalendarCheck, GraduationCap, Briefcase } from 'lucide-react';
import { doctors } from '@/data/clinic';
import { useReveal } from '@/hooks/useReveal';

export default function Doctors() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="doctors" ref={ref} className="py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Meet Our Doctors</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Experienced specialists who truly listen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Our team brings decades of combined experience and a shared commitment to compassionate,
            personalized care.
          </p>
        </div>

        <p className="reveal mx-auto mt-5 max-w-xl text-center text-xs font-medium text-slate-400">
          Sample profiles shown below — names and details can be replaced with your real medical staff.
        </p>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <article
              key={doctor.id}
              className="reveal group card-base overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/5 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 backdrop-blur">
                  {doctor.specialization}
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display text-lg font-bold">{doctor.name}</h3>
                  <p className="text-xs text-primary-50">{doctor.department}</p>
                </div>
              </div>

              <div className="space-y-3 p-5">
                <div className="flex items-start gap-2.5 text-sm text-slate-600">
                  <GraduationCap className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary-500" />
                  <span>{doctor.qualifications}</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-600">
                  <Briefcase className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-500" />
                  <span>{doctor.experience} of experience</span>
                </div>
                <a href="#appointment" className="btn-secondary mt-2 w-full">
                  <CalendarCheck className="h-4 w-4" />
                  Book Appointment
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
