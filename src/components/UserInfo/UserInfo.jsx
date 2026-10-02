const UserInfo = ({ name }) => {
  const age = 10;

  return (
    <selection>
      <h2>Cześć, {name}!</h2>
      <p>Masz tyle wiosen: {age}!</p>
      <p>Za rok bedziesz miec tyle wiosen: {age + 1} synku</p>
    </selection>
  );
};

export default UserInfo;