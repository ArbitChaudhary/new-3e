import React from "react";
import { Controller, Control } from "react-hook-form";
import styles from "./custom_input.module.scss";

interface InputProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  errors: any;
  defaultValue?: string | null;
  type?: string;
}

/**
 * CustomInputField component
 *
//  * @param {Object} props - The properties object.
//  * @param {string} props.name - The name of the input field, used as a key for form data.
//  * @param {Control<any>} props.control - The control object from react-hook-form for managing form state.
//  * @param {string} props.label - The label for the input field.
//  * @param {string} props.placeholder - The placeholder text for the input field.
//  * @param {any} props.errors - An object containing validation errors for the form fields.
//  * @param {string | null} [props.defaultValue] - The default value of the input field. Default is an empty string.
//  * @param {string} [props.type] - The type of the input field (e.g., "text", "password"). Default is "text".
//  * @param {boolean} [props.showEyeIcon] - A flag to show/hide the eye icon for toggling password visibility. Default is false.
//  *
//  * @returns {JSX.Element} The rendered CustomInputField component.
//  *
 * This is a custom input field component that can be used in forms managed by react-hook-form.
 * It supports standard text input and password input with an optional eye icon to toggle password visibility.
 * Validation errors are displayed below the input field.
 */

const CustomInput: React.FC<InputProps> = ({
  name,
  control,
  label,
  placeholder,
  errors,
  defaultValue = "",
  type,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className={styles.input_flex}>
          <div className={styles.label}>{label}</div>
          {/* <div style={{ position: "relative", width: "100%" }}> */}
          <input
            {...field}
            id={name}
            className={styles.input_field}
            type={type ? type : "text"}
            placeholder={placeholder}
          />
          {/* </div> */}
          {errors[name] && (
            <p className={styles.input_errors}>{errors[name]?.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default CustomInput;
