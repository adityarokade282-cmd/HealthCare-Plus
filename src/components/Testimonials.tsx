import { Star, Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Patient',
    photo: 'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'The doctors at HealthCare Plus took the time to really listen. I never felt rushed and left with a clear plan. This is how healthcare should feel.',
  },
  {
    name: 'James L.',
    role: 'Parent',
    photo: 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'We took our daughter in for her checkup and the staff was wonderful with her. Patient, kind, and professional from start to finish.',
  },
  {
    name: 'Aisha K.',
    role: 'Patient',
    photo: 'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'Booking was effortless and the doctor explained my results clearly. I finally feel like I have a clinic I can trust for the long run.',
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="testimonials" ref={ref} className="py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Patient Testimonials</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            What our patients say about us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Real experiences from people we've had the privilege to care for.
          </p>
          <p className="mt-3 text-xs font-medium text-slate-400">
            Sample testimonials shown below — these can be replaced with verified patient reviews.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal card-base flex flex-col p-7 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="h-10 w-10 text-primary-100" />
              <div className="mt-3 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
