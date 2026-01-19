import { BookOpen } from "lucide-react";

export function BeyondCoding() {
  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5" />
        <h2 className="text-2xl font-bold">Beyond Coding</h2>
      </div>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          When not writing code, I focus on exploring web development trends,
          staying current with industry best practices, and experimenting with
          new frameworks and tools.
        </p>

        <p>
          I'm passionate about learning emerging technologies and contributing
          to the developer community through knowledge sharing and
          collaboration.
        </p>
      </div>
    </div>
  );
}
