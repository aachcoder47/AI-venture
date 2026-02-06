"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};

export const BackgroundMesh = () => {
    return (
        <div className="bg-mesh">
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="glow-circle"
                style={{ top: "10%", left: "5%" }}
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="glow-circle"
                style={{ bottom: "10%", right: "5%", background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)" }}
            />
        </div>
    );
};
