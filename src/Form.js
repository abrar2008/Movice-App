import React  from 'react';


import './From.css';

function Form() {
  return (
            <div>
                   <form>
                           

                           <div className="container">
  
  <div className="row">
    <div className="col-25">
      <label >First Name</label>
    </div>
    <div className="col-75">
      <input type="text" />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label >Last Name</label>
    </div>
    <div className="col-75">
      <input type="text"  />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label >Country</label>
    </div>
    <div className="col-75">
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label >Subject</label>
    </div>
    <div className="col-75">
    
    </div>
  </div>
  <div class="row">
    <input type="submit" />
  </div>
  </div>
  </form>
</div>


    
  );
}

export default Form;

