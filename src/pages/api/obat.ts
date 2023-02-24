import prisma from "@/utils/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const obat = await prisma.obat.findMany();
      if (obat.length == 0) {
        res.status(404).json({ detail: "data not found" });
      } else {
        res.status(200).json({ body: obat });
      }
    } catch (err) {
      res.status(500).json({ detail: err });
    }
  } else if (req.method === "POST") {
    const { nama, jenis, bahan, proses_pembuatan, sumber, gambar } = req.body;
    try {
      const createObat = await prisma.obat.create({
        data: {
          nama,
          jenis,
          bahan,
          proses_pembuatan,
          sumber,
          gambar,
        },
      });
      res.status(201).json({ message: "Success", data: createObat });
    } catch (err) {
      res.status(500).json({ detail: err });
    }
  }
}
