document.addEventListener('DOMContentLoaded', () => {
    const rangeInputs = document.querySelectorAll('input[type="range"]');

    rangeInputs.forEach(input => {
        // Find the span that is the next sibling
        const outputSpan = input.nextElementSibling;
        // Then find the output element INSIDE that span
        const output = outputSpan.querySelector('output');

        // Initial display
        output.textContent = input.value;

        // Update on change
        input.addEventListener('input', () => {
            if (input.id === 'oldpeak') {
                output.textContent = parseFloat(input.value).toFixed(1);
            } else {
                output.textContent = input.value;
            }
        });
    });
});


document.querySelectorAll('input[type="range"]').forEach(slider => {
  const updateSlider = () => {
    const min = slider.min ? Number(slider.min) : 0;
    const max = slider.max ? Number(slider.max) : 100;
    const val = Number(slider.value);
    const percent = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, red ${percent}%, #ccc ${percent}%)`;
  };

  updateSlider();
  slider.addEventListener('input', updateSlider);
});


document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const panel = button.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('get-started-btn');
    const formWrapper = document.getElementById('form-wrapper');

    btn.addEventListener('click', () => {
      formWrapper.classList.remove('hidden');
      btn.style.display = 'none'; // Hide the button after clicking
    });
  });