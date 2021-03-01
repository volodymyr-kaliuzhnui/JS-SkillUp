import menuData from '../db/menu.json'
import menuTemplate from '../templates/menu.hbs'
import refs from "./refs";

let markup = menuTemplate(menuData);

refs.menuList.innerHTML = markup;

