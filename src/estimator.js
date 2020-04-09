
const chalengeOne = require('./challenge-1');

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
const covid19ImpactEstimator = (data) => chalenges({ data, impact: {}, severeImpact: {} });
export default covid19ImpactEstimator;
