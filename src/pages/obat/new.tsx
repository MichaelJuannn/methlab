import { Footer, Navbar } from "@/components/layout";

export default function New() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="m-4 text-center text-6xl">
          Input Your Medicine Data here
        </h1>
        <div>
          <form action="/api/medicine" method="post" className="m-8">
            <div>
              <label htmlFor="name" className="block">
                Medicine Name
              </label>
              <input
                name="name"
                type="text"
                className="rounded border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Drug's Name"
              />
            </div>
            <div>
              <label htmlFor="desc" className="block">
                Enter Your Description
              </label>
              <textarea
                name="desc"
                className="w-full rounded border focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <div>
              <label htmlFor="name" className="block">
                Active Ingredients
              </label>
              <input
                name="activeIngredient"
                type="text"
                className="rounded border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Active Ingredients"
              />
            </div>
            <div>
              <label htmlFor="name" className="block">
                Manufacturer / Sources
              </label>
              <input
                name="manufacturer"
                type="text"
                className="rounded border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Sources"
              />
            </div>
            <button type="submit" className="rounded bg-primary px-5 py-1">
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
