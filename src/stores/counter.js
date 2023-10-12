import { ref } from 'vue'
import { defineStore } from 'pinia'

export const ShallGo = defineStore('Travel_list', () => {
  const travellist = ref([
    {name: 'ระยอง', img:'https://upload.wikimedia.org/wikipedia/commons/9/93/%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B8%A1%E0%B8%AB%E0%B8%8D%E0%B9%89%E0%B8%B2-%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B9%87%E0%B8%944.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=12.879728495463713&lon=101.38124812459998&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
    {name: 'เชียงใหม่', img:'https://ik.imagekit.io/tvlk/blog/2018/07/Doi-Inthanon-ChiangMai-Traveloka-1.jpg?tr=dpr-2,w-675',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.790945025811805&lon=98.98428967606496&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
    {name: 'มหาสารคาม', img:'https://gangtravel.com/upload/2021/10/1.1-8.jpg.webp',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=16.271400481203997&lon=103.14118527359442&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
    {name: 'นนทบุรี', img:'https://riverineplace.com/wp-content/uploads/2023/07/2022-02-02-13-40-213674.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=13.885905443791026&lon=100.50587130535857&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
    {name: 'พัทลุง', img:'https://promotions.co.th/wp-content/uploads/2021/03/Little-sea.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=7.5850062419102935&lon=99.97495246913905&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
    {name: 'ลำปาง', img:'https://ik.imagekit.io/tvlk/blog/2020/11/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87-3.jpg?tr=dpr-2,w-675',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.73929339647512&lon=99.69293104276022&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
    {name: 'สุรินทร์', img:'https://i-san.tourismthailand.org/wp-content/uploads/2019/09/%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%AD%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%99-%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-1.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=15.160193310624228&lon=103.71825357789017&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
    {name: 'ยโสธร', img:'https://upload.wikimedia.org/wikipedia/commons/b/b9/Naga_Vimarn_Phaya_Thean_%28I%29.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=16.129121431776323&lon=104.39853394003484&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
    {name: 'กาฬสินธุ์', img:'https://api.tourismthailand.org/upload/live/article/4-537.png',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=16.551849842422904&lon=103.63970382776424&appid=9f767e7c2c2ba2cd3e595c407e04b0c5'},
  ])
 
  return { travellist }
})
// 9f767e7c2c2ba2cd3e595c407e04b0c5
// ----------------------------------------------------
// ระยอง
// 12.879728495463713, 101.38124812459998

// api.openweathermap.org/data/2.5/forecast?lat=12.879728495463713&lon=101.38124812459998&appid=9f767e7c2c2ba2cd3e595c407e04b0c5
// ---------------------------------------------------------------------------------------------
// เชียงใหม่
// 18.790945025811805, 98.98428967606496

// api.openweathermap.org/data/2.5/forecast?lat=18.790945025811805&lon=98.98428967606496&appid=9f767e7c2c2ba2cd3e595c407e04b0c5
// ---------------------------------------------------------------------------------------------
// มหาสารคาม
// 16.271400481203997, 103.14118527359442

// api.openweathermap.org/data/2.5/forecast?lat=16.271400481203997&lon=103.14118527359442&appid=9f767e7c2c2ba2cd3e595c407e04b0c5
// ---------------------------------------------------------------------------------------------
// นนทบุรี
// 13.885905443791026, 100.50587130535857

// api.openweathermap.org/data/2.5/forecast?lat=13.885905443791026&lon=100.50587130535857&appid=9f767e7c2c2ba2cd3e595c407e04b0c5
// ---------------------------------------------------------------------------------------------
// พัทลุง
// 7.5850062419102935, 99.97495246913905

// api.openweathermap.org/data/2.5/forecast?lat=7.5850062419102935&lon=99.97495246913905&appid=9f767e7c2c2ba2cd3e595c407e04b0c5
// -------------------------------------------------------------------------------------------
// ลำปาง
// 18.73929339647512, 99.69293104276022
// api.openweathermap.org/data/2.5/forecast?lat=18.73929339647512&lon=99.69293104276022&appid=9f767e7c2c2ba2cd3e595c407e04b0c5
// -------------------------------------------------------------------------------------------
// สุรินทร์
// 15.160193310624228, 103.71825357789017
// api.openweathermap.org/data/2.5/forecast?lat=15.160193310624228&lon=103.71825357789017&appid=9f767e7c2c2ba2cd3e595c407e04b0c5
// -------------------------------------------------------------------------------------------ยโสธร
// 16.129121431776323, 104.39853394003484
// api.openweathermap.org/data/2.5/forecast?lat=16.129121431776323&lon=104.39853394003484&appid=9f767e7c2c2ba2cd3e595c407e04b0c5
// -------------------------------------------------------------------------------------------
// กาฬสินธุ์
// 16.551849842422904, 103.63970382776424
// api.openweathermap.org/data/2.5/forecast?lat=16.551849842422904&lon=103.63970382776424&appid=9f767e7c2c2ba2cd3e595c407e04b0c5