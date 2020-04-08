const chalenges = ({ data, impact, severeImpact }) => {
  // challenge 1
  impact.currentlyInfected = (data.reportedCases * 1) * 10;
  severeImpact.currentlyInfected = (data.reportedCases * 1) * 50;
  impact.infectionsByRequestedTime = (impact.currentlyInfected * 1)
  * (2 ** (data.timeToElapse / 3));
  severeImpact.infectionsByRequestedTime = (severeImpact.currentlyInfected * 1)
  * (2 ** (data.timeToElapse / 3));
  // challenge 2
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;
  impact. hospitalBedsByRequestedTime = impact.severeCasesByRequestedTime -
   data.totalHospitalBeds;
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;
  severeImpact.hospitalBedsByRequestedTime = severeImpact.severeCasesByRequestedTime
  - data.totalHospitalBeds
  // challenge 3
  impact.casesForICUByRequestedTime = impact.infectionsByRequestedTime * 0.05;
  impact.casesForVentilatorsByRequestedTime = impact.infectionsByRequestedTime * 0.02;
  severeImpact.casesForICUByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;
  severeImpact.casesForVentilatorsByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;
  impact.dollarsInFlight = (impact.infectionsByRequestedTime *1)
  * (data.region.avgDailyIncomeInPopulation * 1) * (data.region.avgDailyIncomeInUSD * 1)
  * (data.timeToElapse *1);
  severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime
  * data.region.avgDailyIncomeInPopulation * data.region.avgDailyIncomeInUSD
  * data.timeToElapse;
  return { data,impact,severeImpact };
}
const covid19ImpactEstimator = (data) => { 
  return  chalenges({ data, impact:{}, severeImpact:{} });    
};

export default covid19ImpactEstimator;
