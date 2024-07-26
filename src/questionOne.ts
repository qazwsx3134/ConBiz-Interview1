type Profession =
  | "student"
  | "freelancer"
  | "productOwner"
  | "engineer"
  | "systemAnalytics";

interface User {
  firstName: string;
  lastName: string;
  customerID: string;
  note: string;
  profession: Profession;
}

function isValidCustomer(user: User): boolean {
  return (
    typeof user.firstName === "string" &&
    typeof user.lastName === "string" &&
    typeof user.customerID === "string" &&
    /^\d+$/.test(user.customerID) &&
    typeof user.note === "string" &&
    [
      "student",
      "freelancer",
      "productOwner",
      "engineer",
      "systemAnalytics",
    ].includes(user.profession)
  );
}

const customers: User[] = [
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "123",
    note: "Regular customer",
    profession: "engineer",
  },
  {
    firstName: "Jane",
    lastName: "",
    customerID: "456",
    note: "",
    profession: "student",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    customerID: "889",
    note: "VIP",
    profession: "productOwner",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    customerID: "789",
    note: "VIP",
    profession: "productOwner",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    customerID: "101",
    note: "",
    profession: "freelancer",
  },
  {
    firstName: "Eva",
    lastName: "Brown",
    customerID: "202",
    note: "New customer",
    profession: "systemAnalytics",
  },
  // Edge cases
  {
    firstName: "",
    lastName: "NoFirst",
    customerID: "303",
    note: "",
    profession: "student",
  }, // Invalid: empty firstName
  {
    firstName: "Invalid",
    lastName: "Prof",
    customerID: "404",
    note: "",
    profession: "teacher" as Profession,
  }, // Invalid profession
  {
    firstName: "Non",
    lastName: "Digit",
    customerID: "5O5",
    note: "",
    profession: "engineer",
  }, // Invalid customerID
];

/**
 * Question 1 sort by (‘firstName’ + ‘lastName’ + ‘customerID’)
 */
function sortUserName(users: User[]): User[] {
  const validUser = users.filter(isValidCustomer);

  return validUser.sort((a, b) => {
    const aKey = `${a.firstName}${a.lastName}${a.customerID}`;
    const bKey = `${b.firstName}${b.lastName}${b.customerID}`;
    return aKey.localeCompare(bKey);
  });
}

console.log(customers);
console.log(sortUserName(customers));

/**
 * Question 2 sort by (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
‘student’’)
 */

function getProfessionRank(profession: Profession): number {
  const rankMap: { [key in Profession]: number } = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };
  return rankMap[profession];
}

function sortByType(users: User[]): User[] {
  const validUser = users.filter(isValidCustomer);

  return validUser.sort((a, b) => {
    const professionComparison =
      getProfessionRank(b.profession) - getProfessionRank(a.profession);
    if (professionComparison !== 0) {
      return professionComparison;
    } else {
      // If professions are equal, sort by firstName + lastName + customerID
      const aKey = `${a.firstName}${a.lastName}${a.customerID}`;
      const bKey = `${b.firstName}${b.lastName}${b.customerID}`;
      return aKey.localeCompare(bKey);
    }
  });
}

console.log(sortByType(customers));
