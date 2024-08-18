import React, { useState, useRef } from "react";

const SoundProgram = () => {
  let muteRef = useRef(0);
  const [count, setCount] = useState(0);
  const [refCount, setRefCount] = useState(count);
  const [isMute, setIsMute] = useState(false);
  const handleInc = (e) => {
    setCount(count + 1);
  };
  const handlerDec = (e) => {
    setCount(count - 1 >= 0 ? count - 1 : 0);
  };

  const handleMute = () => {
    if (!isMute) {
      setCount(0);
      setRefCount(parseInt(muteRef.current.innerHTML));
      setIsMute(true);
    } else {
      setCount(refCount);
      setIsMute(false);
    }
  };

  return (
    <div>
      <h3> This is Program for Creating Voulme Button for Remote</h3>
      <div style={{ margin: "20px" }}>
        <button
          type="click"
          onClick={(e) => {
            handleInc(e);
          }}
        >
          {" "}
          Increment{" "}
        </button>
      </div>
      <div style={{ margin: "20px" }}>
        <button type="click" onClick={handlerDec}>
          {" "}
          Decrement{" "}
        </button>
      </div>
      <div>
        <button type="click" onClick={handleMute}>
          {" "}
          Mute{" "}
        </button>
      </div>
      <div ref={muteRef} style={{ margin: "20px" }}>
        {count}
      </div>
    </div>
  );
};

export default SoundProgram;
