import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>LOGO</h2>
      <nav className="navbar">
        <ul>
          <li>
            <img
              src="/home.svg"
              alt="Home Icon"
              width="16px"
              height="17px"
              gap="3px"
            />
            Home
          </li>
          <li>
            <img
              src="/notification.svg"
              alt="Notification Icon"
              width="16px"
              height="17px"
            />
            Notifications
          </li>
          <li>
            <img src="/heart.svg" alt="Heart Icon" width="16px" height="17px" />
            Shop
          </li>
          <li>
            <img
              src="/message.svg"
              alt="Message Icon"
              width="16px"
              height="17px"
            />
            Conversation
          </li>
          <li>
            <img
              src="/wallet.svg"
              alt="Wallet Icon"
              width="16px"
              height="17px"
            />
            Wallet
          </li>
          <li>
            <img
              src="/favorite.svg"
              alt="Favorite Icon"
              width="16px"
              height="17px"
            />
            Subscription
          </li>
          <li>
            <img
              src="/profile.svg"
              alt="Profile Icon"
              width="16px"
              height="17px"
            />
            My Profile
          </li>
          <li>
            <img
              src="/setting.svg"
              alt="Setting Icon"
              width="16px"
              height="17px"
            />
            Settings
          </li>
        </ul>
        <button className="sidebar-btn">
          <img
            src="/logout.svg"
            alt="Log out Icon"
            width="16px"
            height="17px"
          />
          Log out
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
