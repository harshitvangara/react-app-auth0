import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useState } from "react";
import "./Users.css"
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";
export function UserListing() {
  const userList = useSelector((state:any) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  
  
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
     <div className="App">
      {" "}
      <div className="addUser">
       
        <input
          type="text"
          placeholder="taskname..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          
        />
        <button

          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          {" "}
          Add task
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1> {user.name}</h1>
              <h1> {user.username}</h1>
              <input
             
                type="text"
                placeholder="New taskname..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                {" "}
                Update task
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete task
              </button>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default withAuthenticationRequired(UserListing) 