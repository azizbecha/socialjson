"use client"

import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const AOSInitializer: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <></>;
}

export default AOSInitializer;
