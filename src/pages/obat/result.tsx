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

export function Card({
  name,
  description,
  keyId,
}: {
  name: string;
  description: string;
  keyId: number;
}) {
  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-primary px-2 pt-2 shadow-lg">
        <a href="#!">
          <img
            className="rounded-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="mb-4 overflow-hidden text-ellipsis text-xl font-medium leading-tight text-neutral-800">
            {name}
          </h5>
          <p className="mb-4 text-base text-neutral-600">
            {description.substring(0, 250)}....
          </p>
          <Link href={`./${keyId}`}>
            <button
              type="button"
              className="inline-block rounded bg-secondary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-lg shadow-primary transition duration-150 ease-in-out hover:shadow-red-800 focus:outline-none focus:ring-0 active:bg-transparent "
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Lihat Lebih Lanjut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
