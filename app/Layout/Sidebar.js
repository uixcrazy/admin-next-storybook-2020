import React, { useContext } from "react";
import withStyles from "react-jss";
import Link from "next/link";
import { MENU_LIST, MenuContext } from "core/rcontext/MenuContext";

export default withStyles({
  wrapper: {
    width: "16rem",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    height: "var(--height-header)",
    borderBottom: "1px solid #d8dbe0",
  },
  homelink: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: "90%",
    },
  },
  menu: {
    flex: "1 1",
    background: "#2f353a",
    color: "#fff",
    height: "100%",
    paddingTop: ".25rem",
    "& a": {
      display: "flex",
      flex: "1 1",
      alignItems: "center",
      padding: ".8445rem 1rem",
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "borderColor .3s,color .3s",
      color: "hsla(0,0%,100%,.8)",
      borderTop: "1px solid transparent",
      borderBottom: "1px solid transparent",
      "&:hover": {
        color: "hsla(0,0%,100%,1)",
        borderColor: "#384146",
      },
    },
    // active
  },
})(({ classes }) => {
  /** instead of
    * <MenuContext.Consumer>
      {({selected, onSelect}) => (
    */
  const [selected, onSelect] = useContext(MenuContext);
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Link href="/">
          <a className={`${classes.homelink} homelink`}>
            <img src="/logo.png" alt="bagiatronghoa" />
          </a>
        </Link>
      </div>
      <ul className={classes.menu}>
        {MENU_LIST.map((item, index) => (
          <li key={index} onClick={() => onSelect(item)}>
            <Link as={item.id} href={item.id}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
