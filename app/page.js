import { Button } from "@/components/ui/button"; // Ensure you have the Button component available
import Image from "next/image"; // Ensure Image is correctly imported
import Banner from "./dashboard/_components/Banner"; // Import your banner component
import Header from "./dashboard/_components/Header"; // Import your header component

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}

