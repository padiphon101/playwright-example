import { test, expect } from '@playwright/test';

test('Verify The Internet homepage is displayed successfully', async ({ page }) => {

  // กำหนดเวลา Timeout ของ Test นี้เป็น 60 วินาที
  // (ค่า Default ของ Playwright คือ 30 วินาที)
  test.setTimeout(60000);

  // เปิดเว็บไซต์
  // waitUntil: 'domcontentloaded'
  // รอจน HTML โหลดเสร็จ ไม่ต้องรอรูปหรือ resource อื่น ๆ
  await page.goto(
    'https://the-internet.herokuapp.com/',
    {
      waitUntil: 'domcontentloaded'
    }
  );

  // ตรวจสอบว่า Title ของหน้าเว็บเป็น "The Internet"
  await expect(page).toHaveTitle('The Internet');

  // ตรวจสอบว่า Header <h1> แสดงผลบนหน้าเว็บ
  // หาก Element ยังไม่ขึ้น Playwright จะรอให้อัตโนมัติจนกว่าจะ Timeout
  await expect(
    page.locator('h1')
  ).toBeVisible();

});
