import React from 'react'
import '../button.css'

// width, height, bg-color, border-color, border-width, text, prefix icon, suffix icon, onClick, link, hover-bg-color

interface CapsuleButtonProps {
    text?: string
    onClick?: () => void
    link?: string
    bg_color?: string
    width?: string
    height?: string
    size?: string
    border?: string
    border_color?: string
    prefix_icon?: string
    suffix_icon?: string
    text_color?: string
    border_radius?: string
    font_size?: string
    font_weight?: string
    hover_bg_color?: string
    hover_text_color?: string
    hover_border_color?: string
    hover_border?: string
}

const CapsuleButton = (props: CapsuleButtonProps) => {

    const { hover_bg_color, hover_border, hover_border_color, hover_text_color, bg_color, width, height, onClick, link, size, text_color, text, border, border_color, border_radius, font_size, font_weight } = props

    const styles = {
        backgroundColor: bg_color,
        color: text_color,
        border: `${border} solid ${border_color}`,
        borderRadius: border_radius,
        width: width,
        height: height,
        borderColor: border_color,
        fontSize: font_size,
        fontWeight: font_weight
    }

    const hoverStyles = {
        backgroundColor: hover_bg_color,
        color: hover_text_color,
        border: `${hover_border} solid ${hover_border_color}`,
    };

    return (
        <a href={link}>
            <button
                type='button'
                style={{ ...styles }}
                className={`button button-${size}`}
                onClick={onClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor || '';
                    e.currentTarget.style.color = hoverStyles.color || '';
                    e.currentTarget.style.border = hoverStyles.border;
                    // Add similar lines for other hover-specific styles
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = styles.backgroundColor || '';
                    e.currentTarget.style.color = styles.color || '';
                    e.currentTarget.style.border = styles.border;
                    // Reset other styles if needed
                }}>
                {text}
            </button>
        </a>
    );
};

export default CapsuleButton;