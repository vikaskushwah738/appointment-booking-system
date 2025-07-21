import {
    Calendar,
    Video,
    CreditCard,
    User,
    FileText,
    ShieldCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

// Define the type for feature item
type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
};

// JSON data for features
export const features: Feature[] = [
    {
        icon: User,
        title: "Create Your Profile",
        description: "Sign up and complete your profile to get personalized healthcare recommendations and services.",
    },
    {
        icon: Calendar,
        title: "Book Appointments",
        description: "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
    },
    {
        icon: Video,
        title: "Video Consultation",
        description: "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
    },
    {
        icon: CreditCard,
        title: "Consultation Credits",
        description: "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
    },
    {
        icon: ShieldCheck,
        title: "Verified Doctors",
        description: "All healthcare providers are carefully vetted and verified to ensure quality care.",
    },
    {
        icon: FileText,
        title: "Medical Documentation",
        description: "Access and manage your appointment history, doctor's notes, and medical recommendations.",
    },
];


export const testimonials = [
    {
        initials: "RS",
        name: "Riya Sharma",
        role: "Patient",
        quote:
            "The video consultations are a game-changer. I received quality medical advice without missing work or visiting a clinic.",
    },
    {
        initials: "DK",
        name: "Dr. Karan Mehta",
        role: "Cardiologist",
        quote:
            "This platform transformed how I practice medicine. I can now consult more patients and offer care without being tied to a clinic.",
    },
    {
        initials: "AV",
        name: "Amit Verma",
        role: "Patient",
        quote:
            "The credit system is incredibly flexible. I bought a family package, and we've had smooth access to specialists whenever needed.",
    },
];



export const creditBenefits = [
    "Every consultation costs just <strong class='text-emerald-400'>2 credits</strong>, no matter how long it lasts",
    "<strong class='text-emerald-400'>Credits never expire</strong> — use them whenever it suits you",
    "With a monthly plan, you get <strong class='text-emerald-400'>new credits every month</strong>",
    "You're free to cancel or update your subscription <strong class='text-emerald-400'>anytime</strong> — no extra fees",
];
