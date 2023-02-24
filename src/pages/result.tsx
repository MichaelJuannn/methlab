import Card from "@/components/med-card";
import { Footer, Navbar } from "@/components/layout";

export default function Result() {
  return (
    <>
      <Navbar />
      <div className="flex gap-2">
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}
