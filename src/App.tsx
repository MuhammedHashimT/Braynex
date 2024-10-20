import React from 'react'
import { ArrowRight, BookOpen, Users, TrendingUp, Award, ChevronRight } from 'lucide-react'

export default function BraynexHome() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/placeholder.svg?height=40&width=40" alt="Braynex Logo" className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Braynex</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            </div>
            <div>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Personalized Career Learning with Braynex
              </h1>
              <p className="text-xl mb-8">
                Unlock your potential with adaptive learning tailored to your career goals.
              </p>
              <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center">
                Get Started <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="/home.jpg" alt="Braynex Platform" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Braynex?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-blue-600" />}
              title="Personalized Learning"
              description="Adaptive courses tailored to your unique career goals and learning style."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Expert Mentorship"
              description="Connect with industry professionals for guidance and support."
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-blue-600" />}
              title="Skill Tracking"
              description="Monitor your progress and identify areas for improvement."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-blue-600" />}
              title="Industry-Recognized Certificates"
              description="Earn credentials that matter in your chosen field."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Braynex helped me transition into a new career in tech. The personalized learning path was a game-changer!"
              author="Sarah K., Software Developer"
            />
            <TestimonialCard
              quote="As a busy professional, I appreciate how Braynex adapts to my schedule. It's like having a personal tutor available 24/7."
              author="Michael R., Marketing Manager"
            />
            <TestimonialCard
              quote="The expert mentorship feature gave me invaluable insights into my industry. It's more than just an online course platform."
              author="Emily L., Data Scientist"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="/placeholder.svg?height=400&width=600" alt="About Braynex" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Personalized Learning for Your Career Journey</h2>
              <p className="text-gray-600 mb-6">
                Braynex uses advanced AI algorithms to create a unique learning experience tailored to your goals, 
                skills, and learning style. Our platform adapts in real-time, ensuring you're always challenged 
                and engaged, no matter where you are in your career journey.
              </p>
              <ul className="space-y-4">
                <ListItem text="Adaptive learning paths that evolve with you" />
                <ListItem text="Real-world projects and case studies" />
                <ListItem text="Continuous feedback and skill assessment" />
                <ListItem text="Flexible learning schedule to fit your lifestyle" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8">Join Braynex today and start your personalized learning journey.</p>
          <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center">
            Get Started Now <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Braynex</h3>
              <p className="text-gray-400">Empowering careers through personalized learning.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Braynex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author }:any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">"{quote}"</p>
      <p className="font-semibold">- {author}</p>
    </div>
  )
}

function ListItem({ text }:any) {
  return (
    <li className="flex items-center">
      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
      <span>{text}</span>
    </li>
  )
}