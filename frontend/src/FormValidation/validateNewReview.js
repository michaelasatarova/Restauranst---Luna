export default function validateNewReview(createdReviews) {
    let errors = {};
  
    if (!createdReviews.trim()) {
      errors.createdReviews = 'This field is required';
    }
   
    return errors;
  }