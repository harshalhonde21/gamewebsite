//
import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

//images import
import wood from "../assets/wood.png";
import buff from "../assets/bull.png";

//images in bar
import buffalo from "../assets/buffalo.png";
import barrr from "../assets/bar3.png";
import barr from "../assets/bar2.png";
import j from "../assets/j.png";
import k from "../assets/k.png";
import a from "../assets/a.png";
import coin from "../assets/coin.png";
import bags from "../assets/bags.png";
import bar from "../assets/bar.png";
import q from "../assets/q.png";
import ten from "../assets/ten.png";

const imageMap = {
  "🎉": a,
  "💰": j,
  "🍔": k,
  "🐱": bar,
  "🌟": barr,
  "🦬": barrr,
  "🎸": coin,
  "🍦": bags,
  "🪙": buffalo,
  "🌈": q,
  "🐶": ten,
};

const emojis = [
  "🪙",
  "💰",
  "🦬",
  "🌟",
  "🎉",
  "🍔",
  "🎸",
  "🍦",
  "🐱",
  "🌈",
  "🐶",
];

const generateRandomEmojis = (count) => {
  return [...Array(count)].map(
    () => emojis[Math.floor(Math.random() * emojis.length)]
  );
};

const Game = () => {
  const [showIconBar, setShowIconBar] = useState(false);
  const [value, setValue] = useState(0.1); // Initial value
  const [rows, setRows] = useState(
    [...Array(3)].map(() => generateRandomEmojis(12))
  );
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleIconBar = () => {
    setShowIconBar(!showIconBar);
  };

  const handleAdd = () => {
    setValue(value + 0.1);
  };

  const handleMinus = () => {
    if (value >= 0.1) {
      setValue(value - 0.1);
    }
  };

  const spin = async () => {
    setIsSpinning(true);

    const intervals = rows.map((row, rowIndex) => {
      return setInterval(() => {
        setRows((prevRows) => {
          const newRow = generateRandomEmojis(12);
          return prevRows.map((prevRow, idx) =>
            idx === rowIndex ? newRow : prevRow
          );
        });
      }, 100);
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    intervals.forEach((interval) => clearInterval(interval));
    setIsSpinning(false);
  };

  return (
    <div className="index-page-layout-topbar">
      <div className="image-container">
        <img src={buff} className="buffalo-image" />
        <img src={wood} className="wood-image" />
        <p className="input-box-1">BONUS</p>
        <img src={wood} className="wood-image-1" />
        <p className="input-box-2">25.02</p>
        <img src={wood} className="wood-image-2" />
        <p className="input-box-3">25.02</p>
        <img src={wood} className="wood-image-3" />
        <p className="input-box-4">25.02</p>
        <img src={wood} className="wood-image-4" />
        <p className="input-box-5">25.02</p>
        <img src={wood} className="wood-image-5" />
        <p className="input-box-6">25.02</p>
        <img src={wood} className="wood-image-7" />
        <p className="input-box-7">25.02</p>
        <img src={wood} className="wood-image-8" />
        <p className="input-box-8">25.02</p>
        <img src={wood} className="wood-image-9" />
        <p className="input-box-9">25.02</p>
        <img src={wood} className="wood-image-10" />
        <p className="input-box-10">25.02</p>
        <img src={wood} className="wood-image-11" />
        <p className="input-box-11">25.02</p>
        <img src={wood} className="wood-image-12" />
        <p className="input-box-12">25.02</p>
      </div>
      <AppBar
        style={{
          width: "84.9rem",
          top: "5.1%",
          right: "6.4%",
          backgroundColor: "rgb(4, 11, 81)",
        }}
      >
        <Toolbar>
          <div className="top-bar-1">
            <span>GRAND &nbsp;$1,22,33</span>
          </div>
          <div className="top-bar-2">MAJOR &nbsp;&nbsp;$709.36</div>
          <div className="top-bar-3">MINOR &nbsp;&nbsp;$1,22,33</div>
          <div className="top-bar-4">MINI &nbsp;&nbsp;$709.36</div>
        </Toolbar>
      </AppBar>

      <div className="three-bar-rotate">
        <div className="first-bar">
          <div className="slot-row">
            {rows[0].map((emoji, index) => (
              <div
                key={index}
                className={`slot-machine-emoji ${isSpinning ? "spin" : ""}`}
              >
                <img
                  src={imageMap[emoji]}
                  alt={`Emoji ${index}`}
                  style={{ width: "80px" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="second-bar">
          <div className="slot-row">
            {rows[1].map((emoji, index) => (
              <div
                key={index}
                className={`slot-machine-emoji ${isSpinning ? "spin" : ""}`}
              >
                <img
                  src={imageMap[emoji]}
                  alt={`Emoji ${index}`}
                  style={{ width: "80px" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="third-bar">
          <div className="slot-row">
            {rows[2].map((emoji, index) => (
              <div
                key={index}
                className={`slot-machine-emoji ${isSpinning ? "spin" : ""}`}
              >
                <img
                  src={imageMap[emoji]}
                  alt={`Emoji ${index}`}
                  style={{ width: "80px" }}
                />
              </div>
            ))}
            6
          </div>
        </div>
      </div>

      <footer className="footer-main">
        <div className="icon-bar" onClick={toggleIconBar}>
          <DehazeIcon />
        </div>
        {showIconBar && (
          <div className="icon-bar-menu">
            <MenuIcon />
            <Link to="/">
              <HomeIcon />
            </Link>
            <SettingsIcon />
            <InfoIcon />
          </div>
        )}
        <div className="icon-bar-2">
          <SettingsIcon />
        </div>

        <div className="box-text">BALANCE : 14.48</div>

        <div className="show-display">GOOD LUCK !</div>

        <div className="add" onClick={handleAdd}>
          <AddIcon />
        </div>

        <div className="box-text-1">{value.toFixed(2)}</div>

        <div className="minus" onClick={handleMinus}>
          <RemoveIcon />
        </div>

        <div className="thunder">
          <ElectricBoltIcon />
        </div>

        <div
          className="button-for-loader"
          style={{ cursor: "pointer", padding: "20px 60px 20px 60px " }}
          onClick={spin}
        >
          {isSpinning ? "SPINNING..." : "SPIN"}
        </div>
      </footer>
    </div>
  );
};

export default Game;
