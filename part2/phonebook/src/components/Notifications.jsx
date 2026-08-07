const Notification = ({ condition, message }) => {
  return message === null ? null : condition ? (
    <div className="notif">{message}</div>
  ) : (
    <div className="error">{message}</div>
  );
};

export default Notification;
