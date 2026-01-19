"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

export function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const recommendations = [
    {
      text: '"Bryan demonstrates strong technical skills in both frontend and backend development. His work on API integration and RESTful services shows excellent understanding of modern web development practices."',
      name: "Tech Lead",
      role: "Uzaro Tech Solutions",
    },
    {
      text: '"Bryan\'s dedication to learning and implementing new technologies is impressive. He consistently delivers quality work and shows great attention to detail in his projects."',
      name: "Senior Developer",
      role: "OJT Connect",
    },
  ]

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5" />
        <h2 className="text-xl font-bold">Recommendations</h2>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{recommendations[currentIndex].text}</p>

        <div>
          <p className="font-semibold text-sm">{recommendations[currentIndex].name}</p>
          <p className="text-xs text-muted-foreground">{recommendations[currentIndex].role}</p>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 justify-center pt-2">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              aria-label={`Go to recommendation ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
