import FeatureSection from "@/components/organisms/feature";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Service from "@/components/organisms/service";
import Sliders from "@/components/organisms/sliders";
import { Suspense } from "react";

export default function Home() {
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
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}
