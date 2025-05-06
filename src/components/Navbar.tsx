
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset submenu state when closing menu
    if (isMenuOpen) {
      setOpenSubmenu(null);
    }
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };
  
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
                          <ul className="grid grid-cols-1 gap-2 p-4 w-[220px] bg-white">
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
                const isOpen = openSubmenu === link.name;
                return (
                  <div key={link.name} className="space-y-1">
                    <div 
                      className={`font-medium flex items-center justify-between py-2 ${
                        isInSection(link.path) || isJobCountryPage(location.pathname)
                          ? 'text-fortune-pink'
                          : 'text-gray-600'
                      }`}
                      onClick={() => toggleSubmenu(link.name)}
                    >
                      <Link 
                        to={link.path}
                        onClick={(e) => {
                          // Prevent navigation when clicking the parent item
                          if (!isOpen) {
                            e.preventDefault();
                          } else {
                            closeMenu();
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                      {isOpen ? (
                        <ChevronUp size={18} className="ml-2" />
                      ) : (
                        <ChevronDown size={18} className="ml-2" />
                      )}
                    </div>
                    
                    {isOpen && (
                      <div className="pl-4 border-l-2 border-gray-200 ml-2 space-y-1">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block py-1.5 text-sm ${
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
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors py-2 block ${
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
