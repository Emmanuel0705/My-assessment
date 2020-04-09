exports.currentlyInfected = ({ data, impact, severeImpact }) => {
  impact.currentlyInfected = (data.reportedCases * 1) * 10;
  severeImpact.currentlyInfected = (data.reportedCases * 1) * 50;
  return { impact, severeImpact };
};
exports.infectionsByRequestedTime = ({ data, impact, severeImpact }) => {
  if (data.periodType === 'months') data.timeToElapse *= 30;
  if (data.periodType === 'weeks') data.timeToElapse *= 7;
  if (data.periodType === 'days') data.timeToElapse *= 1;
  impact.infectionsByRequestedTime = (impact.currentlyInfected * 1)
  * (2 ** (data.timeToElapse / 3));
  severeImpact.infectionsByRequestedTime = (severeImpact.currentlyInfected * 1)
  * (2 ** (data.timeToElapse / 3));
  return { impact, severeImpact };
};
