
var contactURL="https://ttrhadjzqkfbvbzsafvutaaxzu0ujuvg.lambda-url.us-east-2.on.aws?action=contacto";
var loginURL=contactURL;
document.addEventListener('DOMContentLoaded', () => {
    const overlays = document.querySelectorAll('.overlay');

    // Open popup
    document.querySelectorAll('.openPopup').forEach(button => {
      button.addEventListener('click', () => {
        const popupType = button.dataset.popup;
        const overlay = document.querySelector(`[data-popup-type="${popupType}"]`);
        if (overlay) {
          overlay.style.display = 'flex';
          overlay.querySelector('form').reset();
          overlay.querySelector('.response').textContent = '';
        }
      });
    });

    // Close popup
    document.querySelectorAll('.closePopup').forEach(button => {
      button.addEventListener('click', () => {
        overlays.forEach(overlay => {
          overlay.style.display = 'none';
        });
      });
    });

    // Handle form submissions
    overlays.forEach(overlay => {
      const form = overlay.querySelector('form');
      const responseElement = overlay.querySelector('.response');

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        document.body.classList.add('loading-cursor');
        overlay.querySelector('.popup').classList.add('loading');

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const url = overlay.dataset.popupType === 'contactForm' 
          ? contactURL 
          : loginURL;

        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const result = await response.json();
          responseElement.textContent = overlay.dataset.popupType === 'contactForm'
            ? `${result.message}.`
            : `Welcome, ${result.username}`;
        } catch (error) {
          responseElement.textContent = `Error: ${error.message}`;
        } finally {
          document.body.classList.remove('loading-cursor');
          overlay.querySelector('.popup').classList.remove('loading');
        }
      });
    });
});