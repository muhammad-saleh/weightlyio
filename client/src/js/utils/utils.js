import moment from 'moment';

class Utils {
    calculateBMI(userWeight, userHeight) {
        if(userWeight && userHeight){
            let BMI = Number(userWeight / ((userHeight / 100) * (userHeight / 100))).toFixed(2);
            return BMI;
        }else{
            return 0;
        }
    }

    weightChangeInDays(weightArray, days) {
        let today = moment();
        let targetDate = moment().subtract(parseInt(days)+1,'day');
        let weightInRange = [];
        let weightChange = 0;

        weightArray.forEach(function(item){
            let itemDate = moment(item.date);
            if(itemDate <= today && itemDate >= targetDate) {
                weightInRange.push(item);
            }
        });

        weightChange = Number(weightInRange[0].weight - weightInRange[weightInRange.length - 1].weight);

        if(weightChange > 0) {
            weightChange = '+' + weightChange.toString();
        } else if(weightChange < 0) {
            weightChange = '-' + weightChange.toString().substr(1);
        }

        return weightChange;
    }

    weightDifferenceSymbol(weight1, weight2){
        if(weight1 && weight2 && !isNaN(parseInt(weight1)) && !isNaN(parseInt(weight2))) {
            let w1 = parseInt(weight1);
            let w2 = parseInt(weight2);
            if( (w2 - w1) > 0 ) {
                return 'chevron-up'
            } else if( (w2 - w1) < 0 ) {
                return 'chevron-down';
            } else if( w2 === w1 ) {
                return '=';
            } else {
                return '';
            }
        }
    }
}

export default new Utils;
