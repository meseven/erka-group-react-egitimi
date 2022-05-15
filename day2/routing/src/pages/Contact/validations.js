import { object, string } from "yup";

const contactSchema = object({
  fullname: string().required(),
  email: string().email().required(),
  message: string().min(3).required(),
});

export default contactSchema;
