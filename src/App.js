import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { UserContext } from "./context/user";

function App() {
  // const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);

  // // runs once
  useEffect(() => {
    const firstname = prompt("please enter your firstname");
    const lastname = prompt("please enter your lastname");

    setUser({ firstname, lastname });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <li>
            <Link to="stopwatch">Stopwatch</Link>
          </li>
          <li>
            <Link to="memo-example">Memo example</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      <Footer />
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
