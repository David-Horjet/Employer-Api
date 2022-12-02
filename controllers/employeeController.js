const { Employees } = require("../models/EmployeeModel");

// Get All Employees
const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employees.find().sort({
     createdAt: -1
});
    if (employees) {
      return res.json({
        status: true,
        message: "All Employees fetched successfully",
        data: employees,
      });
    }
  } catch (error) {
    next(error);
    return res.json({
      status: false,
      message: "You've got some errors",
      error: error,
    });
  }
};

// Get Single Employee
const getEmployee = async (req, res, next) => {
  try {
    const id = req.params.id;
    const employee = await Employees.findOne({
      _id: id,
    });
    if (employee) {
      return res.json({
        status: true,
        message: `Employee's data fetched successfully`,
        data: employee,
      });
    } else {
      return res.json({
        status: false,
        message: "You've got some errors",
        error: "I guess You lost your way itterating through the Ids",
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      message: "You've got some errors",
      error: error,
    });
    next();
  }
};

// Create Employee
const createEmployee = async (req, res, next) => {
  try {
    const employee = await Employees.create(req.body);
    if (employee) {
      return res.json({
        status: true,
        message: "Employee Created Successfully",
        data: employee,
      });
    }
    return res.json({
      status: false,
      message: "You've got some errors",
      error: "An error occured while signing up",
    });
  } catch (error) {
    next(error);
    return res.json({
      status: false,
      message: "You've got some errors",
      error: error,
    });
  }
};

// Update Employee Data
const updateEmployee = async (req, res) => {
     try {
          const data = await Employees.findByIdAndUpdate(req.params.id, {
               $set: req.body
          });
          return res.json({
               status: true,
               message: "Employee has been successfully updated",
               data
          })
     } catch (error) {
          res.json({
               status: false,
               message: "An error occured while setting your profile"
          });
     }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    if (req.body.id === req.params.id) {
      try {
        await Employees.findByIdAndDelete(req.params.id);
        return res.json({
          status: true,
          message: "Employee Deleted Successfully",
        });
      } catch (error) {
        return res.json({
          status: false,
          message: "You've got some errors",
          error: error,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "You've got some errors",
        error: "I guess You lost your way itterating through the Ids",
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      message: "You've got some errors",
      error: error,
    });
  }
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
