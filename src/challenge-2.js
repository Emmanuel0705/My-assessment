// challenge 2
exports.severeCasesByRequestedTime = ({ impact, severeImpact }) => {
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;
  return { impact, severeImpact };
};
exports.hospitalBedsByRequestedTime = ({ data, impact, severeImpact }) => {
  impact.hospitalBedsByRequestedTime = impact.severeCasesByRequestedTime
  - data.totalHospitalBeds;
  severeImpact.hospitalBedsByRequestedTime = severeImpact.severeCasesByRequestedTime
  - data.totalHospitalBeds;
  return { impact, severeImpact };
};
