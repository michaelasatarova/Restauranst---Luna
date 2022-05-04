export default function validateProfile(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.firstName.trim()) {
        errors.firstName = 'First name required';
      }

    if (!values.lastName.trim()) {
    errors.lastName = 'Last name required';
    }

    if (!values.location.trim()) {
        errors.location = 'Location required';
        }
    
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.tel) {
        errors.tel = 'Phone is required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.tel)) {
      errors.tel = 'Phone is invalid';
    }

    if (!values.description.trim()) {
        errors.description = 'Description / About is required';
    } else if (values.description.length < 50) {
        errors.description = 'Description is too short';
    }
  

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }