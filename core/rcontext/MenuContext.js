import { createContext, useState } from 'react';

export const MENU_LIST = [
  {
    id: 'dashboard',
    name: 'Dashboard'
  },
  {
    id: 'categories',
    name: 'Categories',
  },
  {
    id: 'articles',
    name: 'Articles',
  },
];

export const MenuContext = createContext({
  selected: {
    id: 'categories',
    name: 'Categories',
  },
  select: () => {},
});

export const MenuContextProvider = (props) => {
  const [selected, onSelect] = useState(MENU_LIST[1]);
  // const onSelect = (item) => {
  //   setSelected(item.id);
  // };

  return (
    <MenuContext.Provider value={[selected, onSelect]}>
      {props.children}
    </MenuContext.Provider>
  );
};

// export default AppContext;
