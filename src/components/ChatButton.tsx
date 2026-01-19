import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ChatDialog } from "./ChatDialog";

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        className="fixed bottom-6 right-6 rounded-full shadow-lg gap-2 px-6 z-40"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="w-5 h-5" />
        Chat with Bryan
      </Button>
      <ChatDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
