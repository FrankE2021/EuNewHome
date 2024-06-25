import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://eltoque.com', { waitUntil: 'networkidle2' });

  // Espera a que los datos estén disponibles
  await page.waitForSelector('.price-text.change-plus');

  // Encuentra el elemento span que contiene la tasa de cambio
  const priceSpan = await page.$('.price-text.change-plus');

  // Extrae el texto del elemento span
  const priceText = await page.evaluate(element => element.textContent, priceSpan);

  console.log(`Precio: ${priceText}`);

  await browser.close();
})();
