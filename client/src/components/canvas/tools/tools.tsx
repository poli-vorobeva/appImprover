import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IStateDataBgCanvas } from "../../../dto";
import {
  changeBackgroundInBg,
  changeBgSetting,
} from "../../../reducer/canvasImgBgData";
import Color from "./color";
interface ITools {
  type: "habbitImg";
  width: number;
  height: number;
  handlerClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}
interface IBgImgStore {
  imgBgData: IStateDataBgCanvas;
}

const Tools = ({ type, width, height, handlerClick }: ITools) => {
  const dispatch = useDispatch<AppDispatch>();
  const [setting, setSetting] = useState({ color: "#000000", opacity: 1 });
  const stateSetting = useSelector(
    (state: IBgImgStore) => state.imgBgData.data.habbitImg.setting
  );
  useEffect(() => {
    setSetting(stateSetting);
  }, [stateSetting]);

  const handlerDeleteBg = () => {
    dispatch(
      changeBackgroundInBg({
        type,
        data: {
          id: "0",
          name: "bg",
          src: "../../assets/bg/bg0.jpg",
          coordinate: { x: 0, y: 0 },
          width,
          height,
        },
      })
    );
  };

  const handlerChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeBgSetting({
        type,
        data: { opacity: setting.opacity, color: e.target.value },
      })
    );
  };
  const handlerChangeOpasicity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeBgSetting({
        type,
        data: { opacity: +e.target.value, color: setting.color },
      })
    );
  };
  return (
    <>
      <h3>Panel</h3>
      <Color type="habbitImg" setting={setting} />
      <br></br>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        onChange={handlerChangeOpasicity}
        value={setting.opacity}
      />
      <br></br>
      <input type="checkbox" onClick={handlerClick} />
      Delete component<br></br>
      <button onClick={handlerDeleteBg}>Delete bg</button>
    </>
  );
};

export default Tools;
