import menu from './data'
export let breakfastMenuItems = []
export let lunchMenuItems = []
export let shakesMenuItems = []
for (let menuItem of menu) {
   switch (menuItem.category) {
      case 'breakfast':
         breakfastMenuItems.push(menuItem)
         break
      case 'lunch':
         lunchMenuItems.push(menuItem)
         break
      default:
         shakesMenuItems.push(menuItem)
   }
}