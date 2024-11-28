'use client';
import FeatureSection from '@/components/organisms/feature';
import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import Service from '@/components/organisms/service';
import Sliders from '@/components/organisms/sliders';
import { Suspense } from 'react';
// const fetchTeam = async (): Promise<TeamMember[]> => {
//   const isServer = typeof window === 'undefined';
//   const baseUrl = isServer
//     ? 'http://localhost:3002' // For SSR, use the local URL
//     : ''; // On the client side, we can use relative URLs

//   const res = await fetch(`${baseUrl}/api/team`);

//   if (!res.ok) {
//     throw new Error(`Failed to fetch team data: ${res.statusText}`);
//   }

//   return res.json();
// };

export default async function Home() {
  return (
    <div className=" ">
      <Suspense fallback={<p>Loading...</p>}>
        {/* <TeamCarousel team={team} /> */}

        <div className=" bg-[url('/images/main.png')] bg-img text-white mobile:px-5">
          <Header />
          <Sliders />
          <FeatureSection />
        </div>

        <div className=" bg-[#FBFBFB] py-[70px] mobile:px-5 mobile:py-[60px] ">
          <Service />
          {/* Footer */}
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}
