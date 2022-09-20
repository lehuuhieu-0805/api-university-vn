const axios = require('axios').default;
const puppeteer = require('puppeteer');
const fs = require('fs');

const url = 'https://eduplus.edu.vn/danh-sach-cac-truong-dai-hoc-tren-toan-quoc/';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });


  const universities = await page.evaluate(() => {
    let tableDataUniversity =
      document.querySelectorAll('#td-outer-wrap > div.td-main-content-wrap.td-container-wrap > div > div.td-pb-row > div > div.td-page-content.tagdiv-type > table > tbody > tr');
    // tableDataUniversity is NodeList

    let universities = [];

    for (let i = 0; i < tableDataUniversity.length; i++) {
      tableDataUniversity[i].firstElementChild.remove();

      if (tableDataUniversity[i].childElementCount > 4) {
        tableDataUniversity[i].lastElementChild.remove();
      }
    }

    for (let index = 0; index < tableDataUniversity.length; index++) {

      let university = {
        name: tableDataUniversity[index].querySelector(':nth-child(1)').querySelector('span')?.innerText || null,
        short_name: tableDataUniversity[index].querySelector(':nth-child(2)').querySelector('span')?.innerText || null,
        code_university: tableDataUniversity[index].querySelector(':nth-child(3)').querySelector('span')?.innerText || null,
        address: tableDataUniversity[index].querySelector(':nth-child(4)').querySelector('span')?.innerText || null,
      };

      universities = [...universities, university];

    }
    return universities;

  });

  // store data in file json
  fs.writeFileSync('universities-vn.json', JSON.stringify(universities));

  // call api to store data in database
  // Promise.all(universities.map(async (university, index) => {
  //   axios({
  //     url: 'http://localhost:3000/api/university',
  //     method: 'post',
  //     data: university
  //   })
  //     .then(() => console.log(`success: ${index}`))
  //     .catch(err => console.log(err));
  // })).catch(err => console.log(err));

  await browser.close();
})();