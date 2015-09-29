attendanceBot.factory("StudentsFactory", function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "George Washington", here: false },
    { name: "John Adams", here: false },
    { name: "Thomas Jefferson", here: false },
    { name: "James Madison", here: false },
    { name: "James Monroe", here: false },
    { name: "John Quincy Adams", here: false },
    { name: "Andrew Jackson", here: false },
    { name: "Martin Van Buren", here: false },
    { name: "William Henry Harrison", here: false },
    { name: "John Tyler", here: false },
    { name: "James Knox Polk", here: false },
    { name: "Zachary Taylor", here: false },
    { name: "Millard Fillmore", here: false },
    { name: "Franklin Pierce", here: false },
    { name: "James Buchanan", here: false },
    { name: "Abraham Lincoln", here: false },
    { name: "Andrew Johnson", here: false },
    { name: "Ulysses S. Grant", here: false },
    { name: "Rutherford Birchard Hayes", here: false },
    { name: "James Abram Garfield", here: false },
    { name: "Chester Alan Arthur", here: false },
    { name: "Grover Cleveland", here: false },
    { name: "Benjamin Harrison", here: false },
    { name: "Grover Cleveland", here: false },
    { name: "William McKinley", here: false },
    { name: "Theodore Roosevelt", here: false },
    { name: "William Howard Taft", here: false },
    { name: "Woodrow Wilson", here: false },
    { name: "Warren Gamaliel Harding", here: false },
    { name: "Calvin Coolidge", here: false },
    { name: "Herbert Clark Hoover", here: false },
    { name: "Franklin Delano Roosevelt", here: false },
    { name: "Harry S. Truman", here: false },
    { name: "Dwight David Eisenhower", here: false },
    { name: "John Fitzgerald Kennedy", here: false },
    { name: "Lyndon Baines Johnson", here: false },
    { name: "Richard Milhous Nixon", here: false },
    { name: "Gerald Rudolph Ford", here: false },
    { name: "James Earl Carter, Jr.", here: false },
    { name: "Ronald Wilson Reagan", here: false },
    { name: "George Herbert Walker Bush", here: false },
    { name: "William Jefferson Clinton", here: false },
    { name: "George Walker Bush", here: false },
    { name: "Barack Hussein Obama", here: false }
  ];

  factory.addStudent = function() {
    var student = {name: factory.studentName, here: false };
    factory.students.push(student);
    factory.studentName = null;
  };

  return factory;
});
