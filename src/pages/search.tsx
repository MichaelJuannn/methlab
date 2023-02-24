import { Navbar, Footer } from "@/components/layout";

export default function Search() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="flex-none md:flex-1 ">
          <h2 className="mt-56 py-5 text-center font-serif text-4xl uppercase tracking-widest">
            medicine
          </h2>
        </div>
        <form className="w-15 ml-auto mr-auto min-w-max max-w-3xl overflow-auto  object-contain px-4">
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
              type="text"
              placeholder="Masukan nama obat..."
              className="w-full rounded-full border bg-gray-50 py-4 pl-12 pr-4 text-xl text-gray-500 outline-none focus:border-primary focus:bg-white"
            />
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}
