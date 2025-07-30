function calculateBasePremium(insuredValue) {
  return (insuredValue / 150).toFixed(2);
}

function calculateAdjustedPremium(basePremium, planAdjustment) {
  return (basePremium * planAdjustment).toFixed(2);
}

export { calculateBasePremium, calculateAdjustedPremium };
