'use client'

import React from "react"
import { easeInOut, motion } from "framer-motion"

export default function Template({ children }) {
    return (
        <motion.div className='grid grid-cols-5 h-screen'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.65 }}
        >{children}</motion.div>
    )
}