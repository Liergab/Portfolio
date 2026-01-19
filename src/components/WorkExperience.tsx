import { Briefcase } from "lucide-react";

export function WorkExperience() {
  const experiences = [
    {
      title: "Technology Developer (Backend)",
      company: "Uzaro Tech Solutions",
      period: "Nov 2024 – Present",
      active: true,
      responsibilities: [
        "Focused on backend API development using Node.js and Express",
        "Designed and implemented secure and scalable RESTful APIs for internal systems",
        "Integrated third-party services and APIs to automate workflows and streamline operations",
        "Collaborated with frontend developers to ensure smooth data exchange and API usability",
        "Integrated Tuya APIs into a custom web application, enabling real-time device control and status monitoring",
        "Developed backend systems to automate smart devices using the Tuya IoT platform",
      ],
    },
    {
      title: "System Staff (Desktop Developer)",
      company: "Nippon Micrometal",
      period: "August 2024 – November 2024",
      active: false,
      responsibilities: [
        "Developed and maintained internal desktop tools using VB.NET",
        "Manually retrieved and analyzed production and quality data by writing MySQL queries",
        "Gained hands-on experience in a corporate environment, working with legacy systems and structured workflows",
        "Prepared, validated, and double-checked the data embedded in QR codes to ensure accuracy and prevent errors in production workflows",
      ],
    },
    {
      title: "Frontend Developer",
      company: "OJT Connect",
      period: "December 2023 - July 2024",
      active: false,
      responsibilities: [
        "Created responsive and reusable user interfaces using React.js and Tailwind CSS to enhance the OJT Connect platform",
        "Translated UI/UX designs into clean, maintainable code with focus on performance and accessibility",
        "Integrated frontend components with backend APIs to deliver dynamic and interactive features",
        "Participated in an Agile development environment, contributing to sprint planning, daily stand-ups, and sprint reviews",
        "Collaborated closely with backend developers and designers to ensure a consistent user experience and efficient workflow",
        "Conducted manual QA testing, wrote test scenarios, and executed test cases",
      ],
    },
  ];

  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-5 h-5" />
        <h2 className="text-2xl font-bold">Work Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-border">
            {index < experiences.length - 1 && (
              <div className="absolute -left-[5px] top-8 w-2 h-2 bg-background border-2 border-primary rounded-full" />
            )}
            
            <div className="mb-2">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                </div>
                {exp.active && (
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
