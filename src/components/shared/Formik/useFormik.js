import { useFormik } from "formik";

export const useCustomForm = ({
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
};
