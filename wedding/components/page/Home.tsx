import React from 'react'
import { Header } from '../header/Header'
import { asset } from '../../utils/asset'
import { PersonFlorals } from '../common/PersonFlorals'
import { Link } from '../common/Link'


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
    <p className={['Nick', 'Casey'].includes(name) ? "text-blue-600 mb-4" : "text-purple-600 mb-4"}>{role}</p>
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
        href="https://forms.gle/67xtQS5MwLowRDgA8"
        rel='noopener noreferrer'
        target='_blank'
        className="bg-purple-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg border border-black"
      >
        RSVP Now
      </a>
    </div>
  </section>
)

const EventDetailsSection: React.FC = () => (
  <section className="relative py-16 px-6 overflow-hidden bg-white">
    {/* Small screens */}
    <img
      src={asset('fern_accent_small.png')}
      className="block md:hidden w-48 object-cover mx-auto"
    />
    <div className="relative mt-20 mb-20 max-w-4xl mx-auto text-center z-10">
      {/* Large screens */}
      <img
        src={asset('fern_accent.jpg')}
        className="hidden md:block absolute left-[160px] top-[-120px] w-48 object-cover rotate-90 z-[-1]"
      />
      <img
        src={asset('fern_accent.jpg')}
        className="hidden md:block absolute right-[160px] bottom-[-120px] w-48 object-cover -rotate-90 z-[-1]"
      />
      <h2 className="text-4xl font-serif text-purple-900 mb-8">
        Save the Date
      </h2>
      <p className="text-2xl text-gray-700 mb-4">
        July 11th, 2026 at 3:00 PM
      </p>
      <Link
        href="https://maps.app.goo.gl/rB3Lw99QJcVaNoNPA"
        className="inline-flex items-center gap-2 font-medium"
      >
        11819 Bodega Hwy<br />Sebastopol, CA 95472
      </Link>
    </div>
    <img
      src={asset('fern_accent_small.png')}
      className="block md:hidden w-48 object-cover rotate-180 mx-auto"
    />
  </section>
)

const PEOPLE: PersonCardProps[] = [
  {
    name: 'James',
    role: 'The Groom',
    image: 'headshot_james.jpg',
    description: "Being a talented artist and patient teacher, James has a passion for the exploration of patterns. You'll likely find him in the kitchen baking brownies, or mastering every game - both computer and tabletop.",
  },
  {
    name: 'River',
    role: 'The Bride',
    image: 'headshot_river.jpg',
    description: "As a software engineer and avid traveler, River has explored nearly 50 countries. She loves drawing, hiking, and teaching others about the wonderful world of science.",
  },
  {
    name: 'Casey',
    role: "James's Maid of Honor",
    image: 'headshot_casey.jpg',
    description: "While mechanical engineering is her expertise, Casey is also a talented artist and mother of two. She shares James's love for puzzles and games, happy to challenge her brother at any time.",
  },
  {
    name: 'Nicolas',
    role: "River's Best Man",
    image: 'headshot_nick.jpg',
    description: "Part-time magician, full-time jokester. Nicolas has been River's best friend since high school. He has become her rival in chess, video games, anything else nerdy.",
  },
]

const MeetThePartySection: React.FC = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-blue-50">
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
      <EventDetailsSection />
      <MeetThePartySection />
    </div>
  )
}
