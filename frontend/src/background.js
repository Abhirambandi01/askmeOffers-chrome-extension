chrome.runtime.onInstalled.addListener(() => {
    console.log('AskmeOffers extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchDeals") {
        fetch('http://localhost:5000/api/deals')
            .then(response => response.json())
            .then(deals => {
                sendResponse({success: true, deals: deals});
            })
            .catch(error => {
                console.error('Error fetching deals:', error);
                sendResponse({success: false, error: error.message});
            });
        return true;  // Will respond asynchronously.
    }
});
