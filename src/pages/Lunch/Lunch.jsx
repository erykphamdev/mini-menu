import MenuItem from '../../components/MenuItem/MenuItem';
import {lunchMenuItems} from '../../data/menuItems'
function Lunch() {
    
    return <div>
    {lunchMenuItems.map((item, index) => (
       <MenuItem key={index} {...item} />
    ))}
 </div>
}
export default Lunch