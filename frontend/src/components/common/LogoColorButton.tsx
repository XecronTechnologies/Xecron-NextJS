import React from "react";
import Link from "next/link";

interface GradientButtonProps {
    text: string;
    href: string;
    className?: string;
    fromColor?: string;
    toColor?: string;
    py?: string;
    px?: string;
    mx?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
    text = "Button Text",
    href,
    className = "",
    fromColor = "pink-500",
    toColor = "blue-500",
    py = "py-2",
    px = "px-4",
    mx = "mx-2",
}) => {
    return (
        <Link
            href={href}
            className={`bg-gradient-to-r from-${fromColor} to-${toColor} ${py} ${px} ${mx} rounded-md text-white font-semibold ${className}`}>{text}</Link>

    )
}

export default GradientButton;