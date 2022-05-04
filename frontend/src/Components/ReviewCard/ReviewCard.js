import React from "react";
import {Link} from 'react-router-dom';

//styles
import {ReviewCardStyle} from './style';
 
//images
import person1 from '../../Assets/images/person1.png';
import like from '../../Assets/svg-icons/like.svg';

const ReviewCard =()=>{

    return(
        <ReviewCardStyle>
            <div className="review-header">
                <img src={ person1 } height="50px"alt="reviewer"/>
                <div className="name-box">
                    <h1 className="reviewer-name">Laurent H.</h1>
                    <h2 className="amount-reviews">6 Reviews in total</h2>
                </div>
            </div>
            <div className="restaurant-description">
                <h1 className="restaurant-name">Collinz Bar</h1>
                <div className="text-field">
                    <span className="text-review">Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell... </span>
                    <span className="read-more">read more</span>
                </div>
            </div>
            <div className="actions">
                <div className="btn-like">
                    <Link to=""className="button"><p><img src={ like } className="img-like" alt="like"></img>Like 63</p></Link> 
                </div>
                <div className="btn-comment">
                    <Link to="" className="button"><p>Comment 23</p></Link> 
                </div>
            </div>
            <div className="comments">
                <h1 className="latest-comments">Latest comments</h1>
                <section className="single-comment">
                    <h2 className="colin">Colin Wirz</h2>
                    <p className="colin-comment">Actually you have no taste</p>
                </section>
                <section className="single-comment">
                    <h2 className="colin">Laurent Meyer</h2>
                    <p className="colin-comment">Sorry Bro</p>
                </section>
            </div>
        </ReviewCardStyle>
    )
}

export default ReviewCard;