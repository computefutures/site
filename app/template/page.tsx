import type { Metadata } from "next";

import { Heading } from '@/components/ui/heading'

export const metadata: Metadata = {
  title: "Kids Teaching Kids Code | Compute the Future",
  description: "Generated by create next app",
};

export default function Template() {

    return (
        <section className='flex flex-col gap-10 md:p-20'>
            <header className='h-full w-full flex flex-col gap-5 justify-between items-center'>
                <Heading as='h1'>Events</Heading>
                <p className='text-center md:text-xl '>
                    By the students, for the students. We believe in a world where every young person is empowered to be the change they want to see around them. At Hack Club, we’re working hard to make it reality.
                </p>
            </header>
        </section>
    )
}