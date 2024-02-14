// components/FormikDatePicker.tsx
import { DatePicker} from "@mui/x-date-pickers/DatePicker";
import { useField, useFormikContext } from "formik";
import React from "react";

const FormikDatePicker =({name, views,...restProps}) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  return (
    <DatePicker
      views={views}
      name={name}
      value={field.value ?? null}
      onChange={(val) => setFieldValue(name, val)}
      {...restProps}
    />
  );
};

export default FormikDatePicker;