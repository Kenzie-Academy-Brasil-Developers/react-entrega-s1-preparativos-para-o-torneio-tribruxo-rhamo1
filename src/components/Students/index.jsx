import "./styles.css";

const Students = ({ student, className }) => {
  return (
    <div className="studentContainer">
      {student.map((item, key) => (
        <div key={key} className={className}>
          <img src={item.image} alt="" />
          <h2>{item.name}</h2>
          <p>🏠 : {item.house}</p>
        </div>
      ))}
    </div>
  );
};

export default Students;
