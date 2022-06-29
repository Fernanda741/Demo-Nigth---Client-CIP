import './style.css';

export default function IconButton({ className, value, type }) {
  return (
    <>
      <button
        className={className + ' icon-btn'}
        value={value}
        type={type}
      ></button>
    </>
  );
}
