export interface UniversityInfo {
  name: string;
  location: string;
  ranking: string;
  programs: string[];
}

export interface AdmissionReq {
  title: string;
  details: string;
}

export interface CostItem {
  category: string;
  range: string;
}

export interface VisaStep {
  step: number;
  title: string;
  description: string;
}

export interface WhyReason {
  title: string;
  description: string;
}

export interface CountryData {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  heroImage: string;
  flagEmoji: string;
  overviewImage: string;
  galleryImages: string[];
  overview: {
    description: string;
    highlights: string[];
    studentPopulation: string;
    qualityRanking: string;
  };
  whyStudy: WhyReason[];
  universities: UniversityInfo[];
  admissionRequirements: AdmissionReq[];
  costOfLiving: {
    tuitionRange: string;
    items: CostItem[];
    currency: string;
    scholarshipNote: string;
  };
  visaProcess: {
    visaType: string;
    processingTime: string;
    steps: VisaStep[];
  };
  workRights: string;
  stats: { label: string; value: string }[];
}

export const countries: Record<string, CountryData> = {
  canada: {
    slug: "canada",
    name: "Canada",
    fullName: "Canada",
    tagline: "World-class education with immigration pathways",
    heroImage:
      "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260",
    flagEmoji: "🇨🇦",
    overviewImage: "https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=800",
    galleryImages: [
      "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2409953/pexels-photo-2409953.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3319342/pexels-photo-3319342.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    overview: {
      description:
        "Canada is one of the most popular destinations for international students, offering globally recognized degrees, a multicultural society, and clear pathways to permanent residency. With over 100 designated learning institutions, Canada provides an exceptional balance of academic rigor, affordability, and post-graduation opportunities.",
      highlights: [
        "Post-Graduation Work Permit (PGWP) up to 3 years",
        "Pathway to Permanent Residency via Express Entry",
        "Multicultural and safe environment",
        "Affordable tuition compared to US & UK",
      ],
      studentPopulation: "800,000+",
      qualityRanking: "Top 10 globally",
    },
    whyStudy: [
      {
        title: "Immigration Pathways",
        description:
          "Canada offers one of the clearest routes from student visa to permanent residency. The Post-Graduation Work Permit (PGWP) allows graduates to work full-time, gaining Canadian experience that strengthens their Express Entry profile.",
      },
      {
        title: "Globally Ranked Universities",
        description:
          "Home to institutions like the University of Toronto, UBC, and McGill — all consistently ranked in the global top 50. Canadian degrees are recognized and respected worldwide.",
      },
      {
        title: "Affordable & High Value",
        description:
          "Tuition fees in Canada are significantly lower than the US and UK, while the quality of education remains world-class. Numerous scholarship and bursary programs are available.",
      },
      {
        title: "Work While Studying",
        description:
          "International students can work up to 20 hours per week during the academic term and full-time during scheduled breaks, helping offset living costs.",
      },
    ],
    universities: [
      {
        name: "University of Toronto",
        location: "Toronto, Ontario",
        ranking: "Top 25 globally",
        programs: ["Engineering", "Business", "Computer Science", "Medicine"],
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, BC",
        ranking: "Top 40 globally",
        programs: ["Forestry", "Environmental Science", "Arts", "Engineering"],
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "Top 30 globally",
        programs: ["Medicine", "Law", "Music", "Sciences"],
      },
      {
        name: "University of Waterloo",
        location: "Waterloo, Ontario",
        ranking: "Top 150 globally",
        programs: ["Computer Science", "Engineering", "Mathematics", "Co-op Programs"],
      },
      {
        name: "University of Alberta",
        location: "Edmonton, Alberta",
        ranking: "Top 120 globally",
        programs: ["AI & Machine Learning", "Energy", "Health Sciences", "Business"],
      },
      {
        name: "University of Montreal",
        location: "Montreal, Quebec",
        ranking: "Top 120 globally",
        programs: ["AI Research", "Law", "Medicine", "Social Sciences"],
      },
    ],
    admissionRequirements: [
      { title: "Academic Transcripts", details: "Minimum 60-75% in previous education (varies by program and university)" },
      { title: "English Proficiency", details: "IELTS 6.0-6.5 overall or TOEFL 80-90 iBT (program dependent)" },
      { title: "Statement of Purpose", details: "A well-written essay explaining academic goals and why you chose Canada" },
      { title: "Letters of Recommendation", details: "2-3 academic or professional references" },
      { title: "Financial Proof", details: "CAD 10,000+ per year for living expenses plus tuition (GIC recommended)" },
      { title: "Valid Passport", details: "Must be valid for the duration of your study program" },
    ],
    costOfLiving: {
      tuitionRange: "CAD 15,000 – 35,000 / year",
      currency: "CAD",
      scholarshipNote: "Many universities offer merit-based scholarships covering 25-100% of tuition for international students.",
      items: [
        { category: "Accommodation", range: "CAD 800 – 1,500 / month" },
        { category: "Food & Groceries", range: "CAD 300 – 500 / month" },
        { category: "Transportation", range: "CAD 100 – 150 / month" },
        { category: "Health Insurance", range: "CAD 600 – 900 / year" },
        { category: "Books & Supplies", range: "CAD 500 – 1,000 / year" },
        { category: "Personal Expenses", range: "CAD 200 – 400 / month" },
      ],
    },
    visaProcess: {
      visaType: "Study Permit",
      processingTime: "4-12 weeks",
      steps: [
        { step: 1, title: "Get Accepted", description: "Receive a Letter of Acceptance from a Designated Learning Institution (DLI)" },
        { step: 2, title: "Gather Documents", description: "Prepare passport, acceptance letter, financial proof (GIC + tuition receipt), photos" },
        { step: 3, title: "Apply Online", description: "Submit your study permit application through IRCC portal with all required documents" },
        { step: 4, title: "Biometrics", description: "Provide biometrics at a designated collection point (fingerprints & photo)" },
        { step: 5, title: "Medical Exam", description: "Complete a medical examination with a panel physician if required" },
        { step: 6, title: "Receive Permit", description: "Get your Port of Entry letter and travel to Canada to receive your study permit" },
      ],
    },
    workRights: "20 hrs/week during study, full-time during breaks, PGWP up to 3 years after graduation",
    stats: [
      { label: "Partner Universities", value: "30+" },
      { label: "Visa Success Rate", value: "94%" },
      { label: "Students Placed", value: "1,200+" },
      { label: "Avg Processing Time", value: "6 weeks" },
    ],
  },
  australia: {
    slug: "australia",
    name: "Australia",
    fullName: "Australia",
    tagline: "Globally ranked universities with exceptional work rights",
    heroImage:
      "https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&w=1260",
    flagEmoji: "🇦🇺",
    overviewImage: "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800",
    galleryImages: [
      "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    overview: {
      description:
        "Australia is home to 7 of the world's top 100 universities and offers an outstanding quality of life. With generous post-study work rights, a strong economy, and a welcoming multicultural society, Australia remains a top choice for ambitious international students.",
      highlights: [
        "Post-Study Work Visa for 2-4 years",
        "7 of the world's top 100 universities",
        "High minimum wage and work rights",
        "Pathways to skilled migration",
      ],
      studentPopulation: "750,000+",
      qualityRanking: "Top 5 globally",
    },
    whyStudy: [
      {
        title: "World-Class Universities",
        description:
          "Australia's Group of Eight universities consistently rank in the global top 100. Degrees from Australian institutions are recognized by employers and academic institutions worldwide.",
      },
      {
        title: "Generous Work Rights",
        description:
          "Students can work up to 48 hours per fortnight during the semester and unlimited hours during breaks. Post-study work visas last 2-4 years depending on your qualification level.",
      },
      {
        title: "High Quality of Life",
        description:
          "Australian cities consistently rank among the world's most livable. Clean environments, excellent healthcare, and a relaxed lifestyle make it an attractive destination.",
      },
      {
        title: "Research & Innovation",
        description:
          "Australia is a global leader in research, with significant contributions in medicine, environmental science, and technology. Students benefit from cutting-edge facilities.",
      },
    ],
    universities: [
      {
        name: "University of Melbourne",
        location: "Melbourne, Victoria",
        ranking: "Top 15 globally",
        programs: ["Medicine", "Law", "Engineering", "Business"],
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        ranking: "Top 30 globally",
        programs: ["Political Science", "Sciences", "Asia-Pacific Studies", "Law"],
      },
      {
        name: "University of Sydney",
        location: "Sydney, NSW",
        ranking: "Top 20 globally",
        programs: ["Architecture", "Medicine", "Engineering", "Arts"],
      },
      {
        name: "UNSW Sydney",
        location: "Sydney, NSW",
        ranking: "Top 20 globally",
        programs: ["Engineering", "Business", "Computer Science", "Design"],
      },
      {
        name: "Monash University",
        location: "Melbourne, Victoria",
        ranking: "Top 45 globally",
        programs: ["Pharmacy", "Engineering", "Education", "IT"],
      },
      {
        name: "University of Queensland",
        location: "Brisbane, Queensland",
        ranking: "Top 45 globally",
        programs: ["Biotech", "Mining", "Tourism", "Environmental Science"],
      },
    ],
    admissionRequirements: [
      { title: "Academic Transcripts", details: "Minimum 60-80% depending on university and program tier" },
      { title: "English Proficiency", details: "IELTS 6.5 overall (no band below 6.0) or PTE Academic 58+" },
      { title: "Statement of Purpose", details: "Genuine Temporary Entrant (GTE) statement required" },
      { title: "Financial Capacity", details: "AUD 21,041/year living costs + tuition + travel (DIBP requirements)" },
      { title: "Health Insurance", details: "Overseas Student Health Cover (OSHC) mandatory for visa duration" },
      { title: "Valid Passport", details: "Must remain valid throughout your intended stay" },
    ],
    costOfLiving: {
      tuitionRange: "AUD 20,000 – 45,000 / year",
      currency: "AUD",
      scholarshipNote: "Australian Government and universities offer scholarships including Australia Awards and institution-specific merit awards.",
      items: [
        { category: "Accommodation", range: "AUD 900 – 1,800 / month" },
        { category: "Food & Groceries", range: "AUD 400 – 600 / month" },
        { category: "Transportation", range: "AUD 100 – 200 / month" },
        { category: "Health Insurance (OSHC)", range: "AUD 500 – 700 / year" },
        { category: "Books & Supplies", range: "AUD 500 – 1,000 / year" },
        { category: "Personal Expenses", range: "AUD 300 – 500 / month" },
      ],
    },
    visaProcess: {
      visaType: "Student Visa (Subclass 500)",
      processingTime: "4-8 weeks",
      steps: [
        { step: 1, title: "Get CoE", description: "Receive a Confirmation of Enrolment (CoE) from your chosen Australian institution" },
        { step: 2, title: "Get OSHC", description: "Purchase Overseas Student Health Cover for the duration of your visa" },
        { step: 3, title: "Apply via ImmiAccount", description: "Lodge your Student Visa application online with GTE statement and documents" },
        { step: 4, title: "Biometrics", description: "Provide biometrics at the nearest Australian visa application center" },
        { step: 5, title: "Health & Character", description: "Complete medical examinations and police clearance certificates" },
        { step: 6, title: "Visa Grant", description: "Receive your visa grant notification and prepare for departure" },
      ],
    },
    workRights: "48 hrs/fortnight during study, unlimited during breaks, post-study work visa 2-4 years",
    stats: [
      { label: "Partner Universities", value: "25+" },
      { label: "Visa Success Rate", value: "96%" },
      { label: "Students Placed", value: "900+" },
      { label: "Avg Processing Time", value: "5 weeks" },
    ],
  },
  europe: {
    slug: "europe",
    name: "Europe",
    fullName: "Continental Europe",
    tagline: "Affordable world-class education with Schengen mobility",
    heroImage:
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260",
    flagEmoji: "🇪🇺",
    overviewImage: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800",
    galleryImages: [
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    overview: {
      description:
        "Europe offers some of the most affordable and high-quality education in the world. Many countries like Germany, France, and Italy offer low or zero tuition at public universities. With the Bologna Process ensuring standardized degrees, Schengen zone mobility, and rich cultural experiences, Europe is an exceptional choice.",
      highlights: [
        "Free or low-cost tuition in Germany, Norway, Finland",
        "Schengen visa allows travel across 27 countries",
        "Bologna Process standardized degree structure",
        "Post-study job-seeker visa in many countries",
      ],
      studentPopulation: "1,500,000+",
      qualityRanking: "Multiple top-50 universities",
    },
    whyStudy: [
      {
        title: "Affordable or Free Tuition",
        description:
          "Public universities in Germany charge zero tuition. Norway, Finland, and several others offer free or minimal-cost education even for international students. This makes Europe one of the most affordable study destinations globally.",
      },
      {
        title: "Schengen Zone Mobility",
        description:
          "Study in one European country and travel freely across 27 Schengen nations. Experience diverse cultures, languages, and opportunities — all with a single student residence permit.",
      },
      {
        title: "Industry-Integrated Programs",
        description:
          "European universities emphasize practical learning with mandatory internships, industry projects, and research collaborations with leading companies like BMW, Siemens, and Airbus.",
      },
      {
        title: "Multilingual Advantage",
        description:
          "Many programs are taught entirely in English, while living in Europe gives you the chance to learn a second language — a significant career advantage in the global job market.",
      },
    ],
    universities: [
      {
        name: "Technical University of Munich",
        location: "Munich, Germany",
        ranking: "Top 50 globally",
        programs: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"],
      },
      {
        name: "Sorbonne University",
        location: "Paris, France",
        ranking: "Top 50 globally",
        programs: ["Humanities", "Sciences", "Medicine", "Law"],
      },
      {
        name: "Politecnico di Milano",
        location: "Milan, Italy",
        ranking: "Top 140 globally",
        programs: ["Architecture", "Design", "Engineering", "Urban Planning"],
      },
      {
        name: "KTH Royal Institute",
        location: "Stockholm, Sweden",
        ranking: "Top 100 globally",
        programs: ["Engineering", "Technology", "Architecture", "Industrial Management"],
      },
      {
        name: "Delft University of Technology",
        location: "Delft, Netherlands",
        ranking: "Top 50 globally",
        programs: ["Aerospace", "Civil Engineering", "Industrial Design", "Architecture"],
      },
      {
        name: "ETH Zurich",
        location: "Zurich, Switzerland",
        ranking: "Top 10 globally",
        programs: ["Engineering", "Natural Sciences", "Mathematics", "Computer Science"],
      },
    ],
    admissionRequirements: [
      { title: "Academic Transcripts", details: "High school diploma or bachelor's degree with strong grades (country-specific requirements)" },
      { title: "English Proficiency", details: "IELTS 6.0-6.5 or TOEFL 80+ for English-taught programs" },
      { title: "Language Certificate", details: "B1-C1 level in local language for programs taught in German, French, Italian, etc." },
      { title: "Motivation Letter", details: "Detailed explanation of academic goals and program fit" },
      { title: "Financial Proof", details: "Blocked account (Germany: EUR 11,208/year) or equivalent financial documentation" },
      { title: "APS Certificate", details: "Required for applicants from certain countries (e.g., China, India for Germany)" },
    ],
    costOfLiving: {
      tuitionRange: "EUR 0 – 15,000 / year",
      currency: "EUR",
      scholarshipNote: "Erasmus Mundus, DAAD (Germany), and country-specific scholarships available. Many fully funded options exist.",
      items: [
        { category: "Accommodation", range: "EUR 400 – 900 / month" },
        { category: "Food & Groceries", range: "EUR 200 – 400 / month" },
        { category: "Transportation", range: "EUR 50 – 100 / month" },
        { category: "Health Insurance", range: "EUR 80 – 120 / month" },
        { category: "Books & Supplies", range: "EUR 300 – 600 / year" },
        { category: "Personal Expenses", range: "EUR 150 – 300 / month" },
      ],
    },
    visaProcess: {
      visaType: "Student Residence Permit",
      processingTime: "4-12 weeks",
      steps: [
        { step: 1, title: "Get Admission", description: "Receive admission letter from a recognized European university" },
        { step: 2, title: "Financial Proof", description: "Open a blocked account or provide sponsorship documents meeting country requirements" },
        { step: 3, title: "Apply for Visa", description: "Submit student visa application at the relevant embassy/consulate" },
        { step: 4, title: "Attend Interview", description: "Attend a visa interview if required (varies by country and nationality)" },
        { step: 5, title: "Health Insurance", description: "Obtain recognized health insurance coverage for your destination country" },
        { step: 6, title: "Register Locally", description: "Upon arrival, register at the local foreigners' office for residence permit" },
      ],
    },
    workRights: "20 hrs/week in most countries, post-study job-seeker visa available (18 months in Germany)",
    stats: [
      { label: "Partner Universities", value: "40+" },
      { label: "Visa Success Rate", value: "92%" },
      { label: "Students Placed", value: "800+" },
      { label: "Countries Covered", value: "12+" },
    ],
  },
  russia: {
    slug: "russia",
    name: "Russia",
    fullName: "Russia",
    tagline: "Affordable STEM & medical education with global recognition",
    heroImage:
      "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=1260",
    flagEmoji: "🇷🇺",
    overviewImage: "https://images.pexels.com/photos/92412/pexels-photo-92412.jpeg?auto=compress&cs=tinysrgb&w=800",
    galleryImages: [
      "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3727255/pexels-photo-3727255.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    overview: {
      description:
        "Russia offers some of the most affordable higher education globally, particularly in STEM, medicine, and engineering. Russian universities have a long tradition of academic excellence, with several institutions ranking among the world's best. The government actively supports international students through scholarships and simplified admission processes.",
      highlights: [
        "Extremely affordable tuition (USD 2K-8K/year)",
        "Strong STEM and medical programs",
        "Government-funded scholarships available",
        "Globally recognized medical degrees",
      ],
      studentPopulation: "350,000+",
      qualityRanking: "Multiple top-300 universities",
    },
    whyStudy: [
      {
        title: "Unmatched Affordability",
        description:
          "With tuition ranging from USD 2,000-8,000 per year and low living costs, Russia offers possibly the most affordable quality education in the world. Numerous government scholarships further reduce costs.",
      },
      {
        title: "STEM & Medical Excellence",
        description:
          "Russia has a storied tradition in physics, mathematics, engineering, and medicine. Russian medical degrees are recognized by WHO and MCI, making it a popular choice for aspiring doctors.",
      },
      {
        title: "Government Scholarships",
        description:
          "The Russian Government Scholarship program offers fully-funded positions to international students annually, covering tuition, accommodation, and a monthly stipend.",
      },
      {
        title: "Rich Cultural Experience",
        description:
          "From Moscow's historical grandeur to St. Petersburg's artistic heritage, studying in Russia offers a uniquely enriching cultural experience alongside world-class academics.",
      },
    ],
    universities: [
      {
        name: "Moscow State University (MSU)",
        location: "Moscow",
        ranking: "Top 100 globally",
        programs: ["Physics", "Mathematics", "Chemistry", "Journalism"],
      },
      {
        name: "ITMO University",
        location: "St. Petersburg",
        ranking: "Top 400 globally",
        programs: ["IT", "Photonics", "Robotics", "Computer Science"],
      },
      {
        name: "St. Petersburg Polytechnic (SPbPU)",
        location: "St. Petersburg",
        ranking: "Top 400 globally",
        programs: ["Engineering", "Nuclear Energy", "Civil Engineering", "IT"],
      },
      {
        name: "Kazan Federal University",
        location: "Kazan",
        ranking: "Top 300 globally",
        programs: ["Medicine", "Oil & Gas", "International Relations", "Law"],
      },
      {
        name: "NUST MISiS",
        location: "Moscow",
        ranking: "Top 500 globally",
        programs: ["Materials Science", "Mining", "Metallurgy", "Nanotechnology"],
      },
      {
        name: "Peoples' Friendship University (RUDN)",
        location: "Moscow",
        ranking: "Top 350 globally",
        programs: ["Medicine", "Engineering", "Humanities", "Agriculture"],
      },
    ],
    admissionRequirements: [
      { title: "Academic Transcripts", details: "High school diploma with minimum 50-60% (program dependent)" },
      { title: "Entrance Exams", details: "Some universities require entrance exams; preparatory year available" },
      { title: "Language Proficiency", details: "Russian language for Russian-medium; IELTS/TOEFL for English-medium programs" },
      { title: "Medical Certificate", details: "Health certificate and HIV test required for visa application" },
      { title: "Financial Documentation", details: "Proof of funds for living expenses (approximately USD 300-500/month)" },
      { title: "Invitation Letter", details: "University provides an official invitation letter required for visa" },
    ],
    costOfLiving: {
      tuitionRange: "USD 2,000 – 8,000 / year",
      currency: "USD",
      scholarshipNote: "Russian Government Scholarship covers full tuition, accommodation, and provides monthly stipend. Apply through your country's Russian embassy.",
      items: [
        { category: "Accommodation (Hostel)", range: "USD 30 – 100 / month" },
        { category: "Food & Groceries", range: "USD 150 – 250 / month" },
        { category: "Transportation", range: "USD 15 – 30 / month" },
        { category: "Health Insurance", range: "USD 100 – 200 / year" },
        { category: "Books & Supplies", range: "USD 100 – 300 / year" },
        { category: "Personal Expenses", range: "USD 100 – 200 / month" },
      ],
    },
    visaProcess: {
      visaType: "Study Visa",
      processingTime: "2-6 weeks",
      steps: [
        { step: 1, title: "Get Invitation", description: "Receive an official invitation letter from your Russian university" },
        { step: 2, title: "Medical Tests", description: "Complete required medical tests including HIV certificate" },
        { step: 3, title: "Apply at Embassy", description: "Submit visa application with invitation, passport, photos, and medical documents" },
        { step: 4, title: "Pay Visa Fee", description: "Pay the applicable visa fee (varies by nationality)" },
        { step: 5, title: "Travel to Russia", description: "Enter Russia and register at your university within 7 working days" },
        { step: 6, title: "Get Registration", description: "Complete migration registration and receive your student ID" },
      ],
    },
    workRights: "20 hrs/week with work permit during study, full-time during vacations",
    stats: [
      { label: "Partner Universities", value: "15+" },
      { label: "Visa Success Rate", value: "97%" },
      { label: "Students Placed", value: "400+" },
      { label: "Avg Tuition/Year", value: "$4,500" },
    ],
  },
  uae: {
    slug: "uae",
    name: "UAE",
    fullName: "United Arab Emirates",
    tagline: "International degrees in a global business hub",
    heroImage:
      "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=1260",
    flagEmoji: "🇦🇪",
    overviewImage: "https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800",
    galleryImages: [
      "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    overview: {
      description:
        "The UAE has rapidly established itself as a world-class education hub, hosting branch campuses of leading global universities alongside strong local institutions. Its strategic location, tax-free economy, and cosmopolitan lifestyle make it an increasingly popular choice for students from the MENA region and beyond.",
      highlights: [
        "Branch campuses of top global universities",
        "Tax-free salary environment post-graduation",
        "Strategic location connecting East and West",
        "Modern infrastructure and safe lifestyle",
      ],
      studentPopulation: "200,000+",
      qualityRanking: "Rapidly rising globally",
    },
    whyStudy: [
      {
        title: "Global University Branches",
        description:
          "The UAE hosts branch campuses of NYU, Sorbonne, Heriot-Watt, and other prestigious institutions. Get an internationally recognized degree while living in one of the world's most dynamic regions.",
      },
      {
        title: "Career Opportunities",
        description:
          "Dubai and Abu Dhabi are global business hubs with thriving industries in finance, technology, tourism, and energy. Graduates have direct access to regional and multinational employers.",
      },
      {
        title: "Safe & Modern",
        description:
          "The UAE offers one of the safest environments globally with world-class infrastructure, healthcare, and public services. The multicultural society welcomes students from 200+ nationalities.",
      },
      {
        title: "No Income Tax",
        description:
          "The UAE's tax-free salary structure means graduates who stay to work keep more of their earnings, making it an attractive post-study destination for career growth.",
      },
    ],
    universities: [
      {
        name: "Khalifa University",
        location: "Abu Dhabi",
        ranking: "Top 200 globally",
        programs: ["Engineering", "Sciences", "Medicine", "IT"],
      },
      {
        name: "American University of Sharjah",
        location: "Sharjah",
        ranking: "Top 400 globally",
        programs: ["Architecture", "Engineering", "Business", "Arts & Sciences"],
      },
      {
        name: "United Arab Emirates University",
        location: "Al Ain",
        ranking: "Top 300 globally",
        programs: ["Education", "Sciences", "Engineering", "Business"],
      },
      {
        name: "Heriot-Watt University Dubai",
        location: "Dubai",
        ranking: "UK Top 30",
        programs: ["Business", "Engineering", "Computing", "Psychology"],
      },
      {
        name: "NYU Abu Dhabi",
        location: "Abu Dhabi",
        ranking: "Top 30 globally (NYU)",
        programs: ["Liberal Arts", "Engineering", "Sciences", "Social Science"],
      },
      {
        name: "University of Birmingham Dubai",
        location: "Dubai",
        ranking: "Top 90 globally (UoB)",
        programs: ["Business", "Computer Science", "Engineering", "Psychology"],
      },
    ],
    admissionRequirements: [
      { title: "Academic Transcripts", details: "Attested high school or bachelor's transcripts with strong grades" },
      { title: "English Proficiency", details: "IELTS 5.5-6.5 or TOEFL 70-90 depending on institution" },
      { title: "EmSAT / SAT Scores", details: "Required by some UAE federal universities for undergraduate admission" },
      { title: "Personal Statement", details: "Statement of purpose explaining academic and career goals" },
      { title: "Financial Proof", details: "Evidence of ability to cover tuition and living expenses" },
      { title: "Medical Fitness", details: "Medical fitness test required upon arrival for residence visa" },
    ],
    costOfLiving: {
      tuitionRange: "AED 30,000 – 80,000 / year",
      currency: "AED",
      scholarshipNote: "Many UAE universities offer merit and need-based scholarships. Government scholarships available for select nationalities.",
      items: [
        { category: "Accommodation", range: "AED 2,000 – 4,500 / month" },
        { category: "Food & Groceries", range: "AED 800 – 1,500 / month" },
        { category: "Transportation", range: "AED 300 – 500 / month" },
        { category: "Health Insurance", range: "AED 2,000 – 4,000 / year" },
        { category: "Books & Supplies", range: "AED 1,000 – 2,000 / year" },
        { category: "Personal Expenses", range: "AED 500 – 1,000 / month" },
      ],
    },
    visaProcess: {
      visaType: "Student Residence Visa",
      processingTime: "2-4 weeks",
      steps: [
        { step: 1, title: "Get Acceptance", description: "Receive official admission and acceptance letter from your UAE institution" },
        { step: 2, title: "University Applies", description: "Your university applies for your student visa / entry permit on your behalf" },
        { step: 3, title: "Entry Permit", description: "Receive entry permit and travel to the UAE within 60 days" },
        { step: 4, title: "Medical Test", description: "Complete mandatory medical fitness test at a UAE health authority center" },
        { step: 5, title: "Emirates ID", description: "Apply for and receive your Emirates ID card" },
        { step: 6, title: "Visa Stamping", description: "Get your student residence visa stamped — valid for 1 year (renewable)" },
      ],
    },
    workRights: "Part-time work allowed with university/employer NOC, post-study work visa available",
    stats: [
      { label: "Partner Universities", value: "20+" },
      { label: "Visa Success Rate", value: "98%" },
      { label: "Students Placed", value: "600+" },
      { label: "Avg Processing Time", value: "3 weeks" },
    ],
  },
};
