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
    { value: 24, suffix: '/7', label: 'Always available', description: 'Our phone line is open around the clock for AC and home appliance service enquiries.' },
    { value: 4, suffix: '', label: 'Service areas', description: 'Installation, cleaning, maintenance and appliance support.' },
    { value: 1, suffix: '', label: 'Local team', description: 'Serving customers across Bahrain.' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [{
  id: 'prime-cool', slug: 'prime-cool', name: 'Prime Cool', title: 'Air Conditioning & Home Appliance Services',
  qualifications: 'Air conditioning · Home appliances · Bahrain', specialization: 'Installation, cleaning and maintenance', experienceYears: 0,
  bio: 'Prime Cool provides air conditioning and home appliance services in Bahrain. Customers can contact the team to discuss AC installation, cleaning, maintenance and repair, as well as home appliance fitting and service needs. The team is available by phone 24 hours a day to hear about the unit, understand the requested work and discuss arranging a suitable visit.',
  philosophy: 'We listen to what your home needs, explain the requested work clearly and aim to leave the service area tidy.',
  education: ['Air conditioner installation and fitting for residential service requests.', 'AC cleaning, maintenance and repair enquiries, with the work discussed before it begins.', 'Home appliance fitting and service support based on the appliance and request.'], memberships: ['Prime Cool serves customers across Bahrain and is available by phone 24 hours a day.', 'Customers can call +973 6636 1864 to describe an AC or appliance issue and discuss the next steps.'], specialties: ['AC installation', 'AC cleaning', 'AC maintenance and repair', 'Home appliance services'],
  image: '/images/logo.png', warmImage: '/images/logo.png',
}];

const makeService = (slug: string, name: string, tagline: string, description: string, needs: string[], benefits: string[], faqs: { question: string; answer: string }[]): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: needs, benefits,
  indications: needs.map((condition) => ({ condition, explanation: `Contact Prime Cool to discuss your ${condition.toLowerCase()} requirements.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us what you need', duration: 'Initial call', description: 'Share the AC or appliance type, describe the issue or service you have in mind, and tell us your location in Bahrain.', clinicalDetails: 'The team will ask questions to understand the request and clarify which service you are looking for.' },
    { stepNumber: 2, title: 'Discuss the arrangements', duration: 'Scheduling', description: 'Talk through a suitable visit time, access to the unit and any details the team needs before the appointment.', clinicalDetails: 'Timing and access are discussed with you so the visit can be arranged around the requested work.' },
    { stepNumber: 3, title: 'Complete the agreed service', duration: 'On-site service', description: 'The team carries out the agreed installation, cleaning, maintenance or appliance service at your property.', clinicalDetails: 'Any additional work is discussed with you before it proceeds.' },
    { stepNumber: 4, title: 'Review the work', duration: 'Completion', description: 'Take a look at the completed service, ask questions and hear any relevant care guidance from the team.', clinicalDetails: 'The team will explain the work completed and answer your follow-up questions.' },
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
  makeService('ac-installation', 'AC Installation', 'Professional air conditioning installation for your home, with the work planned around your unit and property.', 'Prime Cool helps with air conditioner installation and fitting across Bahrain. Call to discuss the type of unit, the room or area it will serve, your location and any installation requirements. The team can talk through the request, confirm what information is needed and discuss a suitable time before the work is arranged.', ['New AC unit installation for a home or room', 'Replacing an existing unit or planning a new fitting', 'Discussing an AC setup for a particular space'], ['Talk through the unit and installation request before arranging the work', 'Agree on access, timing and the work required for the fitting', 'Ask questions and review the completed installation with the team'], [
    { question: 'Can I call at any time?', answer: 'Yes. Prime Cool is available by phone 24 hours a day. Call +973 6636 1864 to describe your installation request and discuss appointment arrangements.' },
    { question: 'Do you install a unit I already purchased?', answer: 'Call and share the unit details, your location and where you would like it fitted. The team can discuss your request and advise on the next steps.' },
    { question: 'What information should I have ready?', answer: 'It helps to share the AC unit type, the room or area, your Bahrain location and any timing preferences when you call.' },
  ]),
  makeService('ac-cleaning', 'AC Cleaning', 'Arrange air conditioning cleaning to help keep your home AC unit in good working order.', 'Prime Cool provides AC cleaning service enquiries across Bahrain. Contact the team to describe your air conditioner, the cleaning you are looking for and any concerns such as reduced airflow or visible dust. The requested work and a suitable visit can be discussed with you before an appointment is arranged.', ['Routine cleaning for a home AC unit', 'Discussing airflow, dust or cleanliness concerns', 'Arranging cleaning before regular or seasonal use'], ['Discuss the unit and cleaning requirements before a visit', 'Clarify the work and appointment timing with the team', 'Ask about any care guidance after the service'], [
    { question: 'How can I arrange AC cleaning?', answer: 'Call +973 6636 1864 at any time. Tell Prime Cool about your AC unit, your location and the cleaning you need so the team can discuss a suitable visit.' },
    { question: 'Do you clean home AC units?', answer: 'Contact Prime Cool with details about your unit and location to discuss the service. The team can help clarify the request and next steps.' },
    { question: 'When should I ask about cleaning?', answer: 'You can call when you want routine cleaning, notice a cleanliness concern or are preparing an AC unit for regular use. The team can discuss your request.' },
  ]),
  makeService('ac-maintenance', 'AC Maintenance & Repair', 'Get help with air conditioner maintenance, repair enquiries and unexpected changes in performance.', 'Prime Cool provides air conditioning maintenance and repair support across Bahrain. Call to describe what the AC is doing, when the issue started and the type of unit if known. The team can discuss the service request, explain the next steps and talk through arranging a visit. Maintenance needs and any additional work can be discussed with you before proceeding.', ['An AC unit that is not cooling as expected', 'Routine maintenance or a change in AC performance', 'Unusual operation, sounds or a service issue that needs attention'], ['Describe the issue by phone so the request can be understood', 'Discuss the requested service and visit arrangements', 'Review the work and ask questions when the service is complete'], [
    { question: 'My AC is not cooling. What should I do?', answer: 'Call Prime Cool at +973 6636 1864 and describe the issue, your unit and your location. The team is available 24 hours to discuss the service request and next steps.' },
    { question: 'Is service available outside normal hours?', answer: 'Prime Cool is available by phone 24 hours a day. Call to describe the issue and discuss arranging a suitable visit.' },
    { question: 'Can I ask about routine maintenance?', answer: 'Yes. Call with the unit details and the type of maintenance you have in mind. Prime Cool can discuss the request and appointment arrangements.' },
  ]),
  makeService('home-appliance-services', 'Home Appliance Services', 'Practical installation, cleaning and maintenance support for household appliances.', 'Contact Prime Cool about installation, cleaning, maintenance or a service issue with a household appliance in Bahrain. When you call, share the appliance type, what you need help with and your location. The team can discuss whether the request fits the available service and explain how to arrange the next steps.', ['Home appliance installation or fitting enquiries', 'Appliance cleaning and general maintenance requests', 'Help discussing an appliance issue or change in operation'], ['Share the appliance type and request with the team', 'Discuss the requested work and visit arrangements', 'Agree on any additional work with you before proceeding'], [
    { question: 'Which appliances can you help with?', answer: 'Call and describe the appliance, the issue and the service you need. The team can discuss the request and advise on availability.' },
    { question: 'How do I book a visit?', answer: 'Call +973 6636 1864 at any time. Share the appliance type, your location and a suitable time to discuss arranging a visit.' },
    { question: 'Can I call about installation or maintenance?', answer: 'Yes. Prime Cool can discuss appliance installation, cleaning and maintenance enquiries. Call with the appliance details and the work you are considering.' },
  ]),
];

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] } }
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'when-to-arrange-ac-maintenance',
    title: 'When to arrange air conditioning maintenance',
    category: 'AC Maintenance',
    readTime: '4 min read',
    publishDate: '2026-10-16',
    lastUpdated: '2026-10-16',
    authorId: 'prime-cool',
    excerpt: 'Changes in cooling, airflow or the sounds from your AC can be useful reasons to ask about maintenance.',
    leadImage: '/images/home-gallery/project-04.jpg',
    relatedServiceSlug: 'ac-maintenance',
    content: {
      intro: 'An air conditioner can change how it performs over time. Paying attention to changes in cooling, airflow, sounds or the way the unit starts can help you explain a concern clearly when you contact a service team. Prime Cool is available by phone 24 hours a day to discuss AC maintenance and repair enquiries in Bahrain.',
      sections: [
        { heading: 'Notice changes in cooling or airflow', body: 'If a room feels different from usual or airflow seems weaker, note when you first noticed the change and whether it happens every time the AC runs. This context can help the team understand your concern when you call. Share the unit type and your location, and describe what you have observed rather than guessing at the cause.' },
        { heading: 'Pay attention to new sounds or operation changes', body: 'Unusual sounds, repeated stopping or a unit that does not respond as expected may be worth discussing. Make a note of when it happens and whether anything else changes at the same time. A clear description helps Prime Cool discuss the right service request and the information that may be useful before arranging a visit.' },
        { heading: 'Plan routine maintenance around your needs', body: 'You can contact the team even when there is no urgent fault and ask about routine maintenance for your unit. Tell them what type of AC you have, how it is used and what service you are considering. The requested work, availability and pricing factors can be discussed before an appointment is arranged.' },
      ],
      faqs: [
        { question: 'What details should I share when calling about an AC issue?', answer: 'Share the unit type if known, the change you have noticed, when it started and your location in Bahrain. Prime Cool can discuss the request and next steps.' },
        { question: 'Can I call about routine AC maintenance?', answer: 'Yes. Call Prime Cool 24 hours a day at +973 6636 1864 to discuss your AC unit and the maintenance you are considering.' },
      ],
    },
  },
  {
    slug: 'preparing-for-ac-cleaning',
    title: 'Preparing for an AC cleaning visit',
    category: 'AC Cleaning',
    readTime: '3 min read',
    publishDate: '2026-10-16',
    lastUpdated: '2026-10-16',
    authorId: 'prime-cool',
    excerpt: 'A few details about your AC and home can make it easier to discuss cleaning arrangements with the service team.',
    leadImage: '/images/home-gallery/project-11.jpg',
    relatedServiceSlug: 'ac-cleaning',
    content: {
      intro: 'If you are arranging air conditioning cleaning, a short conversation before the visit can help set expectations. Share what kind of unit you have, where it is located and whether you have noticed any cleanliness or airflow concerns. Prime Cool can discuss the requested cleaning and how to arrange a suitable visit.',
      sections: [
        { heading: 'Describe the unit and its location', body: 'Tell the team whether the AC serves a bedroom, living area or another part of your home, and share any details you know about the unit. Mention where it is located and whether access may need planning. This helps the team understand the request and talk through what the visit may involve.' },
        { heading: 'Explain what prompted the request', body: 'You might be arranging routine cleaning, preparing the AC for regular use or asking about a concern you have noticed. Describe what you observed, when it began and whether it changes while the unit is running. The team can discuss the information and the service you are looking for.' },
        { heading: 'Ask about timing and the work', body: 'Before arranging a visit, ask about appointment availability, the work requested and any preparation that may be helpful for your home. Keep the area around the unit accessible where practical and let the team know about any access considerations when you call.' },
      ],
      faqs: [
        { question: 'What should I tell Prime Cool about my AC?', answer: 'Share the unit type, location, cleaning request and any concerns such as reduced airflow or visible dust. Call +973 6636 1864 any time.' },
        { question: 'Can I discuss appointment availability before booking?', answer: 'Yes. Prime Cool can discuss your preferred timing and service request before a visit is arranged.' },
      ],
    },
  },
  {
    slug: 'planning-a-new-ac-installation',
    title: 'Planning a new AC installation at home',
    category: 'AC Installation',
    readTime: '4 min read',
    publishDate: '2026-10-16',
    lastUpdated: '2026-10-16',
    authorId: 'prime-cool',
    excerpt: 'Discuss the room, the unit and the fitting requirements with your service team before arranging an installation.',
    leadImage: '/images/home-gallery/project-01.jpg',
    relatedServiceSlug: 'ac-installation',
    content: {
      intro: 'Planning an air conditioner fitting starts with explaining what you need. Whether you are installing a unit in a room or replacing an existing AC, share the unit details, the location and any timing preferences with Prime Cool. The team can discuss the fitting request and the next steps before arranging service.',
      sections: [
        { heading: 'Share the unit and room details', body: 'If you have already selected an AC, have its type or model information ready when you call. Explain which room or area it will serve and whether this is a new installation or a replacement. These details help the team understand the request and discuss what may be needed for the fitting.' },
        { heading: 'Discuss access and timing', body: 'Let the team know where the unit will be fitted and mention any access considerations for your property. Discuss a suitable appointment time and how the visit can be arranged around the work. Clear information up front helps you and the service team agree on practical next steps.' },
        { heading: 'Ask questions before the work begins', body: 'Use the initial conversation to ask about the requested installation, pricing factors and expected arrangements. If requirements change or additional work is identified, discuss it with the team before proceeding. Prime Cool is available by phone 24 hours a day for service enquiries across Bahrain.' },
      ],
      faqs: [
        { question: 'What should I have ready before calling about installation?', answer: 'Share the unit details if known, the room or area, your location in Bahrain and your preferred timing.' },
        { question: 'Can Prime Cool discuss fitting a unit I already purchased?', answer: 'Call with the unit information and fitting location. The team can discuss your request and the next steps.' },
      ],
    },
  },
];
