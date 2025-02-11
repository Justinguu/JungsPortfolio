"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBox";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40">
        {/* Text Bubble */}
        <div className="absolute -top-10 right-0 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium mb-2 whitespace-nowrap border border-gray-200 dark:border-gray-700">
          Ask me anything!
          {/* Triangle pointer */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 transform rotate-45 bg-white dark:bg-gray-800 border-b border-r border-gray-300 dark:border-gray-700"></div>
        </div>
        
        {/* Existing Button */}
        <button
          onClick={() => setChatBoxOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <Bot size={24} className="animate-pulse" />
        </button>
      </div>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
