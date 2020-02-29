import React from 'react'
import { FormItem } from "./FormItem";
import { Formik } from "formik";

function ExampleForm(props) {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <FormItem
        type="text"
        placeholder="Minimo Team A"
        name="minTeamA"
      />
      <FormItem
        type="text"
        placeholder="Maximo Team A"
        name="maxTeamA"
        className="teste"
      />
      <FormItem
        type="select"
        label="Select Team A"
        name="teamA"
        
        options={[
          {value: 'USD', label: 'American Dollar'},
          {value: 'EUR', label: 'Euro'}
        ]}
      />
      <FormItem
        type="radio"
        label="Gender"
        name="gender"
        options={[
          {value: 'male', label:'Male'},
          {value: 'female', label:'Female'},
          {value: 'other', label:'Other'}
        ]}
        className="teste"
      />
      <FormItem
        type="checkbox"
        label="Hobbies"
        name="hobbies"
        options={[
          {value: 'baking', label:'Baking'},
          {value: 'dance', label:'Dance'}
        ]}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export const FilterForm = () => {

  function handleSubmit(values) {
    console.log(JSON.stringify(values, null, 2))
  }

  return (
    <div>
      <Formik
      component={ExampleForm}
      onSubmit={values => handleSubmit(values)}
      initialValues={{
        minTeamA: '',
        maxTeamA: '',
        teamA: '',
        gender: 'male',
        hobbies: []
      }}
    />
    </div>
  )
}



