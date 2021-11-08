
import esgQns from '../../constants/esgprofiling';
import riskQns from '../../constants/riskprofiling';

export default calculateEsgScore = (map) => {
    let e = 0, s = 0, g = 0;
    let val;
    for (let i=0; i<esgQns.length; i++) {
        val = esgQns[i];
        if (val.options) {
            let cls = val.classification;
            let ind = map.get(i);
            let wt = ind ? val.weightage[ind] : 0;
            if (cls === 1) {
                e+=wt;
            } else if (cls === 2) {
                s+=wt;
            } else if (cls === 3) {
                g+=wt;
            }
        }
    }

    return {
        e: e, s: s, g: g
    };
}

export const calculateRiskScore = (map) => {
  let total = 0, val;
  for (let i=0; i<riskQns.length; i++) {
    val = riskQns[i];
    if (val.options) {
        let ind = map.get(i);
        let wt = ind && val.weightage && val.weightage[ind] ? val.weightage[ind] : 0;
        total+=wt;
    }
  }
  return total;
}

