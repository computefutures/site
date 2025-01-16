import type { Metadata } from "next";
import { Heading } from '@/components/ui/heading'
import Link from 'next/link';
import { Activity, SkipBack } from 'react-feather';
import EventGrid from '@/components/ui/event-grid';
import { getUpcomingMonthly } from '@/lib/events/get-upcoming-monthly';

export const metadata: Metadata = {
  title: "Events - Compute the Future",
  description: "Generated by create next app",
};

interface EventProps {
  slug: string;
  id: string;
  title: string;
  desc?: string;
  leader: string;
  avatar: string;
  start: string | Date;
  end: string | Date;
  cal?: string;
}

interface MonthlyEvents {
  [key: string]: EventProps[];
}

interface EventsPageProps {
  months: MonthlyEvents;
}

export default function EventsPage({ months = {} }: EventsPageProps) {
  const hasEvents = months && Object.keys(months).length > 0;

  return (
    <section className='flex flex-col gap-10 md:p-20'>
      <header className='h-full w-full flex flex-col gap-5 justify-between items-center'>
        <Heading as='h1'>Events</Heading>
        <p className='text-center md:text-xl'>
          By the students, for the students. We believe in a world where every young person is empowered to be the change they want to see around them. At Hack Club, we're working hard to make it reality.
        </p>
      </header>
      <main className="max-w-6xl mx-auto px-4">
        {hasEvents ? (
          Object.entries(months).map(([key, monthEvents]) => (
            <EventGrid 
              key={key} 
              month={key} 
              events={monthEvents} 
            />
          ))
        ) : (
          <div className="text-center">
            <h1 className="font-normal">🚧 More events coming soon.</h1>
          </div>
        )}

        <footer className="text-center pb-12 md:pb-16">
          <div className="space-x-4">
            <Link 
              href="/past"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <SkipBack size={20} />
              View past events
            </Link>
            
            <Link 
              href="/data"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Activity size={20} />
              Events API
            </Link>
          </div>
        </footer>
      </main>
    </section>
  )
}

// Since this is a server component, you might want to use this instead:
export async function generateStaticProps() {
  const months = await getUpcomingMonthly();
  return { months };
}