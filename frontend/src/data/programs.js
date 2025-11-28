import React from "react";
import {
  BookOpen,
  Users,
  Wrench,
  FolderKanban,
  Handshake,
} from "lucide-react";
import childrens from  "../img/childrens.png"
import mentorship from  "../img/mentorship.png"
import skillworkshop from "../img/skillworkshop.png"

const programs = [
  {
    icon: BookOpen,
    title: "Affordable Education",
    slug: "affordable-education",

    shortDescription:
      "Making quality learning accessible to all, regardless of financial background.",

    cardDescription:
      "Support children with educational resources and school essentials.",

    

    longDescription: `
(Donate for poor children to provide better education resources)

Donate for Education, invest for Wisdom — True knowledge alone is enough for transformation.

We focus on improving educational opportunities through:

• Providing essential resources like stationery, sports materials, school uniforms, and clean classrooms  
• Visiting village schools regularly to identify problems faced by students and teachers, and working to resolve them  
• Ensuring clean, safe, and well-maintained learning environments  
• Supporting students with basic academic needs  
• Actively monitoring schools to report shortages, maintenance issues, or quality concerns  

Your support can help a child receive better education and a brighter future.
`,

    showDonate: true,
    showJoinUs: false,
    backgroundImageForCard:childrens
  },

  {
    icon: Users,
    title: "Mentorship & Guidance",
    slug: "mentorship-guidance",

    shortDescription:
      "Providing personalized support to help youth and individuals achieve their goals.",

    cardDescription:
      "Looking for mentors from education, finance, tech, medical, and more.",

    longDescription: `

We are seeking counselors or professionals from multiple fields including:  
• Finance  
• Technical fields  
• School teaching  
• Insurance services  
• News and media  
• College students  
• Medical professionals  
• Agriculture specialists  
• Business experts  
• HR professionals  

If you want to share your knowledge, guidance, or experience to uplift society — we welcome you.

Your mentorship can accelerate harmony and transform lives.
`,

    showDonate: false,
    showJoinUs: true,
    backgroundImageForCard: mentorship
  },

  {
    icon: Wrench,
    title: "Skill Development Workshops",
    slug: "skill-development-workshops",

    shortDescription:
      "Equipping learners with practical skills for professional and personal growth.",

    cardDescription:
      "Join as a trainer — teaching repairs, servicing, certifications & soft skills.",

    longDescription: `
We are seeking skilled professionals and trainers for:  
• Job-oriented training  
• Construction and site work training  
• Certification programs  
• Engineering and technical work training  
• Machinery repair workshops  
• Bike and car servicing training  
• Soft-skill enhancement  

We collaborate with companies, training centers, and workshops to uplift youth skill standards.

Want to change someone's life through skills?  
`,

    showDonate: false,
    showJoinUs: true,
    backgroundImageForCard:skillworkshop
    
  },

  {
    icon: FolderKanban,
    title: "Resource Access",
    slug: "resource-access",

    shortDescription:
      "Offering career kits, digital tools, and knowledge platforms to accelerate success.",

    cardDescription:
      "Providing access to online platforms, AI tools, videos & digital kits.",

    longDescription: `
Offering career kits, digital tools, and knowledge platforms to accelerate success.

We provide access to:  
• Online learning platforms  
• AI-powered tools  
• Job training videos  
• Community knowledge platforms  
• Marketing and business development resources  
• Digital learning kits  

All guidance is supported by experts from NGO India Foundation and Poornata Association.
`,

    showDonate: false,
    showJoinUs: true,
  },

  {
    icon: Handshake,
    title: "Community Engagements",
    slug: "community-engagements",

    shortDescription:
      "Building strong networks through collaboration, awareness, and social initiatives.",

    cardDescription:
      "Sessions on motivation, spirituality, yoga, lifestyle & youth awareness.",

    longDescription: `
Building strong networks through collaboration and meaningful social initiatives.

Our initiatives include:  
• Educating school children on spirituality, stress handling, and life motivation  
• Hands-on learning practices and lifestyle guidance  
• Yoga, gym exercise, and meditation sessions  
• Open discussion platforms on important topics  
• Sharing inspiring life stories and achievement stories  
• Circulating updates on careers, politics, and social affairs  

These engagements help build confidence, awareness, and a supportive community environment.
`,

    showDonate: false,
    showJoinUs: true,
  },
];

export default programs;
