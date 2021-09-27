import { Field, FieldAttributes, Form, Formik } from 'formik'

import React from 'react'
import style from './style.module.css'

const FormField: React.FC<{ label: string; name: string; type: string }> = ({
  type,
  label,
  name,
}) => (
  <label className={style.formField}>
    {label}
    <Field type={type} name={name} className={style.input} />
  </label>
)

const CheckoutForm = () => {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div className={style.formSection}>
            <div className={style.formSectionTitle}>Shipping:</div>
            <FormField type="text" name="name" label="Full name" />
            <FormField type="text" name="email" label="Email" />
            <FormField type="text" name="phone" label="Phone" />
            <FormField type="text" name="country" label="Country" />
            <FormField type="text" name="city" label="City" />
            <div className={style.formArddressRow}>
              <FormField type="text" name="address" label="Address" />
              <FormField type="text" name="postcode" label="Postcode" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default CheckoutForm
