import { Navbar, Footer } from "@/components/layout";

export default function Register() {
  return (
    <>
      <Navbar />
      <main>
        <div className="">
          <h1 className="m-10 text-center text-5xl">Register Your Account</h1>
          <div className="flex flex-col items-center">
            <form action="/api/register" method="post">
              <div className="m-4 w-fit rounded border bg-neutral-200 p-5">
                <div>
                  <label htmlFor="email">Email Address</label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className=" w-full rounded border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="">
                      Insert Your Legal Certificate
                    </label>
                    <input
                      className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none "
                      type="file"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="mt-5 ml-auto block  rounded-md bg-secondary py-2 px-8"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
