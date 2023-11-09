import { useRef, useState, useCallback, memo } from 'react';
import { Icon } from '../../Icon/Icon';
import close from '../../svg/close.svg';
import './ScrollableContainer.css';

export const ScrollableContainer = memo(({ selectedOptions, toggleOption, disabled }) => {
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft],
  );

  const handleRemoveOptionClick = useCallback(
    (option) => {
      toggleOption(option);
    },
    [toggleOption],
  );

  return (
    <div
      ref={containerRef}
      className="selected__options"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {selectedOptions.map((option, index) => (
        <div key={option + index} className="selected__option">
          {option}
          {!disabled && (
            <span className="remove__option" onClick={() => handleRemoveOptionClick(option)}>
              <Icon src={close} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
});
