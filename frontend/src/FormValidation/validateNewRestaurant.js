export default function validateNewRestaurant(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!values.category) {
        errors.category = 'Category is required';
      }

    if (!values.country) {
    errors.country = 'Country is required';
    }

    if (!values.street.trim()) {
        errors.street = 'Street is required';
        }
    
    if (!values.city.trim()) {
        errors.city = 'City is required';
        }
    

    if (!values.phone) {
        errors.phone = 'Phone is required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)) {
      errors.phone = 'Phone is invalid';
    }

    if (!values.openingHours.trim()) {
        errors.openingHours = 'Opening Hours are required';
        }
    
    return errors;
  }