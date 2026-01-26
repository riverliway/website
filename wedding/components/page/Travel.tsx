import React from 'react'
import { Header } from '../header/Header'
import { Link } from '../common/Link'
import { asset } from '../../utils/asset'

const HeroSection: React.FC = () => (
  <section className="relative h-[75vh] w-full">
    <img
      src={asset('hero_travel.jpg')}
      alt="Sonoma County"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 className="text-5xl md:text-7xl font-serif mb-4 [text-shadow:_0_4px_8px_rgba(0,0,0,0.7)]">
        Travel
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl [text-shadow:_0_4px_8px_rgba(0,0,0,0.7)]">
        Everything you need to know about getting to Sebastopol and making the most of your visit.
      </p>
    </div>
  </section>
)

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
        <Link href="https://maps.app.goo.gl/VMiUE7MEd9W2yyva8" className="text-xl font-semibold mb-2 block">
          San Francisco International (SFO)
        </Link>
        <p className="text-gray-600 mb-2">~1.5 hours from venue</p>
        <p className="text-gray-600">
          The largest airport in the region with the most flight options. 
          Recommended for guests flying from another country.
        </p>
        <p className="text-gray-600">
          There is a direct shuttle service from SFO to Sonoma County by <Link href="https://groometransportation.com/sonoma-county/sfo-oak/#tablepress-298_wrapper" className="underline">Goome</Link>.
        </p>
      </div>
      <div className="bg-blue-50 rounded-xl p-6">
        <Link href="https://maps.app.goo.gl/y55V9drL9Fb7NpCK7" className="text-xl font-semibold mb-2 block">
          Sonoma County (STS)
        </Link>
        <p className="text-gray-600 mb-2">~20 minutes from venue</p>
        <p className="text-gray-600">
          A smaller regional airport right in Santa Rosa. 
          Fewer flight options but much closer to the venue for those with family or friends in the area.
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
        <Link href="https://maps.app.goo.gl/WXrFnCdnfQswbo3C7" className='font-semibold'>
          DoubleTree Hotel
        </Link>
        <p className="text-gray-600">
          Located in Rohnert Park, about a 30-minute drive from the venue.
          <br />
          A convienient option for guests taking the SFO airport shuttle, as this is one of the stops.
        </p>
      </div>
      <div className="border border-purple-200 rounded-lg p-4">
        <Link href="https://maps.app.goo.gl/GWG2Tvz1ueaez3RAA" className='font-semibold'>
          Fairfield Inn
        </Link>
        <p className="text-gray-600">
          The only hotel in Sebastopol, about a mile walk from downtown.
          <br />
          It can fill up quickly during summer, so book early!
        </p>
      </div>
      <div className="border border-purple-200 rounded-lg p-4">
        <Link href="https://www.airbnb.com/s/Sebastopol--CA/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJb2jjds0khIARCJLGdBHzeys&acp_id=da8f0c67-247b-45ee-9ce0-d0251356bd7b&date_picker_type=calendar&search_type=user_map_move&query=Sebastopol%2C%20CA&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-02-01&monthly_length=3&monthly_end_date=2026-05-01&search_mode=regular_search&price_filter_input_type=2&channel=EXPLORE&ne_lat=38.5389821534211&ne_lng=-122.59411977246862&sw_lat=38.200608183104535&sw_lng=-122.97706061306656&zoom=11.32525782394958&zoom_level=11.32525782394958&search_by_map=true&price_filter_num_nights=3" className='font-semibold'>
          AirBnB
        </Link>
        <p className="text-gray-600">
          There are a number of great AirBnB options in Sebastopol and the surrounding area.
          <br />
          Consider these options if you have access to a car or are looking to stay with a group.
        </p>
      </div>
    </div>
  </Section>
)

const CarpoolSection: React.FC = () => (
  <section className="py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif text-purple-900 mb-8">Carpool Coordination</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 h-full flex flex-col justify-center gap-4">
          <p className="text-gray-700">
            There are many guests coming from out of town, and we don't have public transportation options 
            directly to the venue. If you're able to offer rides or are looking for a ride, 
            please indicate that in your RSVP!
          </p>
          <p className="text-gray-700">
            You can take a ride share service like Uber or Lyft from your accommodations to the venue, 
            but since the area is more rural, it may be difficult to get a ride back after the event in the evening.
            Consider scheduling your return ride in advance to ensure availability.
          </p>
          <p className="text-gray-700">
            If you have any questions about transportation, feel free to reach out to us directly!
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img
            src={asset('carpool.jpg')}
            alt="Carpool"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
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
          <li>• The Barlow: food, art, and craft beverages in Sebastopol</li>
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
          <li>• Downtown Petaluma shops and galleries</li>
          <li>• Safari West wildlife preserve</li>
          <li>• Historic Sonoma Plaza</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-800">Relaxation</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Osmosis Day Spa: Japanese gardens and treatments</li>
          <li>• Hot springs and spas in Calistoga</li>
          <li>• Scenic drives through wine country</li>
        </ul>
      </div>
    </div>
    <div className="w-64 md:w-96 aspect-square mx-auto my-6">
      <img
        src={asset('wine_glasses.jpg')}
        alt="Wine glasses"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </Section>
)

export const TravelPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AirportsSection />
      <div className="border-t border-purple-100" />
      <HotelsSection />
      <div className="border-t border-purple-100" />
      <CarpoolSection />
      <div className="border-t border-purple-100" />
      <ThingsToDoSection />
    </div>
  )
}
