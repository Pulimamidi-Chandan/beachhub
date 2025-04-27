const mongoose = require("mongoose");
const Beach = require("./models/Beach"); // Ensure the correct path

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://pragnan:pragnan@cluster0.bje9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
// const batchone = [
//   { name: "Marina Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLQKEVFLDmIxxB3KPWuQs7gkeVNzX172mNw&s" },
//   { name: "Edward Elliot's Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiAP8DcoldFK5T1SDD6Rv9kyiRDrqwIuwRg&s" },
//   { name: "Kasimedu's N4 Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNXBs8ZoHixDvrLlKW4qBq0pd6x-flOFluA&s" },
//   { name: "Golden Beach, Chennai", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZlgnWlbxf1_A9eMLWhceLVSupmxkEAHrew&s" },
//   { name: "Thiruvanmayur Beach, Chennai", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wkdOpFwfXv9JQOn8fkFIFfaK1_jlDv2h5g&s" },
//   { name: "Silver Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6tuEwCRW-NGRDu8sKcxw0uLnAlxF60oZEQ&s" },
//   { name: "Covelong Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4JQPy-HQ_12x-96t0l-6iZugTxbz0hk4kw&s" },
//   { name: "Mahabalipuram Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5TcJje_NpBTHmX5DZafOBLvQLBduXQyYVw&s" },
//   { name: "Olaikuda Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwjppkVQizczp4uZQ3ltYFA78bU8MZhiELg&s" },
//   { name: "Ariyaman/Kushi Beach, Rameswaram", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpnBlO4tP_6vRt__mux_15fQ8aWT2g0n9aA&s" },
//   { name: "Pamban Beach, Rameswaram", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJ53tw9OKYHbmdH-95MQUfB8PagTAm1bN7w&s" },
//   { name: "Dhanushkodi Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06rlVLZcUVbA3BhopePuRTDeLOrfHLGv8aw&s" },
//   { name: "Velankanni Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzjshjNvblj2I8Fs6-rIsR-t6dTK9r3zJsPg&s" },
//   { name: "Sothavilai Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdc9oxjuAwFOS0MUTsJfJmtTX72RlyvSxvtA&s" },
//   { name: "Kanyakumari Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51dNj9vOeAh4uHwBaiM8XDV2JvrG9m653Qg&s" },
//   { name: "Vattakotai Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDXZKwZvpQ2-DJ7OmpOQpDWaPmjUk70meUA&s " },
//   { name: "Sanguthurai Beach", imageUrl: "https://kanyakumaritourism.in/images//tourist-places/sanguthurai-beach-kanyakumari/sanguthurai-beach-kanyakumari-india-tourism-history.jpg" },
//   { name: "Sengumal Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIPLB08R064-C3b4h8kb_JuEk52SRPAfoyw&s" },
//   { name: "Thoothukudi Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3dYSLqp9gBtdldbknZNhjSpE3DKxnb7o8A&s" },
//   { name: "Tiruchendur Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYddcgLF-Cx5vEiUCGxDbawWvU15TPiw_Ng&s" },
//   { name: "Poompuhar Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMSqoZPLgsN2Z_eqcvDEXkL_eNFvDIQw4_w&s" }
// ];
// List of beaches with their corresponding image URLs
// const beachesWithImages = [
//         {
//           name: "Palolem Beach",
//           imageUrl:
//             "https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp",
//         },
//         {
//           name: "Agonda Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4W28PYTqeYEW2vUzuKiGA_7u_FQs0KzW3uw&s",
//         },
//         {
//           name: "Arambol Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzED57YeJawO9ErXLNn5ulEPTMghNGifeRg&s",
//         },
//         {
//           name: "Benaulim Beach",
//           imageUrl:
//             "https://www.goa.gov.in/wp-content/uploads/2016/05/benaulim_beach_main.jpg",
//         },
//         {
//           name: "Cavelossim Beach",
//           imageUrl:
//             "https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Cavelossim-beach_result-1657098323905.webp",
//         },
//         {
//           name: "Chapora Beach",
//           imageUrl:
//             "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ef/82/a8/chapora-beach-view-from.jpg?w=900&h=500&s=1",
//         },
//         {
//           name: "Mandrem Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PhML-vWcXY5Qa9qyrrVmjOeZVCb_NX1_tQ&s",
//         },
//         {
//           name: "Varca Beach",
//           imageUrl:
//             "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/e1/ba/38/varca-beaxh-sunset-time.jpg?w=1200&h=-1&s=1",
//         },
//         {
//           name: "Baga Beach",
//           imageUrl:
//             "https://s7ap1.scene7.com/is/image/incredibleindia/baga-beach-goa-goa-baga-beach-3-attr-hero?qlt=82&ts=1726735629751",
//         },
//         {
//           name: "Candolim Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4W28PYTqeYEW2vUzuKiGA_7u_FQs0KzW3uw&s",
//         },
//         {
//           name: "Calangute Beach",
//           imageUrl:
//             "https://s7ap1.scene7.com/is/image/incredibleindia/calangute-beach-goa-7-musthead-hero?qlt=82&ts=1726735078814",
//         },
//         {
//           name: "Colva Beach",
//           imageUrl: "https://www.goa.gov.in/wp-content/uploads/2020/08/Colva_1.jpg",
//         },
//         {
//           name: "Miramar Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5fuGkjIiyuy-7sRrIKI85sx66BlIXo-EMA&s",
//         },
//         {
//           name: "Morjim Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4W28PYTqeYEW2vUzuKiGA_7u_FQs0KzW3uw&s",
//         },
//         {
//           name: "Bambolim Beach",
//           imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d4/05/8e/img-20180121-wa0016-largejpg.jpg?w=1200&h=1200&s=1",
//         },
//         {
//           name: "Cabo de Rama Beach",
//           imageUrl: "https://travelentice.com/wp-content/uploads/2022/01/Cabo-de-Rama-Fort-and-Beach-Uncover-the-Unexplored-Gem-of-Goa.jpg",
//         },
//         {
//           name: "Anjuna Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5fuGkjIiyuy-7sRrIKI85sx66BlIXo-EMA&s",
//         },
//         {
//           name: "Utorda Beach",
//           imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/89/48/2e/20190218-102659-effects.jpg?w=900&h=500&s=1",
//         },
//         {
//           name: "Majorda Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrBgn1e1YcFUry20g9HI-KZmYH_YUI-xC6g&s",
//         },
//         {
//           name: "Betalbatim Beach",
//           imageUrl: "https://static.toiimg.com/thumb/msid-82284379,width-1070,height-580,resizemode-75,imgsize-82284379,pt-32,y_pad-40/82284379.jpg",
//         },
//         {
//           name: "Sernabatim Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUvGserLzbxxvBqBjZKtzQqDWVRiz3ijX0g&s",
//         },
//         {
//           name: "Mobor Beach",
//           imageUrl:
//             "https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp",
//         },
//         {
//           name: "Betul Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5fuGkjIiyuy-7sRrIKI85sx66BlIXo-EMA&s",
//         },
//         {
//           name: "Querim Beach",
//           imageUrl: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/123000/123906-Goa.jpg",
//         },
//         {
//           name: "Kalacha Beach",
//           imageUrl: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68249-Kalacha-Beach.jpg",
//         },
//         {
//           name: "Ashvem Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4W28PYTqeYEW2vUzuKiGA_7u_FQs0KzW3uw&s",
//         },
//         {
//           name: "Vagator Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLdmrAGHf-p_-VwcL1LicSk5ojut5GoMHZQ&s",
//         },
//         {
//           name: "Ozran Beach",
//           imageUrl: "https://goa-tourism.org.in/images/places-to-visit/headers/velsao-beach-goa-entry-fee-timings-holidays-reviews-header.jpg",
//         },
//         {
//           name: "Sinquerim Beach",
//           imageUrl: "https://www.seawatersports.com/images/places/hollant-beach.jpg",
//         },
//         { name: "Coco Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQYy-4mI74YutG3BszX8vmuxNY8GO-KJVnA&s" },
//         {
//           name: "Kegdole Beach",
//           imageUrl: "https://mediaim.expedia.com/destination/2/8ffae58aca0d6b00ff89ad21ef61d443.jpg",
//         },
//         {
//           name: "Caranzalem Beach",
//           imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ac/a8/ee/photo1jpg.jpg?w=900&h=500&s=1",
//         },
//         {
//           name: "Dona Paula Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtoCSDWMWEBYcx5JyBjRj8Q2NKeATSW3WGQ&s",
//         },
//         {
//           name: "Vaiguinim Beach",
//           imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/fe/0b/db/photo8jpg.jpg?w=900&h=500&s=1",
//         },
//         {
//           name: "Siridao Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrBgn1e1YcFUry20g9HI-KZmYH_YUI-xC6g&s",
//         },
//         {
//           name: "Bogmalo Beach",
//           imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/21168181.jpg?k=ac5016fc38af94c7e0be93b95d943604355205ba4aa45ea07decb8999e4a8bc7&o=&hp=1",
//         },
//         {
//           name: "Baina Beach",
//           imageUrl: "https://goa-tourism.org.in/images/places-to-visit/headers/baina-beach-goa-entry-fee-timings-holidays-reviews-header.jpg",
//         },
//         {
//           name: "Hansa Beach",
//           imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/40/b3/c4/hansa-beach.jpg?w=900&h=-1&s=1",
//         },
//         {
//           name: "Hollant Beach",
//           imageUrl: "https://www.seawatersports.com/images/places/hollant-beach.jpg",
//         },
//         {
//           name: "Cansaulim Beach",
//           imageUrl: "https://goa-tourism.org.in/images/places-to-visit/headers/cansaulim-beach-goa-entry-fee-timings-holidays-reviews-header.jpg",
//         },
//         {
//           name: "Velsao Beach",
//           imageUrl: "https://goa-tourism.org.in/images/places-to-visit/headers/velsao-beach-goa-entry-fee-timings-holidays-reviews-header.jpg",
//         },
//         {
//           name: "Canaiguinim Beach",
//           imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d4/d6/8b/vista-general-de-la-playa.jpg?w=900&h=500&s=1",
//         },
//         {
//           name: "Kakolem Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_k0FOklgoyTenOPuLSaTJ1QhBf_8wKGYxQ&s",
//         },
//         {
//           name: "Dharvalem Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HZ9jMcVQaDhYTZbbxAIVNvMtJfHvj7Lp_g&s",
//         },
//         { name: "Cola Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUvGserLzbxxvBqBjZKtzQqDWVRiz3ijX0g&s" },
//         {
//           name: "Patnem Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbX1uufmvaKR4Y7cSABMELt3t7xQcIFC9z0g&s",
//         },
//         {
//           name: "Rajbag Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6_-nJ_QaYTQ9KGl6vX26_nSlB3N__eF_yQ&s",
//         },
//         {
//           name: "Talpona Beach",
//           imageUrl: "https://a0.muscache.com/im/pictures/e477da75-6062-43b4-b177-24ecb1d67952.jpg",
//         },
//         {
//           name: "Galgibag Beach",
//           imageUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4W28PYTqeYEW2vUzuKiGA_7u_FQs0KzW3uw&s",
//         },
//         {
//           name: "Polem Beach",
//           imageUrl: "https://goa-tourism.org.in/images/places-to-visit/headers/polem-beach-goa-entry-fee-timings-holidays-reviews-header.jpg",
//         },
//         {
//           name: "Pebble Beach Goa",
//           imageUrl:
//             "https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp",
//         },
//         {
//           name: "Karwar Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswg1WTgMBF0NM7DY8xHhr2TGKrEOmak0YIA&s",
//         },
//         {
//           name: "Kudle Beach",
//           imageUrl: "https://gokarnatourism.co.in/images/places-to-visit/header/kudle-beach-gokarna-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
//         },
//         {
//           name: "Panambur Beach",
//           imageUrl: "https://mangaloretourism.in/images/places-to-visit/header/panambur-beach-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg",
//         },
//         { name: "NITK Beach", imageUrl: "https://mangaloretourism.in/images/places-to-visit/header/nitk-surathkal-beach-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg" },
//         {
//           name: "Sasihithlu Beach",
//           imageUrl: "https://mangaloretourism.in/images//tourist-places/sasihithlu-beach-mangalore/sasihithlu-beach-mangalore-tourism-holidays-closed-on-timings.jpg",
//         },
//         {
//           name: "Maravanthe Beach",
//           imageUrl: "https://storage.googleapis.com/goa-app-12a91.appspot.com/2024-07-28T12%3A38%3A42.502Z8.1.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=LYg5Otr%2F7iEltXfShZ1X5yGbAFnBiDznHS6F8oIBiaNp3Wp2elYE2zeZfmEeUvhqqZGx%2FHTLdmD9k%2BvpBdNtAGDbjlG9Nuii9AqTUC%2BtKKtNZPws3CMGjsB9Gv8TDUCWMLRlboXngqrSfNgn06YXnZdJol4yuIz7Le%2FOvqpkcH7HwdgoIqO8OzRHLQuoT3lLJsIBjVlFLWQBTFQopFOiwnAvK89TwVZvHHdnj6e%2F803c9rzvCoMUKuVQu6pf0%2FZ71RsnBTCcSH3ii5R6iN2e%2BP5T7tV62a4G7caVhOhbK6p5xfD6qb1K8SAg3wdZ2STSrQ5vQK8kGF7bto6yryp5OQ%3D%3D",
//         },
//         {
//           name: "Tannirubhavi Beach",
//           imageUrl: "https://karnatakatourism.org/wp-content/uploads/2020/05/Tannirbhavi-Beach_1000x500-2.jpg",
//         },
//         {
//           name: "Malpe Beach",
//           imageUrl: "https://kalavadyfarmstay.com/wp-content/uploads/2022/01/Malpe-Beach-udupi.jpg",
//         },
//         {
//           name: "Murudeshwara Beach",
//           imageUrl: "https://www.holidify.com/images/cmsuploads/compressed/murudeshwar-beach_20200611182704.jpg",
//         },
//         {
//           name: "Apsarakonda Beach",
//           imageUrl:
//             "https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp",
//         },
//         { name: "Om Beach", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/53/5e/7f/om-beach.jpg?w=900&h=500&s=1" },
//         { name: "Kaup Beach", imageUrl: "https://karnatakatourism.org/wp-content/uploads/2020/06/Kapu-Lighthouse-min.jpg" },
//         { name: "Kodi Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOG1Ogn63QjbBT45Zrn4XGiLTlNFmeuZKKw&s" },
//         {
//           name: "Someshwar Beach",
//           imageUrl:
//             "https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp",
//         },
//         {
//           name: "St Mary's Island Beach",
//           imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/1d/2f/47/caption.jpg?w=900&h=500&s=1ttps://example.com/images/st_marys_island_beach.jpg",
//         },
//         {
//           name: "Mukka Beach",
//           imageUrl: "https://i.ytimg.com/vi/1DxqAe3XoBQ/maxresdefault.jpg",
//         },
//         {
//           name: "Ullal Beach",
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrBgn1e1YcFUry20g9HI-KZmYH_YUI-xC6g&s",
//         },{
//   name: "Bakkhali Sea Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUliSql0O_4VMpmQ0Z0qlT1-z5eDjxXjGeVg&s",
// },
// {
//   name: "Frasergunj Sea Beach",
//   imageUrl:
//     "https://media-cdn.tripadvisor.com/media/photo-s/13/6e/96/ea/frazerganj-beach.jpg",
// },
// {
//   name: "Gangasagar Sea Beach",
//   imageUrl:
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2c/b5/43/caption.jpg",
// },
// {
//   name: "Junput Beach",
//   imageUrl:
//     "https://cdn.s3waas.gov.in/s373278a4a86960eeb576a8fd4c9ec6997/uploads/bfi_thumb/2021020978-p2lhjs1dbfdkfb010l7das7usr8tfmes12cpnbnp8q.jpg",
// },
// {
//   name: "Bankiput Sea Beach",
//   imageUrl:
//     "https://krishnandusarkar.com/wp-content/uploads/2017/06/bankiput-sea-beach-6.webp",
// },
// {
//   name: "Mandarmani Beach",
//   imageUrl:
//     "https://www.holidify.com/images/cmsuploads/compressed/34_big(1)_20180115185337.jpg",
// },
// {
//   name: "Shankarpur Beach",
//   imageUrl:
//     "https://static.toiimg.com/photo/msid-70026748,width-96,height-65.cms",
// },
// {
//   name: "Tajpur Beach",
//   imageUrl:
//     "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/Tajpur-Sea-Beach.jpg",
// },
// {
//   name: "Digha Sea Beach",
//   imageUrl:
//     "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1688658762/bbj/nhcu8zaa0vayel2qjnog.jpg",
// },
// {
//   name: "Udaypur Sea Beach",
//   imageUrl:
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c1/73/fa/udaipur-beach.jpg?w=1000&h=600&s=1",
// },
// {
//   name: "Promenade Beach",
//   imageUrl: "https://static.toiimg.com/photo/48552994.cms",
// },
// {
//   name: "Karaikal Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TqCqWxr19tXpiySIVCPqpTJTHCJa6_CTdw&s",
// },
// {
//   name: "Yanam Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eL-GpIQ2QRyoEASA1kN8GfB07YlTRgKTOw&s",
// },
// {
//   name: "Auroville Beach",
//   imageUrl:
//     "https://xplro.com/wp-content/uploads/2024/08/Xplro-2024-08-29T000957.021.webp",
// },
// {
//   name: "Paradise Beach",
//   imageUrl:
//     "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/48000/48081-Paradise-Beach.jpg",
// },
// {
//   name: "Serenity Beach",
//   imageUrl:
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/96/4e/16/fb-img-1497604660236.jpg?w=1200&h=-1&s=1",
// },
// {
//     name: "Varkala Beach",
//     imageUrl:
//       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c8/f1/cb/varkala-beach.jpg?w=1200&h=-1&s=1",
//   },
// {
//   name: "Kappil Beach",
//   imageUrl:
//     "https://www.dtpckasaragod.com/uploads/picture_gallery/gallery_images/kappil-beach-1920x1080-20230506160704640747.webp",
// },

// ];
// const beachesWithImages = [
//    {
//     name: "Henry Island Beach",
//     imageUrl:
//       "https://tripsaround.in/wp-content/uploads/2014/05/Henry-Island.jpg",
//   },

//   {
//     name: "Kollam Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsHIf51-kV0YE1UnEzVdG8iAbjjbMt1zKMg&s",
//   },
//   {
//     name: "Cherai Beach",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sunrise_at_Cherai_Beach.jpg/1200px-Sunrise_at_Cherai_Beach.jpg",
//   },
//   {
//     name: "Chavakkad Beach",
//     imageUrl:
//       "https://www.connectingtraveller.com/images/localtip/1656649499images%20(17).jpeg",
//   },
//   {
//     name: "Fort Kochi Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOiudvExrW_RmlkA9NqauphJhXHnmLJwP5Q&s",
//   },
//   {
//     name: "Kanhangad Beach",
//     imageUrl:
//       "https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/cc/7a/bekal-fort-kanhangad.jpg",
//   },
//   {
//     name: "Marari Beach",
//     imageUrl:
//       "https://www.keralatourism.org/images/enchanting_kerala/large/marari_beach_alappuzha20220730073122_1204_1.jpg",
//   },
//   {
//     name: "Meenkunnu Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwD6qoBCnYRKgjFUt4BqWNnibmBUYa5e_eg&s",
//   },
//   {
//     name: "Muzhappilangad Beach",
//     imageUrl:
//       "https://freshwindz.wordpress.com/wp-content/uploads/2019/05/muzhappilangad.jpg",
//   },
//   {
//     name: "Payyambalam Beach",
//     imageUrl:
//       "https://cdn.s3waas.gov.in/s3060ad92489947d410d897474079c1477/uploads/bfi_thumb/2018040622-olw6liffkdr0jdlcu30jzyuuv5s1ge2hkd15c53s7e.jpg",
//   },
//   {
//     name: "Saddam Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcFkZI6t9N1l5dPUH5HQnrnojrfKZAG0yQQ&s",
//   },
//   {
//     name: "Shangumughom Beach",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/c/c7/Shankumugam_Beach.jpg",
//   },
//   {
//     name: "Snehatheeram Beach",
//     imageUrl:
//       "https://www.holidify.com/images/cmsuploads/compressed/Snehatheeram_beach_20180503211714.jpg",
//   },
//   {
//     name: "Kappil Beach Varkala",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-mRvwDZABfko4ndfK6e9OuqeKigsuitqXA&s",
//   },
//   {
//     name: "Thirumullavaram Beach",
//     imageUrl:
//       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/ea/e6/4a/thirumullavaram-beach.jpg?w=900&h=500&s=1",
//   },
//   {
//     name: "Kovalam Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9eu9K8mDlRB1gSWGpeNc1Mbp6CZY_sgTCg&s",
//   },
//   {
//     name: "Hawa Beach, Kovalam",
//     imageUrl:
//       "https://keralatourism.travel/images/places-to-visit/headers/hawa-beach-trivandrum-tourism-entry-fee-timings-holidays-reviews-header.jpg",
//   },
//   {
//     name: "Samudra Beach, Kovalam",
//     imageUrl: "https://www.kovalam.com/userfiles/1511156628_samudra.jpg",
//   },
//   {
//     name: "Lighthouse Beach, Kovalam",
//     imageUrl: "https://www.kovalam.com/userfiles/1511156002_lighthouse.jpg",
//   },
//   {
//     name: "Kannur Beach",
//     imageUrl:
//       "https://images.squarespace-cdn.com/content/53172b1be4b0cc8a5401db4a/1579530968648-CO6E6TE0QM444TRM19FQ/2L1A2658-2.jpg?format=1500w&content-type=image%2Fjpeg",
//   },
//   {
//     name: "Kappad Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzaJc6ir71uiozhKpl9iRb8YIYb0xV2AWYQ&s",
//   },
//   {
//     name: "Varkala Beach / Papanasham Beach",
//     imageUrl:
//       "https://keralatourism.travel/images/places-to-visit/headers/varkala-beach-papanasam-beach-trivandrum-tourism-entry-fee-timings-holidays-reviews-header.jpg",
//   },
//   {
//     name: "Padinjarekkara Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-VSDThsMYa7I7lHjz8JdNJvjSDP1m5kgOg&s",
//   },
//   {
//     name: "Tanur Beach",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tanur_beach%2C_Malappuram_%285%29.jpg/320px-Tanur_beach%2C_Malappuram_%285%29.jpg",
//   },
//   {
//     name: "Azheekal Beach",
//     imageUrl:
//       "https://www.dtpckollam.com/uploads/picture_gallery/gallery_images/azheekal_beach_1920-20230507233619631509.webp",
//   },
//   {
//     name: "Alappuzha Beach",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alleppey_beach.jpg/1200px-Alleppey_beach.jpg",
//   },
//   {
//     name: "Kozhikode Beach",
//     imageUrl:
//       "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fsunset-at-kozhikode-beach-1738817103_5ca573cdcbb25edfdcdd.webp&w=1920&q=75",
//   },
//   {
//     name: "Bekal Beach",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhOLXwnL8OlFoYgZjUR3Dn6c0kE52wpDdvw&s",
//   },
//   {
//     name: "Thiruvambadi Beach",
//     imageUrl:
//       "https://media.holidify.com/images/cmsuploads/compressed/5077_20240318162621.jpg",
//   },
// ];

// const beachesWithImages = [
//   { name: "Dumas Beach", imageUrl: "https://images.indianexpress.com/2022/07/dumas-three.jpg" },
//   { name: "Suvali Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfq-Xwl9mlQEA96RUZIjLsMjHf8ApImt9aQ&s" },
//   { name: "Umbharat Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmfdg61CxiTOC0eagyV-X2bPrqqk9UTBsIA&s" },
//   { name: "Dandi Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoqQcP4r_7CwJDDZCOI8053WNEgKO8gofpA&s" },
//   { name: "Dabhari Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJWS9PXPTkfwZpeIz4UxOufDvWiQQir3ewQ&s" },
//   { name: "Diu Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXugA3EUTbpJ5nbyvZ2r9a1O16gjWbQVDpyg&s" },
//   { name: "Tithal Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKREJpQHP8Z_2d-4bbHIeP_IReXoOxzAnTdA&s" },
//   { name: "Mandavi Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_MSa7Jk07wuil-XE92pVTT-VVwQ5U7psRw&s" },
//   { name: "Khambhat Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypr3iWxgGT8VHyYhr6i2CkyGAIDOzMjG7rg&s" },
//   { name: "Aksa Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57rV5IBKNH07FYZEU0O25nzYzY0_78AbV0Q&s" },
//   { name: "Alibaug Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShi6CEM6F1PM828l9nOBPmBSl8NN9DCCjF4g&s" },
//   { name: "Gorai Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bqvyLkgPrRlexwy3Z3o2yiZUKa4q25znCw&s" },
//   { name: "Juhu Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xCJ7ba2d0H_UeQAvwt8HnhKNKk2Hm4pQYA&s" },
//   { name: "Manori Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsNxodrqhOH86DK1zZxLyRaiP_QYg3RfDHw&s" },
//   { name: "Marvé Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrBCYjeQy44jU0_OnIistK2j4aPU7Btm08g&s" },
//   { name: "Versova Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxh-nhYWpZL1JtTmNWUBCFaOU0tN4yRPQrA&s" },
//   { name: "Agardanda Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3m4K9oA9KzxS6goGs7QiyxBg-MSiTEciTQ&s" },
//   { name: "Diveagar Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2XinuCEOB1RAKzzPGeomy4SJyKWFJ75feg&s" },
//   { name: "Ganpatipule Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwpjAqoQbLi_En5f6AYDfx9I_yUhsdh34Mw&s" },
//   { name: "Guhagar Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXCdTpmC7fe0YAeex66hxowsZh5gB87ohmw&s" },
//   { name: "Kelwa Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_fu3S6lPxuPSby8SNcubCe6y52OvhTKNHA&s" },
//   { name: "Tarkarli Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStANvmiPs5gxatYdNkVlplEMYpDMnoghly9g&s" },
//   { name: "Shivaji Park Beach", imageUrl: "https://i.pinimg.com/736x/61/45/01/61450165180c22b6ec701ecf71ef3e32.jpg" },
//   { name: "Anjarle Beach", imageUrl: "https://avathioutdoors.gumlet.io/travelGuide/dev/ratnagiri_P2057.jpg?format=webp&w=800&dpr=1" },
//   { name: "Dapoli Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxFFKo8XftkzD7K8nzqcSInXnkFhxwtIMkA&s" },
//   { name: "Dahanu Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69CZWU3y0utMGlDMc0XG5oDGJRGvGLcs5bg&s" },
//   { name: "Srivardhan Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcIJORbXeODSiGYni5YfcdqeVBC_qxcwYeQ&s" },
//   { name: "Kihim Beach", imageUrl: "https://media1.thrillophilia.com/filestore/3c78uzgep1raphu61tzd0unt0nju_1576591740_Kihim-Beach_Sarvesh-Alshi-1.jpg" },
//   { name: "Mandwa Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldCGwFh9waf4XX2Qvw0GlAGXUeGSKTzzU1w&s" },
//   { name: "Velneshwar Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_7j7XEZpVcLQUsHnqyxONiyOR1lfPx60jg&s" },
//   { name: "Vengurla Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1Ry00MkatUKlm0rMFk6ueQfXIuc0M22ViA&s" },
//   { name: "Bassein Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjU18UDmBHi61C1M5iFZW4SpSarnyssPc8w&s" },
//   { name: "Bhandarpule Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdIQdaKFJodMNb-sAyRVX3i0wgXraudc49g&s" },
//   { name: "Nagaon Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqpxdoO2zwtX5d1w8X2N-Cs1q8UqxdA9Llg&s" },
//   { name: "Revdanda Beach", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/17/ee/7a/revdanda-beach-fort.jpg?w=1200&h=-1&s=1" },
//   { name: "Rewas Beach", imageUrl: "https://magnificentmaharashtra.wordpress.com/wp-content/uploads/2015/02/rewas-beach.jpg?w=665" },
//   { name: "Kashid Beach", imageUrl: "https://tripxl.com/blog/wp-content/uploads/2024/10/Places-to-visit-near-Kashid-Beach-Cover-Photo-840x425.jpg" },
//   { name: "Karde (Murud) Beach", imageUrl: "https://media1.thrillophilia.com/filestore/z7npurdfsfcv0vg1oebqu8a60w3m_1574501620_shutterstock_1412104640__281_29.jpg.jpg" },
//   { name: "Harihareshwar Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3q8jK-kn1L5lTefs4r8xKlAoRTiDoiwEBA&s" },
//   { name: "Bagmandla Beach", imageUrl: "https://im.whatshot.in/img/2021/Mar/wokay-1616488612.jpg" },
//   { name: "Kelshi Beach", imageUrl: "https://shrikanchanhotels.com/wp-content/uploads/2021/01/Kolthare-beach-1.jpg" },
//   { name: "Harnai Beach", imageUrl: "https://content3.jdmagicbox.com/comp/ratnagiri/h3/9999p2352.2352.141217165051.n7h3/catalogue/harnai-beach-harnai-ratnagiri-tourist-attraction-y957x9n2ua.jpg" },
//   { name: "Bordi Beach", imageUrl: "https://content.jdmagicbox.com/v2/comp/palghar/e8/022pxx22.xx22.141218143536.l3e8/catalogue/bordi-beach-bordi-palghar-tourist-attraction-98zxaw9o9r.jpg" },
//   { name: "Ratnagiri Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFymY5zlsMW4fMzij92OBgJ1CnZ1BvxuNkw&s" },
//   { name: "Awas Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUoSZ7EEEcafIQt_De3SCe_C4EMLi9BLF4g&s" },
//   { name: "Sasawne Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLaHsqwjtxDXkHSfE9tR2xll9pnpigN2ydQ&s" },
//   { name: "Malvan Beach", imageUrl: "https://t3.ftcdn.net/jpg/03/59/88/50/360_F_359885014_8eust3TATvkoeDrBlgjxEykeCx4yzj1x.jpg" }
//  ];

// const batchone = [
//   {
//   name: "Sonpur Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Donkuru Beach",
//   imageUrl:
//     "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Nelavanka Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Kaviti Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Onturu Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI1xIkfu-ZQvXBEjebXjQGK4ZvR4eGRuLdw&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Ramayyapatnam Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI1xIkfu-ZQvXBEjebXjQGK4ZvR4eGRuLdw&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Baruva Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUq5rg5iOIpFdmK2DoDmV_d1FsaDZr3gCwg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Battigalluru Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NcQhV1uRUorEhgPu2MMRdfUagRdcl55meg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Sirmamidi Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Ratti Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvMjRYNuuEX20_P7w-TXwb1tHSSipx9rsvA&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Shivasagar Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI1xIkfu-ZQvXBEjebXjQGK4ZvR4eGRuLdw&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Dokulapadu Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Nuvvalarevu Beach",
//   imageUrl:
//     "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "KR Peta Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Bavanapadu Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NcQhV1uRUorEhgPu2MMRdfUagRdcl55meg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Mula Peta Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "BVS Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiPHh7kLCcHVlwOwIRmxjmkMjfG5opaTI0A&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Patha Meghavaram Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Guppidipeta Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Kotharevu Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvMjRYNuuEX20_P7w-TXwb1tHSSipx9rsvA&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Rajaram Puram Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Kalingapatnam Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUq5rg5iOIpFdmK2DoDmV_d1FsaDZr3gCwg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Bandaruvanipeta Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI1xIkfu-ZQvXBEjebXjQGK4ZvR4eGRuLdw&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Mogadalapadu Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNNmPKFLvxnSSX4uOAO5O3Bkg4NbmLD1E1w&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Vatsavalasa Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "S. Matchelesam Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Balarampuram Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiPHh7kLCcHVlwOwIRmxjmkMjfG5opaTI0A&s",
//   longitude: 0.0,
//   latitude: 0.0,
// },
// {
//   name: "Kunduvanipeta Beach",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   longitude: 0.0,
//   latitude: 0.0,
// },
//   {
//     name: "Govundlapalem Beach",
//     latitude: 14.49,
//     longitude: 80.16,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Kudithipalem Beach",
//     latitude: 14.47,
//     longitude: 80.14,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   },
//   {
//     name: "Gangapatnam Beach",
//     latitude: 14.43,
//     longitude: 80.1,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   },
//   {
//     name: "Mypadu Beach",
//     latitude: 14.36,
//     longitude: 80.05,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Zard Beach",
//     latitude: 14.33,
//     longitude: 80.03,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//   },
//   {
//     name: "Kotha Koduru Beach",
//     latitude: 14.3,
//     longitude: 80.01,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Koduru Beach",
//     latitude: 14.27,
//     longitude: 79.99,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Katepalli Beach",
//     latitude: 14.23,
//     longitude: 79.96,
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//   },
//   {
//     name: "Nelaturu Beach",
//     latitude: 14.2,
//     longitude: 79.94,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Krishnapatnam Beach",
//     latitude: 14.17,
//     longitude: 79.92,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Theegapalem Beach",
//     latitude: 14.14,
//     longitude: 79.9,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   },
//   {
//     name: "Srinivasa Satram Beach",
//     latitude: 14.11,
//     longitude: 79.88,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   },
//   {
//     name: "Pattapupalem Beach",
//     latitude: 14.08,
//     longitude: 79.86,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//   },
//   {
//     name: "Moonside Beach",
//     latitude: 14.05,
//     longitude: 79.84,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Thupilipalem Beach",
//     latitude: 14.02,
//     longitude: 79.82,
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//   },
//   {
//     name: "Kondurpalem Beach",
//     latitude: 13.99,
//     longitude: 79.8,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Alone Beach",
//     latitude: 13.96,
//     longitude: 79.78,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//   },
//   {
//     name: "Raviguntapalem Beach",
//     latitude: 13.93,
//     longitude: 79.76,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   },
//   {
//     name: "Nawabpet Beach",
//     latitude: 13.9,
//     longitude: 79.74,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   },
//   {
//     name: "PD Palem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 18.2103933,
//     longitude: 83.9316741,
//   },
//   {
//     name: "Budagatlapalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     latitude: 18.153611,
//     longitude: 83.793611,
//   },
//   {
//     name: "Kotcherla Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 16.05,
//     longitude: 79.75,
//   },
//   {
//     name: "Jeerupalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 18.15,
//     longitude: 83.7833,
//   },
//   {
//     name: "Kovvada Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//     latitude: 17.018871,
//     longitude: 81.730301,
//   },
//   {
//     name: "Pothayyapeta Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 18.3,
//     longitude: 83.9,
//   },
//   {
//     name: "Chintapalli NGF Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 16.817,
//     longitude: 78.8,
//   },
//   {
//     name: "Chintapalli Beach",
//     imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMwrg2f010PJHBnP3WLulX6VOnHxEfQ5HJ9U1QB=s800",
//     latitude: 16.817,
//     longitude: 78.8,
//   },
//   {
//     name: "Tammayyapalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 18.0586198,
//     longitude: 83.6352468,
//   },
//   {
//     name: "Konada Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 18.0167,
//     longitude: 83.5667,
//   },
//   {
//     name: "Divis Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 15.9719,
//     longitude: 81.1372,
//   },
//   {
//     name: "Bheemili Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 17.890382,
//     longitude: 83.455465,
//   },
//   {
//     name: "Mangamaripeta Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 17.833198,
//     longitude: 83.412932,
//   },
//   {
//     name: "Thotlakonda Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 17.82639,
//     longitude: 83.40944,
//   },
//   {
//     name: "Rushikonda Beach",
//     imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMwrg2f010PJHBnP3WLulX6VOnHxEfQ5HJ9U1QB=s800",
//     latitude: 17.7825201,
//     longitude: 83.3851154,
//   },
//   {
//     name: "Sagarnagar Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 17.75,
//     longitude: 83.3667,
//   },
//   {
//     name: "Jodugullapalem Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 17.7167,
//     longitude: 83.3333,
//   },
//   {
//     name: "RK Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 17.714294,
//     longitude: 83.323685,
//   },
//   {
//     name: "Durga Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 17.7,
//     longitude: 83.3167,
//   },
//   {
//     name: "Yarada Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 17.65,
//     longitude: 83.27,
//   },
//   {
//     name: "Gagavaram Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 17.6,
//     longitude: 83.25,
//   },
//   {
//     name: "Adi's Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//     latitude: 17.55,
//     longitude: 83.2333,
//   },
//   {
//     name: "Appikonda Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     latitude: 17.5,
//     longitude: 83.2167,
//   },
//   {
//     name: "Tikkavanipalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 17.45,
//     longitude: 83.2,
//   },
//   {
//     name: "Mutyalammapalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 17.4,
//     longitude: 83.1833,
//   },
//   {
//     name: "Thanthadi Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 17.35,
//     longitude: 83.1667,
//   },
//   {
//     name: "Seethapalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//     latitude: 17.3,
//     longitude: 83.15,
//   },
//   {
//     name: "Rambilli Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 17.25,
//     longitude: 83.1333,
//   },
//   {
//     name: "Kothapatnam Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 15.3667,
//     longitude: 80.15,
//   },
//   {
//     name: "Revupolavaram Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 17.2,
//     longitude: 83.1167,
//   },
//   {
//     name: "Gudivada Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     latitude: 16.38,
//     longitude: 81.5167,
//   },
//   {
//     name: "Gurrajupeta Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 17.2667,
//     longitude: 82.65,
//   },
//   {
//     name: "Pedhatheenarla Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 17.3,
//     longitude: 82.7333,
//   },
//   {
//     name: "Rajjyapeta Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 17.2667,
//     longitude: 82.7,
//   },
//   {
//     name: "Boyapadu Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 17.2167,
//     longitude: 82.65,
//   },
//   {
//     name: "DLPuram Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 17.25,
//     longitude: 82.6833,
//   },
//   {
//     name: "Pentakota Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 16.9167,
//     longitude: 82.15,
//   },
//   {
//     name: "Rajavaram Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//     latitude: 16.8833,
//     longitude: 82.1167,
//   },
//   {
//     name: "Addaripeta Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 16.85,
//     longitude: 82.1,
//   },
//   {
//     name: "Danvaipeta Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     latitude: 16.8167,
//     longitude: 82.0833,
//   },
//   {
//     name: "Gaddipeta Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 16.7833,
//     longitude: 82.0667,
//   },
//   {
//     name: "K. Perumallapuram Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 16.75,
//     longitude: 82.05,
//   },
//   {
//     name: "Konapapapeta Beach",
//     imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMwrg2f010PJHBnP3WLulX6VOnHxEfQ5HJ9U1QB=s800",
//     latitude: 16.7167,
//     longitude: 82.0333,
//   },
//   {
//     name: "Uppada Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 17.0714,
//     longitude: 82.2856,
//   },
//   {
//     name: "Nemam Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 16.7,
//     longitude: 81.9833,
//   },
//   {
//     name: "NTR Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 16.6667,
//     longitude: 81.95,
//   },
//   {
//     name: "Seahorse Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 16.6333,
//     longitude: 81.9167,
//   },
//   {
//     name: "Dragonmouth Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 16.6,
//     longitude: 81.8833,
//   },
//   {
//     name: "Pallam Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 16.5667,
//     longitude: 81.85,
//   },
//   {
//     name: "Sunrise Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 16.5333,
//     longitude: 81.8167,
//   },
//   {
//     name: "Surasani Yanam Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//     latitude: 16.5,
//     longitude: 81.7833,
//   },
//   {
//     name: "Vasalatippa Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 16.4667,
//     longitude: 81.75,
//   },
//   {
//     name: "Odalarevu Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     latitude: 16.4333,
//     longitude: 81.7167,
//   },
//   {
//     name: "Turpupalem Beach",
//     imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMwrg2f010PJHBnP3WLulX6VOnHxEfQ5HJ9U1QB=s800",
//     latitude: 16.4,
//     longitude: 81.6833,
//   },
//   {
//     name: "Kesanapalli Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 16.3667,
//     longitude: 81.65,
//   },
//   {
//     name: "Shankaraguptham Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 16.3333,
//     longitude: 81.6167,
//   },
//   {
//     name: "Chintalamori Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 16.3,
//     longitude: 81.5833,
//   },
//   {
//     name: "Natural Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 16.2667,
//     longitude: 81.55,
//   },
//   {
//     name: "KDP Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//     latitude: 16.2333,
//     longitude: 81.5167,
//   },
//   {
//     name: "Antervedi Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 16.3,
//     longitude: 81.7,
//   },
//   {
//     name: "Pedamainavanilanka Beach",
//     latitude: 16.46,
//     longitude: 81.55,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Perupalem Beach",
//     latitude: 16.4833,
//     longitude: 81.65,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//   },
//   {
//     name: "Kanakadurga Beach",
//     latitude: 16.517,
//     longitude: 81.68,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Gollapalem Beach",
//     latitude: 16.5,
//     longitude: 81.6,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//   },
//   {
//     name: "Podu Beach",
//     latitude: 16.48,
//     longitude: 81.62,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   },
//   {
//     name: "Pedapatnam Beach",
//     latitude: 16.47,
//     longitude: 81.58,
//     imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMwrg2f010PJHBnP3WLulX6VOnHxEfQ5HJ9U1QB=s800",
//   },
//   {
//     name: "Modi Beach",
//     latitude: 16.49,
//     longitude: 81.64,
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//   },
//   {
//     name: "Tallapalem Beach",
//     latitude: 16.45,
//     longitude: 81.56,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Manginapudi Beach",
//     latitude: 16.16,
//     longitude: 81.13,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   },
//   {
//     name: "Crab Beach",
//     latitude: 16.17,
//     longitude: 81.14,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//   },
//   {
//     name: "Gopuvanipalem Beach",
//     latitude: 16.2,
//     longitude: 81.2,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//   },
//   {
//     name: "Lonely Beach",
//     latitude: 16.25,
//     longitude: 81.25,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//   },
//   {
//     name: "Chinakaragraharam Beach",
//     latitude: 16.22,
//     longitude: 81.23,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Destiny Beach",
//     latitude: 16.27,
//     longitude: 81.27,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   },
//   {
//     name: "Machilipatnam Beach",
//     latitude: 16.17,
//     longitude: 81.13,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Hamsaladeevi Beach",
//     latitude: 16.3667,
//     longitude: 81.3833,
//     imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMwrg2f010PJHBnP3WLulX6VOnHxEfQ5HJ9U1QB=s800",
//   },
//   {
//     name: "Diviseema Beach",
//     latitude: 16.35,
//     longitude: 81.42,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//   },
//   {
//     name: "Dindi Beach",
//     latitude: 16.45,
//     longitude: 81.7,
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//   },
//   {
//     name: "Nizampatnam Beach",
//     latitude: 15.91,
//     longitude: 80.67,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Suryalanka Beach",
//     latitude: 15.9,
//     longitude: 80.52,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//   },
//   {
//     name: "Pandurangapuram Beach",
//     latitude: 15.86,
//     longitude: 80.46,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Vodarevu Beach",
//     latitude: 15.8,
//     longitude: 80.38,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   },
//   {
//     name: "Ramachandrapuram Beach",
//     latitude: 15.75,
//     longitude: 80.32,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Motupalli Beach",
//     latitude: 15.73,
//     longitude: 80.27,
//     imageUrl: "https://lh5.googleusercontent.com/p/AF1QipMwrg2f010PJHBnP3WLulX6VOnHxEfQ5HJ9U1QB=s800",
//   },
//   {
//     name: "Chinaganjam Beach",
//     latitude: 15.57,
//     longitude: 80.16,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//   },
//   {
//     name: "Pedaganjam Beach",
//     latitude: 15.55,
//     longitude: 80.14,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//   },
//   {
//     name: "Kanapurthi Beach",
//     latitude: 15.51,
//     longitude: 80.1,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   },
//   {
//     name: "Kodurivaripalem Beach",
//     latitude: 15.47,
//     longitude: 80.06,
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//   },
//   {
//     name: "Katamvaripalem Beach",
//     latitude: 15.43,
//     longitude: 80.02,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//   },
//   {
//     name: "Kanuparthi Beach",
//     latitude: 15.4,
//     longitude: 80.1,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//   },
//   {
//     name: "Motumala Beach",
//     latitude: 15.3667,
//     longitude: 80.0667,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//   },
//   {
//     name: "Pinnivaripalem Beach",
//     latitude: 15.3333,
//     longitude: 80.0333,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//   },
//   {
//     name: "Kothapatnam Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 15.37,
//     longitude: 80.13,
//   },
//   {
//     name: "Gavandlapallem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 15.45,
//     longitude: 80.14,
//   },
//   {
//     name: "Rajupalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 15.46,
//     longitude: 80.15,
//   },
//   {
//     name: "Etthamukhala Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 15.47,
//     longitude: 80.16,
//   },
//   {
//     name: "Madanur Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 15.48,
//     longitude: 80.17,
//   },
//   {
//     name: "White sand Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 15.49,
//     longitude: 80.18,
//   },
//   {
//     name: "Pakka Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 15.5,
//     longitude: 80.19,
//   },
//   {
//     name: "Pakala Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     latitude: 15.51,
//     longitude: 80.2,
//   },
//   {
//     name: "Ullapalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 15.52,
//     longitude: 80.21,
//   },
//   {
//     name: "Pedda Pallepalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 15.53,
//     longitude: 80.22,
//   },
//   {
//     name: "Karedu Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYKMogZcqe7aLVonKq84ThklpVK23TVETrw&s",
//     latitude: 15.54,
//     longitude: 80.23,
//   },
//   {
//     name: "G-Star Shiv Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 15.55,
//     longitude: 80.24,
//   },
//   {
//     name: "Shiv Satendra Prajapati Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 15.56,
//     longitude: 80.25,
//   },
//   {
//     name: "Alagayapalem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     latitude: 15.57,
//     longitude: 80.26,
//   },
//   {
//     name: "Chackicherla Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 15.58,
//     longitude: 80.27,
//   },
//   {
//     name: "Ramayapattanam Public Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 15.59,
//     longitude: 80.28,
//   },
//   {
//     name: "Karla Palem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 15.6,
//     longitude: 80.29,
//   },
//   {
//     name: "SSR Port Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 15.61,
//     longitude: 80.3,
//   },
//   {
//     name: "Pallipalem Public Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OJnRjOWa-2gdkTTkv0Bj4uR0nnkun1vCGQ&s",
//     latitude: 15.62,
//     longitude: 80.31,
//   },
//   {
//     name: "Kotha Sathram Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 15.63,
//     longitude: 80.32,
//   },
//   {
//     name: "Pedaramudu Palem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUfLcihxfwugf5stl0yTeCJJaYRhPNHIcg&s",
//     latitude: 15.64,
//     longitude: 80.33,
//   },
//   {
//     name: "Chinnaramudu Palem Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 15.65,
//     longitude: 80.34,
//   },
//   {
//     name: "Thummalapenta Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgziDOIDRJesfgSVZtbg7LfcttVjkpo42DQw&s",
//     latitude: 15.66,
//     longitude: 80.35,
//   },
//   {
//     name: "Thatichetla Palem Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 15.67,
//     longitude: 80.36,
//   },
//   {
//     name: "LN Puram Beach",
//     imageUrl: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqIHY7SXi8Ni7FNvu0ETlL2Q9dzk9ew4cA&s",
//     latitude: 15.68,
//     longitude: 80.37,
//   },
//   {
//     name: "Iskapalli Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt_NuYGnJrXfp0uRTzT--8uQxgnQVtOUMVg&s",
//     latitude: 15.69,
//     longitude: 80.38,
//   },
//   {
//     name: "Ponnapudi Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GNeic3HjjFpi8EEvGu6nj73GV6ZbqlkxA&s",
//     latitude: 15.7,
//     longitude: 80.39,
//   },
//   {
//     name: "Ramathirdamu Beach",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDbrZPMPKTuvFvIjc8jt1sjO_slVZ_GYYkiKYZHkqUxUwjTRRZmyMoehPQViZGtsaAUE&usqp=CAU",
//     latitude: 15.71,
//     longitude: 80.4,
//   },
// ];
// const batchone = [
//   { name: "Puri Sea Beach at Sunrise", imageUrl: "https://media.istockphoto.com/id/1090022606/photo/puri-beach.jpg?s=612x612&w=0&k=20&c=qDrYPu0G-NFu2m4LicSTpzTz4C1MnmzT7zgy8JbOySc=" },
//   { name: "Talsari Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bGw_dzVCCWcAL58AyQbhRdkRc3qq5YZ46g&s" },
//   { name: "Dagara Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMI8YH61IexDJxBySVGWW71ERMxFdCsUNK_A&s" },
//   { name: "Chandipur-on-Sea", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8r8h7EUQYnSR-U2D2ccl0pKHhIj-txSG8-A&s" },
//   { name: "Gahirmatha Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuotlYQvjYRV6ByOU1C2TZGbCoVo0U9IFwg&s" },
//   { name: "Satabhaya Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEX5_NkfJLRI39Mjy29gCEnpxXbW_gNDUGBw&s" },
//   { name: "Pentha Sea Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9OWKY0QrDhQtYNlc7rdelUw4jl2MxI8nWg&s" },
//   { name: "Hukitola Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgypBmy0p7iFrWL37oW23iuKtjJ5SfgiELmQ&s" },
//   { name: "Paradeep Sea Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQW1yLZaPeqdJeb0PESxVYXPXNm_qphZ1YGw&s" },
//   { name: "Astaranga Beach", imageUrl: "https://xplro.com/wp-content/uploads/2024/09/orissa-beaches-1-jpg.webp" },
//   { name: "Beleswar Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDe34h5bXUZvJvaOzGY1We60NIa-lmUKIyow&s" },
//   { name: "Konark Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjw-kZ3tt_jKAh-dgVC7rwtJcpEHwJR58kWg&s" },
//   { name: "Chandrabhaga Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySAZcErvHtE1_dxlfr4_ZzisnfiLhbYI_DQ&s" },
//   { name: "Ramachandi Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAL_1Yxf1ki1V02F6XIxhmSCo64Jr3CxrT8A&s" },
//   { name: "Puri Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexb6_HOUGIoqtUlcf2i_DWuIFEL3xGtKtSQ&s" },
//   { name: "Satpada Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriaexeXfBTiU1S2wZO8m6wbPT3jX3uSJL3w&s" },
//   { name: "Parikud Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UdDCGoqUyI2mQNCfJjpLE7g3R3QCUeoxSA&s" },
//   { name: "Ganjam Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R246zM0uHepY28XCPcQJZAX0nvtrhTzxWg&s" },
//   { name: "Aryapalli Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cUcqfq_ZbDCkST8yqLUuGdhV3d-4qxx5Hg&s" },
//   { name: "Gopalpur-on-Sea", imageUrl: "" },
//   { name: "Dhabaleshwar Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7x6auYsc0kt7M_3BN8kfpFYekxEId1V3jWQ&s" },
//   { name: "Ramayapatnam Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDlVXkvGuN8hPg9wt4C4lNW2-piTjFHNLzA&s" },
//   { name: "Sonapur Beach", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdMuWroQtfas7P3BTkxOE60XtIDp2_qCtMA&s" }
// ];


// const batchone = [];

// const odishaBeaches = [
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


const updateBeaches = async () => {
  try {
    const bulkOps = odishaBeaches.map((beach) => ({
      updateOne: {
        filter: { name: beach.name }, // Find beach by name
        update: { $set: { imageUrl: beach.imageUrl } },
      },
    }));

    const result = await Beach.bulkWrite(bulkOps);
    console.log(
      `Matched: ${result.matchedCount}, Modified: ${result.modifiedCount} beaches.`
    );
  } catch (error) {
    console.error("Error updating beaches:", error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the update function
updateBeaches();
