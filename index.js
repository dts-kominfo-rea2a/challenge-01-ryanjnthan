// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const arrNama = ["Monica", "Wendy"] ;
const arrSex = ["Male", "Female"];
const arrHavePet = ["Yes", "No"];

// Monica
const warnaMonica = ["Yellow", "Pink", "White", "Purple"];
const restaurantMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];

let setColorMonica = new Set(warnaMonica);
let setRestaurantMonica = new Set(restaurantMonica);

const educationMonica = [
    { name: "SD 01", city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" },
  ];

// Wendy
const warnaWendy = ["Blue", "Black", "Grey"];
const restaurantWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

let setColorWendy = new Set(warnaWendy);
let setRestaurantWendy = new Set(restaurantWendy);

const educationWendy = [
  { name: "SD 02", city: "Jakarta", graduate: "2010" },
  { name: "SMP 03", city: "Bogor", graduate: "2013" },
  { name: "SMA 01", city: "Surabaya", graduate: "2016" },
  { name: "Universitas Maju", city: "Tangerang" },
];


const firstUser = {
    name: arrNama[0],
    gender: arrSex[0],
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [...setColorMonica],
    isHavePet: arrHavePet[0],
    education: educationMonica,
    favoriteRestaurant: [...setRestaurantMonica],
};
const secondUser = {
    name: arrNama[1],
    gender: arrSex[1],
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [...setColorWendy],
    isHavePet: arrHavePet[1],
    education: educationWendy,
    favoriteRestaurant: [...setRestaurantWendy],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};