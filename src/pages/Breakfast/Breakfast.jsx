import MenuItem from '../../components/MenuItem/MenuItem';
import {breakfastMenuItems} from '../../data/menuItems'
function Breakfast() {
   return (
      <div>
         {breakfastMenuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
         ))}
      </div>
   );
}
export default Breakfast;
