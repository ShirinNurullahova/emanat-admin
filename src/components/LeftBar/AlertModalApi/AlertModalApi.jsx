import { useEffect, useState } from "react";
import "./AlertModalApi.scss";
const AlertModalApi = () => {
  useEffect(() => {
    const txt = document.querySelector(".alertModalApi .text");
  }, []);
  return (
    <>
      <div className="alertModalApi">
        <p className="text">Salam</p>
      </div>
    </>
  );
};

export default AlertModalApi;
