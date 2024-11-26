function calculateOperatingYield() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const annualRent = parseFloat(document.getElementById('annualRent').value);
    const managementFee = parseFloat(document.getElementById('managementFee').value);
    const propertyTax = parseFloat(document.getElementById('propertyTax').value);
    const maintenanceFee = parseFloat(document.getElementById('maintenanceFee').value);
    const insuranceFee = parseFloat(document.getElementById('insuranceFee').value);
    const vacancyLoss = parseFloat(document.getElementById('vacancyLoss').value);

    if (!purchasePrice || !annualRent || !managementFee || !propertyTax || !maintenanceFee || !insuranceFee || !vacancyLoss) {
        alert("모든 필드를 입력해주세요!");
        return;
    }

    // 총 운영 비용 계산
    const totalOperatingCosts = managementFee + propertyTax + maintenanceFee + insuranceFee + vacancyLoss;

    // 연간 순수익 계산
    const netAnnualIncome = annualRent - totalOperatingCosts;

    // 운영 수익률 계산
    const operatingYield = (netAnnualIncome / purchasePrice) * 100;

    // 결과 표시
    document.getElementById('results').innerHTML = `
        <p><strong>운영수익률 계산 결과:</strong></p>
        <p>총 운영 비용: ₩${totalOperatingCosts.toLocaleString()}</p>
        <p>연간 순수익: ₩${netAnnualIncome.toLocaleString()}</p>
        <p>운영 수익률: ${operatingYield.toFixed(2)}%</p>
    `;
}
