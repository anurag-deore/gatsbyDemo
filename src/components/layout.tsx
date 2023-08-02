import * as React from "react";
import { Link } from "gatsby";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex py-3 px-5 justify-between">
        <div className="flex gap-3">
          <div className="h-6 w-6 rounded-full bg-[#E6BE63]"></div>
          <div>Anurag Deore</div>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main className="w-screen grow">{children}</main>
    </div>
  );
};

export default Layout;
