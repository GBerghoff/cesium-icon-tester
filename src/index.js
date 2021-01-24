import { Viewer, Cartesian3, BillboardCollection} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";
import Icon from './cesium.png';

var viewer = new Viewer("cesiumContainer", {});

// hide the cesium timeline and animation
viewer.animation.container.style.visibility = "hidden";
viewer.timeline.container.style.visibility = "hidden";
viewer.forceResize();

// Random billboards
window.setInterval(addRandomPoint, 2500);

function addRandomPoint() {
    viewer.entities.add({
        position: Cartesian3.fromDegrees(randomNumber(-90,90),randomNumber(-180, 180)),
        billboard: {
            image: Icon,
            scale: .5,
        },
    });
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}