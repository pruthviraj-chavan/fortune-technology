
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { 
      name: 'Jobs', 
      path: '/jobs',
      submenu: [
        { name: 'All Countries', path: '/jobs' },
        { name: 'Work in Germany', path: '/jobs/work-in-germany' },
        { name: 'Work in Norway', path: '/jobs/work-in-norway' },
        { name: 'Work in France', path: '/jobs/work-in-france' },
        { name: 'Work in Italy', path: '/jobs/work-in-italy' },
        { name: 'Work in Ireland', path: '/jobs/work-in-ireland' },
        { name: 'Work in UK', path: '/jobs/work-in-uk' },
        { name: 'Work in Spain', path: '/jobs/work-in-spain' },
        { name: 'Work in Netherlands', path: '/jobs/work-in-netherlands' },
        { name: 'Work in Sweden', path: '/jobs/work-in-sweden' },
        { name: 'Work in Poland', path: '/jobs/work-in-poland' },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);
  
  // Check if current path is a job country page
  const isJobCountryPage = (path) => {
    return path.startsWith('/jobs/work-in-');
  };

  // Check if current path is within a section
  const isInSection = (path) => {
    const currentPath = location.pathname;
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold gradient-text">Fortune Technology</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => {
              // If this nav item has a submenu
              if (link.submenu) {
                return (
                  <NavigationMenu key={link.name}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger 
                          className={`font-medium ${
                            isInSection(link.path) || isJobCountryPage(location.pathname)
                              ? 'text-fortune-pink'
                              : 'text-gray-600 hover:text-fortune-pink'
                          }`}
                        >
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid grid-cols-1 gap-2 p-4 w-[220px]">
                            {link.submenu.map((subItem) => (
                              <li key={subItem.path}>
                                <Link
                                  to={subItem.path}
                                  className={`block select-none rounded-md p-2 hover:bg-accent ${
                                    location.pathname === subItem.path
                                      ? 'bg-accent text-fortune-pink'
                                      : 'text-gray-600'
                                  }`}
                                  onClick={closeMenu}
                                >
                                  <div className="text-sm font-medium">{subItem.name}</div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                );
              }
              
              // Regular links without submenu
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-fortune-pink'
                      : 'text-gray-600 hover:text-fortune-pink'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-2 border-t mt-4">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.name} className="space-y-1">
                    <div className={`font-medium flex items-center justify-between ${
                      isInSection(link.path) || isJobCountryPage(location.pathname)
                        ? 'text-fortune-pink'
                        : 'text-gray-600'
                    }`}>
                      <Link to={link.path} onClick={closeMenu}>{link.name}</Link>
                    </div>
                    <div className="pl-4 border-l-2 border-gray-200 ml-2 space-y-1">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block py-1 text-sm ${
                            location.pathname === subItem.path
                              ? 'text-fortune-pink'
                              : 'text-gray-500 hover:text-fortune-pink'
                          }`}
                          onClick={closeMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-fortune-pink'
                      : 'text-gray-600 hover:text-fortune-pink'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
