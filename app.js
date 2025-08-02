let userNumber = prompt("🎯 Apna number enter karein (1 to 6):");
userNumber = Number(userNumber);

let output = "";

if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
  output = "<p>⚠️ Please enter a valid number between 1 and 6.</p>";
} else {
  output = "<table>" +
           "<tr>" +
           "<th>" + userNumber + " ×</th>" +
           "<th>Result</th>" +
           "</tr>";

  for (let i = 1; i <= 10; i++) {
    output += "<tr>" +
              "<td>" + userNumber + " × " + i + "</td>" +
              "<td>" + (userNumber * i) + "</td>" +
              "</tr>";
  }

  output += "</table>";
}

// Show the table
document.getElementById("table-container").innerHTML = output;

// WIN/LOSE alert based on number
if (userNumber % 2 === 0) {
  alert("🎉 WIN! Even number!");
} else {
  alert("😢 LOSE! Odd number!");
}

