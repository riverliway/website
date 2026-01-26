import React from 'react'
import { Header } from '../header/Header'
import { asset } from '../../utils/asset'

const HeroSection: React.FC = () => (
  <section className="relative h-[75vh] w-full">
    <img
      src={asset('hero_story.jpg')}
      alt="Our Story"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/20" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 className="text-5xl md:text-7xl font-serif mb-4 [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
        Our Story
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
        A journey around the world together
      </p>
    </div>
  </section>
)

interface TripImage {
  src: string
  span?: 2
}

interface TripCardProps {
  title: string
  location: string
  description: string
  images: TripImage[]
  highlight?: boolean
}

const TripCard: React.FC<TripCardProps> = ({ title, location, description, images, highlight }) => (
  <div className="space-y-6">
    <div className="text-center">
      <p className="text-purple-600 font-medium mb-2">{location}</p>
      <h3 className={`text-2xl font-serif ${highlight ? 'text-purple-900' : 'text-gray-800'}`}>
        {title}
        {highlight && <span className="ml-2 text-pink-500">💍</span>}
      </h3>
    </div>
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image, i) => (
        <div
          key={i}
          className={`rounded-xl overflow-hidden w-full ${image.span === 2 ? 'md:w-[calc(50%-0.5rem)]' : 'md:w-[calc(33.333%-0.67rem)]'}`}
        >
          <img
            src={asset(image.src)}
            alt={`${title} ${i + 1}`}
            className="w-full h-max md:h-96 object-cover"
          />
        </div>
      ))}
    </div>
    <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">{description}</p>
  </div>
)

const TRIPS: TripCardProps[] = [
  {
    title: 'First Trip Together',
    location: 'Ireland',
    description: 'Our first adventure abroad together. We explored the rolling green hills, ancient castles, and cozy pubs of the Emerald Isle.',
    images: [
      { src: 'trip_ireland_1.jpg' },
      { src: 'trip_ireland_2.jpg' },
      { src: 'trip_ireland_3.jpg' },
      { src: 'trip_ireland_5.jpg' },
      { src: 'trip_ireland_4.jpg', span: 2 },
    ],
  },
  {
    title: 'Fire and Ice',
    location: 'Iceland & Greenland',
    description: 'From the dramatic landscapes of Iceland to the remote beauty of Greenland, we chased waterfalls, climbed glaciers, and camped out in the midnight sun.',
    images: [
      { src: 'trip_iceland_2.jpg' },
      { src: 'trip_iceland_1.jpg' },
      { src: 'trip_iceland_3.jpg' },
      { src: 'trip_iceland_4.jpg', span: 2 },
      { src: 'trip_iceland_5.jpg', span: 2 },
    ],
  },
  {
    title: 'Romance in France',
    location: 'France',
    description: 'Strolling through Paris, exploring the historic streets of Dinan, and savoring every pastry along the way.',
    images: [
      { src: 'trip_france_1.jpg' },
      { src: 'trip_france_2.jpg' },
      { src: 'trip_france_3.jpg' },
      { src: 'trip_france_4.jpg', span: 2 },
      { src: 'trip_france_5.jpg', span: 2 },
    ],
  },
  {
    title: 'Land of the Rising Sun',
    location: 'Japan',
    description: 'Sumo wrestlers, ancient temples, and incredible food. Japan captured our hearts with its perfect blend of tradition and modernity.',
    images: [
      { src: 'trip_japan_1.jpg' },
      { src: 'trip_japan_2.jpg', span: 2 },
      { src: 'trip_japan_3.jpg' },
      { src: 'trip_japan_4.jpg' },
      { src: 'trip_japan_5.jpg' },
    ],
  },
  {
    title: 'The Proposal',
    location: 'Brazil, Argentina, and Paraguay',
    description: 'Against the backdrop of breathtaking South American landscapes, we took the next step in our journey together.',
    images: [
      { src: 'trip_brazil_1.jpg', span: 2  },
      { src: 'trip_brazil_2.jpg' },
      { src: 'trip_brazil_3.jpg' },
      { src: 'trip_brazil_4.jpg' },
      { src: 'trip_brazil_5.jpg' },
    ],
    highlight: true,
  },
]

const TripsSection: React.FC = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-serif text-center text-purple-900 mb-16">Our Adventures</h2>
      <div className="space-y-16">
        {TRIPS.map((trip) => (
          <TripCard key={trip.location} {...trip} />
        ))}
      </div>
    </div>
  </section>
)

export const StoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TripsSection />
    </div>
  )
}
