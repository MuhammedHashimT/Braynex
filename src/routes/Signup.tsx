import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X, ArrowRight } from 'lucide-react'

// Mock skills data
const skillsData = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Node.js' },
  { id: 4, name: 'Python' },
  { id: 5, name: 'Machine Learning' },
  { id: 6, name: 'Data Science' },
  { id: 7, name: 'UI/UX Design' },
  { id: 8, name: 'DevOps' },
]

export default function SignupPage() {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([])
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)

  const toggleSkill = (id: number) => {
    setSelectedSkills(prev => 
      prev.includes(id) ? prev.filter(skillId => skillId !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.div 
        className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-6 text-primary-blue text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sign Up
        </motion.h1>
        <form className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-45PrWcWBvSAXGj8bD2EAcwLJEf6Bkfw9Y1EknVsZCggqiNixWMwTX9HNJQ24FVfuLa4t8eXt1HPA1iUitADJLCoS5ua3WQR duration-200"
              placeholder="Enter your name"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-45PrWcWBvSAXGj8bD2EAcwLJEf6Bkfw9Y1EknVsZCggqiNixWMwTX9HNJQ24FVfuLa4t8eXt1HPA1iUitADJLCoS5ua3WQR duration-200"
              placeholder="Enter your email"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-45PrWcWBvSAXGj8bD2EAcwLJEf6Bkfw9Y1EknVsZCggqiNixWMwTX9HNJQ24FVfuLa4t8eXt1HPA1iUitADJLCoS5ua3WQR duration-200"
              placeholder="Enter your password"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
            <div 
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 cursor-pointer flex items-center justify-between"
              onClick={() => setIsSkillsOpen(!isSkillsOpen)}
            >
              <span>{selectedSkills.length > 0 ? `${selectedSkills.length} selected` : 'Select your skills'}</span>
              <ChevronDown className={`transition-transform duration-200 ${isSkillsOpen ? 'transform rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {isSkillsOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="z-50 mt-1 w-full bg-white border border-gray-300 rounded-md py-1 text-sm text-gray-700 shadow-lg max-h-60 overflow-auto"
                >
                  {skillsData.map((skill) => (
                    <li
                      key={skill.id}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-150  ${
                        selectedSkills.includes(skill.id) ? 'bg-primary-blue bg-opacity-10 text-primary-blue' : ''
                      }`}
                      onClick={() => toggleSkill(skill.id)}
                    >
                      {skill.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
          <div className="flex flex-wrap gap-2 mt-2">
            <AnimatePresence>
              {selectedSkills.map(skillId => {
                const skill = skillsData.find(s => s.id === skillId)
                return skill ? (
                  <motion.span
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-blue text-white"
                  >
                    {skill.name}
                    <button
                      type="button"
                      onClick={() => toggleSkill(skill.id)}
                      className="ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors duration-150"
                    >
                      <span className="sr-only">Remove {skill.name}</span>
                      <X className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </motion.span>
                ) : null
              })}
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-45PrWcWBvSAXGj8bD2EAcwLJEf6Bkfw9Y1EknVsZCggqiNixWMwTX9HNJQ24FVfuLa4t8eXt1HPA1iUitADJLCoS5ua3WQR duration-200"
              placeholder="Enter your phone number"
            />
          </motion.div>
        
          <motion.button
            type="submit"
            className="w-full -z-10 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Next <ArrowRight className="ml-2" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}