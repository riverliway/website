import React from 'react'
import { Header } from '../header/Header'

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src=""
          alt="Wedding hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            James & River's Wedding
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Welcome! We're so excited to celebrate our special day with you. 
            Please RSVP below to let us know you'll be joining us.
          </p>
          <a
            href="/rsvp"
            className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            RSVP Now
          </a>
        </div>
      </section>

      {/* About the Couple Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">
            Meet the Couple
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Groom */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src=""
                  alt="James"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">James</h3>
              <p className="text-gray-500 mb-4">The Groom</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Add a description about James here. Share hobbies, profession, 
                or what he's most excited about for the wedding.
              </p>
            </div>

            {/* Bride */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src=""
                  alt="River"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">River</h3>
              <p className="text-gray-500 mb-4">The Bride</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Add a description about River here. Share hobbies, profession, 
                or what she's most excited about for the wedding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
