
interface JobPlatform {
  name: string;
  description: string;
  url: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface LifeAsIndian {
  title: string;
  description: string;
}

interface CountryInfo {
  id: number;
  slug: string;
  name: string;
  intro: string;
  gradientClass: string;
  benefits: Benefit[];
  industries: string[];
  industryDescriptions: string[];
  requirements: string[];
  jobPlatforms: JobPlatform[];
  salary: {
    average: string;
    costOfLiving: string;
    taxInfo: string;
  };
  lifeAsIndian: LifeAsIndian[];
  services: string[];
}

export const countryData: CountryInfo[] = [
  {
    id: 1,
    slug: "germany",
    name: "Germany",
    intro: "Germany offers excellent career opportunities for skilled professionals from Kolhapur, particularly in engineering, healthcare, and IT sectors. With its strong economy, high standard of living, and well-structured immigration system, Germany has become a top destination for Indian workers seeking international experience.",
    gradientClass: "from-fortune-pink to-fortune-blue",
    benefits: [
      {
        title: "High Salary Standards",
        description: "German employers offer competitive salaries with average annual earnings of €56,000 for skilled professionals, significantly higher than Indian standards."
      },
      {
        title: "Work-Life Balance",
        description: "Germans value leisure time with typical 30 days of paid vacation, shorter working hours (avg. 35-40 hours/week), and strong worker protection laws."
      },
      {
        title: "Opportunities for Indians",
        description: "Acute shortage of skilled workers in STEM fields, healthcare, and trades creates excellent opportunities for qualified candidates from Kolhapur."
      },
      {
        title: "Simplified Visa Process",
        description: "EU Blue Card makes immigration straightforward for highly qualified professionals with job offers above €56,400 annually (€43,992 for shortage occupations)."
      }
    ],
    industries: [
      "Engineering",
      "Information Technology",
      "Healthcare",
      "Automotive",
      "Manufacturing",
      "Research & Development"
    ],
    industryDescriptions: [
      "High demand for mechanical, electrical, and industrial engineers",
      "Critical shortage of software developers, data scientists, and IT specialists",
      "Ongoing need for doctors, nurses, and medical technicians",
      "World-leading sector with opportunities at BMW, Mercedes, VW, and suppliers",
      "Strong industrial base requiring production and quality management experts",
      "Excellent funding for scientific research positions"
    ],
    requirements: [
      "EU Blue Card or German Work Visa (depending on qualification and salary)",
      "Recognized degree (evaluation through Anabin database required)",
      "German language proficiency (typically B1 level, though some IT jobs require only English)",
      "Job offer from a German employer",
      "Proof of health insurance"
    ],
    jobPlatforms: [
      {
        name: "StepStone",
        description: "Germany's leading job portal for professionals with English interface",
        url: "https://www.stepstone.de/en"
      },
      {
        name: "Xing",
        description: "German-focused professional network similar to LinkedIn",
        url: "https://www.xing.com"
      },
      {
        name: "Make it in Germany",
        description: "Official government portal for qualified professionals",
        url: "https://www.make-it-in-germany.com/en/jobs"
      },
      {
        name: "Federal Employment Agency",
        description: "Germany's largest job database",
        url: "https://www.arbeitsagentur.de/en"
      }
    ],
    salary: {
      average: "€3,500 - €6,200 per month (₹3,20,000 - ₹5,70,000) depending on qualification and industry",
      costOfLiving: "Monthly living expenses in major cities range from €1,500 - €2,500 (₹1,35,000 - ₹2,25,000), leaving sufficient savings potential compared to Kolhapur",
      taxInfo: "Progressive tax system with rates between 14% and 45%, plus solidarity surcharge (5.5% of income tax) and church tax if applicable"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Over 150,000 Indians live in Germany, with vibrant communities in cities like Frankfurt, Munich, and Berlin, offering cultural support and networking"
      },
      {
        title: "Cultural Adjustment",
        description: "Germans value punctuality, directness, and privacy. The initial cultural shock is manageable with preparation and open-mindedness"
      },
      {
        title: "Food and Lifestyle",
        description: "Major cities have Indian grocery stores and restaurants. Many Germans appreciate Indian cuisine, making cultural integration easier"
      },
      {
        title: "Climate Difference",
        description: "Much colder than Kolhapur with distinct seasons. Winters can be challenging for those used to Maharashtra's climate"
      }
    ],
    services: [
      "Personalized job matching with German employers",
      "Resume preparation in German format",
      "German language training (A1 to C1 levels)",
      "Interview coaching for German workplace culture",
      "Blue Card and visa application assistance",
      "Credential evaluation guidance",
      "Pre-departure orientation",
      "Post-arrival support and settlement assistance"
    ]
  },
  {
    id: 2,
    slug: "norway",
    name: "Norway",
    intro: "Norway offers exceptional career opportunities with among the highest salaries in Europe and an outstanding quality of life. For professionals from Kolhapur, Norway presents a chance to work in a progressive society with excellent social benefits, work-life balance, and stunning natural surroundings.",
    gradientClass: "from-fortune-blue to-fortune-green",
    benefits: [
      {
        title: "World-Leading Salaries",
        description: "Norway offers among the highest average salaries in Europe, with skilled workers earning approximately NOK 650,000 (₹52 lakhs) annually."
      },
      {
        title: "Excellent Work-Life Balance",
        description: "Standard 37.5-hour work week, 5 weeks paid vacation, generous parental leave, and flexible working arrangements."
      },
      {
        title: "Strong Social Welfare",
        description: "Universal healthcare, excellent public infrastructure, subsidized childcare, and robust pension system cover all legal residents."
      },
      {
        title: "Safe and Clean Environment",
        description: "One of the world's safest countries with pristine nature, clean air, and high environmental standards."
      }
    ],
    industries: [
      "Oil and Gas Engineering",
      "Maritime Industries",
      "Information Technology",
      "Renewable Energy",
      "Healthcare",
      "Construction and Infrastructure"
    ],
    industryDescriptions: [
      "World-leading sector with high demand for petroleum engineers and specialists",
      "Maritime professionals for shipping, vessel design and offshore operations",
      "Growing need for software developers, system architects and data scientists",
      "Expanding sector seeking engineers for hydroelectric, wind and solar power",
      "Ongoing need for doctors, nurses, dentists and elder care specialists",
      "Continued development creating demand for civil engineers and skilled tradespeople"
    ],
    requirements: [
      "Skilled Worker Residence Permit (requires job offer)",
      "Relevant education and qualifications (must be recognized in Norway)",
      "Norwegian language proficiency (not always required for English-speaking tech or oil/gas positions)",
      "Job offer from a Norwegian employer meeting minimum salary requirements",
      "Proof of suitable accommodation"
    ],
    jobPlatforms: [
      {
        name: "NAV.no",
        description: "Official Norwegian Labour and Welfare Administration job portal",
        url: "https://www.nav.no/en/home"
      },
      {
        name: "Finn.no",
        description: "Norway's largest classified ads site with extensive job listings",
        url: "https://www.finn.no/job/browse.html"
      },
      {
        name: "WorkInNorway",
        description: "Official guide for foreign workers with job listings",
        url: "https://www.workinnonway.no/"
      },
      {
        name: "LinkedIn",
        description: "Popular for professional jobs across Norway",
        url: "https://www.linkedin.com/jobs"
      }
    ],
    salary: {
      average: "NOK 45,000 - 75,000 per month (₹3.6 - 6 lakhs) depending on qualification and industry",
      costOfLiving: "Monthly expenses in major cities like Oslo range from NOK 15,000 - 25,000 (₹1.2 - 2 lakhs), higher than Kolhapur but proportional to salaries",
      taxInfo: "Progressive taxation between 22% and 39%, but offers excellent public services in return"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Growing Indian community (approx. 20,000) concentrated in Oslo, Bergen, and Stavanger with cultural associations and events"
      },
      {
        title: "Cultural Differences",
        description: "Norwegians value egalitarianism, directness, and personal space. Initial integration requires understanding these cultural nuances"
      },
      {
        title: "Food and Lifestyle",
        description: "Major cities have Indian grocery stores and restaurants. Many international food options available"
      },
      {
        title: "Climate Challenge",
        description: "Significantly colder than Kolhapur with long, dark winters and mild summers. The midnight sun in summer and polar nights in winter require adjustment"
      }
    ],
    services: [
      "Job matching with Norwegian employers in high-demand sectors",
      "Resume formatting according to Norwegian standards",
      "Basic Norwegian language instruction (if required)",
      "Interview preparation for Norwegian work culture",
      "Assistance with Skilled Worker Residence Permit application",
      "Credential evaluation and recognition process",
      "Housing search assistance",
      "Cultural adaptation training"
    ]
  },
  {
    id: 3,
    slug: "france",
    name: "France",
    intro: "France offers rich professional opportunities for skilled workers from Kolhapur in its diverse economy spanning luxury goods, aerospace, technology, and tourism. With its celebrated quality of life, excellent healthcare and education systems, and vibrant culture, France provides an attractive destination for Indian professionals seeking international career growth.",
    gradientClass: "from-fortune-orange to-fortune-red",
    benefits: [
      {
        title: "Work-Life Balance",
        description: "Legal 35-hour workweek, 5 weeks paid vacation, and strong worker protections create excellent balance between professional and personal life."
      },
      {
        title: "Cultural Richness",
        description: "Immerse yourself in world-renowned arts, cuisine, fashion, and architecture while building your international career."
      },
      {
        title: "Healthcare Excellence",
        description: "Access to France's world-class healthcare system, ranked among the best globally, with comprehensive coverage for workers."
      },
      {
        title: "Strategic Location",
        description: "Central European location provides easy travel access to other European countries for both business and leisure."
      }
    ],
    industries: [
      "Technology",
      "Aerospace Engineering",
      "Luxury and Fashion",
      "Hospitality and Tourism",
      "Healthcare",
      "Financial Services"
    ],
    industryDescriptions: [
      "Growing tech hubs in Paris, Lyon and Sophia Antipolis seeking software engineers and data scientists",
      "Home to Airbus and major aviation suppliers requiring specialized engineers",
      "Global center for luxury brands needing marketing, design and business professionals",
      "World's top tourist destination with ongoing need for multilingual professionals",
      "Demand for medical professionals, research scientists and pharmaceutical experts",
      "Strong banking sector in Paris with opportunities for financial analysts and specialists"
    ],
    requirements: [
      "Talent Passport (for highly skilled workers) or Work Permit",
      "Relevant qualifications (degree verification required)",
      "French language proficiency (varies by position, but B1-B2 recommended for most roles)",
      "Job offer from a French employer",
      "Proof of financial means and accommodation"
    ],
    jobPlatforms: [
      {
        name: "Welcome to France",
        description: "Official government site for foreign professionals",
        url: "https://www.welcometofrance.com/en"
      },
      {
        name: "Pôle Emploi",
        description: "France's national employment agency",
        url: "https://www.pole-emploi.fr"
      },
      {
        name: "APEC",
        description: "Specialized site for executive and management positions",
        url: "https://www.apec.fr"
      },
      {
        name: "LinkedIn",
        description: "Widely used for professional opportunities in France",
        url: "https://www.linkedin.com/jobs"
      }
    ],
    salary: {
      average: "€2,800 - €5,500 per month (₹2.5 - 5 lakhs) depending on qualification, industry and location",
      costOfLiving: "Monthly expenses in Paris around €1,500 - €2,500 (₹1.35 - 2.25 lakhs); significantly lower in other cities",
      taxInfo: "Progressive income tax from 0% to 45% based on income brackets, plus social security contributions of approximately 22%"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Approximately 65,000 Indians live in France, with established communities in Paris, Lyon, and Toulouse providing cultural connection"
      },
      {
        title: "Cultural Integration",
        description: "French society values language proficiency, cultural appreciation, and social etiquette. Learning French significantly eases integration"
      },
      {
        title: "Food Options",
        description: "Indian restaurants and grocery stores available in major cities, especially in Paris. French cuisine is diverse and accommodates vegetarians"
      },
      {
        title: "Weather Comparison",
        description: "Mild climate compared to Kolhapur, with cooler summers and colder winters. Northern France is cooler than the Mediterranean south"
      }
    ],
    services: [
      "Specialized job matching with French employers",
      "French-style CV and cover letter preparation",
      "French language courses (A1 to C1 levels)",
      "Cultural integration training",
      "Assistance with Talent Passport or work permit applications",
      "Qualification recognition guidance",
      "Relocation support and accommodation search",
      "Banking and administrative setup assistance"
    ]
  },
  {
    id: 4,
    slug: "italy",
    name: "Italy",
    intro: "Italy offers unique career opportunities in manufacturing, design, tourism, and engineering for professionals from Kolhapur. Known for its exceptional lifestyle, rich cultural heritage, and family-friendly environment, Italy combines professional growth with quality living in one of Europe's most beautiful countries.",
    gradientClass: "from-fortune-green to-fortune-light",
    benefits: [
      {
        title: "Manufacturing Excellence",
        description: "Italy's strong manufacturing tradition creates opportunities in automation, mechanics, and production management for skilled engineers."
      },
      {
        title: "Quality of Life",
        description: "Enjoy world-renowned cuisine, art, architecture, and a relaxed Mediterranean lifestyle with emphasis on family and leisure."
      },
      {
        title: "EU Benefits",
        description: "Legal employment provides access to Italy's high-quality healthcare system, social security, and free movement within the EU Schengen area."
      },
      {
        title: "Growing Tech Sector",
        description: "Emerging tech hubs in Milan, Turin, and Rome creating new opportunities for IT professionals in traditional Italian industries undergoing digital transformation."
      }
    ],
    industries: [
      "Manufacturing & Engineering",
      "Fashion & Design",
      "Tourism & Hospitality",
      "Agriculture & Food Production",
      "Technology",
      "Automotive"
    ],
    industryDescriptions: [
      "World-class manufacturing requiring mechanical, industrial and automation engineers",
      "Global fashion center seeking design, marketing and production professionals",
      "One of world's top tourist destinations needs hospitality and multilingual staff",
      "Prestigious food sector seeking food technologists and agriculture experts",
      "Growing tech scene in northern cities requiring software and digital specialists",
      "Home to Ferrari, Maserati and Lamborghini with specialized engineering roles"
    ],
    requirements: [
      "EU Blue Card, Work Permit, or Seasonal Work Visa (depending on position)",
      "Relevant educational qualifications (recognition process required)",
      "Italian language proficiency (essential for most positions except multinational companies)",
      "Job offer meeting minimum salary requirements",
      "Registration with local authorities after arrival"
    ],
    jobPlatforms: [
      {
        name: "InfoJobs.it",
        description: "One of Italy's largest job platforms",
        url: "https://www.infojobs.it"
      },
      {
        name: "LinkedIn",
        description: "Popular for professional positions throughout Italy",
        url: "https://www.linkedin.com/jobs"
      },
      {
        name: "Indeed Italy",
        description: "Wide range of positions across sectors",
        url: "https://it.indeed.com"
      },
      {
        name: "EURES",
        description: "European Union job mobility portal",
        url: "https://ec.europa.eu/eures"
      }
    ],
    salary: {
      average: "€1,800 - €4,500 per month (₹1.65 - 4.1 lakhs) depending on industry and qualifications",
      costOfLiving: "Monthly expenses range from €1,200 - €2,000 (₹1.1 - 1.8 lakhs) varying significantly between northern and southern regions",
      taxInfo: "Progressive income tax from 23% to 43%, plus regional tax (1.23% to 3.33%) and municipal tax (0.1% to 0.9%)"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Nearly 180,000 Indians in Italy with communities in Rome, Milan, and northern industrial areas providing cultural support"
      },
      {
        title: "Cultural Integration",
        description: "Italians are generally warm and family-oriented. Italian language proficiency is crucial for full integration into society"
      },
      {
        title: "Food and Lifestyle",
        description: "Indian restaurants and groceries available in major cities. Italian cuisine accommodates vegetarian preferences with many pasta, vegetable and bread options"
      },
      {
        title: "Climate",
        description: "Mediterranean climate is more moderate than Kolhapur with hot, dry summers and mild winters in the south, cooler conditions in the north"
      }
    ],
    services: [
      "Specialized job matching with Italian employers",
      "Italian-style CV preparation",
      "Italian language courses (A1 to C1 levels)",
      "Work permit and visa application assistance",
      "Qualification recognition guidance",
      "Cultural integration training",
      "Housing search assistance in target cities",
      "Administrative support for residency registration"
    ]
  },
  {
    id: 5,
    slug: "ireland",
    name: "Ireland",
    intro: "Ireland has emerged as a leading destination for Indian professionals, particularly in technology, pharmaceuticals, and financial services. With its English-speaking environment, strong economy, and friendly immigration policies for skilled workers, Ireland offers professionals from Kolhapur an excellent gateway to European career opportunities.",
    gradientClass: "from-fortune-light to-fortune-green",
    benefits: [
      {
        title: "English-Speaking Environment",
        description: "Work and integrate without language barriers in the EU's only primarily English-speaking country (after Brexit)."
      },
      {
        title: "Tech Hub Status",
        description: "Home to European headquarters of Google, Facebook, Apple, Microsoft, and hundreds of tech companies offering competitive positions."
      },
      {
        title: "Indian-Friendly Policies",
        description: "Strong diplomatic relations with India, established Indian community, and Clear Skill Shortage Lists make immigration relatively straightforward for qualified professionals."
      },
      {
        title: "Gateway to Europe",
        description: "EU membership provides access to the entire European market while maintaining strong connections with the US and UK."
      }
    ],
    industries: [
      "Information Technology",
      "Pharmaceuticals & Medical Devices",
      "Financial Services",
      "Healthcare",
      "Engineering",
      "Customer Support"
    ],
    industryDescriptions: [
      "Major tech hub with thousands of positions in programming, data science and product management",
      "Home to major pharmaceutical manufacturers requiring specialists in production, quality, and R&D",
      "Significant financial sector in Dublin with roles in analysis, compliance and fintech",
      "Ongoing need for doctors, nurses, and allied health professionals",
      "Demand for various engineering specialists across multiple industries",
      "Multilingual customer support centers for major multinationals"
    ],
    requirements: [
      "Critical Skills Employment Permit (for in-demand occupations) or General Employment Permit",
      "Relevant qualifications (degree verification may be required)",
      "Job offer meeting minimum salary thresholds (€32,000 for Critical Skills or €30,000 for General Permit)",
      "Registration with relevant professional bodies for regulated professions",
      "Proof of health insurance"
    ],
    jobPlatforms: [
      {
        name: "IrishJobs.ie",
        description: "One of Ireland's leading job sites",
        url: "https://www.irishjobs.ie"
      },
      {
        name: "LinkedIn",
        description: "Very popular for professional roles throughout Ireland",
        url: "https://www.linkedin.com/jobs"
      },
      {
        name: "Indeed Ireland",
        description: "Broad range of positions across various sectors",
        url: "https://ie.indeed.com"
      },
      {
        name: "Tech/Life Ireland",
        description: "Specialized in technology positions",
        url: "https://www.techlifeireland.com"
      }
    ],
    salary: {
      average: "€45,000 - €75,000 per year (₹37 - 62 lakhs) for qualified professionals in in-demand sectors",
      costOfLiving: "Monthly expenses in Dublin around €1,800 - €2,500 (₹1.5 - 2.1 lakhs), significantly lower in other cities",
      taxInfo: "Progressive system with 20% on earnings up to €36,800 and 40% above that, plus Universal Social Charge (0.5% to 8%) and PRSI (4%)"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Over 45,000 Indians in Ireland with a vibrant community offering temples, cultural events, and social networks especially in Dublin and Cork"
      },
      {
        title: "Cultural Adaptation",
        description: "Irish culture is welcoming, with many parallels to Indian values around family, community, and hospitality"
      },
      {
        title: "Food and Lifestyle",
        description: "Growing number of Indian restaurants and grocery stores in major cities. Indian cuisine is popular among locals"
      },
      {
        title: "Weather Difference",
        description: "Temperate maritime climate with mild but very rainy conditions year-round, quite different from Kolhapur's hot, seasonal climate"
      }
    ],
    services: [
      "Job matching with Irish employers in high-demand sectors",
      "CV optimization for Irish employers",
      "Critical Skills Employment Permit application assistance",
      "Interview preparation for Irish corporate culture",
      "Professional registration guidance if required",
      "Accommodation search support in major Irish cities",
      "Family reunification assistance",
      "Banking and settlement support"
    ]
  },
  {
    id: 6,
    slug: "united-kingdom",
    name: "United Kingdom",
    intro: "The United Kingdom offers diverse career opportunities for professionals from Kolhapur across healthcare, technology, engineering, and education sectors. With its world-renowned universities, global business centers, and established Indian community, the UK provides both professional growth and cultural familiarity for Indian workers.",
    gradientClass: "from-fortune-blue to-fortune-green",
    benefits: [
      {
        title: "English Language Advantage",
        description: "Work in an English-speaking environment where communication skills from Kolhapur's English education system provide immediate advantages."
      },
      {
        title: "Strong Indian Diaspora",
        description: "The UK hosts over 1.5 million people of Indian origin, offering built-in community support and networking opportunities."
      },
      {
        title: "Skilled Worker Visa System",
        description: "Post-Brexit immigration system specifically targets qualified workers in shortage occupations, many aligning with Indian professional strengths."
      },
      {
        title: "Career Progression",
        description: "Structured professional advancement opportunities with clear paths for growth across multiple industries."
      }
    ],
    industries: [
      "Healthcare",
      "Information Technology",
      "Engineering",
      "Finance & Banking",
      "Education",
      "Hospitality & Tourism"
    ],
    industryDescriptions: [
      "Critical staff shortages in NHS creating openings for doctors, nurses and allied health professionals",
      "Growing tech hubs in London, Manchester and Edinburgh seeking developers and digital specialists",
      "Continued demand across civil, mechanical and electrical engineering disciplines",
      "London's financial center requires analysts, compliance specialists and fintech experts",
      "Universities and schools seeking qualified teachers and lecturers",
      "Hospitality sector recovery creating management opportunities for experienced professionals"
    ],
    requirements: [
      "Skilled Worker Visa (requires job offer from approved sponsor)",
      "Relevant qualifications (recognition through UK NARIC/ENIC)",
      "English language proficiency (usually IELTS score of 6.0+)",
      "Meeting minimum salary thresholds (varies by occupation)",
      "Healthcare surcharge payment for NHS access"
    ],
    jobPlatforms: [
      {
        name: "Reed.co.uk",
        description: "One of UK's largest job sites",
        url: "https://www.reed.co.uk"
      },
      {
        name: "NHS Jobs",
        description: "Official healthcare sector recruitment",
        url: "https://www.jobs.nhs.uk"
      },
      {
        name: "LinkedIn",
        description: "Widely used across professional sectors",
        url: "https://www.linkedin.com/jobs"
      },
      {
        name: "Indeed UK",
        description: "Broad range of positions across sectors",
        url: "https://uk.indeed.com"
      }
    ],
    salary: {
      average: "£30,000 - £60,000 per year (₹30 - 60 lakhs) depending on industry, location and experience",
      costOfLiving: "Monthly expenses in London around £1,800 - £2,500 (₹1.8 - 2.5 lakhs), significantly lower outside London",
      taxInfo: "Progressive income tax with rates of 20% (£12,571-£50,270), 40% (£50,271-£125,140), and 45% (above £125,140), plus National Insurance contributions"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Largest ethnic minority in the UK with established communities in London, Birmingham, Manchester, and Leicester offering cultural continuity"
      },
      {
        title: "Cultural Integration",
        description: "Multiculturalism is established in UK cities, making integration relatively easier with many Indian cultural events and celebrations"
      },
      {
        title: "Food and Lifestyle",
        description: "Indian cuisine is widely popular with grocery stores, restaurants and cultural centers in all major cities"
      },
      {
        title: "Weather Adaptation",
        description: "Much cooler and wetter than Kolhapur, with mild temperatures year-round and limited sunshine, especially in winter"
      }
    ],
    services: [
      "Job matching with UK employers in shortage occupation sectors",
      "UK-style CV and cover letter optimization",
      "Certificate of Sponsorship guidance",
      "Skilled Worker Visa application assistance",
      "IELTS preparation if required",
      "UK qualification recognition support",
      "Housing search assistance across UK regions",
      "Family visa and settlement support"
    ]
  },
  {
    id: 7,
    slug: "spain",
    name: "Spain",
    intro: "Spain offers growing opportunities for professionals from Kolhapur across tourism, agriculture and technology sectors. With its exceptional quality of life, pleasant climate, and increasingly international business environment, Spain provides an attractive destination for Indian workers seeking professional growth in a welcoming Mediterranean culture.",
    gradientClass: "from-fortune-orange to-fortune-red",
    benefits: [
      {
        title: "Quality of Life",
        description: "Exceptional work-life balance with strong emphasis on leisure, family time, and social connection in a Mediterranean lifestyle."
      },
      {
        title: "Affordable Living",
        description: "Lower cost of living than many Northern European countries, especially outside Madrid and Barcelona, allowing for comfortable lifestyle."
      },
      {
        title: "Favorable Climate",
        description: "Warm, sunny Mediterranean climate with mild winters offers comfortable conditions year-round, particularly appealing for those from Kolhapur."
      },
      {
        title: "Emerging Tech Hubs",
        description: "Barcelona and Madrid are developing as major technology centers with increasing demand for skilled IT professionals from abroad."
      }
    ],
    industries: [
      "Tourism & Hospitality",
      "Information Technology",
      "Agriculture & Food Production",
      "Renewable Energy",
      "Automotive",
      "Healthcare"
    ],
    industryDescriptions: [
      "Major tourism destination requiring hospitality professionals with language skills",
      "Growing tech hubs in Barcelona and Madrid seeking developers and digital specialists",
      "Advanced agricultural sector needing agricultural engineers and food scientists",
      "Leading renewable energy sector with opportunities in solar and wind technologies",
      "Strong automotive manufacturing requiring engineers and production specialists",
      "Increasing demand for healthcare professionals across various specializations"
    ],
    requirements: [
      "Work Visa or EU Blue Card (requires job offer)",
      "Relevant qualifications (homologation process required)",
      "Spanish language proficiency (essential for most positions)",
      "Job offer meeting minimum salary requirements",
      "Proof of health insurance"
    ],
    jobPlatforms: [
      {
        name: "InfoJobs.net",
        description: "Spain's largest job portal",
        url: "https://www.infojobs.net"
      },
      {
        name: "LinkedIn",
        description: "Popular for professional positions across Spain",
        url: "https://www.linkedin.com/jobs"
      },
      {
        name: "Indeed Spain",
        description: "Wide range of positions across sectors",
        url: "https://es.indeed.com"
      },
      {
        name: "Barcelona Digital Talent",
        description: "Tech-focused opportunities in Barcelona",
        url: "https://barcelonadigitaltalent.com"
      }
    ],
    salary: {
      average: "€25,000 - €50,000 per year (₹21 - 42 lakhs) depending on industry and location",
      costOfLiving: "Monthly expenses in Madrid/Barcelona around €1,200 - €1,800 (₹1 - 1.5 lakhs), lower in smaller cities",
      taxInfo: "Progressive income tax from 19% to 47% (varies by region), plus social security contributions of approximately 6.35%"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Growing Indian community (approximately 55,000) concentrated in Madrid, Barcelona, and Valencia with cultural associations"
      },
      {
        title: "Cultural Adaptation",
        description: "Spanish culture values relationships, social life, and leisure. The pace of life is different from India, with later mealtimes and work schedules"
      },
      {
        title: "Food Options",
        description: "Indian restaurants and grocery stores available in major cities. Spanish Mediterranean diet offers many vegetarian options"
      },
      {
        title: "Climate Comparison",
        description: "Mediterranean climate similar to parts of India but less extreme, with hot summers and mild winters, especially in coastal areas"
      }
    ],
    services: [
      "Job matching with Spanish employers in growth sectors",
      "Spanish-style CV preparation",
      "Spanish language courses (A1 to C1 levels)",
      "Work visa application support",
      "Qualification homologation assistance",
      "Cultural integration guidance",
      "Housing search in major Spanish cities",
      "NIE (Foreigner ID Number) and registration support"
    ]
  },
  {
    id: 8,
    slug: "netherlands",
    name: "Netherlands",
    intro: "The Netherlands offers exceptional career opportunities for professionals from Kolhapur, particularly in technology, engineering, and logistics sectors. With its English-friendly business environment, excellent work-life balance, and efficient immigration procedures, the Netherlands has become a preferred destination for skilled Indian workers.",
    gradientClass: "from-fortune-pink to-fortune-orange",
    benefits: [
      {
        title: "English-Speaking Workplace",
        description: "Over 90% of Dutch people speak English, allowing most professionals to work without needing to learn Dutch immediately."
      },
      {
        title: "Superior Work-Life Balance",
        description: "Average 36-40 hour work week, generous vacation time, and family-friendly policies create healthy balance."
      },
      {
        title: "Tax Benefits for Skilled Migrants",
        description: "The 30% ruling provides tax-free allowance on 30% of your gross salary for qualified international employees."
      },
      {
        title: "International Environment",
        description: "One of Europe's most diverse countries with large international communities and multicultural workplaces."
      }
    ],
    industries: [
      "Information Technology",
      "Engineering & Manufacturing",
      "Logistics & Supply Chain",
      "Agriculture & Food Science",
      "Healthcare",
      "Finance & FinTech"
    ],
    industryDescriptions: [
      "Strong tech scene in Amsterdam, Eindhoven and Utrecht with high demand for developers",
      "Advanced manufacturing requiring mechanical, electrical and industrial engineers",
      "Europe's logistics gateway creating opportunities in supply chain management",
      "Innovative agricultural sector seeking food scientists and agricultural engineers",
      "Growing need for healthcare professionals across various specializations",
      "Strong financial sector in Amsterdam with increasing fintech presence"
    ],
    requirements: [
      "Highly Skilled Migrant Permit (requires job offer from recognized sponsor)",
      "Relevant educational qualifications (credential evaluation may be needed)",
      "Meeting minimum salary threshold (€4,840 monthly for 30+ years, €3,549 for under 30)",
      "Valid passport and residence permit application",
      "Health insurance after arrival"
    ],
    jobPlatforms: [
      {
        name: "Indeed Netherlands",
        description: "Wide range of English-language job listings",
        url: "https://nl.indeed.com"
      },
      {
        name: "LinkedIn",
        description: "Very popular for professional roles across the Netherlands",
        url: "https://www.linkedin.com/jobs"
      },
      {
        name: "Together Abroad",
        description: "Specialized in jobs for international candidates",
        url: "https://www.togetherabroad.nl"
      },
      {
        name: "Undutchables",
        description: "Recruitment agency for international professionals",
        url: "https://undutchables.nl"
      }
    ],
    salary: {
      average: "€3,500 - €6,000 per month (₹3.2 - 5.5 lakhs) for skilled professionals",
      costOfLiving: "Monthly expenses around €1,500 - €2,200 (₹1.35 - 2 lakhs) in major cities like Amsterdam, lower in other regions",
      taxInfo: "Progressive income tax system with rates from 36.93% to 49.5%, offset for skilled migrants by the 30% ruling tax advantage"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Approximately 40,000 Indians in the Netherlands with active communities in Amsterdam, Eindhoven, and Rotterdam"
      },
      {
        title: "Cultural Integration",
        description: "Dutch culture values directness, punctuality, and egalitarianism. The society is liberal, progressive, and generally welcoming to foreigners"
      },
      {
        title: "Food and Lifestyle",
        description: "Indian restaurants and grocery stores available in major cities. Indian cuisine is popular among Dutch people"
      },
      {
        title: "Weather Adaptation",
        description: "Much cooler than Kolhapur with frequent rain, wind, and overcast days. Winters are cold with limited daylight hours"
      }
    ],
    services: [
      "Job matching with Dutch employers in high-demand sectors",
      "Dutch-style CV optimization",
      "Highly Skilled Migrant Permit application assistance",
      "30% ruling application guidance",
      "Housing search in competitive Dutch rental markets",
      "Basic Dutch language courses for daily life",
      "BSN (citizen service number) registration support",
      "Banking and practical settlement assistance"
    ]
  },
  {
    id: 9,
    slug: "sweden",
    name: "Sweden",
    intro: "Sweden offers exceptional professional opportunities for skilled workers from Kolhapur in technology, engineering, and green industries. With its innovation-focused economy, excellent social benefits, and progressive work culture, Sweden provides an attractive destination for Indian professionals seeking work-life balance and career advancement.",
    gradientClass: "from-fortune-blue to-fortune-light",
    benefits: [
      {
        title: "Innovation Leader",
        description: "Home to global companies like Ericsson, Volvo, and Spotify, with strong emphasis on research and development."
      },
      {
        title: "Work-Life Balance Excellence",
        description: "Standard 40-hour workweek, 5-6 weeks paid vacation, 480 days of parental leave, and flexible working arrangements."
      },
      {
        title: "Comprehensive Social Benefits",
        description: "Universal healthcare, heavily subsidized childcare, free education, and robust social security system for all legal residents."
      },
      {
        title: "English-Friendly Workplace",
        description: "Over 80% of Swedes speak excellent English, allowing international professionals to work without immediate Swedish language proficiency."
      }
    ],
    industries: [
      "Information Technology",
      "Engineering & Manufacturing",
      "Green Technology",
      "Life Sciences",
      "Automotive",
      "Gaming & Digital Entertainment"
    ],
    industryDescriptions: [
      "Stockholm is a major European tech hub with thousands of developer and IT specialist positions",
      "Advanced manufacturing sector requiring various engineering specializations",
      "Leading sustainability sector with opportunities in renewable energy and environmental technology",
      "Strong pharmaceutical and biotech industries seeking researchers and specialists",
      "Home to Volvo and other automotive companies requiring specialized engineers",
      "World-leading gaming industry with studios like King, DICE, and Mojang"
    ],
    requirements: [
      "Work Permit (requires job offer)",
      "Relevant educational qualifications (credential evaluation may be required)",
      "Job offer meeting minimum salary and working condition requirements",
      "Comprehensive health insurance (initially, before receiving personnummer)",
      "Proof of accommodation"
    ],
    jobPlatforms: [
      {
        name: "Arbetsförmedlingen",
        description: "Sweden's public employment service",
        url: "https://arbetsformedlingen.se/platsbanken"
      },
      {
        name: "LinkedIn",
        description: "Very popular for professional positions throughout Sweden",
        url: "https://www.linkedin.com/jobs"
      },
      {
        name: "The Local",
        description: "English-language job listings across Sweden",
        url: "https://www.thelocal.se/jobs"
      },
      {
        name: "TechJobs Sweden",
        description: "Specialized in technology positions",
        url: "https://www.techjobs.se"
      }
    ],
    salary: {
      average: "SEK 35,000 - 60,000 per month (₹3 - 5.1 lakhs) depending on industry and experience",
      costOfLiving: "Monthly expenses around SEK 12,000 - 18,000 (₹1 - 1.5 lakhs) in major cities like Stockholm, somewhat lower in smaller cities",
      taxInfo: "Progressive taxation between 30% and 55%, providing extensive public services and social benefits in return"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Growing Indian community (approximately 25,000) concentrated in Stockholm, Gothenburg, and Malmö with cultural associations"
      },
      {
        title: "Cultural Differences",
        description: "Swedish culture values equality, personal space, and consensus. The concept of 'lagom' (moderation) influences social interactions"
      },
      {
        title: "Food Options",
        description: "Indian restaurants and specialty stores available in major cities. International food options widely available"
      },
      {
        title: "Climate Challenge",
        description: "Much colder than Kolhapur with long, dark winters and short summers. Stockholm averages -3°C in winter and 18°C in summer"
      }
    ],
    services: [
      "Job matching with Swedish employers in innovation sectors",
      "Swedish-style CV and personal letter preparation",
      "Work permit application assistance",
      "Housing search support in competitive urban markets",
      "Personnummer (personal ID number) registration guidance",
      "Basic Swedish language courses for daily life",
      "Family integration support",
      "Banking and practical settlement assistance"
    ]
  },
  {
    id: 10,
    slug: "poland",
    name: "Poland",
    intro: "Poland has emerged as an attractive destination for professionals from Kolhapur seeking European career opportunities with more affordable living costs. With its rapidly growing economy, expanding IT sector, and straightforward immigration procedures, Poland offers Indian workers a combination of career development and comfortable lifestyle.",
    gradientClass: "from-fortune-red to-fortune-pink",
    benefits: [
      {
        title: "Affordable European Living",
        description: "Significantly lower cost of living than Western European countries while maintaining high quality of life and infrastructure."
      },
      {
        title: "Growing IT Hub",
        description: "Rapidly expanding technology sector with major international companies establishing offices in Warsaw, Krakow, and Wroclaw."
      },
      {
        title: "Fast-Track Work Permits",
        description: "Streamlined immigration procedures for IT specialists, engineers, and other in-demand professionals from non-EU countries."
      },
      {
        title: "Gateway to EU",
        description: "EU membership provides potential pathway to work in other European countries after obtaining Polish residency."
      }
    ],
    industries: [
      "Information Technology",
      "Business Services",
      "Manufacturing & Engineering",
      "Logistics & Transportation",
      "Banking & Finance",
      "Healthcare"
    ],
    industryDescriptions: [
      "Booming IT sector with thousands of developer and specialist positions in major cities",
      "Over 1,400 business service centers employing multilingual professionals",
      "Strong industrial base requiring various engineering specializations",
      "Strategic location creating opportunities in supply chain and transportation management",
      "Expanding financial sector with international banks establishing operations",
      "Growing demand for healthcare professionals especially specialists"
    ],
    requirements: [
      "Work Permit or Blue Card (requires job offer)",
      "Relevant educational qualifications (credential evaluation may be required)",
      "Job offer meeting labor market requirements",
      "Proof of accommodation",
      "Health insurance"
    ],
    jobPlatforms: [
      {
        name: "Pracuj.pl",
        description: "Poland's largest job portal",
        url: "https://www.pracuj.pl"
      },
      {
        name: "LinkedIn",
        description: "Popular for professional positions throughout Poland",
        url: "https://www.linkedin.com/jobs"
      },
      {
        name: "No Fluff Jobs",
        description: "IT-specific job portal with English interface",
        url: "https://nofluffjobs.com"
      },
      {
        name: "Just Join IT",
        description: "Specialized in tech positions across Poland",
        url: "https://justjoin.it"
      }
    ],
    salary: {
      average: "PLN 7,000 - 15,000 per month (₹1.35 - 2.9 lakhs) for skilled professionals",
      costOfLiving: "Monthly expenses around PLN 3,000 - 5,000 (₹58,000 - 97,000) in major cities, significantly lower than Western Europe",
      taxInfo: "Progressive income tax with rates of 17% and 32%, plus healthcare contribution of 9%"
    },
    lifeAsIndian: [
      {
        title: "Indian Community",
        description: "Small but growing Indian community (approximately 10,000) primarily in Warsaw and Krakow with emerging cultural associations"
      },
      {
        title: "Cultural Integration",
        description: "Polish society is becoming increasingly multicultural in urban areas, though English proficiency varies outside professional settings"
      },
      {
        title: "Food Options",
        description: "Indian restaurants available in major cities, though fewer than in Western Europe. International grocery options expanding"
      },
      {
        title: "Weather Comparison",
        description: "Continental climate with cold winters (-5°C to 0°C) and mild summers (15°C to 25°C), quite different from Kolhapur's tropical climate"
      }
    ],
    services: [
      "Job matching with Polish employers seeking international talent",
      "Polish-style CV preparation",
      "Work permit and temporary residence permit application assistance",
      "Housing search support in major Polish cities",
      "Basic Polish language introduction for daily situations",
      "PESEL (national identification number) registration",
      "Banking and practical settlement assistance",
      "Cultural integration support"
    ]
  }
];
