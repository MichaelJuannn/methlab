import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/client";

interface Data {
  name: string;
  desc: string;
  activeIngredient: string;
  manufacturer: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const msg: Data = req.body;
  const record = await prisma.medicine.create({
    data: {
      name: msg.name,
      desc: msg.desc,
      activeIngredient: msg.activeIngredient,
      manufacturer: msg.manufacturer,
    },
  });
  res.redirect("/dev/devform");
}
