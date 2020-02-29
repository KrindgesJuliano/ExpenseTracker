import React, {Fragment} from 'react'
import { connect } from "formik";

export const FormItem = connect(props => {
  const { label, ...inputProps } = props;
  const { errors, touched } = props.formik;

  return (
    <div>
      {label && <label>{label}</label>}

      <FormInput {...inputProps} />

      {errors[inputProps.name] && touched[inputProps.name] && <p>{errors[inputProps.name]}</p>}
    </div>
  )
})

function extractInputProps({formik, options,...otherProps}, option) {
  const props = {
    value: formik.values[otherProps.name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    ...otherProps
  }

  if (props.type === 'checkbox') {
    props.value = option.value;
    props.checked = formik.values[props.name].includes(option.value);
    props.onChange = e => {
      const val = formik.values[props.name];
      e.target.checked
        ? val.push(e.target.value)
        : val.slice(val.indexOf(e.target.value));
      formik.setFieldValue(val);
    }
  } else if (props.type === 'radio') {
    props.value = option.value;
    props.checked = option.value === formik.values[props.name];
  }

  return props;
}

const FormInput = props => {
  switch (props.type) {
      case 'radio':
      case 'checkbox':
          return CheckInput(props);
      case 'select':
          return SelectInput(props);
      case 'textarea':
          return TextAreaInput(props);
      default:
          return TextInput(props);
  }
}

const TextInput = props => <input {...extractInputProps(props)} />
const TextAreaInput = props => <textarea {...extractInputProps(props)} />

const SelectInput = props => (
  <select {...extractInputProps(props)}>
    <option value="">Select a value</option>
    {props.options.map(o =>
      <option key={o.value} value={o.value}>{o.label || o.value}</option>)}
  </select>
);

const CheckInput = props => (
  <Fragment>
    {props.options.map(option => (
      <label key={option.value}>
        <input {...extractInputProps(props, option)} />
        {option.label || option.value}
      </label>
    ))}
  </Fragment>
);