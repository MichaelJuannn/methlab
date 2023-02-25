import Card from "@/components/med-card";
import prisma from "@/utils/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function User({ data }: any) {
  console.log(data);
  return (
    <>
      <div></div>
    </>
  );
}
