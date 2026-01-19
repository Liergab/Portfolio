import { Users } from "lucide-react"

export function MemberOf() {
  const memberships = [
    {
      name: "Analytics & Artificial Intelligence Association of the Philippines (AAP)",
      url: "#",
    },
    {
      name: "Philippine Software Industry Association",
      url: "#",
    },
  ]

  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-5 h-5" />
        <h2 className="text-2xl font-bold">A member of</h2>
      </div>

      <div className="space-y-3">
        {memberships.map((membership, index) => (
          <a
            key={index}
            href={membership.url}
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors group"
          >
            <span className="text-sm">{membership.name}</span>
            <svg
              className="w-4 h-4 text-muted-foreground group-hover:text-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}
