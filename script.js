// Sample IPO data
const ipoData = [
    {
        logo: 'logo1.png',
        name: 'Company A',
        priceBand: '$10 - $15',
        openDate: 'August 1, 2024',
        closeDate: 'August 3, 2024',
        issueSize: '1,000,000 shares',
        issueType: 'Fresh Issue',
        listingDate: 'August 10, 2024',
        status: 'Upcoming',
        ipoPrice: '$12',
        listingPrice: '$14',
        listingGain: '16.67%',
        cmp: '$13',
        currentReturn: '8.33%',
        rhp: 'rhp-a.pdf',
        drhp: 'drhp-a.pdf'
    },
    // Add more IPO data objects here
];

// Function to render IPO data to the page
function renderIPOData() {
    const ipoList = document.getElementById('ipo-list');
    ipoList.innerHTML = '';

    ipoData.forEach(ipo => {
        const ipoCard = document.createElement('div');
        ipoCard.className = 'ipo-card';
        ipoCard.innerHTML = `
            <div class="company-logo">
                <img src="${ipo.logo}" alt="Company Logo">
            </div>
            <div class="ipo-details">
                <h2 class="company-name">${ipo.name}</h2>
                <p><strong>Price Band:</strong> ${ipo.priceBand}</p>
                <p><strong>Open Date:</strong> ${ipo.openDate}</p>
                <p><strong>Close Date:</strong> ${ipo.closeDate}</p>
                <p><strong>Issue Size:</strong> ${ipo.issueSize}</p>
                <p><strong>Issue Type:</strong> ${ipo.issueType}</p>
                <p><strong>Listing Date:</strong> ${ipo.listingDate}</p>
                <p><strong>Status:</strong> ${ipo.status}</p>
                <p><strong>IPO Price:</strong> ${ipo.ipoPrice}</p>
                <p><strong>Listing Price:</strong> ${ipo.listingPrice}</p>
                <p><strong>Listing Gain:</strong> ${ipo.listingGain}</p>
                <p><strong>Current Market Price (CMP):</strong> ${ipo.cmp}</p>
                <p><strong>Current Return:</strong> ${ipo.currentReturn}</p>
                <p><strong>RHP:</strong> <a href="${ipo.rhp}" target="_blank">Download</a></p>
                <p><strong>DRHP:</strong> <a href="${ipo.drhp}" target="_blank">Download</a></p>
            </div>
        `;
        ipoList.appendChild(ipoCard);
    });
}

// Call the function to render the data when the page loads
document.addEventListener('DOMContentLoaded', renderIPOData);
