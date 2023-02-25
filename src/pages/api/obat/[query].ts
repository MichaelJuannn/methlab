import prisma from "@/utils/client";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: number;
  name: string;
  desc: string;
  activeIngredient: string;
  manufacturer: string;
}

export async function getMedicine(id: number) {
  const result = await prisma.medicine.findFirst({
    where: { id: id },
  });
  return result;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { query } = req.query;
  if (typeof query != "string") return res.status(400).send("badrequest");
  try {
    const result = await getMedicine(parseInt(query));
    res.status(200).json(result);
  } catch (e) {
    res.status(500).send("BAD REQUEST");
  }
}
