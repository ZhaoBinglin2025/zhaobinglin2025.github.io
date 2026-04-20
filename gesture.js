// ====== 手势控制最简版本 ======

const btn = document.createElement("button");
btn.innerText = "👋 Try Gesture";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.zIndex = 9999;
document.body.appendChild(btn);

let video;
let gestureActive = false;

btn.onclick = async () => {
    if (gestureActive) return;
    gestureActive = true;

    video = document.createElement("video");
    video.style.position = "fixed";
    video.style.bottom = "80px";
    video.style.right = "20px";
    video.style.width = "200px";
    video.style.zIndex = 9999;
    document.body.appendChild(video);

    const script1 = document.createElement("script");
    script1.src = "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js";
    document.body.appendChild(script2);

    script2.onload = () => startTracking();
};

function startTracking() {
    const hands = new Hands({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
    });

    hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 0,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    hands.onResults(onResults);

    const camera = new Camera(video, {
        onFrame: async () => {
            await hands.send({ image: video });
        },
        width: 640,
        height: 480
    });

    camera.start();
}

function onResults(results) {
    if (!results.multiHandLandmarks) return;

    const y = results.multiHandLandmarks[0][0].y;

    if (y < 0.4) {
        window.scrollBy(0, -20);
    } else if (y > 0.6) {
        window.scrollBy(0, 20);
    }
}