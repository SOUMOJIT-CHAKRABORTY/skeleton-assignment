import React from "react";
import DrawerLogo from "./DrawerLogo";

export const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <DrawerLogo />
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content items-center ">
          {/* Sidebar content here */}
          <li className="w-full">
            <a>Home</a>
          </li>
          <li className="w-full">
            <a>Chats</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
