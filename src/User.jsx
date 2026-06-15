function User(props) {
  return (
    <div>
      <h2>Ism: {props.name}</h2>
      <p>Yosh: {props.age}</p>
    </div>
  );
}

export default User;