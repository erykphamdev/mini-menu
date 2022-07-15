import MenuItem from '../../components/MenuItem/MenuItem';
import {shakesMenuItems} from '../../data/menuItems'
function Shakes() {
   return (
      <div>
         {shakesMenuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
         ))}
      </div>
   );
}
export default Shakes;
