import './circle.css';

export const Circle = ({ children, disabled, handleItemClick }) => {
  return !disabled ? (
    <div onClick={handleItemClick} className={`circle ${children ? 'selected' : ''}`}>
      {children}
    </div>
  ) : (
    <div className={`disabled ${children ? 'selected__disabled' : ''}`}>{children}</div>
  );
};
