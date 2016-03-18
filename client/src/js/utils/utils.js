class Utils {
    calculateBMI(userWeight, userHeight) {
        if(userWeight && userHeight){
            let BMI = Number(userWeight / ((userHeight / 100) * (userHeight / 100))).toFixed(2);
            return BMI;
        }else{
            return 0;
        }
    }
}

export default new Utils;
