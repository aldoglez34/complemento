import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
setDefaultLocale("es");
registerLocale("es", es);

const PinkDiscountDate = React.memo(() => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate({
      startDate: date,
    });
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      locale="es"
      //   dateFormat="Pp"
    />
  );
});

export default PinkDiscountDate;
