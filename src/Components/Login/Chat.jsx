import React, { useState, useEffect, useRef } from "react";
import {  Copy, BookOpenText, Languages } from "lucide-react";
import micro from "./chat/microphone.svg";
import send from "./chat/send.svg";
import attach from "./chat/attach.svg";
import Logo from "../Navbar/images/Logo.svg";
import Videocal from './Videocal'
import Navbar from '../Navbar/Navbar'

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const textareaRef = useRef(null);
  const [isGreeting, setIsGreeting] = useState(true);

  
  const suggestions = [
    "How can I improve my coding skills?",
    "Tell me a fun fact!",
    "What’s the weather like today?",
    "Give me a motivational quote.",
  ];


  useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        setMessage(event.results[0][0].transcript);
      };
    }
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }, { text: "Hello! How can I assist you today?", sender: "bot" }]);
      setMessage("");
      setIsGreeting(false);
    }
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bgimg min-h-screen bg-no-repeat bg-cover bg-center flex items-center flex-col gap-2 justify-center   ">
      <Navbar/>
      <div className="p-[5px] mx-auto md:rounded-[50px] border-[0.5px] border-[#7F7F7F] lg:w-[70%] backdrop-blur-2xl  w-full overflow-hidden ">
        <div className="flex flex-col justify-between  ">
          <div className="flex md:flex-row flex-col gap-2 mx-auto  2xl:min-h-[500px] w-[100%] ">
            <Videocal/>
            <div className="md:w-full lg:max-w-[450px] lg:min-w-[450px] xl:max-w-[600px] xl:min-w-[600px] 2xl:min-w-[1000px] bg-gradient-to-br from-[#202020]/10 to-[#ffffff]/10  border-[#7F7F7F] border-[0.5px] rounded-[50px] xl:space-y-4 ">
              <div className=" relative p-2 text-white xl:space-y-8 flex flex-col items-center w-full bg-white/5 h-full rounded-[50px] justify-around  ">
                {isGreeting||(
              <div>
                <img src={Logo} alt="logo" className="absolute top-4 left-8 w-4 " />
              </div>
                )}
                
                {isGreeting && (
                  
                  <div className="text-center text-lg text-white border h-full flex flex-col justify-end">
                    <img src={Logo} alt="logo" className="w-10 mx-auto mb-4" />
                    <p className="font-bold">Hello Karim!</p>
                    <p>How can I help you today?</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(suggestion)}
                          className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}



                <div className="w-full text-left overflow-y-auto max-h-72 2xl:max-w-[80] space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                      <div className="flex  justify-center">
                        {msg.sender === "bot" && (
                          <img src="https://i.pravatar.cc/40?img=10" alt="Bot" className="w-8 h-8 rounded-full mr-2" />
                        )} 
                        <div className={`p-1 rounded-lg max-w-[70%] break-words overflow-hidden ${msg.sender === "user" ? "bg-white/15 text-white" : "bg-white/15 text-white"}`}>
                          {msg.text}
                        </div>
                        {msg.sender === "user" && (
                          <img src="https://i.pravatar.cc/40?img=5" alt="User" className="w-8 h-8 rounded-full ml-2" />
                        )}
                      </div>
                      {msg.sender === "bot" && (
                        <div className="flex gap-2 mt-2 ml-16">
                          <button className="text-white px-3  hover:cursor-pointer text-xs bg-white/15 py-1 rounded-full  flex items-center gap-1 transition" onClick={() => alert("Translate feature coming soon!")}> 
                            <Languages size={16} /><h1 className="md:block hidden"> Translate</h1>
                          </button>
                          <button className="text-white hover:cursor-pointer text-xs bg-white/15 px-3 py-1 rounded-full  flex items-center gap-1  transition" onClick={() => handleCopyText(msg.text)}> 
                            <Copy size={16} /><h1 className="md:block hidden"> Copy Text</h1>
                          </button>
                          <button className="text-white hover:cursor-pointer text-xs bg-white/15  px-3 py-1 rounded-full  flex items-center gap-1  transition" onClick={() => alert("Learn More feature coming soon!")}> 
                            <BookOpenText size={16} />
                            <h1 className="md:block hidden">Learn More</h1> 
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="w-full max-w-4xl mx-auto flex items-end relative mt-4">
                  <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask a Question here..."
                    rows={2}
                    className="w-full min-h-[130px] max-h-[150px] bg-white/15 rounded-[24px] pl-4 pr-20 py-2 focus:outline-none resize-none overflow-auto break-words"
                  />
                  <button onClick={handleSendMessage} className="absolute right-4 bottom-2 p-2 hover:bg-white/15 rounded-full transition-colors">
                    <img src={send} className="w-10 h-10" alt="send" />
                  </button>
                  <button onClick={handleSendMessage} className="absolute right-16 bottom-2 p-2 hover:bg-white/15 rounded-full transition-colors">
                    <img src={micro} className="w-10 h-10" alt="send" />
                  </button>
                  <button className="absolute left-2 bottom-2 p-2 hover:bg-white/15 rounded-full transition-colors"> 
                    <img src={attach} className="w-10 h-10" alt="attach" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
