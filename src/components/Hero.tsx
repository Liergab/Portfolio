import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Download, Mail } from "lucide-react"

export function Hero() {
  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Profile Image */}
        <img
          src="https://res.cloudinary.com/dd4xahmpe/image/upload/v1768489476/1000018743_twdqup.jpg"
          alt="Bryan Gabriel Rubio"
          className="w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover"
        />

        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold">Bryan Gabriel Rubio</h1>
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <p className="text-muted-foreground mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Unisan, Quezon, Philippines
          </p>

          <div className="mb-6">
            <p className="text-lg font-semibold">
              Full Stack Developer <span className="text-muted-foreground">|</span> Technology Enthusiast
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="/cv.pdf"
              download="Bryan-Gabriel-Rubio-CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-md h-10 px-4 py-2 font-medium bg-primary text-primary-foreground cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-primary/90"
            >
              <Download className="w-4 h-4" />
              Download my CV
            </a>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
          </div>

          {/* Achievement Badge */}
          <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">💼 Technology Developer at Uzaro Tech Solutions</Badge>
        </div>

        {/* Theme Toggle */}
        <Button variant="outline" size="icon" className="rounded-full bg-transparent">
          ✨
        </Button>
      </div>
    </div>
  )
}
