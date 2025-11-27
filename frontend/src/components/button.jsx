import './button.css'
const button = ({ type = "button", onClick, text }) => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default button;
