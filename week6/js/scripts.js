

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
}



