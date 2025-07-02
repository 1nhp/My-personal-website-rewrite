function checkAndIncrementAge() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  if (currentMonth === 12 && currentDay === 23) {
    var bday = document.getElementById("bday");
    bday.textContent = "HEEEEY ITS MY BIRTHDAYYYY! TODAY! 🎉";
    document.body.style.backgroundColor = "wheat";
    document.body.style.color = "grey";
    document.title = "Maritosu's Birthday!";
  }
}

checkAndIncrementAge();