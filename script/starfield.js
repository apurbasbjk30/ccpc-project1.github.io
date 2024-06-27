const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        }

        let stars = [];
        let mouse = {
            x: null,
            y: null
        };

        function initStars() {
            stars = [];
            for (let i = 0; i < 100; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2,
                    dx: (Math.random() - 0.5) * 2,
                    dy: (Math.random() - 0.5) * 2,
                    followMouse: Math.random() < 0.5 // 50% chance to follow mouse, 50% to go opposite
                });
            }
        }

        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let star of stars) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }

        function updateStars() {
            for (let star of stars) {
                let distanceX = mouse.x - star.x;
                let distanceY = mouse.y - star.y;
                let magnitude = Math.sqrt(distanceX ** 2 + distanceY ** 2);
                let unitX = distanceX / magnitude;
                let unitY = distanceY / magnitude;

                if (star.followMouse) {
                    star.x += unitX * 0.5; // Move towards the mouse
                    star.y += unitY * 0.5;
                } else {
                    star.x -= unitX * 0.5; // Move away from the mouse
                    star.y -= unitY * 0.5;
                }

                star.x += star.dx;
                star.y += star.dy;

                if (star.x > canvas.width) star.x = 0;
                if (star.y > canvas.height) star.y = 0;
                if (star.x < 0) star.x = canvas.width;
                if (star.y < 0) star.y = canvas.height;
            }
        }

        function animate() {
            drawStars();
            updateStars();
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resizeCanvas);

        canvas.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        // Initial resize and setup
        resizeCanvas();
        animate();