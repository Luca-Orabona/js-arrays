const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [...teachers].reverse(); // questo modo mi permette di mantenere il teachers originale uguale
console.log(reversedTeachers);
console.log(teachers);

const reversedTeachers2 = teachers.reverse(); // questo modo mi cambia anche il teachers originale
console.log(reversedTeachers2);
console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const longNames = teachers[i]
  if (longNames.length >= 5) {
    
    console.log(longNames);
  }
}

// 3. Rimuovi 'Ed' dall'array teachers

for (let i = 0; i < teachers.length; i++) {
  let element = teachers[i];
  if (element !== "Ed") {
    console.log(element);
  }
}