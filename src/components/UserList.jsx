
function UserList() {
  const users = ["Alice", "Bob", "Charlie" , "ali"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default UserList
