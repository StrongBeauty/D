import './tab.css';

export const Tab = ({ selectedTab, value, setSelectedTab }) => {
  const selectTab = () => {
    setSelectedTab(value);
  };

  return (
    <span className={`tab ${selectedTab ? 'tab__selected' : ''}`} onClick={selectTab}>
      {value}
    </span>
  );
};
