const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

let sequelize;

try {
  sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  });
} catch (error) {
  console.error('Error initializing Sequelize:', error);
}
const Employee = sequelize.define('Employee', {
  fullName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  jobTitle: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

// PrimaryEmergencyContact Model
const PrimaryEmergencyContact = sequelize.define('primaryEmergencyContact', {
  contactName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  relationship: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

// SecondaryEmergencyContact Model
const SecondaryEmergencyContact = sequelize.define('secondaryEmergencyContact', {
  contactName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  relationship: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

Employee.hasMany(PrimaryEmergencyContact, {
  as: 'primaryEmergencyContact',
  foreignKey: {
    name: 'employeeId',
    allowNull: false
  },
  constraints: true,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true
});

Employee.hasMany(SecondaryEmergencyContact, {
  as: 'secondaryEmergencyContact',
  foreignKey: {
    name: 'employeeId',
    allowNull: false
  },
  constraints: true,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true
});

module.exports = {
  Employee,
  PrimaryEmergencyContact,
  SecondaryEmergencyContact
};