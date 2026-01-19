import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Technology Developer (Backend)",
      company: "Uzaro Tech Solutions",
      year: "2024",
      active: true,
    },
    {
      title: "System Staff (Desktop Developer)",
      company: "Nippon Micrometal",
      year: "2024",
    },
    {
      title: "Frontend Developer",
      company: "OJT Connect",
      year: "2023",
    },
    {
      title: "BS Information Technology",
      company: "Polytechnic University of the Philippines",
      year: "2023",
    },
    {
      title: "Hello World! 👋",
      company: "Started my coding journey",
      year: "2019",
    },
  ]

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-5 h-5" />
        <h2 className="text-xl font-bold">Experience</h2>
      </div>

      <div className="space-y-6">
        {/* Current Role Badge */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold mb-1">CURRENTLY AT</p>
              <p className="text-2xl font-bold">Uzaro Tech</p>
              <p className="text-xs mt-2 opacity-90">
                Backend API Development & IoT Platform Integration
              </p>
            </div>
            <div className="text-4xl">💻</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="relative">
                <div className={`w-3 h-3 rounded-full mt-1.5 ${exp.active ? "bg-primary" : "bg-muted-foreground"}`} />
                {index < experiences.length - 1 && <div className="absolute left-1.5 top-5 w-px h-12 bg-border" />}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <span className="text-xs text-muted-foreground">{exp.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
