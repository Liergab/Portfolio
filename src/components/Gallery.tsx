import { useState } from "react"
import { ImageIcon, X } from "lucide-react"

type GalleryItem = {
  src: string
  title: string
  description: string
}

export function Gallery() {
  const images: GalleryItem[] = [
    {
      src: "https://res.cloudinary.com/dd4xahmpe/image/upload/v1768820429/ojtconnect_u8m87v.jpg",
      title: "OJT Connect Web App",
      description:
        "At OJT Connect, we’re united from all corners of the world—driven by one mission, building change together. (Frontend Developer)",
    },
    {
      src: "https://res.cloudinary.com/dd4xahmpe/image/upload/v1768822370/a94e579e-5916-4866-a510-fd3a2814c39f_psge5q.jpg",
      title: "IoT Philippines 2025",
      description: "IoT Philippines 2025 at SMX Convention Center MOA.",
    },
    {
      src: "https://res.cloudinary.com/dd4xahmpe/image/upload/v1768823283/cd214623-fe89-40ea-9f73-794e52936884_utrszg.jpg",
      title: "LMS (ALMA) Deployment",
      description:
        "Deployment of the LMS (ALMA) app and training session with faculty and professors at OJT Connect.",
    },
    {
      src: "https://res.cloudinary.com/dd4xahmpe/image/upload/v1768820449/Screenshot_2026-01-19_185543_ap9yjf.png",
      title: "Featured in News & Media",
      description:
        "Work and projects featured in multiple newspapers and media outlets inside and outside the country.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center gap-2 mb-6">
        <ImageIcon className="w-5 h-5" />
        <h2 className="text-2xl font-bold">Gallery</h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((item, index) => (
            <div key={index} className="relative group flex-shrink-0">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="w-64 h-40 rounded-lg overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer hover:shadow-lg transition-all duration-300"
                title="Click to view image"
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </button>
              {/* Custom Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none whitespace-nowrap z-10 opacity-0 translate-y-1 scale-[0.98] group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200">
                <div className="relative rounded-lg border border-border bg-background/90 px-3 py-1.5 text-xs text-foreground shadow-lg backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
                  <span className="font-medium tracking-tight">Click to view</span>
                  <span className="text-muted-foreground"> image</span>
                  <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 size-2.5 rotate-45 border border-border bg-background/90 shadow-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {activeIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative bg-card rounded-lg border shadow-2xl max-w-3xl w-[90%] md:w-[70%] max-h-[90vh] overflow-hidden">
              <button
                type="button"
                className="absolute top-3 right-3 p-1 rounded-full bg-background/80 hover:bg-background shadow focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setActiveIndex(null)}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-full max-h-[60vh] overflow-hidden bg-muted">
                <img
                  src={images[activeIndex].src}
                  alt={images[activeIndex].title}
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              <div className="p-4 md:p-6 space-y-2">
                <h3 className="text-lg font-semibold">{images[activeIndex].title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {images[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
