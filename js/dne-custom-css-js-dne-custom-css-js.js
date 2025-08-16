document.addEventListener('DOMContentLoaded', function () {
  try {
    // Only proceed if the user hasn't visited before
    if (!localStorage.getItem('visited_once')) {
      console.log('First visit detected.');

      // Wait a bit in case the element is loaded dynamically
      setTimeout(function () {
        const button = document.querySelector('.c108-ise-button');
        if (button) {
          console.log('Button found, triggering click.');
          button.click();
        } else {
          console.warn('Button with class .c108-ise-button not found.');
        }

        // Set the flag so this block doesn't run again
        localStorage.setItem('visited_once', 'true');
      }, 500); // 500ms delay in case of late-loaded elements
    } else {
      console.log('Not first visit — script will not run.');
    }
  } catch (error) {
    console.error('Error in first-visit script:', error);
  }
});

