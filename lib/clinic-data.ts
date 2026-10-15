export interface DentistProfile {
  id: string; slug: string; name: string; title: string; qualifications: string; specialization: string;
  experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[];
  specialties: string[]; image: string; warmImage: string;
}

export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string;
  clinicalExplanation: string; whoNeeds: string[]; benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string; legalName: string; tagline: string; establishedYear?: number;
  primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string };
  identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'FirstChoice Cleaning', legalName: 'FirstChoice Cleaning', tagline: 'A cleaner space, with care you can count on.',
  primaryLocation: { street: '', suite: '', city: '', state: '', postalCode: '', country: 'Australia', directions: 'Contact us to check our local service area.', landmarks: '' },
  contact: { phone: '+61 480 701 505', emergencyPhone: '+61 480 701 505', whatsapp: '+61 480 701 505', website: 'https://firstchoiceclean.com.au', email: '' },
  identityHighlights: ['5.0 Google rating · 12 reviews', 'Friendly, professional and reliable service'],
  schedule: [{ day: 'Availability', hours: 'Open · Closes 6 PM' }],
  verifiedStats: [{ value: 5, suffix: '.0', label: 'Google rating', description: 'From 12 customer reviews' }, { value: 12, suffix: '', label: 'Google reviews', description: 'Customer feedback on Google' }],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [{
  id: 'firstchoice-cleaning-team', slug: 'izzy-and-bill', name: 'Izzy & Bill', title: 'Founders of FirstChoice Cleaning',
  qualifications: 'Cleaning team', specialization: 'Home and exterior cleaning', experienceYears: 0,
  bio: 'Izzy and Bill founded FirstChoice Cleaning with a simple idea: provide a cleaning service that puts people first. They bring a personal touch, attention to detail and genuine care to every space they clean.',
  philosophy: 'Treat every home and business as if it were our own, and go the extra mile with reliable, thoughtful service.',
  education: [], memberships: [], specialties: ['Regular cleaning', 'Deep cleaning', 'One-off cleaning', 'Pressure washing'],
  image: '/images/izzy-and-bill.png', warmImage: '/images/izzy-and-bill.png',
}];

const makeService = (slug: string, name: string, tagline: string, description: string, needs: string[], benefits: string[], image: string, faqs: { question: string; answer: string }[]): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: needs, benefits,
  indications: needs.map((condition) => ({ condition, explanation: `Tell us about your space and what you would like cleaned, and we can discuss a suitable service for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us what you need', duration: 'Quick enquiry', description: 'Share the type of clean, your space and any priorities.', clinicalDetails: 'We listen to understand the property and the result you are looking for.' },
    { stepNumber: 2, title: 'Agree the details', duration: 'Before booking', description: 'We discuss the work, timing and price with you before confirming.', clinicalDetails: 'The scope is explained clearly so you know what to expect.' },
    { stepNumber: 3, title: 'We clean with care', duration: 'As arranged', description: 'Izzy and Bill provide a thorough, careful service at your property.', clinicalDetails: 'We work with attention to detail and respect for your space.' },
    { stepNumber: 4, title: 'Enjoy a fresh space', duration: 'After the clean', description: 'We leave your space clean and tidy once the agreed job is complete.', clinicalDetails: 'We want you to feel happy with the finished result.' },
  ],
  recoveryTimeline: [
    { period: 'Before your clean', expectedSensations: 'A simple conversation about your priorities.', careProtocol: 'Let us know about access, areas of focus and any specific requests.' },
    { period: 'During the clean', expectedSensations: 'Our team works carefully through the agreed areas.', careProtocol: 'We treat your home or business with respect.' },
    { period: 'After the clean', expectedSensations: 'A fresh, clean and tidy space.', careProtocol: 'Get in touch if you have a question about the completed service.' },
  ],
  costTransparency: { baseRange: 'Contact us for a clear, competitive price.', factors: ['Size and condition of the space', 'Type of clean requested', 'Areas and details included'], whatIsIncluded: ['Discussion of your priorities', 'Agreed cleaning scope', 'Careful service from our team'], note: 'We confirm pricing and availability with you before the service is booked.' },
  beforeAfterCase: { category: name, clinicalContext: 'Representative cleaning imagery. The work is agreed based on your property and requested service.', beforeLabel: 'Cleaning in progress', afterLabel: 'Fresh and tidy space', beforeImage: image, afterImage: image, timeframe: 'Service arranged to suit your needs' },
  assignedDentistId: 'firstchoice-cleaning-team', faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService('regular-house-cleaning', 'Regular House Cleaning', 'A reliable regular clean to keep your home feeling fresh and comfortable.', 'FirstChoice Cleaning provides thoughtful regular cleaning for homes. We discuss the areas you want us to focus on and arrange a service that fits your needs.', ['Ongoing help keeping your home clean and tidy', 'Routine attention to living areas, bedrooms and kitchen', 'A dependable cleaning team you can get to know'], ['Friendly and professional service', 'Careful attention to detail', 'A clean and tidy home after every visit'], '/images/cleaning-home.jpg', [{ question: 'Can I arrange regular cleaning?', answer: 'Contact Izzy and Bill to discuss your home, preferred frequency and the areas you would like included.' }, { question: 'Will the same team clean my home?', answer: 'FirstChoice Cleaning is a personal service led by founders Izzy and Bill. Please ask about availability when you enquire.' }]),
  makeService('deep-house-cleaning', 'Deep House Cleaning', 'A thorough clean focused on the details throughout your home.', 'For a more detailed refresh, we take time to understand your priorities and discuss the areas that need extra attention before the clean begins.', ['A detailed clean of your home', 'A seasonal or occasional refresh', 'Extra attention to areas that need it'], ['Discuss priorities before we begin', 'Thorough and careful work', 'Friendly, reliable communication'], '/images/cleaning-detail.jpg', [{ question: 'What does a deep clean include?', answer: 'Every home is different. We discuss the rooms, condition and details you want covered, then agree the scope with you before booking.' }, { question: 'Can I request particular areas?', answer: 'Yes. Tell us which areas matter most when you get in touch so we can discuss the right scope.' }]),
  makeService('one-off-cleaning', 'One-Off Cleaning', 'A one-off clean for a fresh start, special occasion or whenever you need a hand.', 'Book a standalone clean with a scope shaped around your home and priorities. We make the process straightforward from first enquiry to completion.', ['An occasional home refresh', 'A clean before or after a special occasion', 'A one-time helping hand with household cleaning'], ['Flexible, straightforward enquiry', 'Clear agreement on the work', 'Careful cleaning from start to finish'], '/images/cleaning-kitchen.jpg', [{ question: 'Can I book a single clean?', answer: 'Yes. FirstChoice Cleaning offers one-off cleaning. Contact us to discuss your home, timing and priorities.' }, { question: 'How do I get a price?', answer: 'Call or message us with a few details about your property and the clean you need. We will discuss a competitive price with you.' }]),
  makeService('pressure-washing', 'Pressure Washing', 'Refresh outdoor concrete with professional pressure washing.', 'FirstChoice Cleaning can pressure wash outdoor concrete. Customers have praised the visible difference and the friendly, professional service from Izzy and Bill.', ['Outdoor concrete that needs a refresh', 'Driveways, paths or other concrete areas to discuss', 'A one-off exterior cleaning job'], ['A visible clean to outdoor concrete', 'Competitive pricing', 'Professional, reliable service'], '/images/pressure-washing.jpg', [{ question: 'Do you pressure wash outdoor concrete?', answer: 'Yes. Customers have shared positive feedback about pressure washing outdoor concrete. Contact us to discuss your surface and the area to be cleaned.' }, { question: 'How much does pressure washing cost?', answer: 'Price depends on the area and job. Contact Izzy and Bill for a competitive quote before booking.' }]),
];

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] } }
export const BLOG_POSTS: BlogPost[] = [];
