const breakfastMenu = ['Pancakes – $12', 'Eggs Benedict – $22.99', 'Oatmeal – $21.99', 'Frittata – $15'];
const mainCourseMenu = ['Steak – $24.99', 'Pasta – $13', 'Burger – $21', 'Salmon – $22'];
const dessertMenu = ['Cake – $15', 'Ice Cream – $12', 'Pudding – $9', 'Fruit Salad – $12'];

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item} </p>`).join('');
    
 document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;