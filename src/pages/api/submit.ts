import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  console.log(req.body);
  const result = await prisma.user.create({
    data: {
      name: data.name,
      age: +data.age,
    },
  });
  res.json(data);
}
