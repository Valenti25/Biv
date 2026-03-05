"use client";
import Star from "./star";
import { Send } from "lucide-react";
import { useState } from "react";
export default function Input() {
    const [text , setText] = useState("");
    const typeing = text.length > 0;
  return (
    <div className="w-full relative flex items-center px-2">
      <div className="absolute left-4 flex items-center pointer-events-none z-10">
        <Star />
        <div className="ml-4 h-5 w-px bg-black/10" />
      </div>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 pl-24 pr-14 border border-gray-200 rounded-full focus:outline-none shadow-sm"
      />

      <div className="absolute right-2 flex items-center">
        <button 
          className={`pr-3 ${typeing ? "" : "text-black opacity-50"}`}
          aria-label="send"
          disabled={!typeing}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}