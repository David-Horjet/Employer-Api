const home = (req, res) => {
     return res.json({
          status: true,
          message: "Crud Api is fully functional 😎😉",
     });
}

const offline = (req, res) => {
     const Employees = [
          {
               "_id": "62fc8a6cbe0998e8ed9fe94b",
               "title": "The cause of Insecurity in Nigeria",
               "description": "Insecurity in Nigeria is actually caused by ou incompetent leaders at the top",
               "body": "The level of Insecurity in Nigeria is actually caused by ou incompetent leaders at the top",
               "author": "Thompson Solomon",
               "createdAt": "2022-08-17T06:27:56.819Z",
               "updatedAt": "2022-08-17T09:32:05.018Z",
               "__v": 0
          },
          {
               "_id": "62fc8a6cbe0998e8ed9fe94b",
               "title": "The cause of Insecurity in Nigeria",
               "description": "Insecurity in Nigeria is actually caused by ou incompetent leaders at the top",
               "body": "The level of Insecurity in Nigeria is actually caused by ou incompetent leaders at the top",
               "author": "Thompson Solomon",
               "createdAt": "2022-08-17T06:27:56.819Z",
               "updatedAt": "2022-08-17T09:32:05.018Z",
               "__v": 0
          },
          {
               "_id": "62fc8a6cbe0998e8ed9fe94b",
               "title": "The cause of Insecurity in Nigeria",
               "description": "Insecurity in Nigeria is actually caused by ou incompetent leaders at the top",
               "body": "The level of Insecurity in Nigeria is actually caused by ou incompetent leaders at the top",
               "author": "Thompson Solomon",
               "createdAt": "2022-08-17T06:27:56.819Z",
               "updatedAt": "2022-08-17T09:32:05.018Z",
               "__v": 0
          },
     ]
     return res.json({
          status: true,
          message: "All Employees fetched successfully",
          data: Employees
     });
}

const lost = (req, res) => {
     return res.json({
          status: false,
          message: "Sorry, You've completely lost your way 🤦‍♂️",
     });
}

module.exports = {
     home,
     offline,
     lost
}