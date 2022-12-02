<form method="get" action="javascript: void(0);" id="login-form" class="login-form" autocomplete="off" role="main">
  <h1 class="a11y-hidden">Login Form</h1>
  <div>
    <label class="label-email">
      <input type="email" class="text" name="email" placeholder="Email" tabindex="1" required />
      <span class="required">Email</span>
    </label>
  </div>
  <input type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
  <label class="label-show-password" for="show-password">
    <span>Show Password</span>
  </label>
  <div>
    <label class="label-password">
      <input type="text" class="text" name="password" placeholder="Password" tabindex="2" required />
      <span class="required">Password</span>
    </label>
  </div>
  <input type="submit" value="Log In" />
  
  <figure aria-hidden="true">
    <div class="person-body"></div>
    <div class="neck skin"></div>
    <div class="head skin">
      <div class="eyes"></div>
      <div class="mouth"></div>
    </div>
    <div class="hair"></div>
    <div class="ears"></div>
    <div class="shirt-1"></div>
    <div class="shirt-2"></div>
  </figure>
</form>





const renderUpdate = (id) => {
  Axios.get(`http://localhost:3001/updateGet/{id}`).then((response) =>{
    setUpdateUser(response.data);
  })
  return(<div class="col-25">

  <div class="container">
        

    <div class="row">
      <div class="col-25">
        <label > Name: </label>
      </div>
      <div class="col-75">
        <input type="text" placeholder={updateUser.Name} onChange={(event) => {
        setName(event.target.value);
        }}/>
      </div>
    </div>


    <div class="row">
      <div class = "col-25">
        <label > Email: </label>
      </div>
      <div class="col-35">
        <input type="text"   placeholder={updateUser.Email} onChange={(event) => {
        setEmail(event.target.value);
        }}
        />
      </div>
      <div class="col-5"></div>
      <div class="col-35">
        <select value={mail} onChange={(event) => {
        setMail(event.target.value);
        }}>
          <option value="@gmail.com">Gmail</option>
          <option value="@outlook.com">Outlook</option>
          <option value="@iitb.in">IITB</option>
        </select>
      </div>
    </div>



    <div class="row">
      <div class="col-25">
        <label for="gender"> Gender: </label>
      </div>
      <div class="col-75">
        <div>
          <label class="rad-label">
            <input type="radio" class="rad-input" name="gender"  value="Male" onChange={(event) => {
            setSex(event.target.value);
            }}/>
            <div class="rad-design"></div>
            <div class="rad-text">Male</div>
          </label>
        </div>
        <div>
          <label class="rad-label">
            <input type="radio" class="rad-input" name="gender" value="Female" onChange={(event) => {
            setSex(event.target.value);
            }}/>
            <div class="rad-design"></div>
            <div class="rad-text">Female</div>
          </label>
        </div>
        <div>
          <label class="rad-label">
            <input type="radio" class="rad-input" name="gender" value="Others" onChange={(event) => {
            setSex(event.target.value);
            }}/>
            <div class="rad-design"></div>
            <div class="rad-text">Others</div>
          </label>
        </div>
      </div>
    </div>  

    <div class="row">
      <div class="col-25">
        <label> Age: </label>
      </div>
      <div class = "col-25">
        <input type="number" placeholder={updateUser.Age}onChange={(event) => {
        setAge(event.target.value);
        }}
        />
      </div>
    </div>

    <div class="row">
      <div class="col-50">
        <button class="button" onClick={addToList}>Add User</button>
      </div>
    </div>


  </div>     

</div>   
    
  );
}
