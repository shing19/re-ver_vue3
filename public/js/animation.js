const html = document.documentElement;
const canvas = document.querySelector('.animation-scrolling');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `https://www.pietrolezzani.com/wp-content/uploads/2021/06/${index.toString().padStart(3, '0')}.png`
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

    window.addEventListener('scroll', () => {
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(frameCount -1, Math.floor
        (scrollFraction * frameCount));
        
        requestAnimationFrame( () => updateImage(frameIndex + 1));
        context.clearRect(0, 0, canvas.width, canvas.height);
    })