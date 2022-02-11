import { useState } from "react";

const ExpandableCommentButton = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen((currentStatus) => {
            return !currentStatus;
          });
        }}
      >
        {isOpen ? "Cancel" : "Leave a comment"}
      </button>
      {isOpen ? children : null}
    </>
  );
};

export default ExpandableCommentButton;
