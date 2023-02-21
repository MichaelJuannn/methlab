export default function Card() {
  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg ">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
          Card title
        </h5>
        <p className="mb-4 text-base text-neutral-600 ">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white "
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Button
        </button>
      </div>
    </div>
  );
}
