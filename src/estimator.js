
const chalengeOne = require("./challenge-1") 

const chalenges = ({ data, impact, severeImpact }) => {
  // challenge 1
  chalengeOne.currentlyInfected({ data, impact, severeImpact });
  chalengeOne.infectionsByRequestedTime({ data, impact, severeImpact });
  // challenge 2
  // severeCasesByRequestedTime({ impact, severeImpact });
  // hospitalBedsByRequestedTime({ data, impact, severeImpact });
  // challenge 3
  // casesForICUByRequestedTime({ impact, severeImpact });
  // casesForVentilatorsByRequestedTime({ impact, severeImpact });
  // dollarsInFlight({ data, impact, severeImpact });
  return { data, impact, severeImpact };
};
const data = {
    region:{name: "Africa",avgAge: 19.7,avgDailyIncomeInUSD: 5,avgDailyIncomePopulation: 0.71},
    periodType: "days",timeToElapse: 58,reportedCases: 674,population: 66622705, totalHospitalBeds: 1380614 
}
const covid19ImpactEstimator = (data) => chalenges({ data, impact: {}, severeImpact: {} });
export default covid19ImpactEstimator;
