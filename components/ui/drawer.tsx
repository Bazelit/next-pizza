import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useDragControls,
  Variants,
} from "framer-motion";
import { Button } from "@heroui/button";
import Image from "next/image";

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<BottomDrawerProps> = ({ isOpen, onClose }) => {
  const [drawerHeight] = useState("70vh"); // Height of the drawer
  const dragControls = useDragControls();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Animation variants for the drawer
  const drawerVariants: Variants = {
    open: { y: 0 },
    closed: { y: "100%" },
  };

  // Animation variants for the overlay
  const overlayVariants: Variants = {
    open: { opacity: 1, pointerEvents: "auto" as const },
    closed: { opacity: 0, pointerEvents: "none" as const },
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={drawerVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
        drag="y" // Enable vertical drag
        dragConstraints={{ top: 0, bottom: 0 }} // Constrain drag to vertical axis
        dragElastic={{ top: 0, bottom: 0.5 }} // Add elastic effect when dragging down
        dragControls={dragControls}
        onDragEnd={(_, info) => {
          if (info.offset.y > 100 || info.velocity.y > 500) {
            // Swipe down to close (based on offset or velocity)
            onClose();
          }
        }}
        className="bg-default-50"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: drawerHeight,
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          overflow: "hidden",
        }}
      >
        {/* Drag handle */}
        <div
          style={{
            width: "100%",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "grab",
          }}
        >
          <div className="w-[100px] h-1 bg-gray-400 rounded-xs" />
        </div>

        {/* Drawer content */}
        <div style={{ padding: "20px", margin: "0 auto", maxWidth: "800px" }}>
          <p className="text-3xl">Чизбургер пицца</p>
          <Image
            src="https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif"
            alt="burger"
            width={300}
            height={300}
          />
          <Button color="primary" onPress={onClose}>
            Добавить в корзину
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Drawer;
