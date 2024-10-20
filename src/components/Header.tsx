import { Coins, ListTodo, Trophy, User } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-[#1cb0f6]">Braynex</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="leaderboard" className="flex items-center text-gray-600 hover:text-[#1cb0f6]">
              <Trophy className="mr-1" />
              Leaderboard
            </a>
            <a href="/task" className="flex items-center text-gray-600 hover:text-[#1cb0f6]">
              <ListTodo className="mr-1" />
              Tasks
            </a>
            <div className="flex items-center bg-[#e5f6fd] px-3 py-1 rounded-full">
              <span className="text-[#1cb0f6] font-semibold mr-2">{10}</span>
              <Coins className="mr-1"/>
            </div>
            <a href="dashboard" className="flex items-center text-gray-600 hover:text-[#1cb0f6]">
              <User className="mr-1" />
              Profile
            </a>
          </nav>
        </div>
      </header>

  )
}

export default Header