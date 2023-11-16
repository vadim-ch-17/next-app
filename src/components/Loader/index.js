import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const Loader = ({ isShow }) => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    isShow && setLoader(isShow);
  }, []);
  return (
    loader && (
      <div className={styles.loader}>
        <div>
          <span></span>
        </div>
      </div>
    )
  );
};

export default Loader;
