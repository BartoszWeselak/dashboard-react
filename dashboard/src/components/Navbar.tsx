import React from "react";

interface MenuItem {
  href: string;
  icon: string;
  label: string;
}

interface Profile {
  avatar: string;
  name: string;
}

interface ActionItem {
  href: string;
  icon: string;
  label: string;
}

interface NavbarProps {
  logo: string;
  description: string;
  menuItems: MenuItem[];
  profile: Profile;
  actions: ActionItem[];
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  description,
  menuItems,
  profile,
  actions,
}) => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-description">{description}</span>
      </div>
    </div>
  );
};

export default Navbar;
