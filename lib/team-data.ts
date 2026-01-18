export interface TeamMember {
  id: string;
  name: string;
  role: string;
  vertical: string;
  image?: string;

  // ✅ added to fix TS2339 errors
  imageScale?: string;
  imagePosition?: string;
}

export interface Vertical {
  name: string;
  description: string;
}

export const verticals: Vertical[] = [
  { name: "Fest Secretaries", description: "Leading Agneepath 7.0" },
  { name: "Deputy Fest Secretaries", description: "Supporting the core leadership" },
  { name: "Sponsorships & Headliners", description: "Building partnerships and securing headliners" },
  { name: "Finance", description: "Managing budgets and financial operations" },
  { name: "Social Media, Design & Marketing", description: "Creating content and managing outreach" },
  { name: "Events and Logistics", description: "Coordinating events and operations" },
  { name: "Safety and Security", description: "Ensuring safety for all participants" },
  { name: "Outreach & Registration Desk", description: "Managing registrations and communications" },
  { name: "Travel & Hospitality", description: "Coordinating travel and accommodation" },
  { name: "Decor and Ceremonies", description: "Creating memorable experiences" },
  { name: "HR, Legal and Documentation", description: "Managing human resources and compliance" },
  { name: "Tech", description: "Building and maintaining digital infrastructure" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Bhavya Sood",
    role: "Fest Secretary",
    vertical: "Fest Secretaries",
    image: "/team/bhavya-sood.jpg",
    imageScale: "scale-140",
    imagePosition: "object-[50%_20%]",
  },
  {
    id: "2",
    name: "Adviti Basu",
    role: "Fest Secretary",
    vertical: "Fest Secretaries",
    image: "/team/adviti-basu.jpg",
    imageScale: "scale-150",
    imagePosition: "object-[50%_70%]",
  },

  {
    id: "3",
    name: "Diya Sandhir",
    role: "Deputy Fest Secretary",
    vertical: "Deputy Fest Secretaries",
    image: "/team/diya-sandhir.jpeg",
    imageScale: "scale-100",
    imagePosition: "object-[50%_70%]",
  },
  {
    id: "4",
    name: "Antara Malhotra",
    role: "Deputy Fest Secretary",
    vertical: "Deputy Fest Secretaries",
    image: "/team/antara-malhotra.jpeg",
  },
  {
    id: "soham-mishra",
    name: "Soham Mishra",
    role: "Deputy Fest Secretary",
    vertical: "Deputy Fest Secretaries",
    image: "/team/soham-mishra.jpg",
  },
  {
    id: "6",
    name: "Kunal Bansal",
    role: "Deputy Fest Secretary",
    vertical: "Deputy Fest Secretaries",
    image: "/team/kunal-bansal.jpeg",
  },

  {
    id: "7",
    name: "Ambika Mishra",
    role: "Sponsorships & Headliners",
    vertical: "Sponsorships & Headliners",
    image: "/team/ambika-mishra.jpg",
  },
  {
    id: "8",
    name: "Rida Khan",
    role: "Sponsorships & Headliners",
    vertical: "Sponsorships & Headliners",
    image: "/team/rida-khan.jpg",
  },
  {
    id: "9",
    name: "Kartik Khandelwal",
    role: "Sponsorships & Headliners",
    vertical: "Sponsorships & Headliners",
    image: "/team/kartik-khandelwal.jpg",
  },

  {
    id: "10",
    name: "Arshiya Goyal",
    role: "Finance",
    vertical: "Finance",
    image: "/team/arshiya-goyal.jpg",
  },
  {
    id: "11",
    name: "Varsha Meesala",
    role: "Finance",
    vertical: "Finance",
    image: "/team/varsha-meesala.jpeg",
  },
  {
    id: "12",
    name: "Maehar Parkar",
    role: "Finance",
    vertical: "Finance",
    image: "/team/maehar-parkar.jpg",
  },

  {
    id: "13",
    name: "Tejasvini Yadav",
    role: "Social Media, Design & Marketing",
    vertical: "Social Media, Design & Marketing",
    image: "/team/tejasvini-yadav.jpg",
  },
  {
    id: "14",
    name: "Avani Goel",
    role: "Social Media, Design & Marketing",
    vertical: "Social Media, Design & Marketing",
    image: "/team/avani-goel.jpg",
  },
  {
    id: "15",
    name: "Khushi Sethi",
    role: "Social Media, Design & Marketing",
    vertical: "Social Media, Design & Marketing",
    image: "/team/khushi-sethi.jpg",
  },
  {
    id: "16",
    name: "Lakshya Kapoor",
    role: "Social Media, Design & Marketing",
    vertical: "Social Media, Design & Marketing",
    image: "/team/lakshya-kapoor.jpg",
  },

  {
    id: "17",
    name: "Siddharth Bhatnagar",
    role: "Events and Logistics",
    vertical: "Events and Logistics",
    image: "/team/siddharth-bhatnagar.jpg",
  },
  {
    id: "18",
    name: "Parth Agarwal",
    role: "Events and Logistics",
    vertical: "Events and Logistics",
    image: "/team/parth-agarwal.jpg",
  },
  {
    id: "19",
    name: "Akshitha Ashok",
    role: "Events and Logistics",
    vertical: "Events and Logistics",
    image: "/team/akshitha-ashok.jpg",
  },
  {
    id: "20",
    name: "Sanaya Mehta",
    role: "Events and Logistics",
    vertical: "Events and Logistics",
    image: "/team/sanaya-mehta.jpg",
  },

  {
    id: "21",
    name: "Manoj N",
    role: "Safety and Security",
    vertical: "Safety and Security",
    image: "/team/manoj.jpeg",
  },
  {
    id: "22",
    name: "Muhammed Razin",
    role: "Safety and Security",
    vertical: "Safety and Security",
    image: "/team/razin.jpg",
  },
  {
    id: "23",
    name: "Veda Samhita",
    role: "Safety and Security",
    vertical: "Safety and Security",
    image: "/team/veda-samhita.jpg",
  },

  {
    id: "24",
    name: "Vidishaa Mundhra",
    role: "Outreach & Registration Desk",
    vertical: "Outreach & Registration Desk",
    image: "/team/vidishaa-mundhra.jpeg",
  },
  {
    id: "25",
    name: "Jiya Vaya",
    role: "Outreach & Registration Desk",
    vertical: "Outreach & Registration Desk",
    image: "/team/jiya-vaya.jpg",
  },
  {
    id: "26",
    name: "Nishka Desai",
    role: "Outreach & Registration Desk",
    vertical: "Outreach & Registration Desk",
    image: "/team/Nishka-Desai.jpeg",
  },

  {
    id: "27",
    name: "Gia Doshi",
    role: "Travel & Hospitality",
    vertical: "Travel & Hospitality",
    image: "/team/gia-doshi.jpg",
  },
  {
    id: "28",
    name: "Mahtab Kaur",
    role: "Travel & Hospitality",
    vertical: "Travel & Hospitality",
    image: "/team/mahtab-kaur.jpg",
  },
  {
    id: "29",
    name: "Anshul Tekriwal",
    role: "Travel & Hospitality",
    vertical: "Travel & Hospitality",
    image: "/team/anshul.tekriwal.jpg",
  },
  {
    id: "38",
    name: "Minal Priya",
    role: "Travel & Hospitality",
    vertical: "Travel & Hospitality",
    image: "/team/minal-priya.jpg",
  },

  {
    id: "30",
    name: "Rajita Rai",
    role: "Decor and Ceremonies",
    vertical: "Decor and Ceremonies",
    image: "/team/rajita-rai.jpg",
  },
  {
    id: "31",
    name: "Aadya Saxena",
    role: "Decor and Ceremonies",
    vertical: "Decor and Ceremonies",
    image: "/team/aadya-saxena.jpg",
  },

  {
    id: "32",
    name: "Manya Kapoor",
    role: "HR, Legal and Documentation",
    vertical: "HR, Legal and Documentation",
    image: "/team/manya-kapoor.jpg",
  },
  {
    id: "33",
    name: "Anshika Sarraf",
    role: "HR, Legal and Documentation",
    vertical: "HR, Legal and Documentation",
    image: "/team/anshikasarraf.jpg",
  },

  {
    id: "34",
    name: "Nitin S",
    role: "Tech",
    vertical: "Tech",
    image: "/team/nitin-s.png",
  },
  {
    id: "35",
    name: "Parshwa Doshi",
    role: "Tech",
    vertical: "Tech",
    image: "/team/parshwa-doshi.jpeg",
  },
  {
    id: "36",
    name: "Hriday Koppikar",
    role: "Tech",
    vertical: "Tech",
    image: "/team/hriday-koppikar.jpg",
  },
  {
    id: "37",
    name: "Shristi Sharma",
    role: "Tech",
    vertical: "Tech",
    image: "/team/shristi-sharma.jpg",
  },
];
