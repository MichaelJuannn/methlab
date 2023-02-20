import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = req.body;
	console.log(req.body);

	res.json(data);
}
