import fetch from "node-fetch";
import * as cheerio from "cheerio";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRYaT-4q680X6mxbuSZwo7odEoaXi93wLnNoSEvDGcUrBADozlWQjMx4-AQmbXjaqnHIftgNg36DkhX/pubhtml#";

export async function handler(event, context) {
  try {
    const response = await fetch(URL);
    const resData = await response.text();

    const output = { data: [] };

    const $ = cheerio.load(resData);
    const tables = $("#sheets-viewport div table");

    for (let i = 0; i < tables.length; i++) {
      let rows = $(tables[i]).find("tbody tr");
      for (let i = 0; i < rows.length; i++) {
        let cells = $(rows[i]).find("td");
        // console.log("Question:", $(cells[0]).text());
        // console.log("Answer:", $(cells[1]).text());
        output.data.push([$(cells[0]).text(), $(cells[1]).text()]);
      }
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(output),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `${e.name}: ${e.message}` }),
    };
  }
}
