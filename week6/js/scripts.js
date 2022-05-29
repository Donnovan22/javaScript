
function calculate_bmr(age, gender, height, weight){
  if (gender == "male"){
    //basal metabolic rate (bmr) = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in year) + 5 
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;;
 };
 if (gender == "female") {
   //basal metabolic rate (bmr) = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in year) - 161
   return (10 * weight) + (6.25 * height) - (5 * age) - 161;
 };
}


function  determine_bmr() {
  let age = parseInt(document.querySelector("#age").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let height = parseInt(document.querySelector("#height").value);
  let gender =document.querySelector("#gender").value;

  let bmr = calculate_bmr(age, gender, height, weight);
  let rounded_bmr = Math.round(bmr);

  document.querySelector("#bmr").value = rounded_bmr;
  return rounded_bmr;
}



function get_activity_level() {
  let select = document.getElementById('activity-level');
  let value = select.value;

  const act_lvl = {
    sedentary: 1.2, 
    lightlyActive: 1.375, 
    moderatelyActive: 1.55, 
    veryActive:1.725,
    extremelyActive: 1.9
  };


  if(value == "sedentary"){
    return act_lvl.sedentary;
  };
  if(value == "lightly-active"){
    return act_lvl.lightlyActive;
  };
  if(value == "moderately-active"){
    return act_lvl.moderatelyActive;
  };
  if(value == "very-active"){
    return act_lvl.veryActive;
  };
  if(value == "extremely-active"){
    return act_lvl.extremelyActive;
  };
}

function measure_tdde(bmr, activity_level) {
  return  bmr * activity_level;
}


function tdee() {
  let tdee = measure_tdde(determine_bmr(), get_activity_level());
  let roundTDEE = Math.round(tdee);
  return roundTDEE;
}

function determine_goal_weight() {
  let select = document.getElementById('goal');
  let value = select.value;
  let goal;
  if(value == "loose"){
    goal = tdee() - 500;
  }
  if(value == "maintain"){
    goal = tdee();
  }
  if(value == "gain"){
    goal = tdee() + 500;
  }
  
  document.querySelector("#tdee").value = goal;
  return goal;
}




