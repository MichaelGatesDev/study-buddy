import React from "react";
import { Form } from "react-bootstrap";

type SimpleDropdownValue = string | number | undefined;

interface Props {
  controlID: string;
  label: string;
  options: SimpleDropdownOption[];
  required?: boolean;
  value?: SimpleDropdownValue;
  onChange: (newValue: SimpleDropdownValue) => void;
  selectLabel: string;
}

export interface SimpleDropdownOption {
  label: string;
  value: SimpleDropdownValue;
}

export const SimpleDropdown = (props: Props): JSX.Element => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <Form.Group controlId={props.controlID}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as="select"
        custom
        onChange={onChange}
        value={props.value ?? -1}
        placeholder="Select a school..."
      >
        <option value={-1} disabled>
          {props.selectLabel}
        </option>
        {props.options.map((option: SimpleDropdownOption, idx) => {
          return (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
};
