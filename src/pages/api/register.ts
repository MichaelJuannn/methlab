import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  if (!body.email || !body.password) return res.redirect(`/register?error=1`);
  const dateCreated = new Date();
  try {
    const newUser = await prisma.account.create({
      data: {
        email: body.email,
        password: body.password,
        createdAt: dateCreated,
      },
    });
    return res.redirect("/search");
  } catch (error) {
    return res.redirect(`/register?error=1`);
  }
}
