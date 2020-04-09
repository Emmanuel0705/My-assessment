exports.casesForICUByRequestedTime = ({ impact, severeImpact }) => {
  impact.casesForICUByRequestedTime = impact.infectionsByRequestedTime * 0.05;
  severeImpact.casesForICUByRequestedTime = severeImpact
    .infectionsByRequestedTime * 0.05;
  return { impact, severeImpact };
};
exports.casesForVentilatorsByRequestedTime = ({ impact, severeImpact }) => {
  impact.casesForVentilatorsByRequestedTime = impact.infectionsByRequestedTime * 0.02;
  severeImpact.casesForVentilatorsByRequestedTime = severeImpact
    .infectionsByRequestedTime * 0.02;
  return { impact, severeImpact };
};
exports.dollarsInFlight = ({ data, impact, severeImpact }) => {
  if (data.periodType === 'months') {
    data.timeToElapse *= 30;
  } else if (data.periodType === 'weeks') {
    data.timeToElapse *= 7;
  } else {
    data.timeToElapse *= 1;
  }
  impact.dollarsInFlight = Math.trunc((impact.infectionsByRequestedTime * 1)
  * (data.region.avgDailyIncomePopulation * 1) * (data.region.avgDailyIncomeInUSD * 1)
  * (data.timeToElapse * 1));
  severeImpact.dollarsInFlight = Math.trunc(severeImpact.infectionsByRequestedTime
  * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD
  * data.timeToElapse);
  return { impact, severeImpact };
};
