export const theme = {
    colors: {
        white: "#FFFFFF",
        black: "#212325",
        gray: "#91919F",
        primary: "#9E5FE6",

        neutral: (opacity) => `rgba(10, 10, 10, ${opacity})`,
    },

    fontWeights: {
        medium: "500",
        semibold: "600",
        bold: "700",
    },

    radius: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
    }
}

export const createRgba = (hex, opacity) => {
    const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    };

    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};