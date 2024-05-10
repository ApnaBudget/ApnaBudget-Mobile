import { Dimensions } from "react-native";

const primaryColor = '#9E5FE6';
const { width, height } = Dimensions.get("screen");

export const theme = {
    colors: {
        white: "#FFFFFF",
        black: "#212325",
        gray: "#91919F",
        primaryColor,
        lightBlack: "#424242",
        iconColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "#E0E0E0",
        neutral: (opacity) => `rgba(10, 10, 10, ${opacity})`,
    },

    width,
    height,
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
