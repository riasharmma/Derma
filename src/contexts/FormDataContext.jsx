import { createContext, useState } from "react";

export const FormDataContext = createContext(null);

export const FormDataContextProvider = ({ children }) => {
  const [patient, setPatient] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [department, setDepartment] = useState(null);
  const [slot, setSlot] = useState(null);
  const [doctor, setDoctor] = useState(null);

  const value = {
    patient,
    setPatient,
    department,
    setDepartment,
    phone,
    setPhone,
    email,
    setEmail,
    slot,
    setSlot,
    doctor,
    setDoctor,
  };

  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  );
};
