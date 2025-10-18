import React, { useState, useEffect } from "react";

function ChangeText() {
  const names = ["Mobiles", "Laptops", "Accessories"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = names[index % names.length];
    const speed = isDeleting ? 80 : 150;

    const timer = setTimeout(() => {
      setText(prev =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex(i => i + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span style={{ color: "#38bdf8", fontWeight: "bold" }}>
      {text}
      <span style={{ borderRight: "2px solid #38bdf8", marginLeft: "3px" }}></span>
    </span>
  );
}

export default ChangeText;
