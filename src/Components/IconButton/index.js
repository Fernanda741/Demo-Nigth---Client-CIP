import './style.css';

export default function IconButton({ className, value, type, onClick }) {
  return (
    <>
      <button
        className={className + ' icon-btn'}
        value={value}
        type={type}
        onClick={onClick}
      ></button>
    </>
  );
}
