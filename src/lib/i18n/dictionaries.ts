import type { Dictionary, Lang } from "@/lib/i18n/types";

const en: Dictionary = {
  nav: {
    cases: "Cases",
    services: "Services",
    about: "About",
    academy: "Academy",
    contact: "Contact",
  },
  cta: "Start working with us",
  viewCases: "View cases",
  hero: {
    eyebrow: "Social Media Agency",
    subtitle: "The UAE Record-Breaking Agency",
    description:
      "We not only bring followers and popularity — we scale clients' businesses through social media",
  },
  stats: {
    views: "Views generated for clients",
    sales: "AED in sales achieved",
    followers: "Followers in 60 videos",
    growth: "Revenue growth for clients",
  },
  results: {
    salesPrefix: "Over",
    salesLabel: "in sales achieved for clients within the last 2.5 years in Dubai",
    top3Label: "clients went from unknown to Top-3 most famous",
    top3Sub:
      "in their niche (Real Estate, Company Formation, Luxury Rent a Car, Luxury Yacht Rental, Football Academy, Cosmetology, Volleyball Academy, Renovation Company, Entertainment)",
    viewsLabel: "views generated for clients",
    agenciesLabel:
      "clients went from employed to starting their own agencies and business within 2–10 months of working with us",
    followers500Label: "followers gained through 60 videos created for a single client",
    followers100Label: "followers achieved in just 17 videos (UAE record)",
    revenueLabel: "revenue growth achieved for existing businesses",
    startCta: "Start working with us",
  },
  founder: {
    eyebrow: "Our founder",
    role: "Founder & CEO",
    myInstagram: "Agency Instagram",
    testimonial:
      "Starting a personal brand is never too late. I scaled mine into the best agency in Dubai — now our clients get 6 years of experience and real results.",
    achievements: {
      years: "of experience in social media marketing",
      followers: "followers across social media platforms",
      views: "views on social media platforms",
      clients: "clients worked with",
      contracts: "ongoing long-term contracts",
      partner: "a media partner at major conferences",
    },
  },
  cases: {
    title: "AGENCY CASES",
    hint: "Client visuals",
    items: {
      cover: {
        name: "Clinic Cover",
        result: "Premium visual identity and content cover for clinic positioning",
      },
      dentistry: {
        name: "Dentistry Clinic",
        result: "Full content system for dentistry — trust, leads and bookings",
      },
      "price-list": {
        name: "Service List",
        result: "Clear offer presentation that converts viewers into clients",
      },
      "before-after": {
        name: "Before & After",
        result: "Transformation content that builds trust and social proof",
      },
      "before-after-main": {
        name: "Clinical Result",
        result: "High-converting before/after creative for patient acquisition",
      },
      "before-after-1": {
        name: "Case Result 01",
        result: "Patient transformation content for Instagram and ads",
      },
      "before-after-2": {
        name: "Case Result 02",
        result: "Visual proof content that increases appointment requests",
      },
      "before-after-3": {
        name: "Case Result 03",
        result: "Consistent before/after series for clinic brand authority",
      },
    },
  },
  reels: {
    title: "Client reels",
    hint: "Auto slider",
    client: "Brand Boost Client",
    items: {
      "reel-1": "Client reel — real results from social media",
      "reel-2": "Growth case — content that brings leads",
      "reel-3": "Behind the scenes — working with clients",
    },
  },
  resources: {
    eyebrow: "Free Resources",
    title: "Valuable free materials",
    description:
      "Guides, templates and proven strategies to grow your brand and scale your business through social media.",
    items: {
      "clinic-cover": {
        title: "Clinic cover system for premium positioning",
        description:
          "Ready visual direction for covers that make your clinic stand out in the feed",
      },
      "service-list": {
        title: "Service list creatives that sell",
        description:
          "Clear offer presentation format to turn attention into bookings",
      },
      "dentistry-content": {
        title: "Dentistry content that builds trust",
        description:
          "Content framework for clinics: trust, proof and high-intent leads",
      },
      "before-after-pack": {
        title: "Before & after pack for social proof",
        description:
          "Transformation creatives that increase inquiries and appointments",
      },
    },
  },
  contact: {
    titleLine1: "IF YOU",
    titleLine2: "WANT TO",
    description:
      "Fill in this short form. Make sure to state accurate details — it helps us contact you when we see the right match.",
    apply: "Apply now",
    formTitle: "Fill in the short form",
    name: "Your Name",
    phone: "Phone",
    instagram: "Instagram",
    email: "Email",
    income: "Monthly income (USD)",
    privacy: "I agree to the",
    privacyLink: "Privacy Policy",
    submit: "Submit application",
    thanks: "Thank you! We'll be in touch soon.",
    benefits: {
      followers: {
        title: "Gain 10,000+ followers",
        description: "Build a loyal audience that trusts your brand",
      },
      popular: {
        title: "Become popular in your niche",
        description: "Stand out as the go-to expert in your industry",
      },
      views: {
        title: "Reach 1M+ monthly views",
        description: "Get your content seen by the right people",
      },
      leads: {
        title: "2–10x your leads",
        description: "Turn attention into qualified inbound inquiries",
      },
      income: {
        title: "2–10x your personal income",
        description: "Scale revenue through organic social media growth",
      },
    },
    incomeOptions: [
      "USD $0 – $5,000",
      "USD $5,000 – $10,000",
      "USD $10,000 – $20,000",
      "USD $20,000 – $40,000",
      "USD $40,000 – $60,000",
      "Over $60,000",
    ],
    errors: {
      nameRequired: "Name is required",
      nameShort: "Name must be at least 2 characters",
      phoneRequired: "Phone is required",
      phoneInvalid: "Enter a valid phone number",
      igRequired: "Instagram handle is required",
      igInvalid: "Enter a valid @handle",
      emailRequired: "Email is required",
      emailInvalid: "Enter a valid email address",
      incomeRequired: "Please select your monthly income",
      privacyRequired: "You must agree to the Privacy Policy",
    },
  },
  finalCta: {
    before: "Gaining followers, views and scaling your business is smooth",
    highlight: "under our guidance",
  },
  footer: {
    navigation: "Navigation",
    contacts: "Contacts",
    privacy: "Privacy Policy",
    rights: "All rights reserved.",
    credit: "Site development —",
  },
  common: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

const ru: Dictionary = {
  nav: {
    cases: "Кейсы",
    services: "Услуги",
    about: "О нас",
    academy: "Академия",
    contact: "Контакты",
  },
  cta: "Начать работу с нами",
  viewCases: "Смотреть кейсы",
  hero: {
    eyebrow: "SMM-агентство",
    subtitle: "Рекордное агентство ОАЭ",
    description:
      "Мы не только даём подписчиков и популярность — мы масштабируем бизнес клиентов через соцсети",
  },
  stats: {
    views: "Просмотров для клиентов",
    sales: "AED продаж достигнуто",
    followers: "Подписчиков за 60 видео",
    growth: "Рост выручки клиентов",
  },
  results: {
    salesPrefix: "Более",
    salesLabel: "продаж для клиентов за последние 2,5 года в Дубае",
    top3Label: "клиентов стали Top-3 в своей нише",
    top3Sub:
      "в нишах (Недвижимость, Регистрация компаний, Аренда люкс-авто, Яхты, Футбольная академия, Косметология, Волейбол, Ремонт, Развлечения)",
    viewsLabel: "просмотров для клиентов",
    agenciesLabel:
      "клиентов ушли с работы и открыли свои агентства и бизнесы за 2–10 месяцев работы с нами",
    followers500Label: "подписчиков через 60 видео для одного клиента",
    followers100Label: "подписчиков за 17 видео (рекорд ОАЭ)",
    revenueLabel: "рост выручки для действующего бизнеса",
    startCta: "Начать работу с нами",
  },
  founder: {
    eyebrow: "Основатель",
    role: "Основатель и CEO",
    myInstagram: "Instagram агентства",
    testimonial:
      "Начинать личный бренд никогда не поздно. Я вырастил свой до лучшего агентства в Дубае — теперь клиенты получают 6 лет опыта и реальные результаты.",
    achievements: {
      years: "опыта в SMM",
      followers: "подписчиков в соцсетях",
      views: "просмотров в соцсетях",
      clients: "клиентов",
      contracts: "долгосрочных контрактов",
      partner: "медиапартнёр крупных конференций",
    },
  },
  cases: {
    title: "КЕЙСЫ АГЕНТСТВА",
    hint: "Визуалы клиентов",
    items: {
      cover: {
        name: "Обложка клиники",
        result: "Премиальная визуальная идентичность и обложки для клиники",
      },
      dentistry: {
        name: "Стоматология",
        result: "Полная контент-система для стоматологии — доверие, лиды и записи",
      },
      "price-list": {
        name: "Прайс / услуги",
        result: "Понятная подача оффера, которая конвертирует зрителей в клиентов",
      },
      "before-after": {
        name: "До и после",
        result: "Контент трансформаций для доверия и социального доказательства",
      },
      "before-after-main": {
        name: "Клинический результат",
        result: "Креативы до/после с высокой конверсией на запись",
      },
      "before-after-1": {
        name: "Кейс 01",
        result: "Контент трансформации пациента для Instagram и рекламы",
      },
      "before-after-2": {
        name: "Кейс 02",
        result: "Визуальное доказательство, которое увеличивает заявки",
      },
      "before-after-3": {
        name: "Кейс 03",
        result: "Серия до/после для авторитета бренда клиники",
      },
    },
  },
  reels: {
    title: "Рилсы клиентов",
    hint: "Автослайдер",
    client: "Клиент Brand Boost",
    items: {
      "reel-1": "Рилс клиента — реальные результаты в соцсетях",
      "reel-2": "Кейс роста — контент, который приводит лиды",
      "reel-3": "За кадром — работа с клиентами",
    },
  },
  resources: {
    eyebrow: "Бесплатные материалы",
    title: "Полезные бесплатные материалы",
    description:
      "Гайды, шаблоны и проверенные стратегии для роста бренда и масштабирования бизнеса через соцсети.",
    items: {
      "clinic-cover": {
        title: "Система обложек для премиум-позиционирования",
        description: "Готовое визуальное направление, чтобы клиника выделялась в ленте",
      },
      "service-list": {
        title: "Креативы прайса, которые продают",
        description: "Формат подачи оффера для превращения внимания в записи",
      },
      "dentistry-content": {
        title: "Контент для стоматологии с доверием",
        description: "Фреймворк для клиник: доверие, доказательства и тёплые лиды",
      },
      "before-after-pack": {
        title: "Пакет до/после для соцдоказательства",
        description: "Креативы трансформаций, которые увеличивают заявки",
      },
    },
  },
  contact: {
    titleLine1: "ЕСЛИ ВЫ",
    titleLine2: "ХОТИТЕ",
    description:
      "Заполните короткую форму. Укажите точные данные — так нам проще связаться с вами при подходящем матче.",
    apply: "Заявка",
    formTitle: "Заполните короткую форму",
    name: "Ваше имя",
    phone: "Телефон",
    instagram: "Instagram",
    email: "Email",
    income: "Месячный доход (USD)",
    privacy: "Я согласен с",
    privacyLink: "Политикой конфиденциальности",
    submit: "Отправить заявку",
    thanks: "Спасибо! Мы скоро свяжемся.",
    benefits: {
      followers: {
        title: "Набрать 10 000+ подписчиков",
        description: "Построить лояльную аудиторию, которая доверяет бренду",
      },
      popular: {
        title: "Стать известным в нише",
        description: "Выделиться как эксперт №1 в своей отрасли",
      },
      views: {
        title: "Выйти на 1M+ просмотров в месяц",
        description: "Показывать контент нужной аудитории",
      },
      leads: {
        title: "Увеличить лиды в 2–10 раз",
        description: "Превращать внимание в качественные заявки",
      },
      income: {
        title: "Увеличить доход в 2–10 раз",
        description: "Масштабировать выручку через органический рост",
      },
    },
    incomeOptions: [
      "USD $0 – $5,000",
      "USD $5,000 – $10,000",
      "USD $10,000 – $20,000",
      "USD $20,000 – $40,000",
      "USD $40,000 – $60,000",
      "Более $60,000",
    ],
    errors: {
      nameRequired: "Укажите имя",
      nameShort: "Имя должно быть не короче 2 символов",
      phoneRequired: "Укажите телефон",
      phoneInvalid: "Введите корректный номер",
      igRequired: "Укажите Instagram",
      igInvalid: "Введите корректный @handle",
      emailRequired: "Укажите email",
      emailInvalid: "Введите корректный email",
      incomeRequired: "Выберите месячный доход",
      privacyRequired: "Нужно согласие с Политикой конфиденциальности",
    },
  },
  finalCta: {
    before: "Набор подписчиков, просмотров и рост бизнеса проходят легко",
    highlight: "под нашим руководством",
  },
  footer: {
    navigation: "Навигация",
    contacts: "Контакты",
    privacy: "Политика конфиденциальности",
    rights: "Все права защищены.",
    credit: "Разработка сайта —",
  },
  common: {
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },
};

const tj: Dictionary = {
  nav: {
    cases: "Кейсҳо",
    services: "Хизматҳо",
    about: "Дар бораи мо",
    academy: "Академия",
    contact: "Тамос",
  },
  cta: "Бо мо кор сар кунед",
  viewCases: "Кейсҳоро бинед",
  hero: {
    eyebrow: "Агентии SMM",
    subtitle: "Агентии рекордшикани АМА",
    description:
      "Мо на танҳо пайравон ва маъруфият медиҳем — тиҷорати муштариёнро тавассути шабакаҳои иҷтимоӣ калон мекунем",
  },
  stats: {
    views: "Намоишҳо барои муштариён",
    sales: "AED фурӯш ба даст омад",
    followers: "Пайравон дар 60 видео",
    growth: "Афзоиши даромади муштариён",
  },
  results: {
    salesPrefix: "Зиёда аз",
    salesLabel: "фурӯш барои муштариён дар 2,5 соли охир дар Дубай",
    top3Label: "муштарӣ аз номаълум ба Top-3 маъруфтарин расиданд",
    top3Sub:
      "дар нишҳо (Амлок, Таъсиси ширкат, Иҷораи мошинҳои люкс, Яхта, Академияи футбол, Косметология, Волейбол, Таъмир, Фароғат)",
    viewsLabel: "намоишҳо барои муштариён",
    agenciesLabel:
      "муштарӣ аз кор рафта, дар 2–10 моҳи ҳамкорӣ агентӣ ва тиҷорати худро кушоданд",
    followers500Label: "пайравон тавассути 60 видео барои як муштарӣ",
    followers100Label: "пайравон дар ҳамагӣ 17 видео (рекорди АМА)",
    revenueLabel: "афзоиши даромад барои тиҷорати мавҷуда",
    startCta: "Бо мо кор сар кунед",
  },
  founder: {
    eyebrow: "Асосгузор",
    role: "Асосгузор ва CEO",
    myInstagram: "Instagram-и агентӣ",
    testimonial:
      "Оғоз кардани бренди шахсӣ ҳеҷ гоҳ дер нест. Ман бренди худро то беҳтарин агентӣ дар Дубай калон кардам — ҳоло муштариён 6 соли таҷриба ва натиҷаи воқеӣ мегиранд.",
    achievements: {
      years: "таҷриба дар SMM",
      followers: "пайравон дар шабакаҳои иҷтимоӣ",
      views: "намоишҳо дар шабакаҳои иҷтимоӣ",
      clients: "муштариёни ҳамкорӣ",
      contracts: "шартномаҳои дарозмуддат",
      partner: "шарики медиавии конфронсҳои калон",
    },
  },
  cases: {
    title: "КЕЙСҲОИ АГЕНТӢ",
    hint: "Визуалҳои муштариён",
    items: {
      cover: {
        name: "Муқоваи клиника",
        result: "Ҳувияти визуалии премиум ва муқоваҳо барои клиника",
      },
      dentistry: {
        name: "Стоматология",
        result: "Системаи пурраи контент барои стоматология — эътимод, лид ва қабул",
      },
      "price-list": {
        name: "Рӯйхати хизматҳо",
        result: "Пешниҳоди равшан, ки тамошобинонро ба муштарӣ табдил медиҳад",
      },
      "before-after": {
        name: "Пеш ва баъд",
        result: "Контенти тағйирот барои эътимод ва исботи иҷтимоӣ",
      },
      "before-after-main": {
        name: "Натиҷаи клиникӣ",
        result: "Креативҳои пеш/баъд бо конверсияи баланд ба қабул",
      },
      "before-after-1": {
        name: "Кейс 01",
        result: "Контенти тағйироти бемор барои Instagram ва реклама",
      },
      "before-after-2": {
        name: "Кейс 02",
        result: "Исботи визуалӣ, ки дархостҳоро зиёд мекунад",
      },
      "before-after-3": {
        name: "Кейс 03",
        result: "Силсилаи пеш/баъд барои обрӯи бренди клиника",
      },
    },
  },
  reels: {
    title: "Рилсҳои муштариён",
    hint: "Слайдери автоматӣ",
    client: "Муштарии Brand Boost",
    items: {
      "reel-1": "Рилси муштарӣ — натиҷаҳои воқеӣ аз соцмедиа",
      "reel-2": "Кейси рушд — контент, ки лид меорад",
      "reel-3": "Аз парда — кор бо муштариён",
    },
  },
  resources: {
    eyebrow: "Маводҳои ройгон",
    title: "Маводҳои ройгони муфид",
    description:
      "Роҳнамо, шаблонҳо ва стратегияҳои исботшуда барои рушди бренд ва калон кардани тиҷорат тавассути соцмедиа.",
    items: {
      "clinic-cover": {
        title: "Системаи муқова барои мавқеи премиум",
        description: "Равиши визуалии омода, то клиника дар лента фарқ кунад",
      },
      "service-list": {
        title: "Креативҳои рӯйхати хизмат, ки мефурӯшанд",
        description: "Формати оффер барои табдили диққат ба қабул",
      },
      "dentistry-content": {
        title: "Контенти стоматология бо эътимод",
        description: "Фреймворк барои клиникаҳо: эътимод, исбот ва лидҳои гарм",
      },
      "before-after-pack": {
        title: "Бастаи пеш/баъд барои исботи иҷтимоӣ",
        description: "Креативҳои тағйирот, ки дархостҳоро зиёд мекунанд",
      },
    },
  },
  contact: {
    titleLine1: "АГАР ШУМО",
    titleLine2: "МЕХОҲЕД",
    description:
      "Формаи кӯтоҳро пур кунед. Маълумоти дуруст диҳед — то мо дар вақти мувофиқ бо шумо тамос гирем.",
    apply: "Ариза",
    formTitle: "Формаи кӯтоҳро пур кунед",
    name: "Номи шумо",
    phone: "Телефон",
    instagram: "Instagram",
    email: "Email",
    income: "Даромади моҳона (USD)",
    privacy: "Ман розӣ ҳастам бо",
    privacyLink: "Сиёсати махфият",
    submit: "Фиристодани ариза",
    thanks: "Ташаккур! Ба зудӣ тамос мегирем.",
    benefits: {
      followers: {
        title: "10 000+ пайравон гиред",
        description: "Аудиторияи вафодор, ки ба бренд бовар дорад",
      },
      popular: {
        title: "Дар ниша маъруф шавед",
        description: "Ҳамчун коршиноси асосӣ дар соҳаи худ фарқ кунед",
      },
      views: {
        title: "Ба 1M+ намоиш дар моҳ расед",
        description: "Контентро ба одамони дуруст нишон диҳед",
      },
      leads: {
        title: "Лидҳоро 2–10 маротиба зиёд кунед",
        description: "Диққатро ба дархостҳои сифатнок табдил диҳед",
      },
      income: {
        title: "Даромадро 2–10 маротиба зиёд кунед",
        description: "Даромадро тавассути рушди органикӣ калон кунед",
      },
    },
    incomeOptions: [
      "USD $0 – $5,000",
      "USD $5,000 – $10,000",
      "USD $10,000 – $20,000",
      "USD $20,000 – $40,000",
      "USD $40,000 – $60,000",
      "Зиёда аз $60,000",
    ],
    errors: {
      nameRequired: "Ном ҳатмист",
      nameShort: "Ном на камтар аз 2 аломат",
      phoneRequired: "Телефон ҳатмист",
      phoneInvalid: "Рақами дуруст ворид кунед",
      igRequired: "Instagram ҳатмист",
      igInvalid: "@handle-и дуруст ворид кунед",
      emailRequired: "Email ҳатмист",
      emailInvalid: "Email-и дуруст ворид кунед",
      incomeRequired: "Даромади моҳонаро интихоб кунед",
      privacyRequired: "Бо Сиёсати махфият розӣ шавед",
    },
  },
  finalCta: {
    before: "Гирифтани пайравон, намоишҳо ва рушди тиҷорат осон аст",
    highlight: "дар зери роҳнамоии мо",
  },
  footer: {
    navigation: "Навигатсия",
    contacts: "Тамосҳо",
    privacy: "Сиёсати махфият",
    rights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
    credit: "Таҳияи сайт —",
  },
  common: {
    openMenu: "Кушодани меню",
    closeMenu: "Пӯшидани меню",
  },
};

export const DICTIONARIES: Record<Lang, Dictionary> = { en, ru, tj };
