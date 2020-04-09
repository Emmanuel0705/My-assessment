exports.currentlyInfected = ({ data, impact, severeImpact }) => {
  impact.currentlyInfected = Math.trunc((data.reportedCases * 1) * 10);
  severeImpact.currentlyInfected = Math.trunc((data.reportedCases * 1) * 50);
  return { impact, severeImpact };
};
exports.infectionsByRequestedTime = ({ data, impact, severeImpact }) => {
  if (data.periodType === 'months') {
    data.timeToElapse *= 30;
  } else if (data.periodType === 'weeks') {
    data.timeToElapse *= 7;
  } else {
    data.timeToElapse *= 1;
  }
  impact.infectionsByRequestedTime = Math.trunc((impact.currentlyInfected * 1)
  * (2 ** (data.timeToElapse / 3)));
  severeImpact.infectionsByRequestedTime = Math.trunc((severeImpact.currentlyInfected * 1)
  * (2 ** (data.timeToElapse / 3)));
  return { impact, severeImpact };
};
