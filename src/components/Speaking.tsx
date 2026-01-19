import { Mic } from "lucide-react"

export function Speaking() {
  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-4">
        <Mic className="w-5 h-5" />
        <h2 className="text-xl font-bold">Speaking</h2>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Available for speaking at events about software development and emerging technologies.
      </p>

      <button className="text-sm text-primary hover:underline">Get in touch →</button>
    </div>
  )
}
