import { useEffect, useState } from "react";
import "./Faq.css";

const FaqItem = ({ item, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index == 0) {
      setIsShow(true);
    }
  }, []);

  function handleHide() {
    setIsShow((isShow) => !isShow);
  }
  return (
    <>
      <div className="faq-box">
        <div className="qus">
          <button className={isShow ? "arrow" : ""} onClick={handleHide}>
            &gt;
          </button>
          <div>{item.question}</div>
        </div>
        {isShow && <div className="ans">{item.answer}</div>}
      </div>
    </>
  );
};

export default FaqItem;
