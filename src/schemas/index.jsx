import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirmpass: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  age: Yup.number()
    .typeError("age must be a number")
    .min(1)
    .max(99, "Age must be at most 99")
    .positive("Please enter a positive number")
    .integer("Age must be a whole number")
    .required("Please enter your age"),
  doa: Yup.date()
    .min(new Date(2025, 2, 20), "Enter a date after 20th March 2025")
    .required("Date is required"),
  resume: Yup.mixed()
    .required("resume is required")
    .test("fileFormat", "only pdf and documet are allowed", (value) => {
      if (!value) return false;
      return ["application/pdf", "application/msword"].includes(value.type);
    }),
});
