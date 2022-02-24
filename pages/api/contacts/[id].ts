import { NextApiRequest, NextApiResponse } from "next";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    res.status(200).json({});
};

export default handler;
