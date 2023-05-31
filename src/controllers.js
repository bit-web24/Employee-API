const { Employee } = require('./models');

const createEmployee = (req, res) => {
  const { name, email, phone } = req.body;

  Employee.create({ name, email, phone })
    .then(() => {
      res.status(201).json({ message: 'Employee created successfully' });
    })
    .catch((error) => {
      console.error('Error creating employee:', error);
      res.status(500).json({ error: 'Failed to create employee' });
    });
};

const listEmployees = (req, res) => {
  Employee.findAll()
    .then((employees) => {
      res.json({ employees });
    })
    .catch((error) => {
      console.error('Error retrieving employees:', error);
      res.status(500).json({ error: 'Failed to retrieve employees' });
    });
};

const getEmployee = (req, res) => {

}

const updateEmployee = (req, res) => {

}

const deleteEmployee = (req, res) => {

}

module.exports = {
    createEmployee,
    listEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
};