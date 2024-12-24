import { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import ChatMessage from './ChatMessage';

interface Message {
  content: string;
  isBot: boolean;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatInterface({ isOpen, onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hi! I'm John's AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { content: input, isBot: false }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "Thanks for your message! This is a placeholder response. Integrate your AI service here.",
        isBot: true
      }]);
    }, 1000);

    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed md:bottom-24 md:right-6 md:w-96 w-full h-[100dvh] md:h-auto md:max-h-[calc(100vh-120px)] md:min-h-[400px] inset-0 md:inset-auto bg-gray-800 md:rounded-lg shadow-xl flex flex-col z-50">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Chat with AI Assistant</h3>
        <button 
          onClick={onClose}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}