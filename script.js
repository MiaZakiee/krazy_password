document.getElementById("generate").addEventListener("click", function () {
  // Get values from input fields
  let id = document.getElementById("id_num").value;
  let lastName = document.getElementById("last_name").value;
  let firstName = document.getElementById("first_name").value;
  let middleName = document.getElementById("middle_name").value;

  // Process the ID to get the last 4 digits
  id = id.replace(/-/g, "");

  id = id.slice(-4); // Get the last 4 characters

  // Combine the full name and remove spaces
  let fullName = (lastName + firstName + middleName)
    .replace(/\s+/g, "")
    .toUpperCase();

  // Create the password
  let password =
    id + fullName[0] + (fullName.length - 2) + fullName[fullName.length - 1];

  // Display the password
  document.getElementById("password").innerText =
    "Your password is: " + password;
});
