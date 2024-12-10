docdocument.getElementById("generate").addEventListener("click", function () {
  // Get values from input fields
  let id = document.getElementById("id_num").value;
  let lastName = document.getElementById("last_name").value;
  let firstName = document.getElementById("first_name").value;
  let middleName = document.getElementById("middle_name").value;

  // Process the ID to get the last 4 digits
  id = id.replace(/-/g, ""); // Remove all dashes
  let lastFourDigits = id.slice(-4); // Get the last 4 characters

  // Combine the full name and remove spaces
  let fullName = (firstName + " " + " " + lastName).replace(/\s+/g, "");
  fullName = fullName.toUpperCase();

  // Extract first character of the last name
  //   let firstCharLastName = lastName.trim().toUpperCase()[0];

  // Calculate full name length minus 10
  let adjustedLength = fullName.length - 1;

  // Extract the last character of the full name
  //   let lastCharFullName = fullName[fullName.length - 1];

  let a = lastName.trim().toUpperCase()[0];
  let b = firstName.trim().toUpperCase()[0];

  // Construct the password
  let password = lastFourDigits + a + adjustedLength + b;

  // Display the password
  document.getElementById("password").innerText =
    "Your password is: " + password;
});
