import {
  Stethoscope,
  Users,
  Baby,
  Droplet,
  HeartPulse,
  ShieldPlus,
  Microscope,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'general-consultation',
    icon: Stethoscope,
    title: 'General Consultation',
    description:
      'Comprehensive check-ups and everyday medical advice from experienced general practitioners for patients of all ages.',
  },
  {
    id: 'family-medicine',
    icon: Users,
    title: 'Family Medicine',
    description:
      'Ongoing, whole-family care that builds lasting relationships and keeps every member of your household healthy.',
  },
  {
    id: 'child-healthcare',
    icon: Baby,
    title: 'Child Healthcare',
    description:
      'Vaccinations, growth monitoring, and pediatric care to help your little ones thrive from infancy through adolescence.',
  },
  {
    id: 'diabetes-consultation',
    icon: Droplet,
    title: 'Diabetes Consultation',
    description:
      'Personalized management plans, lifestyle guidance, and monitoring to help you live well with diabetes.',
  },
  {
    id: 'blood-pressure-checkup',
    icon: HeartPulse,
    title: 'Blood Pressure Checkup',
    description:
      'Accurate readings and expert guidance to detect, manage, and prevent high or low blood pressure concerns.',
  },
  {
    id: 'preventive-checkups',
    icon: ShieldPlus,
    title: 'Preventive Health Checkups',
    description:
      'Screenings and wellness exams designed to catch concerns early and keep you on track for long-term health.',
  },
  {
    id: 'diagnostic-services',
    icon: Microscope,
    title: 'Basic Diagnostic Services',
    description:
      'On-site lab tests and diagnostics with fast, reliable results so you can get answers without the wait.',
  },
];

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualifications: string;
  experience: string;
  photo: string;
  department: string;
}

export const doctors: Doctor[] = [
  {
    id: 'dr-1',
    name: 'Dr. Sample Doctor One',
    specialization: 'General Physician',
    qualifications: 'MBBS, MD — Internal Medicine',
    experience: '15+ years',
    photo: 'https://images.pexels.com/photos/15962798/pexels-photo-15962798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    department: 'General Consultation',
  },
  {
    id: 'dr-2',
    name: 'Dr. Sample Doctor Two',
    specialization: 'Family Medicine',
    qualifications: 'MBBS, MD — Family Medicine',
    experience: '12+ years',
    photo: 'https://images.pexels.com/photos/16552437/pexels-photo-16552437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    department: 'Family Medicine',
  },
  {
    id: 'dr-3',
    name: 'Dr. Sample Doctor Three',
    specialization: 'Pediatrician',
    qualifications: 'MBBS, MD — Pediatrics',
    experience: '10+ years',
    photo: 'https://images.pexels.com/photos/6749765/pexels-photo-6749765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    department: 'Child Healthcare',
  },
  {
    id: 'dr-4',
    name: 'Dr. Sample Doctor Four',
    specialization: 'Endocrinologist',
    qualifications: 'MBBS, MD, DM — Endocrinology',
    experience: '14+ years',
    photo: 'https://images.pexels.com/photos/32115962/pexels-photo-32115962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    department: 'Diabetes Consultation',
  },
];

export const departments = services.map((s) => s.title);
