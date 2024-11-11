// 1. Börja med att skapa en skola som ett objekt. Objektet ska existera innuti en variabel som ni namnger med skolans namn för att göra det simpel. Skolan ska innehålla egenskaperna: name, address, zipcode, city, students med värdet av en tom array och teachers som en tom array.
const developerSchool = {
  name: "Utvecklarskolan",
  address: "Utvecklargatan",
  zipcode: "22220",
  city: "Lund",
  students: [],
  teachers: [],
};

// 2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel motsvarande namnet på ämnet. Egenskaperna ska vara name, students som en tom array och teacher som ett tomt objekt.
const frontendDevelopment = {
  name: "Frontend-utveckling",
  students: [],
  teacher: {},
};

const backendDevelopment = {
  name: "Backend-utveckling",
  students: [],
  teacher: {},
};

const databaseManagement = {
  name: "Databashantering",
  students: [],
  teacher: {},
};

// 3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. Egenskaperna ska vara name, age, gender och subjects som en tom array.
const bengt = {
  name: "Bengt",
  age: "21",
  gender: "Man",
  subjects: [],
  grades: [],
};

const ulrika = {
  name: "Ulrika",
  age: "33",
  gender: "Kvinna",
  subjects: [],
  grades: [],
};

const gustaf = {
  name: "Gustaf",
  age: "37",
  gender: "Man",
  subjects: [],
  grades: [],
};

const sara = {
  name: "Sara",
  age: "26",
  gender: "Kvinna",
  subjects: [],
  grades: [],
};

const niklas = {
  name: "Niklas",
  age: "19",
  gender: "Man",
  subjects: [],
  grades: [],
};

// 4. Skapa två stycken lärare med namnet som variabel och egenskaperna name och subjects som en tom array.
const goran = {
  name: "Göran",
  subjects: [],
};

const linda = {
  name: "Linda",
  subjects: [],
};

// 5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och ämnet du valde i konsolen och inspektera dem. Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du den är komplett? Vad saknas?
goran.subjects.push(frontendDevelopment);
// #5: Push lägger till i slutet av en array och unshift i början.

console.log(goran);
console.log(frontendDevelopment);
// #5: Studenter och lärare saknas. Kopplingar. Just nu är enbart ämnet Frontend-utveckling tillagt på Göran.

// 6. Lägg till en student i ett ämnes studentarray. Skriv ut och inspektera i konsolen.
frontendDevelopment.students.push(bengt);
console.log(bengt);
console.log(frontendDevelopment);

// 7. För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här fall lägga till kopplingen i båda objekten. Alltså vi börjar med att lägga till ett ämne i en lärarens ämnesarray, och sen byter vi ut det tomma lärarobjekten i ämnet mot läraren. Då har vi en referens på båda sidorna. Egentligen är detta något som kallas för en cirkulär referens vilket vi helst vill undvika när vi programmerar, då kan orsaka krashar i vissa fall, men i syftet för uppgiften så är det ingen fara. Skapa nu en funktion som heter addSubjectToTeacher som tar emot ett ämne och en lärare, och parar ihop dessa. Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.
function addSubjectToTeacher(subject, teacher) {
  const subjectExists = teacher.subjects.includes(subject);

  if (subjectExists) {
    teacher.subjects.push(subject);
  }

  if (subject.teacher !== teacher) {
    subject.teacher = teacher;
  }

  return;
}

console.log(addSubjectToTeacher(backendDevelopment, linda));

// 8. Varför ha en fristående funktion som lägger till ämne till en lärare? Varför inte bara lägga till en funktion (alltså en metod eftersom funktionen då är kopplad till ett specifikt objekt) i lärarnas objekt som en egenskap?
goran.addSubject = function (subject) {
  const checkArray = this.subjects.includes(subject);

  if (checkArray) {
    return;
  } else {
    this.subjects.push(subject);
  }
};

linda.addSubject = function (subject) {
  const checkArray = this.subjects.includes(subject);

  if (checkArray) {
    return;
  } else {
    this.subjects.push(subject);
  }
};

// 9. Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera gånger fast på olika objekt med olika logik) och lägg in de i rätt typ av objekt: addTeacher, enlistToSubject, addStudent, addSubject
developerSchool.addTeacher = function (teacher) {
  const teacherExists = this.teachers.includes(teacher);

  if (teacherExists) {
    return;
  } else {
    this.teachers.push(teacher);
  }
};

developerSchool.addStudent = function (student) {
  const studentExists = this.students.includes(student);

  if (studentExists) {
    return;
  } else {
    this.students.push(student);
  }
};

bengt.enlistToSubject = function (subject) {
  const alreadyEnlisted = this.subjects.includes(subject);

  if (alreadyEnlisted) {
    return;
  } else {
    this.subjects.push(subject);
  }
};

ulrika.enlistToSubject = function (subject) {
  const alreadyEnlisted = this.subjects.includes(subject);

  if (alreadyEnlisted) {
    return;
  } else {
    this.subjects.push(subject);
  }
};

gustaf.enlistToSubject = function (subject) {
  const alreadyEnlisted = this.subjects.includes(subject);

  if (alreadyEnlisted) {
    return;
  } else {
    this.subjects.push(subject);
  }
};

sara.enlistToSubject = function (subject) {
  const alreadyEnlisted = this.subjects.includes(subject);

  if (alreadyEnlisted) {
    return;
  } else {
    this.subjects.push(subject);
  }
};

niklas.enlistToSubject = function (subject) {
  const alreadyEnlisted = this.subjects.includes(subject);

  if (alreadyEnlisted) {
    return;
  } else {
    this.subjects.push(subject);
  }
};

// 10. Prova att leka runt med alla de skapade metoderna i konsolen och försöka lägga till i de olika objekten. Skriv ut objekten hela tiden och inspektera dem. Kan du tänka dig någon likhet med ett riktigt adminprogram för en skola där en admin till exempel skriver ut en lista på alla ämnen för att se vilka respektive lärare som är ansvariga för respektive kurs.
// #10: Ja, jag ser tänket framför mig, liknelsen till ett administrativt program för en skola.

// 11. Skapa fler metoder, quitSubject, removeTeacher, relegateStudent, fireTeacher. I vilka objekt hör dessa metoder hemma? Och om vi till exempel sparkar en lärare, så måste vi ju ta bort lärarens koppling med skolan, och ämnet/ämnerna som läraren undervisar i. Hur löser vi detta i våra metoder, nu får vi börja tänka oss för lite.
bengt.quitSubject = function (subject) {
  const subjectExists = this.subjects.includes(subject);

  if (subjectExists) {
    const subjectIndex = this.subjects.indexOf(subject);
    this.subjects.splice(subjectIndex, 1);
  } else {
    return;
  }
};

ulrika.quitSubject = function (subject) {
  const subjectExists = this.subjects.includes(subject);

  if (subjectExists) {
    const subjectIndex = this.subjects.indexOf(subject);
    this.subjects.splice(subjectIndex, 1);
  } else {
    return;
  }
};

gustaf.quitSubject = function (subject) {
  const subjectExists = this.subjects.includes(subject);

  if (subjectExists) {
    const subjectIndex = this.subjects.indexOf(subject);
    this.subjects.splice(subjectIndex, 1);
  } else {
    return;
  }
};

sara.quitSubject = function (subject) {
  const subjectExists = this.subjects.includes(subject);

  if (subjectExists) {
    const subjectIndex = this.subjects.indexOf(subject);
    this.subjects.splice(subjectIndex, 1);
  } else {
    return;
  }
};

niklas.quitSubject = function (subject) {
  const subjectExists = this.subjects.includes(subject);

  if (subjectExists) {
    const subjectIndex = this.subjects.indexOf(subject);
    this.subjects.splice(subjectIndex, 1);
  } else {
    return;
  }
};

developerSchool.removeTeacher = function (teacher) {
  const teacherExists = this.teachers.includes(teacher);

  if (teacherExists) {
    const teacherIndex = this.teachers.indexOf(teacher);
    this.teachers.splice(teacherIndex, 1);
  } else {
    return;
  }
};

frontendDevelopment.removeTeacher = function (teacher) {
  if (this.teacher === teacher) {
    this.teacher = null;
  } else {
    return;
  }
};

backendDevelopment.removeTeacher = function (teacher) {
  if (this.teacher === teacher) {
    this.teacher = null;
  } else {
    return;
  }
};

databaseManagement.removeTeacher = function (teacher) {
  if (this.teacher === teacher) {
    this.teacher = null;
  } else {
    return;
  }
};

developerSchool.relegateStudent = function (student) {
  let studentExists = this.students.includes(student);

  if (studentExists) {
    const studentIndex = this.students.indexOf(student);
    this.students.splice(studentIndex, 1);
  }

  studentExists = frontendDevelopment.students.includes(student);

  if (studentExists) {
    const studentIndex = frontendDevelopment.students.indexOf(student);
    frontendDevelopment.students.splice(studentIndex, 1);
  }

  studentExists = backendDevelopment.students.includes(student);

  if (studentExists) {
    const studentIndex = backendDevelopment.students.indexOf(student);
    backendDevelopment.students.splice(studentIndex, 1);
  }

  studentExists = databaseManagement.students.includes(student);

  if (studentExists) {
    const studentIndex = databaseManagement.students.indexOf(student);
    databaseManagement.students.splice(studentIndex, 1);
  }
};

developerSchool.fireTeacher = function (teacher) {
  const teacherExists = this.teachers.includes(teacher);

  if (teacherExists) {
    const teacherIndex = this.teachers.indexOf(teacher);
    this.teachers.splice(teacherIndex, 1);
  }

  if (frontendDevelopment.teacher === teacher) {
    this.teacher = null;
  }

  if (backendDevelopment.teacher === teacher) {
    this.teacher = null;
  }

  if (databaseManagement.teacher === teacher) {
    this.teacher = null;
  }
};
// 11#: Vi behöver använda oss av if-satser.

// 12. Lek runt med dessa metoder i konsolen. Lägg till lite här och ta bort lite där. Rätt smidigt va?
// #12: Ja, det är smidigt.

// 13. Ny bygger vi på det lite. För att undvika att behöva anropa massa metoder i konsolen när vi startar om programmet (vilket händer vid varje redigering av script-filen) så kan vi längst ner i script-filen skapa (alltså den koden läses in sist hela tiden) logik för att koppla några studenter till skolan, några ämnen till studenterna och några lärare till ämnena och så vidare. Skapa sån logik nu.
developerSchool.addStudent(bengt);
developerSchool.addStudent(ulrika);
developerSchool.addStudent(gustaf);
developerSchool.addStudent(sara);
developerSchool.addStudent(niklas);

developerSchool.addTeacher(goran);
developerSchool.addTeacher(linda);

bengt.enlistToSubject(frontendDevelopment);
ulrika.enlistToSubject(backendDevelopment);
gustaf.enlistToSubject(databaseManagement);
sara.enlistToSubject(frontendDevelopment);
niklas.enlistToSubject(backendDevelopment);

addSubjectToTeacher(frontendDevelopment, goran);
addSubjectToTeacher(backendDevelopment, linda);
addSubjectToTeacher(databaseManagement, goran);

// 14. Skapa en funktion (OBS, en fristående funktion) , displayAllStudents som loopar igenom skolans alla studenter med hjälp av en for-loop. Tänk på att en vanlig for..of loop inte fungerar här (varför är det så?). Vi måste använda en for..IN loop, och en for..in loop låter oss loopa igenom ett objekts egenskaper (även kallad nycklar, keys) och på så sätt kunna koppa åt alla egenskaperna värde.
function displayAllStudents() {
  /*   const studentsList = [];

  for (const key in developerSchool.students) {
    studentsList.push(developerSchool.students[key]);
  }

  return studentsList; */

  return developerSchool.students;
}
// For..of loops är för arrayer, men man behöver inte använda sig av en loop här.

// 15. Skapa nu fler funktioner, displayAllSubjectsOfStudent(student), displayAllStudentsEnlistedToSubject(subject), displayAllTeachers. Varje funktion bör ha något returvärde.
function displayAllSubjectsOfStudent(student) {
  return student.subjects;
}

function displayAllStudentsEnlistedToSubject(subject) {
  return subject.students;
}

function displayAllTeachers() {
  return developerSchool.teachers;
}

// 16. Bygg ut med ett ytterligare typ av objekt, lägg till objekt som handlar om betyg. Vilka egenskaper ska dessa ha? Vilka metoder kan behövas i dessa betygsobjekt? Hur ska relationen mellan de andra objekten vara? Vilka metoder bör finnas i de andra typerna av objekt som behandlar betyg? Försöka lösa detta och inspektera och lek runt med det i konsolen.
const grades = {
  add: function (subject, student, grade) {
    student.grades.push({ subject: subject, grade: grade });
  },

  remove: function (subject, student, grade) {
    const gradeExists = student.grades.some(
      (g) => g.subject === subject && g.grade === grade
    );

    if (gradeExists) {
      const index = student.grades.findIndex(
        (g) => g.subject === subject && g.grade === grade
      );

      if (index !== -1) {
        student.grades.splice(index, 1);
      }
    }
  },

  show: function (student) {
    for (const grade of student.grades) {
      return grade;
    }
  },
};
