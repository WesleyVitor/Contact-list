import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id.toString();

    const contact = await prisma.contact.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    res.status(200).json(contact);
};

export default handler;
