import { useMemo, useState } from "react";

const employees = [
  {
    firstname: "Samir",
    lastname: "Dadash",
    salary: 10000,
  },
  {
    firstname: "Yasin",
    lastname: "Mehdiyev",
    salary: 100000,
  },
  {
    firstname: "Agil",
    lastname: "Atakishiyev",
    salary: 50,
  },
  {
    firstname: "Murad",
    lastname: "Karimov",
    salary: 1,
  },
];

export const MemoExample = () => {
  const [counter, setCounter] = useState(0);

  //   const totalMemoized = useMemo(() => {
  //     console.log("from memoized total");
  //     return employees.reduce((prevValue, currentEmployee) => {
  //       return prevValue + currentEmployee.salary;
  //     }, 0);
  //   }, [counter]);

  //   const total = employees.reduce((prevValue, currentEmployee) => {
  //     console.log("from total");
  //     return prevValue + currentEmployee.salary;
  //   }, 0);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <span>{totalMemoized}</span> */}
      <br />
      {/* <span>{total}</span> */}
      <br />
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};
