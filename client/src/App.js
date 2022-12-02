import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex ]= useState("");
  const[age, setAge] = useState(0);
  const[newUserName, setNewUserName]= useState("");
  const [userList, setUserList] = useState([]);
  const [mail, setMail] = useState("@gmail.com");
  const [deleteID, setDeleteID]=useState("");
  const [updateID, setUpdateID]=useState("");
  //const[updateUser, setUpdateUser]=useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) =>{
      setUserList(response.data);
    })
  },[]);
  

  const addToList = () => {
    console.log(name + age);
    Axios.post("http://localhost:3001/insert",{
      name: name,
      email:email+mail,
      sex: sex,
      age: age,
    });
  };

  const updateToList = (updateID) => {
    
    Axios.put("http://localhost:3001/update",{
    id: updateID,  
    newUserName: newUserName,
    
    });
  };

  const deleteUser = (id) => {
    //console.log(id);
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  const renderUserTable = () => {
    return userList.map((val,key) => {
      return <tr>
      <td>{val.Name}</td>
      <td >{val.Email}</td>
      <td >{val.Sex}</td>
      <td >{val.Age}</td>
      </tr>
    })
  }
  const renderHeaderTable = () => {
    return ( <tr>
      <th >Name</th>
      <th >Email ID</th>
      <th >Gender</th>
      <th>Age</th>
      </tr>
    )
  }
  const renderUsersID = () => {
    return userList.map((val,key) => {
      return <option value={val._id}>{val.Name}</option>
      
    })
  }

  
  

  return (
    <div className="App">

      <div className="container"> 
        <h1> CURD App with MERN</h1>
      </div> 

      <div className="row">
        {/*First Block*/}

        <div className="col-25">

          <div className="container">
                <h3><u>User Creation</u></h3>

            <div className="row">
              <div className="col-25">
                <label > Name: </label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="Your name.." onChange={(event) => {
                setName(event.target.value);
                }}/>
              </div>
            </div>


            <div className="row">
              <div className = "col-25">
                <label > Email: </label>
              </div>
              <div className="col-35">
                <input type="text"   placeholder="Entre Email Id.. " onChange={(event) => {
                setEmail(event.target.value);
                }}
                />
              </div>
              <div className="col-5"></div>
              <div className="col-35">
                <select value={mail} onChange={(event) => {
                setMail(event.target.value);
                }}>
                  <option value="@gmail.com">Gmail</option>
                  <option value="@outlook.com">Outlook</option>
                  <option value="@iitb.in">IITB</option>
                </select>
              </div>
            </div>

 
 
            <div className="row">
              <div className="col-25">
                <label for="gender"> Gender: </label>
              </div>
              <div className="col-75">
                <div>
                  <label className="rad-label">
                    <input type="radio" class="rad-input" name="gender"  value="Male" onChange={(event) => {
                    setSex(event.target.value);
                    }}/>
                    <div className="rad-design"></div>
                    <div className="rad-text">Male</div>
                  </label>
                </div>
                <div>
                  <label className="rad-label">
                    <input type="radio" class="rad-input" name="gender" value="Female" onChange={(event) => {
                    setSex(event.target.value);
                    }}/>
                    <div className="rad-design"></div>
                    <div className="rad-text">Female</div>
                  </label>
                </div>
                <div>
                  <label className="rad-label">
                    <input type="radio" class="rad-input" name="gender" value="Others" onChange={(event) => {
                    setSex(event.target.value);
                    }}/>
                    <div className="rad-design"></div>
                    <div className="rad-text">Others</div>
                  </label>
                </div>
              </div>
            </div>  

            <div className="row">
              <div className="col-25">
                <label> Age: </label>
              </div>
              <div className = "col-25">
                <input type="number" placeholder="Entre Age.. " onChange={(event) => {
                setAge(event.target.value);
                }}
                />
              </div>
            </div>
 
            <div className="row">
              <div className="col-50">
                <button class="button" onClick={addToList}>Add User</button>
              </div>
            </div>
 
 
          </div>     

        </div>        

          {/*-----------------------------*/}
   
          {/*-----------------------------*/}
        <div className="col-2"></div>
          {/*-----------Second------------------*/}
                
        <div className="col-35">
  
          <div className="container">
            <h3><u>Update Existing User</u></h3>

            <div className= "row">
              <div className="col-25">
                <label>Select User :</label>
              </div>
              <div className="col-75">
                <select value={updateID} onChange={(event) => {
                setUpdateID(event.target.value);
                }}>
                
                {renderUsersID()}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-50">
              <input type="text" placeholder="Change name.." onChange={(event) => {
                setNewUserName(event.target.value);
              }}/>
              </div>
              <div className="col-2"></div>
              <div className="col-25">
                <button class="button" onClick={() => updateToList(updateID)}>Update</button>
              </div>
            </div>

          </div>
        </div>
             {/*-----------------------------*/}
        <div class="col-2"> </div>
             {/*-------------Third----------------*/}

        <div class="col-35">
      
          <div className="container">
            <h3><u>Delete Existing User</u></h3>

            <div className= "row">
              <div className="col-25">
                <label>Select User :</label>
              </div>
              <div className="col-75">
                <select value={deleteID} onChange={(event) => {
                setDeleteID(event.target.value);
                }}>
                {renderUsersID()}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <button className="button" onClick={() => deleteUser(deleteID)}>Delete</button>
              </div>
              
            </div>

          </div>
        </div>
       {/*-----------------------------*/}

     
      
 
      </div>
  
      
        <br></br>
     
      <div className="container">
     
     <h2> <u>List of Existing user</u></h2>
     <table id='customers' >
      <thead>
      {renderHeaderTable()}
      </thead>
      <tbody>
       {renderUserTable()}
      </tbody>
     </table>
      </div>
  
    </div>
  );
}

export default App;
