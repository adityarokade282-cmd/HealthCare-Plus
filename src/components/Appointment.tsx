import { useState, type FormEvent } from 'react';
import { CalendarCheck, CheckCircle2, AlertCircle, Loader2, CalendarDays, Clock } from 'lucide-react';
import { doctors, departments } from '@/data/clinic';
import { supabase } from '@/lib/supabase';

interface FormData {
  patient_name: string;
  mobile_number: string;
  email: string;
  doctor: string;
  department: string;
  preferred_date: string;
  preferred_time: string;
  reason_for_visit: string;
}

const empty: FormData = {
  patient_name: '',
  mobile_number: '',
  email: '',
  doctor: '',
  department: '',
  preferred_date: '',
  preferred_time: '',
  reason_for_visit: '',
};

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Appointment() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const today = new Date().toISOString().split('T')[0];

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.patient_name.trim()) next.patient_name = 'Please enter your name.';
    if (!form.mobile_number.trim()) next.mobile_number = 'Mobile number is required.';
    else if (!/^[0-9+\-\s()]{7,16}$/.test(form.mobile_number.trim()))
      next.mobile_number = 'Enter a valid phone number.';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Enter a valid email address.';
    if (!form.doctor) next.doctor = 'Please select a doctor.';
    if (!form.department) next.department = 'Please select a department.';
    if (!form.preferred_date) next.preferred_date = 'Choose a preferred date.';
    if (!form.preferred_time) next.preferred_time = 'Choose a preferred time.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function update<K extends keyof FormData>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;
    if (!validate()) return;

    setStatus('submitting');
    try {
      const payload = {
        patient_name: form.patient_name.trim(),
        mobile_number: form.mobile_number.trim(),
        email: form.email.trim() || null,
        doctor: form.doctor,
        department: form.department,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        reason_for_visit: form.reason_for_visit.trim() || null,
      };

      const { error } = await supabase.from('appointment_requests').insert(payload);
      if (error) throw error;

      setStatus('success');
      setForm(empty);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section id="appointment" className="relative overflow-hidden bg-slate-50/70 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-100 blur-3xl opacity-50" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-100 blur-3xl opacity-50" />
      </div>

      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left column */}
        <div className="reveal">
          <span className="section-eyebrow">Book an Appointment</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Schedule your visit in minutes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Fill out the form and our team will confirm your appointment shortly. Prefer to call? Reach us
            during opening hours — we're happy to help.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-slate-100">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-50 text-primary-600">
                <CalendarDays className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Flexible scheduling</p>
                <p className="text-xs text-slate-500">Mon–Fri: 8am–8pm, Sat: 9am–5pm</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-slate-100">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Quick confirmation</p>
                <p className="text-xs text-slate-500">Most requests answered within one business day</p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-medium text-amber-800">
              This is a demo booking form. Requests are saved securely but will not be confirmed by the clinic
              until this form is connected to a real scheduling workflow.
            </p>
          </div>
        </div>

        {/* Form column */}
        <div className="reveal" style={{ transitionDelay: '120ms' }}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card-base overflow-hidden p-6 sm:p-8"
            aria-label="Appointment request form"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-50 text-accent-600">
                  <CheckCircle2 className="h-9 w-9" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">Request received!</h3>
                <p className="mt-2 max-w-sm text-slate-600">
                  Thank you for booking with HealthCare Plus Clinic. Our team will reach out shortly to
                  confirm your appointment. This is a demo request — no live appointment has been scheduled.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-7"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <>
                {status === 'error' && (
                  <div className="mb-6 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-100">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p>
                      Something went wrong while submitting your request. Please try again in a moment, or call
                      us directly.
                    </p>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Patient Name" error={errors.patient_name} required>
                    <input
                      type="text"
                      value={form.patient_name}
                      onChange={(e) => update('patient_name', e.target.value)}
                      placeholder="Jane Doe"
                      className={inputClass(errors.patient_name)}
                      aria-required="true"
                    />
                  </Field>

                  <Field label="Mobile Number" error={errors.mobile_number} required>
                    <input
                      type="tel"
                      value={form.mobile_number}
                      onChange={(e) => update('mobile_number', e.target.value)}
                      placeholder="+1 555 010 0000"
                      className={inputClass(errors.mobile_number)}
                      aria-required="true"
                    />
                  </Field>

                  <Field label="Email Address" error={errors.email} hint="Optional">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="jane@example.com"
                      className={inputClass(errors.email)}
                    />
                  </Field>

                  <Field label="Select Department" error={errors.department} required>
                    <select
                      value={form.department}
                      onChange={(e) => update('department', e.target.value)}
                      className={inputClass(errors.department)}
                      aria-required="true"
                    >
                      <option value="">Choose a department</option>
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Select Doctor" error={errors.doctor} required>
                    <select
                      value={form.doctor}
                      onChange={(e) => update('doctor', e.target.value)}
                      className={inputClass(errors.doctor)}
                      aria-required="true"
                    >
                      <option value="">Choose a doctor</option>
                      {doctors.map((d) => (
                        <option key={d.id} value={d.name}>{d.name} — {d.specialization}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Preferred Date" error={errors.preferred_date} required>
                    <input
                      type="date"
                      min={today}
                      value={form.preferred_date}
                      onChange={(e) => update('preferred_date', e.target.value)}
                      className={inputClass(errors.preferred_date)}
                      aria-required="true"
                    />
                  </Field>

                  <Field label="Preferred Time" error={errors.preferred_time} required>
                    <select
                      value={form.preferred_time}
                      onChange={(e) => update('preferred_time', e.target.value)}
                      className={inputClass(errors.preferred_time)}
                      aria-required="true"
                    >
                      <option value="">Choose a time slot</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Reason for Visit" error={errors.reason_for_visit} hint="Optional">
                      <textarea
                        rows={3}
                        value={form.reason_for_visit}
                        onChange={(e) => update('reason_for_visit', e.target.value)}
                        placeholder="Briefly describe your symptoms or reason for the visit"
                        className={inputClass(errors.reason_for_visit)}
                      />
                    </Field>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CalendarCheck className="h-4 w-4" />
                      Submit Appointment Request
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
    error
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-slate-200 focus:border-primary-400 focus:ring-primary-100'
  }`;
}

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}

function Field({ label, error, required, hint, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="text-primary-600" aria-hidden="true">*</span>}
        {hint && <span className="text-xs font-normal text-slate-400">({hint})</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </span>
      )}
    </label>
  );
}
