// Add interactivity to the gallery
document.addEventListener('DOMContentLoaded', () => {
  const cars = document.querySelectorAll('.car');

  // Hover effect to show car names
  cars.forEach(car => {
    car.addEventListener('mouseover', () => {
      const carName = car.getAttribute('data-car-name');
      console.log(`Hovering over: ${carName}`);
    });
  });

  // Click event to "zoom in" (enlarge the image)
  cars.forEach(car => {
    car.addEventListener('click', () => {
      const img = car.querySelector('img');
      img.style.transform = 'scale(2)';
      setTimeout(() => {
        img.style.transform = 'scale(1)';
      }, 1000); // Revert after 1 second
    });
  });
});
