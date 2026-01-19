import { Link2, Github, Linkedin, Instagram } from "lucide-react"

export function SocialLinks() {
  const links = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/bryan-gabriel-rubio-33b8a1255" },
    { name: "GitHub", icon: Github, url: "https://github.com/Liergab" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/dev.bryy/" },
  ]

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Link2 className="w-5 h-5" />
        <h2 className="text-xl font-bold">Social Links</h2>
      </div>

      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-accent"
          >
            <link.icon className="w-5 h-5 transition-colors duration-200 group-hover:text-primary" />
            <span className="text-sm transition-colors duration-200 group-hover:text-primary">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
