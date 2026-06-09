import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home",  path: "/home" },
    { name: "Restaurants",  path: "/restaurants" },
    { name: "Cart", path: "/cart" },
    { name: "About", path: "/about" },
    { name: "Contact",  path: "/contact" },
  ];

  return (
    <>
      {/* MENU BUTTON */}
      <button className="menu-btn" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >

            {/* HEADER */}
            <div className="sidebar-header">
              <h2>ByteBite</h2>
              <button onClick={() => setOpen(false)}>✖</button>
            </div>

            {/* LINKS */}
            <div className="sidebar-links">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="sidebar-link"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}