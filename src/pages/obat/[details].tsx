import { Footer, Navbar } from "@/components/layout";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getMedicine } from "@/pages/api/obat/[query]";

interface Medicine {
  id: number;
  name: string;
  desc: string;
  manufacturer: string;
  activeIngredient: string;
}

export default function Details(medicine: Medicine) {
  return (
    <>
      <Navbar />
      <div className="mx-10 my-10 flex" id="content">
        <div id="leftside" className="max-w-sm flex-shrink-0 border">
          <img
            className=""
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
          <button className="mx-auto my-2 block w-1/2  rounded bg-secondary py-3 px-6 text-white">
            PRINT 🖨
          </button>
        </div>
        <div id="rightside" className="ml-5">
          <h1 className="text-4xl font-bold">💊 {medicine.name}</h1>
          <p className="my-4">{medicine.desc}</p>
          <div className="font-black">
            <p>ACTIVE INGREDIENTS : {medicine.activeIngredient}</p>
            <p> MANUFACTURED BY : {medicine.manufacturer}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { details } = ctx.query;
  const medicine = await getMedicine(parseInt(details as string));
  if (!medicine) {
    return {
      notFound: true,
    };
  }
  return {
    props: medicine,
  };
};
