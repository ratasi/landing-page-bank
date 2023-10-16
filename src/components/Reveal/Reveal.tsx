"use client"
import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function Reveal({ children }: { children: React.ReactNode }) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])



    return (
        <div ref={ref} className="relative overflow-hidden w-fit">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#6DE4E8",
                    zIndex: 20
                }}
            >

            </motion.div>
        </div>
    )
}
