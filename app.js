// let bankinh = Number(prompt("Nhập vào bán kính hình tròn"));
// Dien tich hinh tron: 3,14 * ban kinh ^2
// let dientich = 3.14 * Math.pow(bankinh, 2);
// let dientich = Math.PI * bankinh *bankinh
// let dientich = 3.14 * bankinh**2
// console.log(dientich);

// 1 Mệnh đề điều kiện
// - If... else
// - switch case
// 2 Vòng lặp for
// 3. While và do while

// 1 If... else
// Cú pháp
// if (condition -dieu kien) {
//   //logic 1
// } else {
//   //logic 2
// }
// VD1
// let a = 2;
// if (a == 2) {
//   console.log("Đây là số 2");
// } else {
//   console.log("Đây không phải là số 2");
// }
// VD 2:
// Cho người dùng nhập vào 1 số bất kỳ, kiểm tra
// số đó là chẵn hay lẻ và in ket qua man hinh
// Nếu số nhập vào là số 0 thì in ra màn hình "Đây là số 0"
// let input = Number(prompt("Nhập vào 1 số nguyên bất kỳ"));
// Cách 1: Sử dụng if...else
// if (input == 0) {
//   console.log("Đây là số 0");
// } else {
//   if (input % 2 == 0) {
//     console.log("Đây là số chẵn");
//   } else {
//     console.log("Đây là số lẻ ");
//   }
// }
// Cách 2: Sử dụng if
// if (input == 0) {
//   console.log("Đây là số 0");
// }
// if (input % 2 == 0 && input != 0) {
//   console.log("Đây là số chẵn");
// }
// if (input % 2 != 0) {
//   console.log("Đây là số lẻ");
// }
// Cách 3: Sử dụng if...elseif...else
// if (input == 0) {
//   console.log("Đây là số 0");
// } else if (input % 2 == 0) {
//   console.log("Đây là số chẵn");
// } else {
//   console.log("Đây là số lẻ ");
// }

// 2 Switch case - từ khóa break
// Cú pháp của switch case
// switch (key) {
//   case value:
//     break;
//   default:
//     break;
// }

// let month = 4;
// switch (month) {
//   case 1:
//     console.log("Đây là mùa xuân");
//     break;
//   case 2:
//     console.log("Đây là mùa xuân");
//     break;
//   case 3:
//     console.log("Đây là mùa xuân");
//     break;
//   default:
//     console.log("Đây không phải là mùa");
//     break;
// }
// Ví dụ:
// let input = Number(prompt("Nhập vào tháng bất kỳ"));
// let day = Number(prompt("Nhập vào ngày bất kỳ"));
// Mọi người sử dụng if else và switch case để kiểm tra xem đấy là mùa gì
// 1,2,3 => mùa xuân
// 4,5,6=> mùa hè
// 7,8,9=> mua thu
// 10,11,12=> mùa đông
// Cách 1: Sử dụng if else if
// if (input <= 3) {
//   console.log("Đây là mùa xuân");
// } else if (3 < input && input <= 6) {
//   console.log("Đây là mùa hè");
// } else if (6 < input && input <= 9) {
//   console.log("Đây là mùa thu");
// } else {
//   console.log("Đây là mùa đông");
// }

// Cách 2: Sử dụng switch case
// switch (input) {
//   case 1:
//     if (day < 21) {
//       console.log("Đây là cung thiên binh");
//     } else {
//       console.log("Đây không là cung thiên bình");
//     }
//   case 2:
//   case 3:
//     console.log("Đây là mùa xuân");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Đây là mùa hè");
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log("Đây là mùa thu");
//     break;
//   default:
//     console.log("Đây là mùa đông");
//     break;
// }

// Vòng lặp for
// Cú pháp
// for (điểm bắt đầu; điểm kết thúc; bước nhảy sau mỗi lần lặp) {
// }

// for (let index = 0; index < 10; index++) {
//   console.log(`Lần chạy thứ ${index + 1}: ${index}`);
// }
// Template string sử dụng dấu backtick và
//  truyền giá trị thông qua ${giá trị cần truyền}
// Ví dụ chạy vòng lặp for từ 0-10 chỉ in kết quả ra 5 lần
// Cách 1:
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
// }

// Cách 2:
// for (let i = 1; i <= 10; i = i + 2) {
//   console.log(i);
// }

// Cách 3:
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// Vòng lặp while (sử dụng khi không biết trước điều kiện lặp)
// Cú pháp
// while (condition- điều kiện) {
// logic
// }
// let a = 32;
// let state = false;
// while (state) {
//   let input = Number(prompt("Người dùng nhập vào số dự đoán"));
//   if (input > 32) {
//     alert("Số dự đoán lớn hơn");
//   } else if (input < 32) {
//     alert("Số dự đoán nhỏ hơn");
//   } else {
//     alert("BINGOOOOOO");
//     state = true;
//   }
// }
