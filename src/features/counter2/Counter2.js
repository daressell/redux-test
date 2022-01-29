import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement2, increment2, incrementByAmount2, selectCount2 } from "./counter2Slice";
import { decrement, increment, incrementByAmount } from "../counter/counterSlice";
import styles from "../counter/Counter.module.css";

export function Counter2() {
  const count2 = useSelector(selectCount2);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement2())}>
          -
        </button>
        <span className={styles.value}>{count2}</span>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment2())}>
          +
        </button>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(incrementByAmount2({ log: 3, add: 5, save: "some" }))}>
          +++
        </button>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
          +++count1
        </button>
      </div>
    </div>
  );
}

export default Counter2;
