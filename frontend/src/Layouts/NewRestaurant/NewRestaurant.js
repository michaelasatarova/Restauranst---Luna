import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
//validation
import useFormNewRestaurant from '../../FormValidation/useFormNewRestaurant';
import validateNewRestaurant from '../../FormValidation/validateNewRestaurant';

//components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {CreateRestaurant} from '../../Store/actions/CreateRestaurant';

//style
import {NewRestaurantStyle} from './style'

const NewRestaurant =()=>{
 const history = useHistory()
    
 //data from seFormProfile Component
    const{handleChange, handleSubmit, values, errors, setErrors} = useFormNewRestaurant(validateNewRestaurant);
    const dispatch = useDispatch()

    const newRest =(e)=>{
        e.preventDefault()
        console.log('mounting in NewRestaurant')      
        const errorsMessage = validateNewRestaurant(values)
        // console.log(errorsMessage)
        if(Object.keys(errorsMessage).length===0){
           dispatch(CreateRestaurant(history)) 
        }else{
           setErrors(errorsMessage) 
        }
    }

    let create_restaurant = useSelector(state =>state.create_restaurant)

    return(
        <div>
            <Header/>
            <NewRestaurantStyle>    
                <h2>CREATE NEW RESTAURANT</h2>        
                    <form onSubmit={newRest} >                       
                        <div className="form-basic">
                            <h1>Basic</h1>
                            <div className="form-row">
                                <div className="form-col">                      
                                    <label for="Name">Name<span> *</span></label>
                                    <input type="text" name="name" value={values.name} onChange={handleChange}/>
                                    {errors.name &&<p className="errorMessage">{errors.name}</p>}
                                </div>
                                <div className="form-col">
                                    <label for="Category">Category<span> *</span></label>
                                    <select class="required" name="category" value={values.category} onChange={handleChange}>
                                        <option value="Select value" disabled="disabled">Select value</option>
                                        <option value="Take Away">Take Away</option>
                                        <option value="Fast food">Fast food</option>
                                        <option value="Casual Dining">Casual Dining</option>
                                        <option value="Fine Dining">Fine Dining</option>
                                        <option value="Bistro">Bistro</option>
                                        <option value="Café">Café</option>
                                        <option value="Buffet">Buffet</option>
                                        <option value="Pub">Pub</option>
                                    </select>
                                    {errors.category &&<p className="errorMessage">{errors.category}</p>}
                                    
                                </div>
                                <div className="form-col">
                                    <label for="Country">Country<span> *</span></label>
                                    <select class="required" name="country" value={values.country} onChange={handleChange}>
                                        <option value="Select value" disabled="disabled">Select value</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Czech Republic">Buffet</option>
                                    </select>
                                    {errors.country &&<p className="errorMessage">{errors.country}</p>}
                                </div>
                            </div>
                        </div>
                        
                            <div className="form-basic">
                                <h1>Address</h1>
                                <div className="form-row">
                                    <div className="form-col">
                                        <label for="Street">Street<span> *</span></label>
                                        <input type="text" name="street" value={values.street} onChange={handleChange}/>
                                        {errors.street &&<p className="errorMessage">{errors.street}</p>}
                                    </div>
                                    <div className="form-col">
                                        <label for="City">City<span> *</span></label>
                                        <input type="text" name="city" value={values.city} onChange={handleChange}/>
                                        {errors.city &&<p className="errorMessage">{errors.city}</p>}
                                    </div>
                                    <div className="form-col">
                                        <label for="ZIP">ZIP</label>
                                        <input type="text"/>
                                    </div>
                                </div>   
                            </div>

                        <div className="form-basic">
                            <h1>Contact</h1>
                            <div className="form-row">
                                <div className="form-col">
                                    <label for="Website">Website</label>
                                    <input type="text"/>
                                </div>
                                <div className="form-col">
                                    <label for="Phone">Phone<span> *</span></label>
                                    <input type="tel" name="phone" value={values.phone} onChange={handleChange}/>
                                    {errors.phone &&<p className="errorMessage">{errors.phone}</p>}
                                </div>
                                <div className="form-col">
                                    <label for="Email">Email</label>
                                    <input type="email"/>
                                </div>
                            </div>    
                        </div>
                        
                        <div className="form-basic">
                            <h1>Details</h1>
                            <div className="form-row">
                                <div className="form-col">
                                    <label for="Opening hours">Opening hours <span> *</span></label>
                                    <input type="text" name="openingHours" value={values.openingHours} onChange={handleChange}/>
                                    {errors.openingHours &&<p className="errorMessage">{errors.openingHours}</p>}
                                </div>
                                <div className="form-col">
                                    <label for="price">Price level</label>
                                    <select >
                                        <option value="Select value">Select value</option>
                                        <option value="cheap">to 10€</option>
                                        <option value="medium">from 10€ to 50€</option>
                                        <option value="expensive">more then 50€</option>
                                    </select>
                                </div>
                                <div className="form-col ">
                                    <label for="Image">Image</label>
                                    <div className="custom-file-box">
                                        <input type="File" className="custom-file"/>
                                    </div>                              
                                </div>
                            </div>    
                        </div>
                        <button className="send-me" onClick={newRest}>SEND</button>
                  </form>
                  
                     
                              
            </NewRestaurantStyle>
            <Footer/>
        </div>
    )
}

export default NewRestaurant;