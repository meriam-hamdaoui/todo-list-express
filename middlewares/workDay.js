// const workDay = (req, res, next) => {
//   let today = new Date().getDay();
//   let day = "";
//   today === 0 || today === 6 ? (day = "weekend") : (day = "weekday");
//   // &&res.sendFile(__dirname + "/weekend.html")
//   res.render("list", { kindOfDay: day });
//   // return day;
//   next();
// };

// const workDay = (req, res, next) => {
//   let today = new Date().getDay();
//   let day = "";

//   switch (today) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       console.error("ERROR: OUPS! server crashed");
//   }
//   res.render("list", { kindOfDay: day });
//   next();
// };

const workDay = (req, res, next) => {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day });
  next();
};

module.exports = { workDay };
