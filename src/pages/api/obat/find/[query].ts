import prisma from "@/utils/client";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: number;
  name: string;
  desc: string;
  activeIngredient: string;
  manufacturer: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  if (typeof query != "string") res.status(400).json({ detail: "Bad Query" });
  if (req.method == "GET") {
    try {
      const allMed: Data[] = await prisma.medicine.findMany();
      const resultByName = allMed.filter((med) =>
        med.name.toLowerCase().includes((query as string).toLowerCase())
      );
      const resultByActiveIngredient = allMed.filter((med) =>
        med.activeIngredient
          .toLowerCase()
          .includes((query as string).toLowerCase())
      );
      const resultByManufacture = allMed.filter((med) =>
        med.manufacturer.toLowerCase().includes((query as string).toLowerCase())
      );
      //rm duplicated objects
      const result = [
        ...resultByName,
        ...resultByActiveIngredient,
        ...resultByManufacture,
      ].filter(
        (val, index, self) => index === self.findIndex((t) => t.id === val.id)
      );
      // const result =
      if (result.length === 0)
        return res.status(404).json({
          detail: "data not found",
          msg: "keywordmu seng nggenah asu",
        });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ detail: e });
    }
  } else {
    res.status(400).json({ detail: "oleh e nge get ae mas, ate lapo hayo" });
  }
}
