import { Viewer, Cartesian3, BillboardCollection } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";

const r = require.context('./icons', false, /\.(png|svg)$/);
let iconGroup = importAll(r);

var viewer = new Viewer("cesiumContainer", {});

// hide the cesium timeline and animation
viewer.animation.container.style.visibility = "hidden";
viewer.timeline.container.style.visibility = "hidden";
viewer.forceResize();

// Random billboards
window.setInterval(addRandomPoint, 500);

function addRandomPoint() {
    let icon = getRandomIcon();
  viewer.entities.add({
    position: Cartesian3.fromDegrees(
      getRandomNumber(-90, 90),
      getRandomNumber(-180, 180)
    ),
    billboard: {
        image: icon,
        scale: 0.10,
    },
  });
}

function getRandomIcon() {
    var keys = Object.keys(iconGroup);
    return iconGroup[keys[keys.length * Math.random() << 0]]; 
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./icons', '')] = r(item); });
    return images
}
