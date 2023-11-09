import { useState, useRef, useEffect } from 'react';
import { Tab } from '../Tabs/Tab';
import { ScrollableContainer } from '../ScrollableContainer/ScrollableContainer';
import { DropdownItem } from '../DropDownItem/DropDownItem';
import './list.css';

export const List = ({ locationsValues, options, selectedOptions, toggleOption }) => {
  const contentRef = useRef(null);

  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [selectedTab, setSelectedTab] = useState(locationsValues[0]);

  const items = options.find(({ location }) => location === selectedTab)?.locationList;

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const adjustedScrollHeight = scrollHeight - 20;

      setIsScrolledToBottom(scrollTop + clientHeight >= adjustedScrollHeight);
    };

    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [contentRef]);

  return (
    <div className="list">
      <div className={!isScrolledToBottom ? 'list__content' : 'list__content--end'}>
        <div className="tabs">
          {locationsValues.map((location) => (
            <Tab key={location} selectedTab={selectedTab === location} value={location} setSelectedTab={setSelectedTab} />
          ))}
        </div>
        {selectedOptions.length > 0 && <ScrollableContainer selectedOptions={selectedOptions} toggleOption={toggleOption} />}
        <ul ref={contentRef}>
          {items?.length > 0 &&
            items.map((option, index) => (
              <DropdownItem
                key={option + index}
                option={option}
                selected={selectedOptions.some((item) => item === option)}
                onSelect={toggleOption}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};
