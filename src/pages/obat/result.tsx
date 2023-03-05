import Card from "@/components/med-card";
import { Footer, Navbar } from "@/components/layout";
import { GetServerSideProps } from "next";
import prisma from "@/utils/client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Medicine {
  id: number;
  name: string;
  desc: string;
  manufacturer: string;
  activeIngredient: string;
}
interface DataProps {
  data: Medicine[];
}

export default function Result({ data }: DataProps) {
  const router = useRouter();
  const [query, setQuery] = useState(router.query.q as string);
  return (
    <>
      <Navbar />
      <Link href="new">
        <button className="m-5 ml-auto block rounded-md  bg-secondary py-2 px-8 text-white">
          CREATE NEW RECORD
        </button>
      </Link>
      <div className="m-5 text-center">
        <input
          className="rounded border-2 px-5 py-2 shadow shadow-primary"
          value={router.query.q}
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
