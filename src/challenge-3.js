exports.casesForICUByRequestedTime = ({ impact, severeImpact }) => {
  impact.casesForICUByRequestedTime = impact.infectionsByRequestedTime * 0.05;
  severeImpact.casesForICUByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;
  return { impact, severeImpact };
};
exports.casesForVentilatorsByRequestedTime = ({ impact, severeImpact }) => {
  impact.casesForVentilatorsByRequestedTime = impact.infectionsByRequestedTime * 0.02;
  severeImpact.casesForVentilatorsByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;
  return { impact, severeImpact };
};
exports.dollarsInFlight = ({ data, impact, severeImpact }) => {
  if (data.periodType === 'months') data.timeToElapse *= 30;
  if (data.periodType === 'weeks') data.timeToElapse *= 7;
  impact.dollarsInFlight = (impact.infectionsByRequestedTime * 1)
  * (data.region.avgDailyIncomePopulation * 1) * (data.region.avgDailyIncomeInUSD * 1)
  * (data.timeToElapse * 1);
  severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime
  * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD
  * data.timeToElapse;
  return { impact, severeImpact };
};