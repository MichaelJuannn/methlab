import { Footer, Navbar } from "@/components/layout";

export default function Details() {
  return (
    <>
      <Navbar />
      <div className="mx-10 my-10 flex">
        <div id="leftside" className="max-w-sm border">
          <img
            className=""
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
          <button className="mx-auto my-2 block w-1/2  rounded bg-secondary py-3 px-6 text-white">
            PRINT THIS SHIT🖨
          </button>
        </div>
        <div id="rightside" className="ml-5">
          <h1 className="text-4xl font-bold"> Parasetamol</h1>
          <p>BAHAN:</p>
          <ul>
            <li>someshit</li>
            <li>someshit</li>
            <li>someshit</li>
            <li>someshit</li>
          </ul>
          <p>Proses</p>
          <ol>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              accusantium nobis impedit id, aliquid cupiditate!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              accusantium nobis impedit id, aliquid cupiditate!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              accusantium nobis impedit id, aliquid cupiditate!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              accusantium nobis impedit id, aliquid cupiditate!
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Contoh() {
  return (
    <img
      className="w-1/3"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
      alt=""
    />
  );
}
