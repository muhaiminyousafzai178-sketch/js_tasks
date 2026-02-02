// const student =["ali", "sara", "juanid", ,"muhaimin"];
// student.forEach(name => console.log(name));



// const number =[1,2,3,4,5,6,7,8,9,10];
// const evennumber = number.filter(num => num%2 === 0)
// console.log(evennumber)


// const prices = [100, 200, 300];
// const pricesWithGST = prices.map(price => price * 1.18);  
// console.log(pricesWithGST); 

// price => price * 1.18
// Ye short form hai is function ka 👇
// function(price) {
    // return price * 1.18;
// }


//   const students = [
//   { name: 'Ali', grade: 'B' },
//   { name: 'Sara', grade: 'A' },
//   { name: 'Junaid', grade: 'C' }
// ];
// const studentA = students.find(student => student.grade === 'A');
// console.log(studentA); // { name: 'Sara', grade: 'A' }



// const reverseArray = arr => arr.reverse();
// const numbers = [1, 2, 3, 4, 5];
// console.log(reverseArray(numbers)); // [5, 4, 3, 2, 1]

// Sort array of ages in ascending order 31/36
// let ages = [6,8,99,3,2,3,6,7,3,4,5,6,7,8,9];
// let ascending = ages.slice().sort((a,b)=>b-a);
// console.log(ascending);


// const numbers = [1, 2, 3, 4, 5];
// const [first, second] = numbers;
// console.log(first, second); // 1 2

// const students = [
//   { name: 'Ali', passed: true },
//   { name: 'Sara', passed: false },
//   { name: 'Junaid', passed: true }
// ];
// const hasFailed = students.some(student => !student.passed);
// console.log(hasFailed); // true


// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers); // [1, 2, 3, 4]


// 1. Create an object for a book (title, author, price)
// let book = {
//     title : "physics",
//     author : "mohaimin",
//     price : 69
// }
// console.log(book);

// 2. Access properties using both dot and bracket
// let book = {
//     title : "physics",
//     author : "mohaimin",
//     price : 69
// }
// console.log(book.author)
// console.log(book.title)

// console.log(book["author"])
// console.log(book["title"])

// 3. Write a nested object (user with address and location)
// let detail = {
//     name : "ali",
//     age : 28,
//     class : 5,
//     address : [
//         {
//           zipcode : 25000
//         }
//     ]
// }

// console.log(detail);
// console.log(detail.name);
// console.log(detail.address[0].zipcode)

// 4. Destructure name and age from a student object
//    let student = {
//     name : "ali",
//     age : 23,
//     city : "peshawar",
//     country : "pakistan"
//    }
//    const {name , age } = student;
//    console.log(name, age);

// 5. Loop through keys and values of an object
//    let marks = {
//     physics : 45,
//     chem : 67,
//     math : 56,
//     Bio : 78,
//     urdu : 76
//    }
//    for(let i in marks){
//     marks[i]+=5
//    }

//    console.log(marks)

// 6. Convert object to array using Object.entries()
    //  const obj = {
    //     name : "shayan",
    //     age : 45,
    //     city : "pesawar"
    //  }
    //  const  elements = Object.entries(obj);
    //  console.log(elements)

// 7. Copy an object using spread operator
    // let a = {
    //     eng : 56,
    //     urdu : 57,
    //     bio : 78,
    //     chem : 87
    // }

    // let b = {
    //     ...a, 
    //     isl : 45,
    //     pak : 56 }
    // console.log(b)

// 8. Create a deep copy of an object with nested structure
//    ?????

// 9. Use optional chaining to safely access deep values
// ???

//   10. Use a variable as a key using computed properties
 
//   let subject = "physics";
//   let marks = 89;

//   let obj = {
//     name : "ali",
//     [subject ] : marks
//   }

//   console.log(obj);
