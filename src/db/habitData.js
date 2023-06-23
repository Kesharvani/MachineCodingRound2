export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allhabits") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            habits: [
              {
                id: 1,
                name: "Yoga",
                repeat: "Daily",
                goal: "Twice a day",
                timeOfDay: "Morning",
                startDay: "Today"
              },
              {
                id: 2,
                name: "Running",
                repeat: "Daily",
                goal: "Once a day",
                timeOfDay: "Evening",
                startDay: "Tomorrow"
              },
              {
                id: 3,
                name: "Jumping",
                repeat: "Daily",
                goal: "Once a day",
                timeOfDay: "Morning",
                startDay: "Day After tomorrow"
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Habit list not found."
        });
      }
    }, 2000);
  });
};
