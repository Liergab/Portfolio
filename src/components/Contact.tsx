import { Mail } from "lucide-react"
import { Button } from "./ui/button"

export function Contact() {
  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4" />
            <h3 className="font-semibold text-sm">Email</h3>
          </div>
          <p className="text-sm text-muted-foreground break-all">
            bryangabrielberja25@gmail.com
          </p>
        </div>

        <div className="pt-1">
          <Button
            variant="outline"
            className="w-full bg-transparent justify-center"
            onClick={() => {
              window.location.href = "mailto:bryangabrielberja25@gmail.com"
            }}
          >
            <span className="inline-flex items-center gap-2">
              <span>Send Email</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
