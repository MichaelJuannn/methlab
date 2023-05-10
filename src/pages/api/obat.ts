import prisma from "@/utils/client";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  name: string;
  desc: string;
  activeIngredient: string;
  manufacturer: string;
  image: string | null;
}

export async function getMedicines() {
  const obat: Data[] = await prisma.medicine.findMany();
  return obat;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await getMedicines();
      res.status(200).json({ detail: "succes", data });
    } catch (err) {
      res.status(500).json({ detail: err });
    }
  } else if (req.method === "POST") {
    try {
      const getallMed: Data[] = await prisma.medicine.findMany();
      const msg: Data = req.body;
      const allMed = getallMed.filter((med) => med.name === msg.name);
      if (allMed.length > 0)
        return res
          .status(401)
          .json({ detail: "data with that name already exist" });
      res.status(201).json({ detail: "succes", data: msg });
    } catch (err) {
      res.status(500).json({ detail: err });
    }
  }
}
