import React from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


function Assessment(props) {
  console.log(props);
  const { selectedTeam, values, errors, touched, isSubmitting } = props; // the element only be recorded in "touched" after blurring
  return (
    <Form>
      <h2>Hellow {selectedTeam}!</h2>
      <FormWrapper>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          { touched.email && errors.email && <p>{errors.email}</p> }
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          { touched.password && errors.password && <p>{errors.password}</p> }
        </div>
        <label>
          <Field type="checkbox" name="newsLetter" checked={values.newsLetter} />
          Join our newsLetter
        </label>
        <Field component="select" name="plan">
          <option value="regular">Regular</option>
          <option value="premium">Premium</option>
        </Field>
        <button disabled={isSubmitting}>Submit</button>
      </FormWrapper>
    </Form>
  )
}


const mapStateToProps = function (state) {
  return {
    selectedTeam: state.team
  }
}

const mapDispatchToProps = function (dispatch) {
  return {

  }
}

const assessmentContainer = connect(mapStateToProps, mapDispatchToProps)(Assessment);
const formikAssessment = withFormik({
  mapPropsToValues(props) {  // has access to all the props
    return {
      email: props.email || '',   // the key here will be matched to the name attribute inside the form
      password: props.password || '',
      newsLetter: props.newsLetter || true,
      plan: props.plan || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    setTimeout(() => {
      if (values.email === 'tim.kao@rea.com') {
        setErrors({ email: 'The email has been taken!'})
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000)
  }
})(assessmentContainer);

export default formikAssessment;
