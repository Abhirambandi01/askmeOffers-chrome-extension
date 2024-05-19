console.log('AskmeOffers content script loaded');

fetch('http://127.0.0.1:5000/api/deals')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(deals => {
    console.log('Deals:', deals);
    // Inject the deals into the webpage
    const dealsContainer = document.createElement('div');
    dealsContainer.id = 'askmeoffers-deals';
    dealsContainer.style.position = 'fixed';
    dealsContainer.style.bottom = '10px';
    dealsContainer.style.right = '10px';
    dealsContainer.style.backgroundColor = 'white';
    dealsContainer.style.padding = '10px';
    dealsContainer.style.border = '1px solid #ddd';
    dealsContainer.style.borderRadius = '5px';
    dealsContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    dealsContainer.style.zIndex = '9999';

    dealsContainer.innerHTML = '<h2 style="margin: 0 0 10px 0; color: #ff6f61;">AskmeOffers Deals</h2>';
    deals.forEach(deal => {
      const dealElement = document.createElement('div');
      dealElement.style.display = 'flex';
      dealElement.style.alignItems = 'center';
      dealElement.style.marginBottom = '10px';

      dealElement.innerHTML = `
        <img src="${deal.image}" alt="${deal.store}" style="width: 30px; height: 30px; margin-right: 10px;">
        <a href="${deal.url}" target="_blank" style="color: #0073e6; font-weight: bold; text-decoration: none;">${deal.store}</a>
        <span style="margin-left: auto; background-color: #2ecc71; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold;">${deal.discount}</span>
      `;
      dealsContainer.appendChild(dealElement);
    });

    document.body.appendChild(dealsContainer);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
