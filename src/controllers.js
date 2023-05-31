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
    const employeeId = req.params.id;

    Employee.findByPk(employeeId)
        .then((employee) => {
            if (employee) {
                res.json({ employee });
            } else {
                res.status(404).json({ error: 'Employee not found' });
            }
        })
        .catch((error) => {
            console.error('Error retrieving employee:', error);
            res.status(500).json({ error: 'Failed to retrieve employee' });
        });
};

const updateEmployee = (req, res) => {
    const { name, email, phone } = req.body;
    const employeeId = req.params.id;

    Employee.update({ name, email, phone }, { where: { id: employeeId } })
        .then(() => {
            res.status(200).json({ message: 'Employee updated successfully' });
        })
        .catch((error) => {
            console.log('Error updating Employee:', error);
            res.status(500).json({ error: 'Failed to update Employee' });
        });
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