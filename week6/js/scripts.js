


function calculate_bmr(age, gender, height, weight){
  if (gender == "male"){
    //basal metabolic rate (bmr) = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in year) + 5 
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
 }
 if (gender == "female") {
   //basal metabolic rate (bmr) = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in year) - 161
    return (10 * weight) + (6.25 * height) - (5 * age) - 161;
 }
}


function  determine_bmr() {
  let age = parseInt(document.querySelector("#age").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let height = parseInt(document.querySelector("#height").value);
  let gender =document.querySelector("#gender").value;

  let bmr = calculate_bmr(age, gender, height, weight);

  document.querySelector("#bmr").value = bmr;
  return bmr;
}



function get_activity_level() {
  let select = document.getElementById('activity-level');
  let value = select.value;
  if(value == "sedentary"){
    return 1.2;
  }
  if(value == "lightly-active"){
    return 1.375;
  }
  if(value == "moderately-active"){
    return 1.55;
  }
  if(value == "very-activ"){
    return 1.725;
  }
  if(value == "extremely-active"){
    return 1.9;
  }
}

function measure_tdde(bmr, activity_level) {
  return bmr * activity_level;
}


function tdee() {
  let tdee = measure_tdde(determine_bmr(), get_activity_level());
  
  return tdee;
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




