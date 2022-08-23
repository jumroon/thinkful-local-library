// const getSleepHours = (day) => {
//   switch (day) {
//     case "monday":
//       return 8;
//       break;
//     case "tuesday":
//       return 7;
//       break;
//     case "wednesday":
//       return 6;
//       break;
//     case "thursday":
//       return 5;
//       break;
//     case "friday":
//       return 4;
//       break;
//     case "saturday":
//       return 3;
//       break;
//     case "sunday":
//       return 2;
//       break;
//     default:
//       1;
//   }
// };

// console.log("get sleep hours function",getSleepHours())

// const getActualSleepHours = () => {
//   return (
//     getSleepHours("monday") +
//     getSleepHours("tuesday") +
//     getSleepHours("wednesday") +
//     getSleepHours("thursday") +
//     getSleepHours("friday") +
//     getSleepHours("saturday") +
//     getSleepHours("sunday")
//   );
// };

// console.log("getActualSleepHours function",getActualSleepHours())

// const getIdealSleepHours = () => {
//   const idealHours = 8;
//   return idealHours * 7;
// };

// console.log("get ideal sleep hours function", getIdealSleepHours())

// const calculateSleepDebt = () => {
//   let actualSleepHours = getActualSleepHours();
//   let idealSleepHours = getIdealSleepHours();
//   if ((actualSleepHours === idealSleepHours)) {
//     console.log("you got enough sleep");
//   } else if (actualSleepHours > idealSleepHours) {
//     console.log("you got more sleep than needed by " + (actualSleepHours - idealSleepHours));
//   } else {
//     console.log("you did not get enough sleep, you are missing " + (idealSleepHours - actualSleepHours) + "hours");
//   }
// };

// console.log(calculateSleepDebt())