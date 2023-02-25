import Card from "@/components/med-card";
import { Footer, Navbar } from "@/components/layout";
import { GetServerSideProps } from "next";
import prisma from "@/utils/client";

export default function Result({ data }: any) {
  return (
    <>
      <Navbar />
      <div className="mb-10 flex flex-wrap justify-evenly gap-2">
        {data.map((element: any, index: any) => {
          return (
            <Card
              name={element.name}
              description={element.desc}
              keyId={index + 6}
            />
          );
        })}
      </div>
      <Footer />
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
