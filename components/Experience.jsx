// components/Experience.js
import { useState } from 'react';

const experiences = [
    {
        company: "EcoFa",
        role: "Co-Founder & Dev Lead",
        duration: "Feb 2024 – present",
        description: [
            "As a Co-Founder, I'm putting my best efforts with my team into making EcoFactor a reality.",
            "As a Dev Lead, my focus is on the development side of our project EcoFactor. I'm handling front-end, AI integration, and backend with my team. We, as Dev members, are working collaboratively on this project.",
            "EcoFactor currently consists of a team of 7 members: 4 from Pakistan, 2 from Brazil, and 1 from Latvia."
        ]
    },
    {
        company: "Eco",
        role: "Co-Founder & Dev Lead",
        duration: "Feb 2024 – present",
        description: [
            "As a Co-Founder, I'm putting my best efforts with my team into making EcoFactor a reality.",
            "As a Dev Lead, my focus is on the development side of our project EcoFactor. I'm handling front-end, AI integration, and backend with my team. We, as Dev members, are working collaboratively on this project.",
            "EcoFactor currently consists of a team of 7 members: 4 from Pakistan, 2 from Brazil, and 1 from Latvia."
        ]
    },
    {
        company: "EcoFacto",
        role: "Co-Founder & Dev Lead",
        duration: "Feb 2024 – present",
        description: [
            "As a Co-Founder, I'm putting my best efforts with my team into making EcoFactor a reality.",
            "As a Dev Lead, my focus is on the development side of our project EcoFactor. I'm handling front-end, AI integration, and backend with my team. We, as Dev members, are working collaboratively on this project.",
            "EcoFactor currently consists of a team of 7 members: 4 from Pakistan, 2 from Brazil, and 1 from Latvia."
        ]
    },
    {
        company: "lablab.ai",
        role: "Position at lablab.ai",
        duration: "Date range",
        description: ["Details about this position at lablab.ai."]
    },
    // Add more experiences here
];

export default function Experience() {
    const [selectedCompany, setSelectedCompany] = useState(experiences[0]);

    return (
        <div className="container mx-auto flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="md:w-1/4 bg-black p-4">
                <ul className="overflow-y-auto max-h-60">
                    {experiences.map((exp, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCompany(exp)}
                            className={`cursor-pointer mb-2 p-2 ${selectedCompany.company === exp.company ? 'bg-primary text-black' : 'text-primay'
                                } hover:text-accent`}
                        >
                            {exp.company}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Details Section */}
            <div className="md:w-3/4 bg-black text-primary p-4 md:p-8">
                <h2 className="text-xl md:text-2xl text-primary">{selectedCompany.role} @ {selectedCompany.company}</h2>
                <p className="text-gray-800">{selectedCompany.duration}</p>
                <div className="mt-4 space-y-4">
                    {selectedCompany.description.map((desc, idx) => (
                        <p key={idx} className="text-primary">{desc}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}