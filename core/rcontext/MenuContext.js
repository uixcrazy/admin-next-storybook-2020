import { createContext, useState } from "react";
import {
  CategoryIcon,
  DashboardIcon,
  PhotoIcon,
  CalendarIcon,
  ArticleIcon,
} from "icons/my-icons";

export const MENU_LIST = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
  },
  {
    id: "categories",
    name: "Categories",
    icon: CategoryIcon,
  },
  {
    id: "articles",
    name: "Articles",
    icon: ArticleIcon,
  },
  {
    id: "photos",
    name: "Photos",
    icon: PhotoIcon,
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: CalendarIcon,
  },
];

export const MenuContext = createContext({
  selected: { id: null, name: null },
  select: () => {},
});

export const MenuContextProvider = ({ route, children }) => {
  const menuItem = route && MENU_LIST.find((item) => item.id === route);
  const defaultSelected = menuItem
    ? {
        id: menuItem.id,
        name: menuItem.name,
      }
    : {
        id: null,
        name: null,
      };

  const [selected, setSelected] = useState(defaultSelected);
  const onSelectMenu = (item) => {
    setSelected({
      id: item.id,
      name: item.name,
    });
  };

  console.log("MenuContext");

  return (
    <MenuContext.Provider value={[selected, onSelectMenu]}>
      {children}
    </MenuContext.Provider>
  );
};

// export default AppContext;
