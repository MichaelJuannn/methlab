import Head from "next/head";
import Image from "next/image";
import { Footer, Navbar } from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="fixed -z-10 h-screen w-screen overflow-hidden">
          <Image
            className="object-cover"
            src={"/background.png"}
            alt="background"
            fill
          ></Image>
        </div>
        <div className="mb-12">
          <div className="mt-5 ml-auto flex w-1/2 flex-col">
            <h2 className="text-center text-7xl">
              Memahami Sistem "Evidence Based Meth" (Hanya contoh)
            </h2>
            <Link
              href="search"
              className="m-auto  mt-10 w-1/2 rounded-md bg-red-600 py-2 px-8 text-center"
            >
              <button className="">Mulai Sekarang</button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
