import { NextApiRequest, NextApiResponse } from "next";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.body;
    console.log(id);
    res.json({});
};

export default handler;
