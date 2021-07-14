import React, { useState } from "react";
import { photos } from "./Photos";

const Gallary = () => {
  let i = 0;

  // for(p in photos)
  // {
  //     console.log(photos[p])
  // }
  var SrcArray = [];
  photos.map((a) => {
    SrcArray[i] = a.src;
    i++;
  });
  console.log(SrcArray);
  const [View, SetView] = useState(false);
  const [ImageView, ChangeImageView] = useState("");
  const handleclick = (event) => {
    SetView(!View);
    ChangeImageView(event.target.id);
    console.log(event.target.id);
  };

  const OnBackward = (event) => {
    var intt = parseInt(ImageView);
    if (intt) ChangeImageView(intt - 1);
  };

  const CloseView = () => {
    SetView(false);
  };
  const OnForward = (event) => {
    var inte = parseInt(ImageView);

    console.log(SrcArray.length);
    if (inte - 2 <= SrcArray.length) ChangeImageView(inte + 1);
  };
  const imgs = photos.map((a) => {
    return (
      <img
        src={a.src}
        key={a.in}
        id={a.in}
        height="130"
        width="130"
        style={{ marginLeft: 2, position: "relative" }}
        onClick={(event) => handleclick(event)}
      />
    );
  });
  return (
    <div>
      {imgs}

      {View ? (
        <div
          style={{
            backgroundColor: "black",
            width: window.innerWidth,
            height: window.innerHeight,
            opacity: 1,
            top: 0,
            left: 0,
            zIndex: 10,
            position: "absolute"
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={SrcArray[ImageView]}
              height={window.innerHeight - 100}
              width={window.innerWidth - 100}
              style={{ opacity: 1, marginTop: 50 }}
            />

            <div
              style={{
                color: "white",
                top: 10,
                right: 0,
                position: "absolute",
                marginRight: 10
              }}
              onClick={() => CloseView()}
            >
              CLOSE
            </div>
            <div
              style={{
                position: "absolute",
                left: 0,
                top: window.innerHeight / 2,
                marginLeft: 10
              }}
              onClick={(event) => OnBackward(event)}
            >
              <i
                class="fas fa-angle-left"
                style={{ fontSize: "30px", color: "white", left: 0 }}
              ></i>
            </div>

            <div
              style={{
                position: "absolute",
                right: 0,
                top: window.innerHeight / 2,
                marginRight: 10
              }}
              onClick={(event) => OnForward(event)}
            >
              <i
                class="fas fa-angle-right"
                style={{ fontSize: "30px", color: "white" }}
              ></i>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Gallary;
