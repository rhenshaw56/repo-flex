import React from 'react';

const NAV_MENU_ITEMS = [
  {
    title: "Breakiing",
    link: "/news"
  },
  {
    title: "Politics",
    link: "/politics"
  },
  {
    title: "Business",
    link: "/business",
  },
  {
    title: "Science",
    link: "/science"
  },
];

const renderMenuItem = (item, index) => {
  const isActive = index === 0;
  return (
    <li className={isActive && "active"} key={index}>
      <a href={item.link}>
        {item.title}
      </a>
    </li>
  )
}
const Header = () => (
  <>
  {/* <!-- HEADER STARTS HERE --> */}
  <header className="clearfix">
    <h1>World News</h1>
    <h2>Stories that Move You</h2>
  </header>

  {/* <!-- NAV STARTS HERE --> */}
  <nav>
    <ul>
      {NAV_MENU_ITEMS.map((item, index) => renderMenuItem(item, index))}
    </ul>
  </nav>
  </>
);

export default Header;