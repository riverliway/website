import React from 'react'
import { Header } from '../header/Header'
import { Link } from '../common/Link'

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif text-purple-900 mb-8">{title}</h2>
      {children}
    </div>
  </section>
)

const AirportsSection: React.FC = () => (
  <Section title="Getting Here">
    <p className="text-gray-700 mb-6">
      Two airports serve the Sonoma County area:
    </p>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-purple-50 rounded-xl p-6">
        <Link href="https://maps.app.goo.gl/VMiUE7MEd9W2yyva8" className="text-xl font-semibold mb-2 block">San Francisco International (SFO)</Link>
        <p className="text-gray-600 mb-2">~1.5 hours from venue</p>
        <p className="text-gray-600">
          The largest airport in the region with the most flight options. 
          A scenic drive north through wine country to Sebastopol.
        </p>
      </div>
      <div className="bg-blue-50 rounded-xl p-6">
        <Link href="https://maps.app.goo.gl/y55V9drL9Fb7NpCK7" className="text-xl font-semibold mb-2 block">Sonoma County (STS)</Link>
        <p className="text-gray-600 mb-2">~20 minutes from venue</p>
        <p className="text-gray-600">
          A smaller regional airport right in Santa Rosa. 
          Fewer flight options but much closer to the venue.
        </p>
      </div>
    </div>
  </Section>
)

const HotelsSection: React.FC = () => (
  <Section title="Where to Stay">
    <p className="text-gray-700 mb-6">
      Here are some recommended hotels in the Sebastopol and Santa Rosa area:
    </p>
    <div className="space-y-4">
      <div className="border border-purple-200 rounded-lg p-4">
        <h3 className="font-semibold text-purple-800">The Barlow</h3>
        <p className="text-gray-600">A trendy spot in Sebastopol with easy access to local shops and restaurants.</p>
      </div>
      <div className="border border-purple-200 rounded-lg p-4">
        <h3 className="font-semibold text-purple-800">Hyatt Regency Sonoma Wine Country</h3>
        <p className="text-gray-600">Located in Santa Rosa, about 15 minutes from the venue.</p>
      </div>
      <div className="border border-purple-200 rounded-lg p-4">
        <h3 className="font-semibold text-purple-800">Sebastopol Inn</h3>
        <p className="text-gray-600">A cozy option right in downtown Sebastopol.</p>
      </div>
    </div>
  </Section>
)

const CarpoolSection: React.FC = () => (
  <Section title="Carpool Coordination">
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6">
      <p className="text-gray-700 mb-4">
        We'd love to help coordinate carpools for guests coming from the same area!
      </p>
      <p className="text-gray-700 mb-4">
        If you're interested in sharing a ride (as a driver or passenger), please let us know 
        in the notes section of your RSVP. We'll help connect guests traveling from the same direction.
      </p>
      <a
        href="/rsvp"
        className="inline-block bg-purple-800 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
      >
        RSVP & Request Carpool
      </a>
    </div>
  </Section>
)

const ThingsToDoSection: React.FC = () => (
  <Section title="Explore Sonoma County">
    <p className="text-gray-700 mb-6">
      Make a weekend of it! Sonoma County has so much to offer:
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-800">Wine & Food</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Wine tasting in Healdsburg or Sonoma Plaza</li>
          <li>• The Barlow – food, art, and craft beverages in Sebastopol</li>
          <li>• Farm-to-table dining throughout the region</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-800">Nature & Outdoors</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Armstrong Redwoods State Natural Reserve</li>
          <li>• Bodega Bay and the Sonoma Coast</li>
          <li>• Hiking at Sonoma Coast State Park</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-800">Local Favorites</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Downtown Healdsburg shops and galleries</li>
          <li>• Safari West wildlife preserve</li>
          <li>• Historic Sonoma Plaza</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-800">Relaxation</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Osmosis Day Spa – Japanese gardens and treatments</li>
          <li>• Hot springs and spas in Calistoga</li>
          <li>• Scenic drives through wine country</li>
        </ul>
      </div>
    </div>
  </Section>
)

export const TravelPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <div className="text-center py-12 bg-gradient-to-b from-purple-50 to-white">
          <h1 className="text-5xl font-serif text-purple-900 mb-4">Travel</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to know about getting to Sebastopol and making the most of your visit.
          </p>
        </div>
        <AirportsSection />
        <div className="border-t border-purple-100" />
        <HotelsSection />
        <div className="border-t border-purple-100" />
        <CarpoolSection />
        <div className="border-t border-purple-100" />
        <ThingsToDoSection />
      </div>
    </div>
  )
}
