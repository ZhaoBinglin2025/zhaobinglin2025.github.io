// ====== 手势控制最简版本（基于 MediaPipe CDN）======

// 创建按钮
const btn = document.createElement("button");
btn.innerText = "👋 Try Gesture";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.zIndex = 9999;
document.body.appendChild(btn);

let video, hands, camera;
let gestureActive = false;

// 点击按钮启动
btn.onclick = async () => {
    if (gestureActive) return;

    gestureActive = true;

    // 创建视频元素
    video = document.createElement("video");
    video.style.position = "fixed";
    video.style.bottom = "80px";
    video.style.right = "20px";
    video.style.width = "200px";
    video.style.zIndex = 9999;
    document.body.appendChild(video);

    // 加载 MediaPipe
    const script1 = document.createElement("script");
    script1.src = "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js";
    document.body.appendChild(script2);

    script2.onload = () => startHandTracking();
};

function startHandTracking() {
    const hands = new window.Hands({
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

    const camera = new window.Camera(video, {
        onFrame: async () => {
            await hands.send({ image: video });
        },
        width: 640,
        height: 480
    });

    camera.start();
}

// 手势识别（极简：手在上→上滑，手在下→下滑）
function onResults(results) {
    if (!results.multiHandLandmarks) return;

    const landmarks = results.multiHandLandmarks[0];

    const y = landmarks[0].y; // 手腕位置

    if (y < 0.4) {
        window.scrollBy({ top: -20, behavior: "smooth" });
    } else if (y > 0.6) {
        window.scrollBy({ top: 20, behavior: "smooth" });
    }
}
