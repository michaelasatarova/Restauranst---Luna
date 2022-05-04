import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: '',
    category: '',
    country: '',
    street:'',
    city:'',
    phone:'',
    openingHours:'',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors]
  // );

   return { handleChange, handleSubmit, values, errors, setErrors};
};

export default useForm;