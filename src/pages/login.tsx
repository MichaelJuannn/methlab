import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-400">
      <Navbar />
      <div className="mx-auto mt-5 flex w-96 flex-col items-center rounded-md border-2 bg-slate-300 px-8 py-12 shadow ">
        <div className=" text-2xl">LOGIN</div>
        <input
          className="my-3 appearance-none rounded-md border py-3  px-6 leading-tight shadow focus:shadow-inner focus:outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          className="my-3 appearance-none rounded-md border py-3 px-6 leading-tight shadow focus:shadow-inner focus:outline-none"
          type="text"
          placeholder="Password"
        />
        <div className="mr-32">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember" className="ml-2">
            Remember me
          </label>
        </div>
        <button className="mt-5 w-1/2  rounded-md bg-secondary py-2 px-8">
          LOGIN
        </button>
        <a href="#" className="mt-5 underline">
          Lupa Password
        </a>
        <div>
          <span>Belum Punya Akun? </span>
          <a href="#" className="text-blue-600 underline">
            Daftar sini
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
