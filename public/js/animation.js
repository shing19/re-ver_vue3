const html = document.documentElement;
const canvas = document.querySelector('.animation-scrolling');
const context = canvas.getContext('2d');
var images = [];

function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "Frames/001.png",
    "Frames/002.png",
    "Frames/003.png",
    "Frames/004.png",
    "Frames/005.png",
    "Frames/006.png",
    "Frames/007.png",
    "Frames/008.png",
    "Frames/009.png",
    "Frames/010.png",
    "Frames/011.png",
    "Frames/012.png",
    "Frames/013.png",
    "Frames/014.png",
    "Frames/015.png",
    "Frames/016.png",
    "Frames/017.png",
    "Frames/018.png",
    "Frames/019.png",
    "Frames/020.png",
    "Frames/021.png",
    "Frames/022.png",
    "Frames/023.png",
    "Frames/024.png",
    "Frames/025.png",
    "Frames/026.png",
    "Frames/027.png",
    "Frames/028.png",
    "Frames/029.png",
    "Frames/030.png",
    "Frames/031.png",
    "Frames/032.png",
    "Frames/033.png",
    "Frames/034.png",
    "Frames/035.png",
    "Frames/036.png",
    "Frames/037.png",
    "Frames/038.png",
    "Frames/039.png",
    "Frames/040.png",
    "Frames/041.png",
    "Frames/042.png",
    "Frames/043.png",
    "Frames/044.png",
    "Frames/045.png",
    "Frames/046.png",
    "Frames/047.png",
    "Frames/048.png",
    "Frames/049.png",
    "Frames/050.png",
    "Frames/051.png",
    "Frames/052.png",
    "Frames/053.png",
    "Frames/054.png",
    "Frames/055.png",
    "Frames/056.png",
    "Frames/057.png",
    "Frames/058.png",
    "Frames/059.png",
    "Frames/060.png",
    "Frames/061.png",
    "Frames/062.png",
    "Frames/063.png",
    "Frames/064.png",
    "Frames/065.png",
    "Frames/066.png",
    "Frames/067.png",
    "Frames/068.png",
    "Frames/069.png",
    "Frames/070.png",
    "Frames/071.png",
    "Frames/072.png",
    "Frames/073.png",
    "Frames/074.png",
    "Frames/075.png",
    "Frames/076.png",
    "Frames/077.png",
    "Frames/078.png",
    "Frames/079.png",
    "Frames/080.png",
    "Frames/081.png",
    "Frames/082.png",
    "Frames/083.png",
    "Frames/084.png",
    "Frames/085.png",
    "Frames/086.png",
    "Frames/087.png",
    "Frames/088.png",
    "Frames/089.png",
    "Frames/090.png",
    "Frames/091.png",
    "Frames/092.png",
    "Frames/093.png",
    "Frames/094.png",
    "Frames/095.png",
    "Frames/096.png",
    "Frames/097.png",
    "Frames/098.png",
    "Frames/099.png",
)

const currentFrame = index => (
    `Frames/${index.toString().padStart(3, '0')}.png`
    )
    const frameCount = 99;
    canvas.height = 900;
    canvas.width = 1400;
    const img = new Image();
    img.src = currentFrame(1);
    img.onload = function(){
    context.drawImage(img, 0, 0)
    }
    
    const updateImage = index => {
        img.src = currentFrame(index);
        context.drawImage(img, 0, 0);
    }

    scrollToBottom_this ();
    html.scrollTop = 3200;
        window.addEventListener('scroll', () => {
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(frameCount -1, Math.floor
        (scrollFraction * frameCount));
        
        requestAnimationFrame( () => updateImage(frameIndex + 1));
        context.clearRect(0, 0, canvas.width, canvas.height);
    })

function scrollToBottom_this () {
    // var content = document.querySelector('#animation');
    html.scrollTop = html.scrollHeight;
    console.log(html.scrollHeight);
    }

