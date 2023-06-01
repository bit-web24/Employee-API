const { Employee } = require('./models');

const createEmployee = (req, res) => {
    const { name, email, phone } = req.body;

    Employee.create({ name, email, phone })
        .then(() => {
            return res.status(201).json({ message: 'Employee created successfully' });
        })
        .catch((error) => {
            console.error('Error creating employee:', error);
            return res.status(500).json({ error: 'Failed to create employee' });
        });
};

const listEmployees = (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;

    const offset = (page - 1) * limit;
    Employee.findAll({
        limit: limit,
        offset: offset
    })
        .then((employees) => {
            return res.json({
                page: page,
                limit: limit,
                data: employees
            });
        })
        .catch((error) => {
            console.error('Error retrieving employees:', error);
            return res.status(500).json({ error: 'Failed to retrieve employees' });
        });
};

const getEmployee = async (req, res) => {
    const employeeId = req.params.id;
    try {
        const foundEmployee = await Employee.findByPk(employeeId);
        if (!foundEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        return res.json({ foundEmployee });
    }
    catch (error) {
        console.error('Error retrieving employee:', error);
        return res.status(500).json({ error: 'Failed to retrieve employee' });
    };
};

const updateEmployee = async (req, res) => {
    const { name, email, phone } = req.body;
    const employeeId = req.params.id;
    try {
        const updated = await Employee.update({ name, email, phone }, { where: { id: employeeId } });
        if (updated == 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        return res.status(200).json({ message: 'Employee updated successfully' });
    }
    catch (error) {
        console.log('Error updating Employee:', error);
        return res.status(500).json({ error: 'Failed to update Employee' });
    };
}

const deleteEmployee = async (req, res) => {
    const employeeId = req.params.id;
    try {
        const destroyed = await Employee.destroy({ where: { id: employeeId } });
        if (!destroyed) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        return res.status(200).json({ message: 'Employee deleted successfully' });
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to delete employee' });
    };
}

module.exports = {
    createEmployee,
    listEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
};