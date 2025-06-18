document.getElementById("votingForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  checkVotingEligibility
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
