const resultEl = document.getElementById('result');
const firstNameEl = document.getElementById('first-name');
const middleNameEl = document.getElementById('middle-name');
const lastNameEl = document.getElementById('last-name');
const secondLastNameEl = document.getElementById('second-last-name');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  first: getRandomFirstName,
  middle: getRandomMiddleName,
  last: getRandomLastName,
  second: getRandomSecondLastName
};

generate.addEventListener('click', () => {
  const hasFirst = firstNameEl.checked;
  const hasMiddle = middleNameEl.checked;
  const hasLast = lastNameEl.checked;
  const hasSecond = secondLastNameEl.checked;

  resultEl.innerText = generateFullName(
    hasFirst,
    hasMiddle,
    hasLast,
    hasSecond
  );
});

function generateFullName(first, middle, last, second) {
  let generatedFullName = '';

  const typesCount = first + middle + last + second;

  const typesArr = [
    {
      first
    },
    {
      middle
    },
    {
      last
    },
    {
      second
    }
  ].filter(item => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; (i += typesCount); ) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatedFullName += randomFunc[funcName]();
    });
    const finalFullName = generatedFullName.slice(0);
    return finalFullName;
  }
}

//Functions
function getRandomFirstName() {
  const firstName = [
    'Liam ',
    'Noah ',
    'William ',
    'James ',
    'Oliver ',
    'Benjamin ',
    'Elijah ',
    'Lucas ',
    'Mason ',
    'Logan ',
    'Alexander ',
    'Ethan ',
    'Jacob ',
    'Michael ',
    'Daniel ',
    'Henry ',
    'Jackson ',
    'Sebastian ',
    'Aiden ',
    'Matthew '
  ];
  return firstName[Math.floor(Math.random() * firstName.length)];
}

function getRandomMiddleName() {
  const middleName = [
    'Samuel ',
    'David ',
    'Joseph ',
    'Carter ',
    'Owen ',
    'Wyatt ',
    'John ',
    'Jack ',
    'Luke ',
    'Jayden ',
    'Dylan ',
    'Grayson ',
    'Levi ',
    'Isaac ',
    'Gabriel ',
    'Julian ',
    'Mateo ',
    'Anthony ',
    'Jaxon ',
    'Lincoln '
  ];
  return middleName[Math.floor(Math.random() * middleName.length)];
}

function getRandomLastName() {
  const lastName = [
    'Smith ',
    'Johnson ',
    'Williams ',
    'Jones ',
    'Brown ',
    'Davis ',
    'Miller ',
    'Wilson ',
    'Moore ',
    'Taylor ',
    'Anderson ',
    'Thomas ',
    'Jackson ',
    'White ',
    'Harris ',
    'Martin ',
    'Thompson ',
    'Garcia ',
    'Martinez ',
    'Robinson '
  ];
  return lastName[Math.floor(Math.random() * lastName.length)];
}

function getRandomSecondLastName() {
  const secondLastName = [
    'Clark',
    'Rodriguez',
    'Lewis',
    'Walker',
    'Hall',
    'Allen',
    'Young',
    'Hernandez',
    'King',
    'Wright',
    'Lopez',
    'Hill',
    'Scott',
    'Green',
    'Adams',
    'Baker',
    'Gonzalez',
    'Nelson',
    'Carter',
    'Mitchell'
  ];
  return secondLastName[Math.floor(Math.random() * secondLastName.length)];
}
