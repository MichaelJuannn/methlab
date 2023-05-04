import { Navbar, Footer } from "@/components/layout";
import { useState } from "react";

export default function Search() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-none md:flex-1 flex flex-col items-center justify-center h-screen">
        <h2 className="py-5 text-center font-montserrat font-bold text-4xl lowercase tracking-widest">
          <span style={{ color: "#609EA2" }}>m</span>
          <span style={{ color: "#C92C6D" }}>e</span>
          <span style={{ color: "#332C39" }}>d</span>
          <span style={{ color: "#609EA2" }}>i</span>
          <span style={{ color: "#C92C6D" }}>c</span>
          <span style={{ color: "#332C39" }}>i</span>
          <span style={{ color: "#609EA2" }}>n</span>
          <span style={{ color: "#C92C6D" }}>e</span>
        </h2>
        <form
          className="w-full ml-auto mr-auto min-w-max max-w-3xl overflow-auto object-contain px-4"
          action={`obat/result`}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 left-3 my-auto h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#609EA2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              name="q"
              type="text"
              placeholder="Masukan nama obat..."
              className="w-full rounded-full border bg-gray-50 py-4 pl-12 pr-4 text-xl text-gray-500 outline-none focus:border-primary focus:bg-white"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
