
function DesignWrapper({ children }) {
  return (
    <div style={{
      border: "2px solidrgb(41, 62, 42)",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      backgroundColor: "red"
    }}>
      {children}
    </div>
  );
}

export default DesignWrapper;
