// Download CV button
document.getElementById('download-cv').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'CV_Anish.pdf';
    link.click();
});

// Cursor Particle Animation
const canvas = document.getElementById('cursor-anim-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

document.addEventListener('mousemove', function (e) {
    for (let i = 0; i < 4; i++) {
        particles.push({
            x: e.clientX,
            y: e.clientY,
            radius: Math.random() * 6 + 4,
            color: `rgba(${80 + Math.random() * 100},${200 + Math.random() * 55},${180 + Math.random() * 75},0.15)`,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
            life: 0,
            maxLife: 40 + Math.random() * 20
        });
    }
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life++;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        if (p.life > p.maxLife) particles.splice(i, 1);
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();
