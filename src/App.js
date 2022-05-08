import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  // const [username, setUsername] = useState("");
  // // runs once
  // useEffect(() => {
  //   const username = prompt("please enter your name");
  //   setUsername(username);
  // }, []);

  // runs whenever pageNumber changes
  // useEffect(() => { }, [pageNumber]);

  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <Link to="todos">Todos</Link>
          </li>
          <li>
            <Link to="counter">Counter</Link>
          </li>
          <li>
            <Link to="blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

// const numbers = [1, 2, 3, 4, 5];

// // const firstNum = numbers[0];
// // const secondNum = numbers[1];

// // array destructuring

// const [firstNum, secondNum, ...rest] = numbers;
// console.log(firstNum); //1
// console.log(secondNum); //2
// console.log(rest); // [3,4,5]

// const user = {
//   firstname: "",
//   lastname: "",
// };

// const firstname = user.firstname;
// const lastname = user.lastname;

// const { firstname: userFirstname, lastname: userLastname } = user;

// console.log(user.firstname, user.lastname);

/* 
  map - new array, does not modify original array / return type []
  filter - new array, does not modify original array / return type []
  sort - modifies in place / return type []
  some, every - returns true false / return type boolean
*/

// const numbers = [3, 1, 0, -4, 100, 50];
// const newArray = [...numbers]; // spread [3,1,0,-4,100, 50]

// const user = {
//   firstname: "samir",
//   lastname: "dadash-zade",
// };

// const userCopy = user;

// userCopy.firstname = 'agil';
