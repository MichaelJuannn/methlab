import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="bg-slate-500">
        <Navbar />
        <div>
          <div className="mt-5 ml-auto flex h-screen w-1/2 flex-col ">
            <h2 className="text-center text-7xl">
              Memahami Sistem "Evidence Based Meth" (Hanya contoh)
            </h2>
            <button className="m-auto  mt-10 w-1/2 rounded-md bg-red-600 py-2 px-8">
              Mulai Sekarang
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
