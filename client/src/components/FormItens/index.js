import React from 'react'
import {Formik, useField, useFormik} from 'formik'


const MyCheckbox = ({ children, ...props }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const FormFilter = () => {
  const formik = useFormik({
    initialValues: {
      minEconomyTeamA: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="min">Email Address</label>
        <input
          id="minEconomyTeamA"
          name="minEconomyTeamA"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.minEconomyTeamA}
        />
        <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
        </MyCheckbox>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
