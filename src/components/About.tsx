import { Briefcase } from "lucide-react"

export function About() {
  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-5 h-5" />
        <h2 className="text-2xl font-bold">About</h2>
      </div>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a full-stack developer specializing in building modern web applications with React, Next.js, TypeScript, and Node.js. 
          Currently working as a Technology Developer at Uzaro Tech Solutions, focusing on backend API development and IoT platform integration.
        </p>

        <p>
          My expertise includes designing and implementing secure, scalable RESTful APIs using Node.js and Express. 
          I've integrated third-party services like Tuya IoT platform APIs and developed backend systems for smart device automation.
        </p>

        <p>
          I'm passionate about staying current with industry best practices, exploring new frameworks and tools, and 
          contributing to the developer community. I graduated with a BS in Information Technology from Polytechnic 
          University of the Philippines Unisan Campus (2019-2023) and started my coding journey in 2019.
        </p>
      </div>
    </div>
  )
}
