const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Beach = require("./models/Beach");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const beaches = [
  {
    name: "Thiruvanmiyur Beach, Chennai",
    latitude: 12.9827,
    longitude: 80.2634,
  },
  { name: "Silver Beach, Cuddalore", latitude: 11.7393, longitude: 79.7865 },
  {
    name: "Edward Elliot's Beach (Besant Nagar Beach), Chennai",
    latitude: 12.9995,
    longitude: 80.2724,
  },
];
// const beaches = [
//   { name: "Henry Island Beach", longitude: 88.2619, latitude: 21.5835 },
//   { name: "Kollam Beach", longitude: 76.5950, latitude: 8.8811 },
//   { name: "Cherai Beach", longitude: 76.1879, latitude: 10.1443 },
//   { name: "Chavakkad Beach", longitude: 76.0176, latitude: 10.5984 },
//   { name: "Fort Kochi Beach", longitude: 76.2426, latitude: 9.9685 },
//   { name: "Kanhangad Beach", longitude: 75.0647, latitude: 12.3212 },
//   { name: "Marari Beach", longitude: 76.3065, latitude: 9.6031 },
//   { name: "Meenkunnu Beach", longitude: 75.3968, latitude: 12.0090 },
//   { name: "Muzhappilangad Beach", longitude: 75.4584, latitude: 11.7753 },
//   { name: "Payyambalam Beach", longitude: 75.3564, latitude: 11.8825 },
//   { name: "Saddam Beach", longitude: 76.0722, latitude: 9.6333 },
//   { name: "Shangumughom Beach", longitude: 76.8974, latitude: 8.4782 },
//   { name: "Snehatheeram Beach", longitude: 76.0073, latitude: 10.5556 },
//   { name: "Kappil Beach Varkala", longitude: 76.7107, latitude: 8.7912 },
//   { name: "Thirumullavaram Beach", longitude: 76.5504, latitude: 8.9263 },
//   { name: "Kovalam Beach", longitude: 76.9781, latitude: 8.4006 },
//   { name: "Hawa Beach, Kovalam", longitude: 76.9783, latitude: 8.3994 },
//   { name: "Samudra Beach, Kovalam", longitude: 76.9750, latitude: 8.4035 },
//   { name: "Lighthouse Beach, Kovalam", longitude: 76.9791, latitude: 8.3965 },
//   { name: "Kannur Beach", longitude: 75.3573, latitude: 11.8750 },
//   { name: "Kappad Beach", longitude: 75.7194, latitude: 11.3810 },
//   { name: "Varkala Beach / Papanasham Beach", longitude: 76.7014, latitude: 8.7379 },
//   { name: "Padinjarekkara Beach", longitude: 75.9974, latitude: 10.7446 },
//   { name: "Tanur Beach", longitude: 75.8773, latitude: 10.9746 },
//   { name: "Azheekal Beach", longitude: 76.3435, latitude: 9.2594 },
//   { name: "Alappuzha Beach", longitude: 76.3143, latitude: 9.4969 },
//   { name: "Kozhikode Beach", longitude: 75.7754, latitude: 11.2588 },
//   { name: "Bekal Beach", longitude: 75.0360, latitude: 12.3996 },
//   { name: "Thiruvambadi Beach", longitude: 76.7070, latitude: 8.7371 },

// ];
// const beaches = [
//   {
//     name: "Sonpur Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Donkuru Beach",
//     imageUrl:
//       "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Nelavanka Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Kaviti Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Onturu Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI1xIkfu-ZQvXBEjebXjQGK4ZvR4eGRuLdw&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Ramayyapatnam Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI1xIkfu-ZQvXBEjebXjQGK4ZvR4eGRuLdw&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Baruva Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUq5rg5iOIpFdmK2DoDmV_d1FsaDZr3gCwg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Battigalluru Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NcQhV1uRUorEhgPu2MMRdfUagRdcl55meg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Sirmamidi Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Ratti Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvMjRYNuuEX20_P7w-TXwb1tHSSipx9rsvA&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Shivasagar Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI1xIkfu-ZQvXBEjebXjQGK4ZvR4eGRuLdw&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Dokulapadu Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Nuvvalarevu Beach",
//     imageUrl:
//       "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "KR Peta Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Bavanapadu Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NcQhV1uRUorEhgPu2MMRdfUagRdcl55meg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Mula Peta Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "BVS Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiPHh7kLCcHVlwOwIRmxjmkMjfG5opaTI0A&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Patha Meghavaram Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Guppidipeta Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Kotharevu Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvMjRYNuuEX20_P7w-TXwb1tHSSipx9rsvA&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Rajaram Puram Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Kalingapatnam Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUq5rg5iOIpFdmK2DoDmV_d1FsaDZr3gCwg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Bandaruvanipeta Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI1xIkfu-ZQvXBEjebXjQGK4ZvR4eGRuLdw&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Mogadalapadu Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNNmPKFLvxnSSX4uOAO5O3Bkg4NbmLD1E1w&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Vatsavalasa Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "S. Matchelesam Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Balarampuram Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiPHh7kLCcHVlwOwIRmxjmkMjfG5opaTI0A&s",
//     longitude: 0.0,
//     latitude: 0.0,
//   },
//   {
//     name: "Kunduvanipeta Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     longitude: 0.0,
//     latitude: 0.0,
//

// const beaches = [
//   { name: "Puri Sea Beach at Sunrise", longitude: 85.8249, latitude: 19.7983 },
//   { name: "Talsari Beach", longitude: 87.2717, latitude: 21.3548 },
//   { name: "Dagara Beach", longitude: 87.0952, latitude: 21.4862 },
//   { name: "Chandipur-on-Sea", longitude: 87.0149, latitude: 21.4399 },
//   { name: "Gahirmatha Beach", longitude: 86.2700, latitude: 20.2375 },
//   { name: "Satabhaya Beach", longitude: 86.9308, latitude: 20.6353 },
//   { name: "Pentha Sea Beach", longitude: 86.8000, latitude: 20.4167 },
//   { name: "Hukitola Beach", longitude: 86.7000, latitude: 20.3500 },
//   { name: "Paradeep Sea Beach", longitude: 86.6114, latitude: 20.3166 },
//   { name: "Astaranga Beach", longitude: 86.2694, latitude: 19.9795 },
//   { name: "Beleswar Beach", longitude: 85.9406, latitude: 19.8317 },
//   { name: "Konark Beach", longitude: 86.0941, latitude: 19.8876 },
//   { name: "Chandrabhaga Beach", longitude: 86.1122, latitude: 19.8653 },
//   { name: "Ramachandi Beach", longitude: 86.0860, latitude: 19.8950 },
//   { name: "Puri Beach", longitude: 85.8249, latitude: 19.7983 },
//   { name: "Satpada Beach", longitude: 85.4800, latitude: 19.7000 },
//   { name: "Parikud Beach", longitude: 85.4912, latitude: 19.6730 },
//   { name: "Ganjam Beach", longitude: 85.0671, latitude: 19.3775 },
//   { name: "Aryapalli Beach", longitude: 84.8032, latitude: 19.1894 },
//   { name: "Gopalpur-on-Sea", longitude: 84.9054, latitude: 19.2583 },
//   { name: "Dhabaleshwar Beach", longitude: 85.8194, latitude: 20.3487 },
//   { name: "Ramayapatnam Beach", longitude: 80.0597, latitude: 15.0244 }, // Note: Actually in Andhra Pradesh
//   { name: "Sonapur Beach", longitude: 84.6000, latitude: 18.9000 }
// ];

// const beaches = [
//   { name: "Sonpur Beach", latitude: 18.8800, longitude: 84.4100 },
//   { name: "Donkuru Beach", latitude: 18.7700, longitude: 84.3000 },
//   { name: "Nelavanka Beach", latitude: 18.7500, longitude: 84.2900 },
//   { name: "Kaviti Beach", latitude: 18.8700, longitude: 84.4600 },
//   { name: "Onturu Beach", latitude: 18.8100, longitude: 84.4000 },
//   { name: "Ramayyapatnam Beach", latitude: 15.1833, longitude: 80.0500 },
//   { name: "Baruva Beach", latitude: 18.5333, longitude: 84.3500 },
//   { name: "Battigalluru Beach", latitude: 18.7800, longitude: 84.3800 },
//   { name: "Sirmamidi Beach", latitude: 18.7900, longitude: 84.3900 },
//   { name: "Ratti Beach", latitude: 18.7600, longitude: 84.3200 },
//   { name: "Shivasagar Beach", latitude: 18.7700, longitude: 84.3100 },
//   { name: "Dokulapadu Beach", latitude: 18.8000, longitude: 84.3300 },
//   { name: "Nuvvalarevu Beach", latitude: 18.8200, longitude: 84.3400 },
//   { name: "KR Peta Beach", latitude: 18.7600, longitude: 84.3500 },
//   { name: "Bavanapadu Beach", latitude: 18.3000, longitude: 84.2167 },
//   { name: "Mula Peta Beach", latitude: 18.2700, longitude: 84.2100 },
//   { name: "BVS Beach", latitude: 18.2400, longitude: 84.2000 },
//   { name: "Patha Meghavaram Beach", latitude: 18.2900, longitude: 84.2200 },
//   { name: "Guppidipeta Beach", latitude: 18.2500, longitude: 84.1800 },
//   { name: "Kotharevu Beach", latitude: 18.2200, longitude: 84.1700 },
//   { name: "Rajaram Puram Beach", latitude: 18.1900, longitude: 84.1600 },
//   { name: "Kalingapatnam Beach", latitude: 18.3333, longitude: 84.1333 },
//   { name: "Bandaruvanipeta Beach", latitude: 18.3100, longitude: 84.1400 },
//   { name: "Mogadalapadu Beach", latitude: 18.2800, longitude: 84.1300 },
//   { name: "Vatsavalasa Beach", latitude: 18.2700, longitude: 84.1200 },
//   { name: "S. Matchelesam Beach", latitude: 18.2600, longitude: 84.1100 },
//   { name: "Balarampuram Beach", latitude: 18.2500, longitude: 84.1000 },
//   { name: "Kunduvanipeta Beach", latitude: 18.2400, longitude: 84.0900 },
//   { name: "PD Palem Beach", latitude: 18.2300, longitude: 84.0800 },
//   { name: "Budagatlapalem Beach", latitude: 18.2200, longitude: 84.0700 },
//   { name: "Kotcherla Beach", latitude: 18.2100, longitude: 84.0600 },
//   { name: "Jeerupalem Beach", latitude: 18.2000, longitude: 84.0500 },
//   { name: "Kovvada Beach", latitude: 17.3833, longitude: 82.6333 },
//   { name: "Pothayyapeta Beach", latitude: 17.3600, longitude: 82.6200 },
//   { name: "Chintapalli NGF Beach", latitude: 17.3400, longitude: 82.6000 },
//   { name: "Chintapalli Beach", latitude: 17.3333, longitude: 82.5833 },
//   { name: "Tammayyapalem Beach", latitude: 17.3167, longitude: 82.5700 },
//   { name: "Konada Beach", latitude: 18.0833, longitude: 83.4333 },
//   { name: "Divis Beach", latitude: 17.6167, longitude: 83.1333 },
//   { name: "Bheemili Beach", latitude: 17.8900, longitude: 83.4525 },
//   { name: "Mangamaripeta Beach", latitude: 17.8200, longitude: 83.3900 },
//   { name: "Thotlakonda Beach", latitude: 17.8100, longitude: 83.3900 }, { name: "Rushikonda Beach", latitude: 17.7936, longitude: 83.3853 },
//   { name: "Sagarnagar Beach", latitude: 17.7461, longitude: 83.3825 },
//   { name: "Jodugullapalem Beach", latitude: 17.7333, longitude: 83.3333 },
//   { name: "RK Beach", latitude: 17.7143, longitude: 83.3237 },
//   { name: "Durga Beach", latitude: 17.7000, longitude: 83.3000 },
//   { name: "Yarada Beach", latitude: 17.6519, longitude: 83.2778 },
//   { name: "Gagavaram Beach", latitude: 17.6500, longitude: 83.2667 },
//   { name: "Adi's Beach", latitude: 17.6200, longitude: 83.2500 },
//   { name: "Appikonda Beach", latitude: 17.6167, longitude: 83.1333 },
//   { name: "Tikkavanipalem Beach", latitude: 17.6000, longitude: 83.2333 },
//   { name: "Mutyalammapalem Beach", latitude: 17.5800, longitude: 83.2167 },
//   { name: "Thanthadi Beach", latitude: 17.5600, longitude: 83.2000 },
//   { name: "Seethapalem Beach", latitude: 17.5400, longitude: 83.1833 },
//   { name: "Rambilli Beach", latitude: 17.5200, longitude: 83.1667 },
//   { name: "Kothapatnam Beach", latitude: 15.3333, longitude: 80.1500 },
//   { name: "Revupolavaram Beach", latitude: 17.5000, longitude: 83.1500 },
//   { name: "Gudivada Beach", latitude: 17.4800, longitude: 83.1333 },
//   { name: "Gurrajupeta Beach", latitude: 17.4600, longitude: 83.1167 },
//   { name: "Pedhatheenarla Beach", latitude: 17.4400, longitude: 83.1000 },
//   { name: "Rajjyapeta Beach", latitude: 17.4200, longitude: 83.0833 },
//   { name: "Boyapadu Beach", latitude: 17.4000, longitude: 83.0667 },
//   { name: "DLPuram Beach", latitude: 17.3800, longitude: 83.0500 },
//   { name: "Pentakota Beach", latitude: 17.3600, longitude: 83.0333 },
//   { name: "Rajavaram Beach", latitude: 17.3400, longitude: 83.0167 },
//   { name: "Addaripeta Beach", latitude: 17.3200, longitude: 83.0000 },
//   { name: "Danvaipeta Beach", latitude: 17.3000, longitude: 82.9833 },
//   { name: "Gaddipeta Beach", latitude: 17.2800, longitude: 82.9667 },
//   { name: "K. Perumallapuram Beach", latitude: 17.2600, longitude: 82.9500 },
//   { name: "Konapapapeta Beach", latitude: 17.2400, longitude: 82.9333 },
//   { name: "Uppada Beach", latitude: 17.0833, longitude: 82.2833 },
//   { name: "Nemam Beach", latitude: 17.2200, longitude: 82.9167 },
//   { name: "NTR Beach", latitude: 17.2000, longitude: 82.9000 },
//   { name: "Seahorse Beach", latitude: 17.1800, longitude: 82.8833 },
//   { name: "Dragonmouth Beach", latitude: 17.1600, longitude: 82.8667 },
//   { name: "Pallam Beach", latitude: 17.1400, longitude: 82.8500 },
//   { name: "Sunrise Beach", latitude: 17.1200, longitude: 82.8333 },
//   { name: "Surasani Yanam Beach", latitude: 17.1000, longitude: 82.8167 },
//   { name: "Vasalatippa Beach", latitude: 17.0800, longitude: 82.8000 },
//   { name: "Odalarevu Beach", latitude: 17.0600, longitude: 82.7833 },
//   { name: "Turpupalem Beach", latitude: 17.0400, longitude: 82.7667 },{ name: "Kesanapalli Beach", latitude: 16.45195, longitude: 81.85785 },
//   { name: "Shankaraguptham Beach", latitude: 16.3915461, longitude: 81.8524752 },
//   { name: "Chintalamori Beach", latitude: 16.38266, longitude: 81.82475 },
//   { name: "Natural Beach", latitude: 16.3500, longitude: 81.8100 }, // approximate
//   { name: "KDP Beach", latitude: 16.3600, longitude: 81.8000 }, // approximate
//   { name: "Antervedi Beach", latitude: 16.320014, longitude: 81.736465 },
//   { name: "Pedamainavanilanka Beach", latitude: 16.3040, longitude: 81.7150 }, // approximate
//   { name: "Perupalem Beach", latitude: 16.3775089, longitude: 81.5706019 },
//   { name: "Kanakadurga Beach", latitude: 16.5160, longitude: 80.6320 }, // likely in Vijayawada
//   { name: "Gollapalem Beach", latitude: 16.8542039, longitude: 82.1686338 },
//   { name: "Podu Beach", latitude: 16.8600, longitude: 82.1600 }, // approximate
//   { name: "Pedapatnam Beach", latitude: 16.1234, longitude: 81.12305 },
//   { name: "Modi Beach", latitude: 19.365025, longitude: 79.293079 },
//   { name: "Tallapalem Beach", latitude: 17.6349228, longitude: 82.8947056 },
//   { name: "Manginapudi Beach", latitude: 16.244829, longitude: 81.2375879 },  { name: "Crab Beach", latitude: 16.1900, longitude: 81.1300 }, // Approximate coordinates based on proximity to Machilipatnam
//   { name: "Gopuvanipalem Beach", latitude: 16.3783, longitude: 80.87275 },
//   { name: "Lonely Beach", latitude: 16.1900, longitude: 81.1300 }, // Approximate coordinates based on proximity to Machilipatnam
//   { name: "Chinakaragraharam Beach", latitude: 16.1900, longitude: 81.1300 }, // Approximate coordinates based on proximity to Machilipatnam
//   { name: "Destiny Beach", latitude: 16.1900, longitude: 81.1300 }, // Approximate coordinates based on proximity to Machilipatnam
//   { name: "Machilipatnam Beach", latitude: 16.1700, longitude: 81.1300 },
//   { name: "Hamsaladeevi Beach", latitude: 15.9915758, longitude: 81.0950629 },
//   { name: "Diviseema Beach", latitude: 15.7700, longitude: 80.9400 }, // Approximate center of Diviseema region
//   { name: "Dindi Beach", latitude: 16.4833, longitude: 81.7333 }, // Approximate coordinates for Dindi area
//   { name: "Nizampatnam Beach", latitude: 15.905502, longitude: 80.668243 },
//   { name: "Suryalanka Beach", latitude: 15.8345, longitude: 80.5051 },
//   { name: "Pandurangapuram Beach", latitude: 16.1900, longitude: 81.1300 }, // Approximate coordinates based on proximity to Machilipatnam
//   { name: "Vodarevu Beach", latitude: 15.7956, longitude: 80.4142 },
//   { name: "Ramachandrapuram Beach", latitude: 16.83636, longitude: 82.02871 },
//   { name: "Motupalli Beach", latitude: 15.77135, longitude: 80.3062 },
//   { name: "Chinaganjam Beach", latitude: 15.7000, longitude: 80.2500 }, // Coordinates for Chinaganjam town
//   { name: "Pedaganjam Beach", latitude: 15.6675, longitude: 80.15205 },
//   { name: "Kanapurthi Beach", latitude: 15.5808, longitude: 80.2119 }, // Coordinates for Kanuparthi village
//   { name: "Kodurivaripalem Beach", latitude: 15.5808, longitude: 80.2119 }, // Approximate coordinates based on proximity to Kanuparthi Beach
//   { name: "Katamvaripalem Beach", latitude: 15.6675, longitude: 80.15205 }, // Same as Pedaganjam
//   { name: "Kanuparthi Beach", latitude: 15.5808, longitude: 80.2119 },
//   { name: "Motumala Beach", latitude: 15.4833, longitude: 80.2000 }, // Approximate coordinates for Motumala village
//   { name: "Pinnivaripalem Beach", latitude: 15.4667, longitude: 80.1000 }, // Coordinates for Kothapatnam village
//   { name: "Kothapatnam Beach", latitude: 15.4667, longitude: 80.1000 } , { name: "Govundlapalem Beach", latitude: 14.6317, longitude: 80.1417 },
//   { name: "Rajupalem Beach", latitude: 14.1167, longitude: 79.6833 },
//   { name: "Etthamukhala Beach", latitude: 15.5057342, longitude: 80.049911 },
//   { name: "Madanur Beach", latitude: 15.3465, longitude: 80.10168 },
//   { name: "White Sand Beach", latitude: 15.1500, longitude: 80.0200 }, // Approx near Singarayakonda coast
//   { name: "Pakka Beach", latitude: 15.1900, longitude: 80.1000 }, // Approx near Ramayapatnam/Pallepalem
//   { name: "Pakala Beach", latitude: 13.44903, longitude: 79.11493 },
//   { name: "Ullapalem Beach", latitude: 15.2333, longitude: 80.0667 },
//   { name: "Pedda Pallepalem Beach", latitude: 15.1750, longitude: 80.0550 }, // Approx between Ramayapatnam & Pallepalem
//   { name: "Karedu Beach", latitude: 15.1877594, longitude: 80.0604774 },
//   { name: "G-Star Shiv Beach", latitude: 15.3500, longitude: 80.1100 }, // Near Madanur/Pallepalem
//   { name: "Shiv Satendra Prajapati Beach", latitude: 15.3450, longitude: 80.1150 }, // Near Madanur
//   { name: "Alagayapalem Beach", latitude: 15.2667, longitude: 80.0667 },
//   { name: "Chakicherla Beach", latitude: 15.1000, longitude: 80.0500 },
//   { name: "Ramayapattanam Public Beach", latitude: 15.2167, longitude: 80.1167 },
//   { name: "Karla Palem Beach", latitude: 15.2167, longitude: 80.1167 },
//   { name: "SSR Port Beach", latitude: 15.2170, longitude: 80.1200 }, // Near Ramayapatnam port
//   { name: "Pallipalem Public Beach", latitude: 15.81671, longitude: 80.34999 },
//   { name: "Kotha Sathram Beach", latitude: 15.1700, longitude: 80.0300 }, // Approx near Prakasam coast
//   { name: "Pedaramudu Palem Beach", latitude: 15.1600, longitude: 80.0450 }, // Near Ramayapatnam zone
//   { name: "Chinnaramudu Palem Beach", latitude: 15.1630, longitude: 80.0420 }, // Near Ramayapatnam zone
//   { name: "Thummalapenta Beach", latitude: 14.9167, longitude: 79.9833 },
//   { name: "Thatichetla Palem Beach", latitude: 14.9167, longitude: 79.9833 },  { name: "LN Puram Beach", latitude: 14.5000, longitude: 80.1500 }, // Approximate location near Ramathirdamu Beach
//   { name: "Iskapalli Beach", latitude: 14.9167, longitude: 80.1167 },
//   { name: "Ponnapudi Beach", latitude: 14.5000, longitude: 80.1500 }, // Approximate location near Ramathirdamu Beach
//   { name: "Ramathirdamu Beach", latitude: 14.5000, longitude: 80.1500 },
//   { name: "Govundlapalem Beach", latitude: 14.6317, longitude: 80.1417 },
//   { name: "Kudithipalem Beach", latitude: 14.5059, longitude: 80.1694 },
//   { name: "Gangapatnam Beach", latitude: 14.5325, longitude: 80.1803 },
//   { name: "Mypadu Beach", latitude: 14.5068, longitude: 80.1788 },
//   { name: "Zard Beach", latitude: 14.5059, longitude: 80.1694 }, // Same as Kudithipalem Beach
//   { name: "Kotha Koduru Beach", latitude: 14.4292, longitude: 80.1722 },
//   { name: "Koduru Beach", latitude: 14.4292, longitude: 80.1722 }, // Same as Kotha Koduru Beach
//   { name: "Katepalli Beach", latitude: 14.9107, longitude: 79.6072 },
//   { name: "Nelaturu Beach", latitude: 14.5000, longitude: 80.1500 }, // Approximate location near Ramathirdamu Beach
//   { name: "Krishnapatnam Beach", latitude: 14.2830, longitude: 80.1170 },
//   { name: "Theegapalem Beach", latitude: 14.5000, longitude: 80.1500 }, // Approximate location near Ramathirdamu Beach
//   { name: "Srinivasa Satram Beach", latitude: 14.2500, longitude: 80.1000 }, // Approximate location near Krishnapatnam
//   { name: "Pattapupalem Beach", latitude: 14.9472, longitude: 80.0611 }, // Coordinates for Pattapupalem village
//   { name: "Moonside Beach", latitude: 14.5000, longitude: 80.1500 }, // Approximate location near Ramathirdamu Beach
//   { name: "Thupilipalem Beach", latitude: 14.5000, longitude: 80.1500 }, // Approximate location near Ramathirdamu Beach
//   { name: "Kondurpalem Beach", latitude: 14.0167, longitude: 80.1167 }, // Approximate location near Kondur village
//   { name: "Alone Beach", latitude: 14.5000, longitude: 80.1500 }, // Approximate location near Ramathirdamu Beach
//   { name: "Raviguntapalem Beach", latitude: 13.9834, longitude: 80.1159 },
//   { name: "Nawabpet Beach", latitude: 14.5000, longitude: 80.1500 } // Approximate location near Ramathirdamu Beach
// ];

// const beaches = [
//   { name: "Marina Beach, Chennai", latitude: 13.0542, longitude: 80.2837 },
//   { name: "Edward Elliot's Beach, Chennai", latitude: 12.9981, longitude: 80.2708 },
//   { name: "Kasimedu's N4 Beach, Chennai", latitude: 13.1290, longitude: 80.2930 },
//   { name: "Golden Beach, Chennai", latitude: 12.9131, longitude: 80.2528 },
//   { name: "Thiruvanmiyur Beach, Chennai", latitude: 12.9827, longitude: 80.2634 },
//   { name: "Silver Beach, Cuddalore", latitude: 11.7500, longitude: 79.7500 },
//   { name: "Covelong Beach, Chennai", latitude: 12.7896, longitude: 80.2542 },
//   { name: "Mahabalipuram Beach", latitude: 12.6269, longitude: 80.1920 },
//   { name: "Olaikuda Beach, Rameswaram", latitude: 9.2876, longitude: 79.3129 },
//   { name: "Ariyaman Beach (Kushi Beach), Rameswaram", latitude: 9.3500, longitude: 79.2300 },
//   { name: "Pamban Beach, Rameswaram", latitude: 9.2741, longitude: 79.2911 },
//   { name: "Dhanushkodi Beach", latitude: 9.1825, longitude: 79.4033 },
//   { name: "Velankanni Beach", latitude: 10.6833, longitude: 79.8333 },
//   { name: "Sothavilai Beach, Kanyakumari", latitude: 8.0833, longitude: 77.5500 },
//   { name: "Kanyakumari Beach", latitude: 8.0883, longitude: 77.5385 },
//   { name: "Vattakotai Beach, Kanyakumari", latitude: 8.0900, longitude: 77.5700 },
//   { name: "Sanguthurai Beach, Kanyakumari", latitude: 8.1333, longitude: 77.5000 },
//   { name: "Sengumal Beach", latitude: 8.6510, longitude: 78.1360 }, // Approximated
//   { name: "Thoothukudi Beach (Tuticorin Beach)", latitude: 8.8050, longitude: 78.1490 },
//   { name: "Tiruchendur Beach", latitude: 8.4970, longitude: 78.1230 },
//   { name: "Poompuhar Beach", latitude: 11.1443, longitude: 79.8550 }
// ];

const updateBeaches = async () => {
  try {
    console.log("Updating beach records...");

    for (const beach of beaches) {
      const existingBeach = await Beach.findOne({ name: beach.name });

      if (existingBeach) {
        existingBeach.latitude = beach.latitude;
        existingBeach.longitude = beach.longitude;
        existingBeach.description = `${beach.name} is a beautiful beach.`;
        await existingBeach.save();
        console.log(`Updated: ${beach.name}`);
      } else {
        await Beach.create({
          name: beach.name,
          latitude: beach.latitude,
          longitude: beach.longitude,
          description: `${beach.name} is a famous beach.`,
        });
        console.log(`Added: ${beach.name}`);
      }
    }

    console.log("Beach records updated successfully!");
  } catch (error) {
    console.error("Error updating beach records:", error);
  } finally {
    mongoose.disconnect();
  }
};

updateBeaches();
