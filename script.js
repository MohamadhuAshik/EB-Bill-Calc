// For First 50 Units = Rs.0.75
// For Next 100 Units = Rs.1.00
// For Next 100 Units = Rs.1.30
// For Unit Above 250 Units = Rs.1.50
function EBBillCal() {
   let input = Number(document.getElementById("number").value);
   let result = 0;

   if (input <= 50) {
    result = input * 0.75
   }
   else if (input > 50 && input <= 100) {
      result = (50 * 0.75) + (input - 50) * 1
   }
   else if (input > 100 && input <= 250) {
      result = (50 * 0.75) + (100 * 1.3) + (input - 150) * 1.3
   } else {
      result = input * 1.5
   }
   let answer = document.querySelector("#answer")
   answer.innerHTML = result
}