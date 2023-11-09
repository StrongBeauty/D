import { DropDown } from './DropDown/DropDown';
import { DATA } from './const/Data';
import './app.css';

export const App = () => {
  return (
    <div className="container">
      <DropDown options={DATA} />
    </div>
  );
};
