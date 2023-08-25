const contohArray = [1, "imam", 28, 2, "yoga", 20, 3, "nur", 20]

contohObj = {
  name: "",
  age: 0,
  id: 0

}

console.log(contohObj.name = contohArray[1]);
console.log(contohObj.age = contohArray[2]);
console.log(contohObj.id = contohArray[0]);


for (let i = 0; i < contohArray.length; i++) {
  if (i == 0 || i == 3 || i == 3) {
    contohObj.id = contohArray[i];
    console.log(contohObj.id)

  }

}

// 3
// masukkan data object dengan arr.push (Nirwana)
// tapi hanya masukkan data yang bernama imam, hafizh, syifa (pake IF dari hafizh no 2) ke dalam array kosong
// dari array kosong yang udah di masukkan data diatas, tapi cuman print yang age nya dibawah 28 dan id nya  (loping dan if2
let data = [];
const obj1 = { name: 'Imam', age: 28, id: 1 };
const obj2 = { name: 'Hafizh', age: 20, id: 2 };
const obj4 = { name: 'Ale', age: 22, id: 3 };
const obj5 = { name: 'Dimas', age: 23, id: 4 };
const obj6 = { name: 'Adella', age: 25, id: 5 };
const obj7 = { name: 'Syifa', age: 21, id: 6 };


// arr of object
// arr = [{ name: 'Imam', age: 28, id: 1 }]

if (obj1.name == "Imam") {
  data.push(obj1)
}

if (obj2.name == "Hafizh") {
  data.push(obj2)
}

if (obj4.name == "Syifa") {
  data.push(obj3)
}

if (obj7.name == "Syifa") {
  data.push(obj7)
}

console.log(data);
console.log(data.name);

// for (let i = 0; i < data.length; i++) {
//   console.log(i.name);


// }

for (let i = 0; i < data.length; i++) {
  if (data[i].age < 28 || data[i].id == 6) {
    console.log(data[i]);
  }
}