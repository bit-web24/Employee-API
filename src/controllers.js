const { Employee } = require('./models');

const createEmployee = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        await Employee.create({ name, email, phone });
        return res.status(201).json({ message: 'Employee created successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create employee' });
    }
};

const listEmployees = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const employees = await Employee.findAll({
            limit: limit,
            offset: offset
        });

        return res.json({
            page,
            limit,
            data: employees
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve employees' });
    }
};

const getEmployee = async (req, res) => {
    const employeeId = req.params.id;
    try {
        const foundEmployee = await Employee.findByPk(employeeId);
        if (!foundEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        return res.json({ foundEmployee });
    } catch (error) {
        console.error('Error retrieving employee:', error);
        return res.status(500).json({ error: 'Failed to retrieve employee' });
    }
};

const updateEmployee = async (req, res) => {
    const { name, email, phone } = req.body;
    const employeeId = req.params.id;
    try {
        const [rowsUpdated] = await Employee.update(
            { name, email, phone },
            { where: { id: employeeId } }
        );
        if (rowsUpdated === 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        return res.status(200).json({ message: 'Employee updated successfully' });
    } catch (error) {
        console.error('Error updating Employee:', error);
        return res.status(500).json({ error: 'Failed to update Employee' });
    }
};

const deleteEmployee = async (req, res) => {
    const employeeId = req.params.id;
    try {
        const rowsDeleted = await Employee.destroy({ where: { id: employeeId } });
        if (rowsDeleted === 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        return res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting Employee', error);
        return res.status(500).json({ error: 'Failed to delete employee' });
    }
};


module.exports = {
    createEmployee,
    listEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
};