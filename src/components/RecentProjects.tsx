import { Folder } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export function RecentProjects() {
  const projects = [
    {
      name: "Career Compass Analytics Dashboard",
      description: "React.js admin dashboard with data visualization",
      url: "https://github.com/Liergab",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "Room Rental Platform",
      description: "Full-stack MERN application with React and Express.js",
      url: "https://github.com/Liergab",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "OJT Connect Platform",
      description: "Internship connection platform (Frontend contribution)",
      url: "https://ojtconnect.com/",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "ALMA LMS System",
      description: "Learning Management System for managing courses, students, and assessments",
      url: "https://lms-app-test.site/login",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma", "Firebase", "Heroku"],
    },
    {
      name: "QC Sports App",
      description: "Sports booking and management application for events and facilities",
      url: "https://qc-sports-ph-app-dev.web.app/",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma", "Firebase", "GCP"],
    },
    {
      name: "RYDE App",
      description: "Ride-booking and transportation platform focused on seamless user experience",
      url: "https://ryde-luxury-app-dev.web.app/",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma", "Firebase", "GCP"],
    },
    {
      name: "HRIS System",
      description: "Human Resource Information System for employee data and HR process management",
      url: "https://hris-app-dev.web.app/auth/login",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma", "Firebase", "Heroku"],
    },
  ]

  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Folder className="w-5 h-5" />
          <h2 className="text-2xl font-bold">Recent Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border rounded-lg p-4 cursor-pointer bg-card/60 transition-all duration-200 hover:bg-accent hover:-translate-y-[2px] hover:shadow-lg"
          >
            <h3 className="font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.stack?.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() =>
                window.open(project.url, "_blank", "noopener,noreferrer")
              }
            >
              Visit App
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
