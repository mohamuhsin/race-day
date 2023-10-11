let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const runnersAge = 25;

if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly === true) {
  console.log(
    `Runner with raceNumber ${raceNumber} Your race will start at 9:30am`
  );
} else if (runnersAge > 18 && registeredEarly !== true) {
  console.log(
    `Runner with raceNumber ${raceNumber} Your race will start at 11:00am`
  );
} else if (runnersAge < 18 && registeredEarly) {
  console.log(
    `Runner with raceNumber ${raceNumber} Your race will start at 12:30pm`
  );
} else {
  console.log(
    `Runner with raceNumber ${raceNumber} Come to the Registration Desk`
  );
}
