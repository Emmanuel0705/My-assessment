// challenge 1
const currentlyInfected = ({ data, impact, severeImpact }) => {
  impact.currentlyInfected = (data.reportedCases * 1) * 10;
  severeImpact.currentlyInfected = (data.reportedCases * 1) * 50;
  return { impact, severeImpact };
};
const infectionsByRequestedTime = ({ data, impact, severeImpact }) => {
  if (data.periodType === 'months') data.timeToElapse *= 30;
  if (data.periodType === 'weeks') data.timeToElapse *= 7;
  impact.infectionsByRequestedTime = (impact.currentlyInfected * 1)
  * (2 ** (data.timeToElapse / 3));
  severeImpact.infectionsByRequestedTime = (severeImpact.currentlyInfected * 1)
  * (2 ** (data.timeToElapse / 3));
  return { impact, severeImpact };
};
// challenge 2
const severeCasesByRequestedTime = ({ impact, severeImpact }) => {
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;
  return { impact, severeImpact };
};
const hospitalBedsByRequestedTime = ({ data, impact, severeImpact }) => {
  impact.hospitalBedsByRequestedTime = impact.severeCasesByRequestedTime
  - data.totalHospitalBeds;
  severeImpact.hospitalBedsByRequestedTime = severeImpact.severeCasesByRequestedTime
  - data.totalHospitalBeds;
  return { impact, severeImpact };
};
// challenge 3
const casesForICUByRequestedTime = ({ impact, severeImpact }) => {
  impact.casesForICUByRequestedTime = impact.infectionsByRequestedTime * 0.05;
  severeImpact.casesForICUByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;
  return { impact, severeImpact };
};
const casesForVentilatorsByRequestedTime = ({ impact, severeImpact }) => {
  impact.casesForVentilatorsByRequestedTime = impact.infectionsByRequestedTime * 0.02;
  severeImpact.casesForVentilatorsByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;
  return { impact, severeImpact };
};
const dollarsInFlight = ({ data, impact, severeImpact }) => {
  if (data.periodType === 'months') data.timeToElapse *= 30;
  if (data.periodType === 'weeks') data.timeToElapsev*= 7;
  impact.dollarsInFlight = (impact.infectionsByRequestedTime * 1)
  * (data.region.avgDailyIncomeInPopulation * 1) * (data.region.avgDailyIncomeInUSD * 1)
  * (data.timeToElapse * 1);
  severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime
  * data.region.avgDailyIncomeInPopulation * data.region.avgDailyIncomeInUSD
  * data.timeToElapse;
  return { impact, severeImpact };
};
const chalenges = ({ data, impact, severeImpact }) => {
  // challenge 1
  currentlyInfected({ data, impact, severeImpact });
  infectionsByRequestedTime({ data, impact, severeImpact });
  // challenge 2
  severeCasesByRequestedTime({ impact, severeImpact });
  hospitalBedsByRequestedTime({ data, impact, severeImpact });
  // challenge 3
  casesForICUByRequestedTime({ impact, severeImpact });
  casesForVentilatorsByRequestedTime({ impact, severeImpact });
  dollarsInFlight({ data, impact, severeImpact });
  return { data, impact, severeImpact };
};

const covid19ImpactEstimator = (data) => chalenges({ data, impact: {}, severeImpact: {} });
export default covid19ImpactEstimator;
