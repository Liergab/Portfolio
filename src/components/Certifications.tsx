import { Award } from "lucide-react"

export function Certifications() {
  const certifications = [
    { title: "Huawei Developer Expert", issuer: "Huawei" },
    { title: "Generative AI Leader", issuer: "Google" },
    { title: "Software Engineering", issuer: "TestDome" },
    { title: "Generative AI Professional", issuer: "Oracle" },
  ]

  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5" />
          <h2 className="text-2xl font-bold">Recent Certifications</h2>
        </div>
        <button className="text-sm text-muted-foreground hover:text-foreground">View All →</button>
      </div>

      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-accent rounded-lg p-4 hover:bg-accent/80 transition-colors">
            <h3 className="font-semibold">{cert.title}</h3>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
