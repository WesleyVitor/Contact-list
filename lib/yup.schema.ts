import * as yup from "yup";
import { Message } from "yup/lib/types";

const messageRequired: Message = "Campo Obrigatório";
const messageEmail: Message = "Email Inválido";

export const schema = yup
    .object({
        username: yup.string().required(messageRequired),
        job: yup.string().required(messageRequired),
        bio: yup.string().required(messageRequired),
        email1: yup.string().email(messageEmail).required(messageRequired),
        email2: yup.string().email(messageEmail),
        meeting: yup.string().optional(),
        phone1: yup.string().required(messageRequired),
        phone2: yup.string().optional(),
        instagram: yup.string().optional(),
        twitter: yup.string().optional(),
        Linkedin: yup.string().optional(),
        Pinterest: yup.string().optional(),
        facebook: yup.string().optional(),
    })
    .required();
