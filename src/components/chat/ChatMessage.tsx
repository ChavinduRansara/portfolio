interface ChatMessageProps {
    content: string;
    isBot: boolean;
  }
  
  export default function ChatMessage({ content, isBot }: ChatMessageProps) {
    return (
      <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
        <div
          className={`max-w-[80%] px-4 py-2 rounded-lg ${
            isBot
              ? 'bg-gray-700 text-white'
              : 'bg-blue-500 text-white'
          }`}
        >
          <p className="text-sm">{content}</p>
        </div>
      </div>
    );
  }