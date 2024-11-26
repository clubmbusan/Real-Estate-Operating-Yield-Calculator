function calculateOperatingYield() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const annualRent = parseFloat(document.getElementById('annualRent').value);
    const managementFee = parseFloat(document.getElementById('managementFee').value);
    const propertyTax = parseFloat(document.getElementById('propertyTax').value);
    const maintenanceFee = parseFloat(document.getElementById('maintenanceFee').value);
    const insuranceFee = parseFloat(document.getElementById('insuranceFee').value);
    const vacancyLoss = parseFloat(document.getElementById('vacancyLoss').value);

    if (!purchasePrice || !annualRent || !managementFee || !propertyTax || !maintenanceFee || !insuranceFee || !vacancyLoss) {
        alert("Please fill out all fields!");
        return;
    }

    // Calculate total operating costs
    const totalOperatingCosts = managementFee + propertyTax + maintenanceFee + insuranceFee + vacancyLoss;

    // Calculate net annual income
    const netAnnualIncome = annualRent - totalOperatingCosts;

    // Calculate operating yield
    const operatingYield = (netAnnualIncome / purchasePrice) * 100;

    // Display results
    document.getElementById('results').innerHTML = `
        <p><strong>Operating Yield Calculation Result:</strong></p>
        <p>Total Operating Costs: $${totalOperatingCosts.toLocaleString()}</p>
        <p>Net Annual Income: $${netAnnualIncome.toLocaleString()}</p>
        <p>Operating Yield: ${operatingYield.toFixed(2)}%</p>
    `;
}
