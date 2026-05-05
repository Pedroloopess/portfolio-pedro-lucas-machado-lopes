import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Code2, Copy, Send } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  content: string;
  type: "text" | "code";
  language?: string;
  timestamp: Date;
}

interface ChatPanelProps {
  roomName: string;
  userName: string;
}

export default function ChatPanel({ roomName, userName }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Sistema",
      content: `Bem-vindo à sala "${roomName}"! Use o chat para compartilhar código e dúvidas. 🚀`,
      type: "text",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: userName,
        content: inputValue,
        type: "text",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleSendCode = () => {
    if (codeInput.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: userName,
        content: codeInput,
        type: "code",
        language: selectedLanguage,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setCodeInput("");
      setShowCodeEditor(false);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert("Código copiado!");
  };

  const languages = [
    "javascript",
    "typescript",
    "python",
    "java",
    "kotlin",
    "swift",
    "go",
    "rust",
    "sql",
    "html",
    "css",
    "bash",
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold flex items-center gap-2">
          <Code2 className="w-4 h-4 text-primary" />
          Chat da Sessão
        </h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-primary">
                {msg.sender}
              </span>
              <span className="text-xs text-muted-foreground">
                {msg.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            {msg.type === "text" ? (
              <p className="text-sm text-foreground bg-background/50 p-2 rounded">
                {msg.content}
              </p>
            ) : (
              <Card className="p-3 bg-background border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-primary">
                    {msg.language?.toUpperCase()}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopyCode(msg.content)}
                    className="h-6 px-2"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <pre className="text-xs bg-background/50 p-2 rounded overflow-x-auto text-foreground/80">
                  <code>{msg.content}</code>
                </pre>
              </Card>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Code Editor */}
      {showCodeEditor && (
        <div className="p-4 border-t border-border bg-card/50 space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold">Compartilhar Código</label>
            <button
              onClick={() => setShowCodeEditor(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="h-8 text-xs bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <textarea
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
            placeholder="// Cole seu código aqui..."
            className="w-full h-24 p-2 bg-background border border-border rounded text-xs font-mono text-foreground resize-none"
          />
          <Button
            onClick={handleSendCode}
            size="sm"
            className="w-full h-8 bg-primary hover:bg-primary/90 text-xs"
          >
            <Send className="w-3 h-3 mr-1" />
            Enviar Código
          </Button>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border space-y-2">
        {!showCodeEditor && (
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Mensagem..."
              className="text-xs bg-background border-border h-8"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="h-8 w-8 p-0 bg-primary hover:bg-primary/90"
            >
              <Send className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setShowCodeEditor(true)}
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0"
            >
              <Code2 className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
