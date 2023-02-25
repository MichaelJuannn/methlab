import Card from "@/components/med-card";
import { Footer, Navbar } from "@/components/layout";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/utils/client";
import { useState } from "react";

interface Medicine {
  id: number;
  name: string;
  desc: string;
  manufacturer: string;
  activeIngredient: string;
}
interface Dataprops {
  data: Medicine[];
}

export default function Result({ data }: Dataprops) {
  const [query, setQuery] = useState("");
  return (
    <>
      <Navbar />
      <div className="m-5 text-center">
        <input
          className="rounded border-2 px-5 py-2 shadow shadow-primary"
          type="text"
          placeholder="Enter medicine name"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mb-10 flex flex-wrap justify-evenly gap-2">
        {data
          .filter((element: any) => {
            if (query === "") {
              return element;
            } else if (
              element.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return element;
            }
          })
          .map((element: any, index: any) => {
            return (
              <Card
                name={element.name}
                description={element.desc}
                keyId={index + 6}
                key={index + 6}
              />
            );
          })}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.medicine.findMany();
  return {
    props: {
      data,
    },
  };
};
