import React from "react";
//styles
import {SearchNavbarStyle} from './style';
//images
import arrow from '../../Assets/svg-icons/arrow.svg';
//validation
import useFormNewRestaurant from '../../FormValidation/useFormNewRestaurant';
import validateNewRestaurant from '../../FormValidation/validateNewRestaurant';


const SearchNavbar = () => {

  const{handleChange, values} = useFormNewRestaurant(validateNewRestaurant);

    return(
        <SearchNavbarStyle>
                <div className="search-navbar">
                    <input className="nav-left" type="text" placeholder="Search"></input>
                    <div className="nav-dropdown">
                      <select class="required" name="category" value={values.category} onChange={handleChange}>
                          <option value="Select value">Select a category...</option>
                          <option value="Take Away">Take Away</option>
                          <option value="Fast food">Fast food</option>
                          <option value="Casual Dining">Casual Dining</option>
                          <option value="Fine Dining">Fine Dining</option>
                          <option value="Bistro">Bistro</option>
                          <option value="Café">Café</option>
                          <option value="Buffet">Buffet</option>
                          <option value="Pub">Pub</option>
                      </select>
                    </div>
                     {/* <button className="dropdown-btn" onClick={ dropFunction }><img src={ arrow } alt="dropdown-icon" className="dropdown-icon"/></button>  */}
                </div>
  
        </SearchNavbarStyle>
    )
}

export default SearchNavbar ;
