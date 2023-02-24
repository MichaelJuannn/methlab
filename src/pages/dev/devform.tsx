import { Navbar } from "@/components/layout";

export default function DevForm() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <form
          action="/api/medicine"
          method="post"
          className="m-5 rounded bg-primary p-6 shadow-lg"
        >
          <div>Input the data here</div>
          <div>
            <input
              placeholder="NAME OF MED"
              type="text"
              name="name"
              className="my-3 appearance-none rounded-md border py-3  px-6 leading-tight shadow focus:shadow-inner focus:outline-none"
            />
          </div>
          <div>
            <input
              placeholder="Description"
              type="text"
              name="desc"
              className="my-3 appearance-none rounded-md border py-3  px-6 leading-tight shadow focus:shadow-inner focus:outline-none"
            />
          </div>
          <div>
            <input
              placeholder="Active Ingredient"
              type="text"
              name="activeIngredient"
              className="my-3 appearance-none rounded-md border py-3  px-6 leading-tight shadow focus:shadow-inner focus:outline-none"
            />
          </div>
          <div>
            <input
              placeholder="Manufacturer"
              type="text"
              name="manufacturer"
              className="my-3 appearance-none rounded-md border py-3  px-6 leading-tight shadow focus:shadow-inner focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="ml-auto block rounded bg-secondary p-4"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
