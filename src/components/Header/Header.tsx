import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <header className="h-24 flex bg-transparent">
      <div className="container justify-between mx-auto flex items-center gap-3">
        <div>logo</div>
        <nav>
          <ul className="flex gap-12">
            <li>Квести</li>
            <li>Новачкам</li>
            <li>Відгуки</li>
            <li>Акції</li>
            <li>Контакти</li>
          </ul>
        </nav>
        <div>telephon</div>
      </div>
    </header>
  );
};

export default Header;
