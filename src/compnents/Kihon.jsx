/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./ColorfulMessage";

export const Kihon = () => {
  // 状態の監視
  // [変数, 更新関数] = useState(初期値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectで監視する変数を指定できる
  // []のように何も指定しないと最初の１回だけ走る
  // ↑データの読込みなどはこれを利用するとよい
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue" fontSize="18px">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color="pink" fontSize="18px">
        元気です
      </ColorfulMessage>
      <ColorfulMessage color="black" fontSize="40px">
        大きい文字
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};
