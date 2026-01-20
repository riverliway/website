import React from 'react'
import { Header } from '../header/Header'
import { asset } from '../../utils/asset'
import { PersonFlorals } from '../common/PersonFlorals'

interface PersonCardProps {
  name: string
  role: string
  image: string
  description: string
}

const PersonCard: React.FC<PersonCardProps> = ({ name, role, image, description }) => (
  <div className="text-center">
    <div className="relative w-full max-w-sm mx-auto mb-6">
      <PersonFlorals name={name} />
      <div className="rounded-2xl bg-purple-100 ring-4 ring-purple-200 overflow-hidden aspect-[3/4]">
        <img
          src={asset(image)}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <h3 className="text-2xl font-serif text-purple-900 mb-2">{name}</h3>
    <p className="text-purple-600 mb-4">{role}</p>
    <p className="text-gray-600 max-w-sm mx-auto">{description}</p>
  </div>
)

const HeroSection: React.FC = () => (
  <section className="relative h-[75vh] w-full">
    <img
      src={asset('hero.jpg')}
      alt="Wedding hero"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 className="text-5xl md:text-7xl font-serif mb-4 [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]">
        James & River's Wedding
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]">
        Welcome! We're so excited to celebrate our special day with you. 
        Please RSVP below to let us know you'll be joining us.
      </p>
      <a
        href="/rsvp"
        className="bg-purple-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg border border-black"
      >
        RSVP Now
      </a>
    </div>
  </section>
)

const PEOPLE: PersonCardProps[] = [
  {
    name: 'James',
    role: 'The Groom',
    image: 'headshot_james.jpg',
    description: "Add a description about James here. Share hobbies, profession, or what he's most excited about for the wedding.",
  },
  {
    name: 'River',
    role: 'The Bride',
    image: 'headshot_river.jpg',
    description: "Add a description about River here. Share hobbies, profession, or what she's most excited about for the wedding.",
  },
  {
    name: 'Casey',
    role: "James's Maid of Honor",
    image: 'headshot_casey.jpg',
    description: "Add a description about Casey here. Share hobbies, profession, or what she's most excited about for the wedding.",
  },
  {
    name: 'Nick',
    role: "River's Best Man",
    image: 'headshot_nick.jpg',
    description: "Add a description about Nick here. Share hobbies, profession, or what he's most excited about for the wedding.",
  },
]

const MeetThePartySection: React.FC = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif text-center text-purple-900 mb-16">
        Meet the Party
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {PEOPLE.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  </section>
)

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MeetThePartySection />
    </div>
  )
}
