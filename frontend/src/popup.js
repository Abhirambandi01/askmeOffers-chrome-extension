document.addEventListener('DOMContentLoaded', function () {
  fetch('http://127.0.0.1:5000/api/deals')
    .then(response => response.json())
    .then(data => {
      const dealsList = document.getElementById('deals-list');
      data.forEach(deal => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${deal.image}" alt="${deal.store}"> <a href="${deal.url}" target="_blank">${deal.store}</a> <span class="discount">${deal.discount}</span>`;
        dealsList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching deals:', error));
});
