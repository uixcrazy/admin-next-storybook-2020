import Head from "next/head";
import React, { useState, useContext } from "react";
import withStyles from "react-jss";
import Sidebar from "react-sidebar";
import { ToastContainer } from "react-toastify";
import { MenuContext, MenuContextProvider } from "core/rcontext/MenuContext";
import Header from "./Header";
import SidebarContent from "./Sidebar";

const MainContent = withStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    "& .container": {
      flex: 1,
      position: "relative",
    },
  },
})(({ classes, children }) => {
  const [selected] = useContext(MenuContext);
  console.log(selected);
  return (
    <div className={classes.wrapper}>
      <Head>
        <title>Admin : {selected.name}</title>
      </Head>
      <div className={classes.main}>{children}</div>
      <ToastContainer />
    </div>
  );
});

export default ({ children }) => {
  const [sidebarDocked, setSidebarDock] = useState(true);
  const onToggleSidebar = () => {
    setSidebarDock(!sidebarDocked);
  };
  return (
    <MenuContextProvider>
      <Sidebar
        sidebar={<SidebarContent />}
        docked={sidebarDocked}
        shadow={false}
        styles={{ sidebar: { borderRight: "1px solid #d8dbe0" } }}
      >
        <Header onToggleSidebar={onToggleSidebar} />
        <MainContent>{children}</MainContent>
      </Sidebar>
    </MenuContextProvider>
  );
};
