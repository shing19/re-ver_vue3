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
    "Frames/01.png",
    "Frames/02.png",
    "Frames/03.png",
    "Frames/04.png",
    "Frames/05.png",
    "Frames/06.png",
    "Frames/07.png",
    "Frames/08.png",
    "Frames/09.png",
    "Frames/10.png",
    "Frames/11.png",
    "Frames/12.png",
    "Frames/13.png",
    "Frames/14.png",
    "Frames/15.png",
    "Frames/16.png",
    "Frames/17.png",
    "Frames/18.png",
    "Frames/19.png",
    "Frames/20.png",
    "Frames/21.png",
    "Frames/22.png",
    "Frames/23.png",
    "Frames/24.png",
    "Frames/25.png",
    "Frames/26.png",
    "Frames/27.png",
    "Frames/28.png",
    "Frames/29.png",
    "Frames/30.png",
    "Frames/31.png",
    "Frames/32.png",
    "Frames/33.png",
    "Frames/34.png",
    "Frames/35.png",
    "Frames/36.png",
    "Frames/37.png",
    "Frames/38.png",
    "Frames/39.png",
    "Frames/40.png",
    "Frames/41.png",
    "Frames/42.png",
    "Frames/43.png",
    "Frames/44.png",
    "Frames/45.png",
    "Frames/46.png",
    "Frames/47.png",
    "Frames/48.png",
    "Frames/49.png",
    "Frames/50.png",
    "Frames/51.png",
    "Frames/52.png",
    "Frames/53.png",
    "Frames/54.png",
    "Frames/55.png",
    "Frames/56.png",
    "Frames/57.png",
    "Frames/58.png",
    "Frames/59.png",
)

const currentFrame = index => (
    `Frames/${index.toString().padStart(2, '0')}.png`
    )
    const frameCount = 59;
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

    
    window.addEventListener('scroll', () => {
        // const scrollTop = html.scrollTop;
        // const maxScrollTop = html.scrollHeight - window.innerHeight;    
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(frameCount -1, Math.floor
        (scrollFraction * frameCount));
        
        requestAnimationFrame( () => updateImage(frameIndex + 1));
        context.clearRect(0, 0, canvas.width, canvas.height);
    })

    // html.scrollTop = 10000;