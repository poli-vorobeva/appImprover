import React, { useEffect, useState } from "react";
import Days from "./days";
import Habbits from "./habbits";
import CanvasHabbit from "./canvasHabbit";
import Images from "./images";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IHabbitsData, IUserData } from "../../dto";
import { getHabbitsData } from "../../reducer/habbitsData";
import { getImagesBgData } from "../../reducer/canvasImgBgData";

interface IhabbitsState {
  habbitsData: {
    data: IHabbitsData;
  };
}

const HabbitTrack = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector((state: IUserData) => state.userData.email);
  useEffect(() => {
    dispatch(getHabbitsData({ email }));
    dispatch(getImagesBgData({ email, type: "habbitImgBg" }));
  }, []);

  const listOfHabbits = useSelector(
    (state: IhabbitsState) => state.habbitsData.data
  );
  return (
    <div className="habbit_container">
      <div className="habbit">
        <p></p>
        <Days count={listOfHabbits.days} />
        <Habbits listOfHabbits={listOfHabbits.habbits} />
        <CanvasHabbit />
      </div>
      <Images />
    </div>
  );
};

export default HabbitTrack;
