import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    q: 'How do I book an appointment?',
    a: 'You can request an appointment through the booking form on this page, or call us during opening hours. Our team will confirm your slot shortly after we receive your request.',
  },
  {
    q: 'Do I need to bring anything to my first visit?',
    a: 'Please bring a valid photo ID, your insurance card if applicable, a list of any current medications, and any recent medical records or test results relevant to your visit.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We are open Monday to Friday from 8:00 AM to 8:00 PM, Saturdays from 9:00 AM to 5:00 PM, and Sundays from 10:00 AM to 2:00 PM for limited services.',
  },
  {
    q: 'Do you treat children?',
    a: 'Yes. We offer dedicated child healthcare services including vaccinations, growth monitoring, and general pediatric consultations for children of all ages.',
  },
  {
    q: 'Is the clinic accessible for patients with disabilities?',
    a: 'Absolutely. Our facility is fully wheelchair accessible, with designated parking, ramps, and accessible restrooms to ensure a comfortable visit for everyone.',
  },
  {
    q: 'What should I do in a medical emergency?',
    a: 'For urgent medical emergencies, please call your local emergency number (such as 911) or go to the nearest emergency department immediately. Do not wait for an appointment.',
  },
];

export default function FAQ() {
  const ref = useReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="bg-slate-50/70 py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <span className="section-eyebrow">Frequently Asked Questions</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Questions? We've got answers
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Here are some of the most common questions our patients ask. Can't find what you're looking for?
            Reach out to our friendly team any time.
          </p>
          <a href="#contact" className="btn-secondary mt-7">
            Contact us
          </a>
        </div>

        <div className="reveal space-y-3" style={{ transitionDelay: '100ms' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-100"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-slate-900">{faq.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-50 text-primary-600">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden px-6 text-sm leading-relaxed text-slate-600">
                    <span className="block pb-5">{faq.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
