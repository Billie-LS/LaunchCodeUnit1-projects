// Check Your Understanding
let classes = ["science, computer, art"];  // array length of 1
console.log(classes.length);
let teachers = ["Jones", "Willoughby", "Rhodes"];  // array length of 3
console.log(teachers.length);

// ways to change classes array to have the same length as teachers array
classes = ["science", "computer", "art"];  // array length of 3
console.log(classes);
console.log(classes.length);

let classes1 = ["science, computer, art"];
classes1 = classes1[0].split(',');
console.log(classes1); // Output: [ 'science', ' computer', ' art' ]

let classes2 = ["science, computer, art"];
classes2 = classes2[0].split(',').map(item => item.trim());
console.log(classes2); // Output: [ 'science', ' computer', ' art' ]

