import React from 'react'

// width, height, bg-color, border-color, border-width, text, prefix icon, suffix icon, onClick, link, hover-bg-color

interface CapsuleButtonProps {
    text?: string
    onClick?: () => void
    link?: string
    bg_color?: string
    width?: string
    height?: string
    border?: string
    border_color?: string
    prefix_icon?: string
    suffix_icon?: string
    text_color?: string
}

const CapsuleButton = (props: CapsuleButtonProps) => {
    return (
        <a href={props.link}>
            <button style={{ backgroundColor: props.bg_color, color: props.text_color }} className={`hover:bg-[#009383] text-white button w-[${props.width}] h-[${props.height}] border-${props.border} border-[${props.border_color}]`} onClick={props.onClick}>
                {props.text}
            </button>
        </a>
    );
};

export default CapsuleButton;