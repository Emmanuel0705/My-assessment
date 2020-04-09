exports.severeCasesByRequestedTime = ({ impact, severeImpact }) => {
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;
  return { impact, severeImpact };
};
exports.hospitalBedsByRequestedTime = ({ data, impact, severeImpact }) => {
  impact.hospitalBedsByRequestedTime = Math.trunc((0.35 * data.totalHospitalBeds)
  - impact.severeCasesByRequestedTime);
  severeImpact.hospitalBedsByRequestedTime = Math.trunc((0.35 * data.totalHospitalBeds)
  - severeImpact.severeCasesByRequestedTime);
  return { impact, severeImpact };
};
