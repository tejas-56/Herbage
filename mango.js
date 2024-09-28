  
    document.addEventListener('DOMContentLoaded', () => {
      const plantImages = document.querySelectorAll('.plant-image');
      
      plantImages.forEach(image => {
        image.addEventListener('click', () => {
          const modal = document.createElement('div');
          modal.style.position = 'fixed';
          modal.style.top = '0';
          modal.style.left = '0';
          modal.style.width = '100%';
          modal.style.height = '100%';
          modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
          modal.style.display = 'flex';
          modal.style.justifyContent = 'center';
          modal.style.alignItems = 'center';
          modal.style.zIndex = '1000';

          const fullImage = document.createElement('img');
          fullImage.src = image.src;
          fullImage.alt = image.alt;
          fullImage.style.maxWidth = '90%';
          fullImage.style.maxHeight = '90%';
          fullImage.style.objectFit = 'contain';
          fullImage.style.border = '5px solid var(--accent-color)';
          fullImage.style.borderRadius = '20px';
          fullImage.style.boxShadow = '0 0 30px rgba(240, 168, 104, 0.6)';

          modal.appendChild(fullImage);
          document.body.appendChild(modal);

          modal.addEventListener('click', () => {
            document.body.removeChild(modal);
          });
        });
      });

      // Add functionality to the search button
      const searchButton = document.querySelector('.search-button');
      const searchBox = document.querySelector('.search-box');

      searchButton.addEventListener('click', () => {
        const searchTerm = searchBox.value.trim().toLowerCase();
        if (searchTerm) {
          // Implement your search functionality here
          alert(`Searching for: ${searchTerm}`);
          // You can replace this alert with actual search implementation
        }
      });

      // Allow search on Enter key press
      searchBox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          searchButton.click();
        }
      });
    });
