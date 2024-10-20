"use client"

import React, { useState } from 'react'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

// This would typically come from a database or API
const userData = {
  id: 1,
  name: "Alex",
  points: 1250,
  avatar: "/placeholder.svg?height=128&width=128"
}

export default function UserProfile() {
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = () => {
    setIsConnecting(true)
    // Simulating an API call
    setTimeout(() => {
      setIsConnecting(false)
      alert("Connection request sent!")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-[#1cb0f6]">QuizMaster</h1>
          </div>
          <nav>
            <Link to="/leaderboard" className="text-gray-600 hover:text-[#1cb0f6] flex items-center">
              <ArrowLeft className="mr-2" />
              Back to Leaderboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center mb-6">
            <img src={userData.avatar} alt={userData.name} className="w-32 h-32 rounded-full mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
            <p className="text-xl font-semibold text-[#1cb0f6] mt-2">{userData.points} points</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleConnect}
              disabled={isConnecting}
              className={`flex items-center px-6 py-3 rounded-full text-white font-semibold ${
                isConnecting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#58cc02] hover:bg-[#4caf00]'
              } transition-colors duration-200`}
            >
              <MessageSquare className="mr-2" />
              {isConnecting ? 'Connecting...' : 'Connect'}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}