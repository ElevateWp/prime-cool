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
  name: 'Prime Cool', legalName: 'Prime Cool', tagline: 'Comfort, care and cooling around the clock.',
  primaryLocation: { street: '', suite: '', city: '', state: '', postalCode: '', country: 'BH', directions: 'Bahrain', landmarks: '' },
  contact: { phone: '+973 6636 1864', emergencyPhone: '+973 6636 1864', whatsapp: '+973 6636 1864' },
  identityHighlights: ['Air conditioning and home appliance services', 'Available 24 hours'],
  schedule: [{ day: 'Every day', hours: '24 hours' }],
  verifiedStats: [
    { value: 24, suffix: '/7', label: 'Always available', description: 'Call any time for service enquiries.' },
    { value: 4, suffix: '', label: 'Service areas', description: 'Installation, cleaning, maintenance and appliance support.' },
    { value: 1, suffix: '', label: 'Local team', description: 'Serving customers across Bahrain.' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [{
  id: 'prime-cool', slug: 'prime-cool', name: 'Prime Cool', title: 'Air Conditioning & Home Appliance Services',
  qualifications: 'Air conditioning · Home appliances · Bahrain', specialization: 'Installation, cleaning and maintenance', experienceYears: 0,
  bio: 'Prime Cool provides air conditioning and home appliance services in Bahrain, including installation, cleaning and maintenance.',
  philosophy: 'Clear communication, tidy work and practical support for your home.',
  education: [], memberships: [], specialties: ['AC installation', 'AC cleaning', 'AC maintenance', 'Home appliance services'],
  image: '/images/logo.png', warmImage: '/images/logo.png',
}];

const makeService = (slug: string, name: string, tagline: string, description: string, needs: string[], benefits: string[], faqs: { question: string; answer: string }[]): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: needs, benefits,
  indications: needs.map((condition) => ({ condition, explanation: `Contact Prime Cool to discuss your ${condition.toLowerCase()} requirements.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us what you need', duration: 'Initial call', description: 'Share the appliance or AC issue and your location.', clinicalDetails: 'We will clarify the service required.' },
    { stepNumber: 2, title: 'Arrange a visit', duration: 'Scheduling', description: 'Choose a suitable time. The team is available 24 hours.', clinicalDetails: 'Timing and access are confirmed with you.' },
    { stepNumber: 3, title: 'Service and inspection', duration: 'On-site service', description: 'The requested installation, cleaning or maintenance is carried out.', clinicalDetails: 'The work is discussed with you before proceeding.' },
    { stepNumber: 4, title: 'Review the work', duration: 'Completion', description: 'Check the completed service and ask any follow-up questions.', clinicalDetails: 'The team will explain the completed work.' },
  ],
  recoveryTimeline: [
    { period: 'Before the visit', expectedSensations: 'A clear discussion of your requirements.', careProtocol: 'Describe the appliance, issue and preferred appointment time.' },
    { period: 'During service', expectedSensations: 'The requested work is completed at your property.', careProtocol: 'Keep the work area accessible where possible.' },
    { period: 'After service', expectedSensations: 'Your AC or appliance is ready for use, depending on the issue.', careProtocol: 'Follow any care guidance provided by the technician.' },
  ],
  costTransparency: { baseRange: 'Please call to discuss service pricing.', factors: ['Type of appliance or AC unit', 'Requested service', 'Parts or additional work, if needed'], whatIsIncluded: ['Service discussion', 'Appointment coordination', 'Agreed service work'], note: 'Any additional work can be discussed before it proceeds.' },
  beforeAfterCase: { category: name, clinicalContext: description, beforeLabel: 'Service request', afterLabel: 'Completed service', beforeImage: '/images/logo.png', afterImage: '/images/logo.png', timeframe: 'Timing depends on the requested service.' },
  assignedDentistId: 'prime-cool', faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService('ac-installation', 'AC Installation', 'Professional air conditioning installation for your home.', 'Prime Cool helps with air conditioner installation and fitting. Call to discuss your unit, location and installation needs.', ['New AC unit installation', 'Replacing an existing unit', 'Planning an AC fitting'], ['Discuss the installation before work begins', 'Careful fitting and setup', 'Available 24 hours for enquiries'], [
    { question: 'Can I call at any time?', answer: 'Yes. Prime Cool is available 24 hours. Call +973 6636 1864 to discuss an appointment.' },
    { question: 'Do you install a unit I already purchased?', answer: 'Call and share the unit details and location so the team can discuss your installation request.' },
  ]),
  makeService('ac-cleaning', 'AC Cleaning', 'Keep your air conditioner clean and working comfortably.', 'Arrange air conditioning cleaning with Prime Cool. Contact the team to discuss your AC type and cleaning requirements.', ['Routine AC cleaning', 'AC airflow or cleanliness concerns', 'Preparing an AC unit for regular use'], ['Service tailored to the unit and request', 'Clear discussion of the work', 'Available around the clock'], [
    { question: 'How can I arrange AC cleaning?', answer: 'Call +973 6636 1864 any time to discuss your unit and a suitable visit.' },
    { question: 'Do you clean home AC units?', answer: 'Contact Prime Cool with details about your unit and location to confirm the service.' },
  ]),
  makeService('ac-maintenance', 'AC Maintenance & Repair', 'Get help with air conditioner maintenance and service issues.', 'Prime Cool provides air conditioning maintenance and repair support. Call to describe the issue and arrange a visit.', ['AC not cooling as expected', 'General AC maintenance', 'Unusual AC operation'], ['Discuss the issue before a visit', 'On-site service coordination', '24-hour availability'], [
    { question: 'My AC is not cooling. What should I do?', answer: 'Call Prime Cool at +973 6636 1864 and describe the issue to discuss service.' },
    { question: 'Is service available outside normal hours?', answer: 'Prime Cool is available 24 hours. Call to arrange a suitable visit.' },
  ]),
  makeService('home-appliance-services', 'Home Appliance Services', 'Practical service support for home appliances.', 'Contact Prime Cool about installation, cleaning or maintenance for household appliances. Share the appliance type and issue when you call.', ['Home appliance installation', 'Appliance cleaning and maintenance', 'Help with an appliance issue'], ['Service discussion by phone', 'Work agreed with you before proceeding', 'Available 24 hours'], [
    { question: 'Which appliances can you help with?', answer: 'Call and describe the appliance and service you need so the team can advise on availability.' },
    { question: 'How do I book a visit?', answer: 'Call +973 6636 1864 at any time to discuss your appliance and arrange a visit.' },
  ]),
];

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] } }
export const BLOG_POSTS: BlogPost[] = [];
