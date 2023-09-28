import Brands from "@/components/home/brands/brands";
import Contacts from "@/components/home/contacts/Contacts";
import Featured from "@/components/home/featured/Featured";
import Hero from "@/components/home/hero/Hero";
import HowWorks from "@/components/home/howworks/HowWorks";
import Stats from "@/components/home/stats/Stats";

const Page = () => {
  return (
    <>
      <Hero />
      <Stats />
      <HowWorks />
      <Featured />
      <Contacts />
      <Brands />
    </>
  );
};

export default Page;
