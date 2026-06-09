import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  const buttonStyle = {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "1px solid #ccc",
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    transition: "0.3s ease",
  };

  const darkButtonStyle = {
    ...buttonStyle,
    border: "1px solid #444",
    color: darkMode ? "#fff" : "#000",
  };

  return (
    <button
      onClick={toggleTheme}
      style={darkMode ? darkButtonStyle : buttonStyle}
      title="Toggle Theme"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}