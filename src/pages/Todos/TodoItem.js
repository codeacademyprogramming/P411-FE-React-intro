import { useUserContext } from "../../context/user";

export const TodoItem = ({ todo }) => {
  const { user } = useUserContext();

  return (
    <li>
      {todo.todoName} created by {user.firstname}
    </li>
  );
};
