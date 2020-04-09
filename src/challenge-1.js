exports.currentlyInfected = ({ data, impact, severeImpact }) => {
  impact.currentlyInfected = Math.trunc(data.reportedCases * 10);
  severeImpact.currentlyInfected = Math.trunc(data.reportedCases * 50);
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
  impact.infectionsByRequestedTime = Math.trunc(impact.currentlyInfected
    * (2 ** (Math.trunc(data.timeToElapse / 3))));
  severeImpact.infectionsByRequestedTime = Math.trunc(severeImpact.currentlyInfected
  * (2 ** (Math.trunc(data.timeToElapse / 3))));
  return { impact, severeImpact };
};
