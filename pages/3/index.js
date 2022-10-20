import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import ValidationMessage from "../../components/ValidationMessage";

export default function NumberThreePage() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Harap diisi").min(3, "Minimal 3 karakter"),
        email: Yup.string()
          .required("Harap diisi")
          .email("value must email format Ex: telkom@gmail.com"),
        phone: Yup.string()
          .required("Harap diisi")
          .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "only number. Ex: 085799121111"
          )
          .min(10, "Terlalu pendek")
          .max(14, "Terlalu panjang"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="min-h-screen bg-gray-200 m-20 p-8 rounded-lg">
        <div className="">
          <label htmlFor="name">Nama Developer</label>
          <Field
            name="name"
            type="text"
            placeholder="Nama Developer"
            className="text-base w-full mt-1 border-2 border-slate-600 rounded-lg shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-border-green-200"
          />
          <ErrorMessage name="name" component={ValidationMessage} />
        </div>

        <div className="">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            placeholder="email address"
            className="text-base w-full mt-1 border-2 border-slate-600 rounded-lg shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-border-green-200"
          />
          <ErrorMessage name="email" component={ValidationMessage} />
        </div>
        <div className="">
          <label htmlFor="phone">Phone Number</label>
          <Field
            name="phone"
            type="number"
            placeholder="phone number"
            className="text-base w-full mt-1 border-2 border-slate-600 rounded-lg shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-border-green-200"
          />
          <ErrorMessage name="phone" component={ValidationMessage} />
        </div>
        <div className=" my-10">
          <button type="submit" className="bg-green-200 px-4 py-3 w-full">
            submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}
