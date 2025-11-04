const ErrorAlert = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: '#ff4d4f',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '8px',
        margin: '15px 0',
        fontWeight: 'bold',
      }}
    >
      ⚠️ {message}
    </div>
  );
};

export default ErrorAlert;
