import React from "react";
import { ChangeEvent, FC } from "react";
import * as Sel from "react-select";
import makeAnimated from "react-select/animated";

import { SelectWrapper } from "./styles";

const animatedComponents = makeAnimated();

type SelectProps = {
  name?: string;
  options: Array<{ value: string; label: string; color?: string }>;
  handleOption?: (event: ChangeEvent<HTMLSelectElement>) => void; //????
  isSelectMulti?: boolean;
  noOptionsMessage?: { inputValue: string };
  placeholder?: string;
  //DOC   in case of multi we should only write "isSelectMulti" as props without argument
};

const Select: FC<SelectProps> = ({
  options,
  handleOption,
  isSelectMulti,
  noOptionsMessage,
  placeholder,
}) => {
  return (
    <SelectWrapper>
      <Select //это должен быть компонент import * as Sel from "react-select";
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={isSelectMulti}
        menuPlacement="auto"
        // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
        noOptionsMessage={() => `${noOptionsMessage?.inputValue}`}
        options={options}
        placeholder={placeholder}
      />
    </SelectWrapper>
  );
};
//TODO Fixed upper border, option color
export default Select;
