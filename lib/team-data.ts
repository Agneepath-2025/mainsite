export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  vertical: string;
}

export interface Vertical {
  name: string;
  description: string;
}

export const verticals: Vertical[] = [
  {
    name: "Fest Secretaries",
    description: "Leading Agneepath 7.0"
  },
  {
    name: "Deputy Fest Secretaries",
    description: "Supporting the core leadership"
  },
  {
    name: "Sponsorships & Headliners",
    description: "Building partnerships and securing headliners"
  },
  {
    name: "Finance",
    description: "Managing budgets and financial operations"
  },
  {
    name: "Social Media, Design & Marketing",
    description: "Creating content and managing outreach"
  },
  {
    name: "Events and Logistics",
    description: "Coordinating events and operations"
  },
  {
    name: "Safety and Security",
    description: "Ensuring safety for all participants"
  },
  {
    name: "Outreach & Registration Desk",
    description: "Managing registrations and communications"
  },
  {
    name: "Travel & Hospitality",
    description: "Coordinating travel and accommodation"
  },
  {
    name: "Decor and Ceremonies",
    description: "Creating memorable experiences"
  },
  {
    name: "HR, Legal and Documentation",
    description: "Managing human resources and compliance"
  },
  {
    name: "Tech",
    description: "Building and maintaining digital infrastructure"
  },
];

export const teamMembers: TeamMember[] = [
  // Fest Secretaries
  {
    id: "1",
    name: "Bhavya Sood",
    role: "Fest Secretary",
    vertical: "Fest Secretaries",
    image: "/team/bhavya-sood.jpg"
  },
  {
    id: "2",
    name: "Adviti Basu",
    role: "Fest Secretary",
    vertical: "Fest Secretaries",
    image: "/team/adviti-basu.jpg"
  },
  
  // Deputy Fest Secretaries
  {
    id: "3",
    name: "Diya Sandhir",
    role: "Deputy Fest Secretary",
    vertical: "Deputy Fest Secretaries",
    image: "/team/diya-sandhir.jpg"
  },
  {
    id: "4",
    name: "Antara Malhotra",
    role: "Deputy Fest Secretary",
    vertical: "Deputy Fest Secretaries",
    image: "/team/antara-malhotra.jpg"
  },
  {
    id: "5",
    name: "Soham Mishra",
    role: "Deputy Fest Secretary",
    vertical: "Deputy Fest Secretaries",
    image: "/team/soham-mishra.jpg"
  },
  {
    id: "6",
    name: "Kunal Bansal",
    role: "Deputy Fest Secretary",
    vertical: "Deputy Fest Secretaries",
    image: "/team/kunal-bansal.jpg"
  },
  
  // Sponsorships & Headliners
  {
    id: "7",
    name: "Ambika Mishra",
    role: "Sponsorships & Headliners",
    vertical: "Sponsorships & Headliners",
    image: "/team/ambika-mishra.jpg"
  },
  {
    id: "8",
    name: "Rida Khan",
    role: "Sponsorships & Headliners",
    vertical: "Sponsorships & Headliners",
    image: "/team/rida-khan.jpg"
  },
  {
    id: "9",
    name: "Kartik Khandelwal",
    role: "Sponsorships & Headliners",
    vertical: "Sponsorships & Headliners",
    image: "/team/kartik-khandelwal.jpg"
  },
  
  // Finance
  {
    id: "10",
    name: "Arshiya Goyal",
    role: "Finance",
    vertical: "Finance",
    image: "/team/arshiya-goyal.jpg"
  },
  
  // Social Media, Design & Marketing
  {
    id: "11",
    name: "Tejasvini Yadav",
    role: "Social Media, Design & Marketing",
    vertical: "Social Media, Design & Marketing",
    image: "/team/tejasvini-yadav.jpg"
  },
  {
    id: "12",
    name: "Avani Goel",
    role: "Social Media, Design & Marketing",
    vertical: "Social Media, Design & Marketing",
    image: "/team/avani-goel.jpg"
  },
  {
    id: "13",
    name: "Khushi Sethi",
    role: "Social Media, Design & Marketing",
    vertical: "Social Media, Design & Marketing",
    image: "/team/khushi-sethi.jpg"
  },
  {
    id: "14",
    name: "Lakshya Kapoor",
    role: "Social Media, Design & Marketing",
    vertical: "Social Media, Design & Marketing",
    image: "/team/lakshya-kapoor.jpg"
  },
  
  // Events and Logistics
  {
    id: "15",
    name: "Siddharth Bhatnagar",
    role: "Events and Logistics",
    vertical: "Events and Logistics",
    image: "/team/siddharth-bhatnagar.jpg"
  },
  {
    id: "16",
    name: "Parth Agarwal",
    role: "Events and Logistics",
    vertical: "Events and Logistics",
    image: "/team/parth-agarwal.jpg"
  },
  {
    id: "17",
    name: "Akshitha Ashok",
    role: "Events and Logistics",
    vertical: "Events and Logistics",
    image: "/team/akshitha-ashok.jpg"
  },
  {
    id: "18",
    name: "Sanaya Mehta",
    role: "Events and Logistics",
    vertical: "Events and Logistics",
    image: "/team/sanaya-mehta.jpg"
  },
  
  // Safety and Security
  {
    id: "19",
    name: "Manoj N",
    role: "Safety and Security",
    vertical: "Safety and Security",
    image: "/team/manoj-n.jpg"
  },
  {
    id: "20",
    name: "Razin",
    role: "Safety and Security",
    vertical: "Safety and Security",
    image: "/team/razin.jpg"
  },
  {
    id: "21",
    name: "Veda Samhita",
    role: "Safety and Security",
    vertical: "Safety and Security",
    image: "/team/veda-samhita.jpg"
  },
  
  // Outreach & Registration Desk
  {
    id: "22",
    name: "Vidishaa",
    role: "Outreach & Registration Desk",
    vertical: "Outreach & Registration Desk",
    image: "/team/vidishaa.jpg"
  },
  {
    id: "23",
    name: "Jiya Vaya",
    role: "Outreach & Registration Desk",
    vertical: "Outreach & Registration Desk",
    image: "/team/jiya-vaya.jpg"
  },
  {
    id: "24",
    name: "Nishita Agarwal",
    role: "Outreach & Registration Desk",
    vertical: "Outreach & Registration Desk",
    image: "/team/nishita-agarwal.jpg"
  },
  {
    id: "25",
    name: "Nishka Desai",
    role: "Outreach & Registration Desk",
    vertical: "Outreach & Registration Desk",
    image: "/team/nishka-desai.jpg"
  },
  
  // Travel & Hospitality
  {
    id: "26",
    name: "Gia Doshi",
    role: "Travel & Hospitality",
    vertical: "Travel & Hospitality",
    image: "/team/gia-doshi.jpg"
  },
  {
    id: "27",
    name: "Minal",
    role: "Travel & Hospitality",
    vertical: "Travel & Hospitality",
    image: "/team/minal.jpg"
  },
  {
    id: "28",
    name: "Anshul Tekriwal",
    role: "Travel & Hospitality",
    vertical: "Travel & Hospitality",
    image: "/team/anshul-tekriwal.jpg"
  },
  
  // Decor and Ceremonies
  {
    id: "29",
    name: "Rajita Rai",
    role: "Decor and Ceremonies",
    vertical: "Decor and Ceremonies",
    image: "/team/rajita-rai.jpg"
  },
  {
    id: "30",
    name: "Aadya Saxena",
    role: "Decor and Ceremonies",
    vertical: "Decor and Ceremonies",
    image: "/team/aadya-saxena.jpg"
  },
  
  // HR, Legal and Documentation
  {
    id: "31",
    name: "Manya Kapoor",
    role: "HR, Legal and Documentation",
    vertical: "HR, Legal and Documentation",
    image: "/team/manya-kapoor.jpg"
  },
  {
    id: "32",
    name: "Anshika",
    role: "HR, Legal and Documentation",
    vertical: "HR, Legal and Documentation",
    image: "/team/anshika.jpg"
  },
  
  // Tech
  {
    id: "33",
    name: "Nitin S",
    role: "Tech",
    vertical: "Tech",
    image: "/team/nitin-s.jpg"
  },
  {
    id: "34",
    name: "Parshwa Doshi",
    role: "Tech",
    vertical: "Tech",
    image: "/team/parshwa-doshi.jpg"
  },
];
