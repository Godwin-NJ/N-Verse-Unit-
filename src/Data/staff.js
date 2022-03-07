export const employee = [
  {
    name: "johnny",
    employeeID: 1,
    dept: "finance",
    birthYear: "10-10-2000",
    salary: 300,
    gender: "male",
    employementDate: "12 - 12 - 1990",
  },

  {
    name: "kahlan",
    employeeID: 2,
    dept: "administration",
    birthYear: "10-10-2000",
    salary: 100,
    gender: "female",
    employementDate: "12 - 12 - 1990",
  },

  {
    name: "bruno",
    employeeID: 3,
    dept: "Tech",
    birthYear: "10-10-2000",
    salary: 400,
    gender: "male",
    employementDate: "12 - 12 - 2001",
  },

  {
    name: "evans",
    employeeID: 4,
    dept: "Tech",
    birthYear: "10-10-2002",
    salary: 350,
    gender: "male",
    employementDate: "12 - 12 - 2016",
  },

  {
    name: "dayo",
    employeeID: 5,
    dept: "Sales",
    birthYear: "10-10-1984",
    salary: 100,
    gender: "male",
    employementDate: "12 - 12 - 2010",
  },

  {
    name: "Kelechi",
    employeeID: 6,
    dept: "Sales",
    birthYear: "10-10-1990",
    salary: 600,
    gender: "male",
    employementDate: "12 - 12 - 2016",
  },
];

export const getEmployeeID = (id) => {
  return employee.find((staff) => {
    return staff.employeeID === id;
  });
};
