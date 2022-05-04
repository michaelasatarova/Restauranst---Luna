import { useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { postNewReviewAction } from "../Store/actions/Reviews";
import { useHistory} from 'react-router-dom';

const useForm = (validate) => {
  const [createdReviews, setCreatedReviews] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(state => state.token);

  const handleCreatedReview = e => {
    const { value } = e.target;
    setCreatedReviews(value);
    console.log(createdReviews);
  };

  const handleReviewSubmit = (restaurant_id, history) => {
    
    setCreatedReviews('')
    dispatch(postNewReviewAction(createdReviews, restaurant_id, history))
    
    setErrors(validate(createdReviews));
    setIsSubmitting(true);
  };

   return { handleCreatedReview, handleReviewSubmit, createdReviews, errors};
};

export default useForm;