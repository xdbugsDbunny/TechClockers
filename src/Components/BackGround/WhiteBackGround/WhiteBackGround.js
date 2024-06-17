import React, { useRef, useEffect } from 'react';

const WhiteBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const minRadius = 1;
    const maxRadius = 2;
    const numBubbles = 50;
    const bubbles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Bubble(x, y, radius, dx, dy) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = '#a6a6a6'; // Set the bubble color
        ctx.strokeStyle = '#a6a6a6'; // Set the bubble border color
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      };

      this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      };
    }

    function generateBubbles() {
      for (let i = 0; i < numBubbles; i++) {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        const x = Math.random() * (canvas.width - 2 * radius) + radius;
        const y = Math.random() * (canvas.height - 2 * radius) + radius;
        const dx = (Math.random() - 0.5) * 1; // Random velocity in x-direction
        const dy = (Math.random() - 0.5) * 1; // Random velocity in y-direction

        bubbles.push(new Bubble(x, y, radius, dx, dy));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
      }
    }

    generateBubbles();
    animate();

    // Cleanup function to cancel animation frame and perform any necessary cleanup
    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <canvas ref={canvasRef} 
    style={{
        backgroundColor: 'white',
        width: '100%',
        height: '125%',
        zIndex: -10,
        position:'absolute'
      }}
  />
  );
};

export default WhiteBackground;