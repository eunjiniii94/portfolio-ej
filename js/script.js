document.addEventListener("DOMContentLoaded", () => {
  const shapes = document.querySelectorAll(".shape");

  const flipElements = document.querySelectorAll(".flip-reveal");

  const flipObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.25,
    },
  );

  flipElements.forEach((el) => {
    flipObserver.observe(el);
  });

  shapes.forEach((shape) => {
    shape.addEventListener("mousemove", (e) => {
      const rect = shape.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const moveX = x * -250;
      const moveY = y * -250;

      shape.style.setProperty("--move-x", `${moveX}px`);
      shape.style.setProperty("--move-y", `${moveY}px`);
    });

    shape.addEventListener("mouseleave", () => {
      shape.style.setProperty("--move-x", "0px");
      shape.style.setProperty("--move-y", "0px");
    });
  });
});

// 스크롤 효과
const fadeElements = document.querySelectorAll(".scroll-fade");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

fadeElements.forEach((el) => {
  fadeObserver.observe(el);
});
