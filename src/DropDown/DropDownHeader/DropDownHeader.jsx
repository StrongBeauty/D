import { Icon } from '../../Icon/Icon';
import { Circle } from '../../Circle/Circle';
import search from '../../svg/search.svg';
import './DropDownHeader.css';

export const DropDownHeader = ({ locations, isOpen, setIsOpen, quantitySelected }) => {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header ${isOpen ? 'header__fill' : ''}`} onClick={toggleDropdown}>
      <Icon src={search} />
      <div>{locations}</div>
      {quantitySelected > 0 && <Circle children={quantitySelected} />}
    </div>
  );
};
