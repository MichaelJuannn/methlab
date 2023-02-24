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
    res: NextApiResponse,
){
    const { query: { query } } = req;
    if(typeof parseInt(query as string) != "number")res.status(400).json({'detail': 'Bad Query'})
    if(req.method == "GET"){
       const result = await prisma.medicine.findFirst({where: {id: parseInt(query as string)}})
       if(!result) return res.status(404).json({'detail':'data not found'})
       res.status(200).json(result)
    }else{
        res.status(400).json({'detail': 'oleh e nge get ae mas, ate lapo hayo'})
    }
}