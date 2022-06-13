import React from "react";
import { AntCheckbox } from "./style";

export const Checkbox = ({ children, mr, ml, mb, mt, pl, onChange, size }) => {
  return (
    <AntCheckbox
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      pl={pl}
      size={size}
      onChange={onChange}
    >
      {children}
    </AntCheckbox>
  );
};

export default Checkbox;
