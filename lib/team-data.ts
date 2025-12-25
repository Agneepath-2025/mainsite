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
    name: "Core Team",
    description: "Leading Agneepath 7.0 to new heights"
  },
  {
    name: "Sports",
    description: "Organizing tournaments and managing competitions"
  },
  {
    name: "Marketing & Outreach",
    description: "Spreading the word and building partnerships"
  },
  {
    name: "Hospitality",
    description: "Ensuring comfort and care for all participants"
  },
  {
    name: "Logistics",
    description: "Managing operations and event coordination"
  },
  {
    name: "Design & Media",
    description: "Creating visual content and capturing memories"
  },
];

export const teamMembers: TeamMember[] = [
  // Core Team
  {
    id: "1",
    name: "John Doe",
    role: "Overall Coordinator",
    vertical: "Core Team",
    image: "/team/john-doe.jpg"
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Co-Coordinator",
    vertical: "Core Team",
    image: "/team/jane-smith.jpg"
  },
  
  // Sports
  {
    id: "3",
    name: "Mike Johnson",
    role: "Sports Head",
    vertical: "Sports",
    image: "/team/mike-johnson.jpg"
  },
  {
    id: "4",
    name: "Sarah Williams",
    role: "Tournament Manager",
    vertical: "Sports",
    image: "/team/sarah-williams.jpg"
  },
  {
    id: "5",
    name: "David Brown",
    role: "Fixtures Coordinator",
    vertical: "Sports",
    image: "/team/david-brown.jpg"
  },
  
  // Marketing
  {
    id: "6",
    name: "Emily Davis",
    role: "Marketing Head",
    vertical: "Marketing & Outreach",
    image: "/team/emily-davis.jpg"
  },
  {
    id: "7",
    name: "Alex Martinez",
    role: "Sponsorship Lead",
    vertical: "Marketing & Outreach",
    image: "/team/alex-martinez.jpg"
  },
  {
    id: "8",
    name: "Sophia Anderson",
    role: "Social Media Manager",
    vertical: "Marketing & Outreach",
    image: "/team/sophia-anderson.jpg"
  },
  
  // Hospitality
  {
    id: "9",
    name: "Chris Taylor",
    role: "Hospitality Head",
    vertical: "Hospitality",
    image: "/team/chris-taylor.jpg"
  },
  {
    id: "10",
    name: "Olivia Thomas",
    role: "Accommodation Manager",
    vertical: "Hospitality",
    image: "/team/olivia-thomas.jpg"
  },
  
  // Logistics
  {
    id: "11",
    name: "Daniel White",
    role: "Logistics Head",
    vertical: "Logistics",
    image: "/team/daniel-white.jpg"
  },
  {
    id: "12",
    name: "Emma Harris",
    role: "Operations Manager",
    vertical: "Logistics",
    image: "/team/emma-harris.jpg"
  },
  {
    id: "13",
    name: "Ryan Clark",
    role: "Equipment Coordinator",
    vertical: "Logistics",
    image: "/team/ryan-clark.jpg"
  },
  
  // Design & Media
  {
    id: "14",
    name: "Ava Lewis",
    role: "Design Head",
    vertical: "Design & Media",
    image: "/team/ava-lewis.jpg"
  },
  {
    id: "15",
    name: "Ethan Walker",
    role: "Photography Lead",
    vertical: "Design & Media",
    image: "/team/ethan-walker.jpg"
  },
  {
    id: "16",
    name: "Mia Robinson",
    role: "Content Creator",
    vertical: "Design & Media",
    image: "/team/mia-robinson.jpg"
  },
];
