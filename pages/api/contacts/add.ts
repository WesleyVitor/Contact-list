import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const c = req.body;

    const isValid = await prisma.contact.create({
        data: c,
    });
    if (isValid) {
        res.status(200)
            .redirect("/")
            .json({ message: "Dados Cadastrados Com Sucesso!" });
    } else {
        res.status(404).redirect("/").json({ message: "Algo deu Errado!" });
    }
};

export default handler;
