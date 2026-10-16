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
  name: 'Remont Interior Astana', legalName: 'Remont Interior Astana', tagline: 'Интерьеры, продуманные для вашей жизни.',
  primaryLocation: { street: '', suite: '', city: 'Астана', state: 'Акмолинская область', postalCode: '010000', country: 'Казахстан', directions: 'Казахстан, Акмолинская область, Астана, 010000', landmarks: '' },
  contact: { phone: '+7 778 214 2175', emergencyPhone: '+7 778 214 2175', whatsapp: '+7 778 214 2175', website: '', email: '' },
  identityHighlights: ['Дизайн интерьеров в Астане', 'Открыто круглосуточно'],
  schedule: [{ day: 'Ежедневно', hours: 'Круглосуточно' }],
  verifiedStats: [
    { value: 24, suffix: 'ч', label: 'Открыто', description: 'Круглосуточно' },
    { value: 4, suffix: '', label: 'Услуги по интерьеру', description: 'Дизайн, ремонт и планировка пространства' },
    { value: 1, suffix: '', label: 'Студия в Астане', description: 'Астана, Казахстан' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [{
  id: 'remont-interer-astana', slug: 'remont-interer-astana', name: 'Remont Interior Astana', title: 'Студия дизайна интерьеров',
  qualifications: 'Дизайн интерьеров · Астана, Казахстан', specialization: 'Жилые и коммерческие интерьеры', experienceYears: 0,
  bio: 'Remont Interior Astana занимается жилыми и коммерческими пространствами: мы предлагаем дизайн интерьеров, планировку пространства и ремонт.',
  philosophy: 'Продуманные планировки, тщательно подобранные материалы и детали для каждого пространства.',
  education: [], memberships: [], specialties: ['Дизайн интерьеров', 'Планировка пространства', 'Ремонт интерьера', 'Отделка интерьера'],
  image: '/images/home-gallery/project-08.jpg', warmImage: '/images/home-gallery/project-08.jpg',
}];

const makeService = (slug: string, name: string, tagline: string, description: string, needs: string[], benefits: string[], image: string, faqs: { question: string; answer: string }[]): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: needs, benefits,
  indications: needs.map((condition) => ({ condition, explanation: `Расскажите о своём пространстве и приоритетах, чтобы мы могли предложить подход к дизайну для раздела «${condition.toLowerCase()}».` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Расскажите о своих идеях', duration: 'Первый разговор', description: 'Расскажите о пространстве, стиле и целях.', clinicalDetails: 'Сначала мы узнаём, что важно именно для вас.' },
    { stepNumber: 2, title: 'Продумайте детали', duration: 'Планирование дизайна', description: 'Обсудим планировку, материалы и объём проекта.', clinicalDetails: 'Вместе рассмотрим предполагаемый объём работ.' },
    { stepNumber: 3, title: 'Согласуйте проект', duration: 'График проекта', description: 'Скоординируем дизайн и согласованные ремонтные работы.', clinicalDetails: 'Вместе согласуем сроки и детали проекта.' },
    { stepNumber: 4, title: 'Наслаждайтесь пространством', duration: 'Завершение проекта', description: 'Оцените готовый интерьер и последние детали.', clinicalDetails: 'Вместе осмотрим результат согласованных работ.' },
  ],
  recoveryTimeline: [
    { period: 'Первый разговор', expectedSensations: 'Чёткое обсуждение ваших целей и пространства.', careProtocol: 'Расскажите о предпочтительном стиле, потребностях и ограничениях.' },
    { period: 'Планирование дизайна', expectedSensations: 'Формируются планировка, подбор материалов и объём работ.', careProtocol: 'Вместе рассмотрите предложенный план и детали.' },
    { period: 'Завершение проекта', expectedSensations: 'Готовый интерьер, которым можно пользоваться.', careProtocol: 'Проверьте согласованный объём работ и завершающие детали.' },
  ],
  costTransparency: { baseRange: 'Стоимость проекта обсуждается после оценки пространства и ваших требований.', factors: ['Площадь и текущее состояние объекта', 'Объём дизайн-проекта и выбранные материалы', 'Согласованные работы'], whatIsIncluded: ['Обсуждение проекта', 'Планирование дизайна', 'Согласованные интерьерные работы'], note: 'Свяжитесь с нами, чтобы обсудить детали и стоимость проекта.' },
  beforeAfterCase: { category: name, clinicalContext: 'Идеи для дизайна и ремонта интерьера.', beforeLabel: 'Деталь интерьера', afterLabel: 'Готовое пространство', beforeImage: image, afterImage: image, timeframe: 'Сроки проекта согласуются с учётом объёма работ' },
  assignedDentistId: 'remont-interer-astana', faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService('dizayn-zhilykh-intererov', 'Дизайн жилых интерьеров', 'Комфортные, продуманные интерьеры для вашей повседневной жизни.', 'Создадим гармоничный, практичный и индивидуальный интерьер дома — от первых идей планировки до завершающих деталей.', ['Интерьеры квартир и домов', 'Обновление комнат и дизайн всего дома', 'Удобная планировка и целостная отделка'], ['Дизайн с учётом ваших потребностей', 'Внимание к материалам и деталям', 'Единая концепция интерьера дома'], '/images/home-gallery/project-01.jpg', [{ question: 'Можно оформить только одну комнату?', answer: 'Да. Расскажите о комнате, своих целях и желаемом объёме работ — мы обсудим ваш проект.' }, { question: 'Можно ли выбрать отделочные материалы?', answer: 'Мы обсудим варианты отделки и материалов в рамках дизайн-проекта.' }]),
  makeService('dizayn-kommercheskikh-intererov', 'Дизайн коммерческих интерьеров', 'Приветливые и функциональные пространства для работы и бизнеса.', 'Спланируем интерьер с учётом того, как им пользуются ваша команда и посетители, уделив внимание планировке, атмосфере и отделке.', ['Интерьеры офисов и студий', 'Пространства для клиентов и гостей', 'Функциональное обновление существующего интерьера'], ['Планировка с учётом назначения пространства', 'Целостная концепция интерьера', 'Отделка, соответствующая задачам проекта'], '/images/home-gallery/project-05.jpg', [{ question: 'Вы занимаетесь коммерческими интерьерами?', answer: 'Свяжитесь с Remont Interior Astana, чтобы обсудить ваше коммерческое пространство и задачи проекта.' }, { question: 'Можно обновить уже готовое пространство?', answer: 'Да. Расскажите, что вас устраивает, что хотелось бы изменить и какой объём работ вы рассматриваете.' }]),
  makeService('remont-interera', 'Ремонт интерьера', 'Обновите комнаты по чёткому и продуманному плану.', 'Организуем обновление интерьера с учётом ваших целей, уделяя внимание планировке, отделке и практичным деталям.', ['Ремонт комнат и квартир', 'Обновление кухонь и ванных комнат', 'Отделочные работы и обновление интерьера'], ['Чёткое обсуждение объёма проекта', 'Совместный выбор материалов и деталей', 'Планирование с учётом особенностей вашего объекта'], '/images/home-gallery/project-02.jpg', [{ question: 'Можно совместить ремонт с разработкой дизайна?', answer: 'При обсуждении проекта мы можем рассмотреть потребности в дизайне и ремонте вместе.' }, { question: 'Как узнать стоимость проекта?', answer: 'Позвоните нам и расскажите об объекте и необходимых работах.' }]),
  makeService('planirovka-prostranstva', 'Планировка пространства', 'Сделайте каждую комнату удобнее и продуманнее.', 'Рассмотрим идеи планировки, которые добавят интерьеру свободы, комфорта и функциональности с учётом ваших пожеланий.', ['Расстановка мебели и планировка комнат', 'Удобная организация небольших пространств', 'Планирование перед ремонтом или меблировкой'], ['Рациональное использование площади', 'Планировка с учётом вашего распорядка', 'Понятная основа для следующих этапов'], '/images/home-gallery/project-03.jpg', [{ question: 'Поможете спланировать небольшую квартиру?', answer: 'Расскажите о площади и планировке — обсудим ваши задачи.' }, { question: 'Стоит ли продумать планировку до ремонта?', answer: 'Планировка заранее поможет определить, каким вы хотите видеть пространство до начала работ.' }]),
];

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] } }
export const BLOG_POSTS: BlogPost[] = [];
