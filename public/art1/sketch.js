let video;  // webcam input
let model;  // Face Landmarks machine-learning model
let face;   // detected face
let img;
let maskImage;

let maincan;
let link;

let isStart = false;

// print details when a face is
// first found
let firstFace = true;

function getCanvas(url) {
  let img = new Image;

  img.crossOrigin = "Anonymous";
  img.onload = function(){
    let c = document.createElement('canvas');
    let ctx = c.getContext('2d');

    c.width = this.naturalWidth;
    c.height = this.naturalHeight;
    
    ctx.filter = "('hue-rotate(235deg) contrast(150%) saturate(120%) brightness(2)')";
    ctx.drawImage(img, 0,0);
    let res = new Image;
    res.onload = function(){
      document.body.appendChild(res);
    }
    res.src = c.toDataURL();
    
    //saveCanvas(c);
    }
  img.src = url;
}
function downloadCanvas(link, filename) {
  let tempc = getCanvas(maincan.toDataURL());
  link.href = tempc.toDataURL();
  link.download = filename;
}
function downloadc(){  
  domtoimage.toJpeg(maincan, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  
  loadFaceModel();
  maincan = document.getElementById("defaultCanvas0");
  document.getElementById('startBtn').addEventListener('click', function() {
    isStart=true;
  }, false);
  
}


// load the Face Landmarks model – this can be super
// slow so you might want to add a loading screen!
async function loadFaceModel() {
  model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
    
    // optional: limit results to just one face
    { maxFaces: 1 }
  );
}

function draw() {

  // get face data if the video and model are both loaded
  if (video.loadedmetadata && model !== undefined) {
    getFace();
    document.getElementById("link").disabled = false;
    document.getElementById("startBtn").disabled = false;
  }

  // if we have face data, show us!
  if (face !== undefined && isStart) {
    image(video, 0,0, width,height);

    // print info the first time a face is detected
    if (firstFace) {
      console.log(face);
      firstFace = false;
      
      
    }

    fRangeX= getMinMaxOf2DIndex(face.annotations.silhouette, 0); 
    fRangeY= getMinMaxOf2DIndex(face.annotations.silhouette, 1); 
    noStroke();
    
    video.loadPixels();
  //loadPixels();

    for (let y= fRangeY.min; y < fRangeY.max; y += 10) {
      for (let x = fRangeX.min; x < fRangeX.max; x += 10) {
        let index = (x + y * video.width) * 4;
        let c = get(x,y);

        fill(c);
        rect(
          map(x, 0, video.width, 0, width), 
          map(y, 0, video.height, 0, height),
            10, 10);
      }
    }
  }


  //image(img, 0, 0);
}

// converts points from video coordinates to canvas
function scalePoint(pt) {
  let x = map(pt[0], 0,video.width, 0,width);
  let y = map(pt[1], 0,video.height, 0,height);
  return createVector(x, y);
}
function getMinMaxOf2DIndex (arr, idx) {
    return {
        min: Math.min.apply(null, arr.map(function (e) { return e[idx]})),
        max: Math.max.apply(null, arr.map(function (e) { return e[idx]}))
    }
} 

// gets face points from video input
async function getFace() {
  const predictions = await model.estimateFaces({
    input: document.querySelector('video')
  }); 
  if (predictions.length === 0) {
    face = undefined;
  }
  else {
    face = predictions[0];
  }
}

