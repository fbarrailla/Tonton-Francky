import { test, expect } from '@playwright/test';

// Static pages — home uses h2, others use h1
const staticPages = [
  { path: '/voyages',   heading: /voyage/i,        tag: 'h1' },
  { path: '/cuisine',   heading: /cuisine/i,        tag: 'h1' },
  { path: '/replays',   heading: /replay/i,         tag: 'h1' },
  { path: '/a-propos',  heading: /propos|about/i,   tag: 'h1' },
  { path: '/contact',   heading: /contact/i,         tag: 'h1' },
];

// Voyage detail pages
const voyageSlugs = [
  'ha-noi', 'hoi-an', 'da-nang', 'ha-long', 'saigon', 'da-lat',
  'nha-trang', 'can-tho', 'con-dao', 'dak-lak', 'phan-thiet', 'bien-hoa',
  'taipei', 'koh-rong', 'penang', 'cork', 'prague', 'venice', 'bordeaux',
  'paris', 'tam-dao', 'chang-mai', 'siem-reap',
];

// Cuisine detail pages
const cuisineSlugs = ['pho-bo', 'bun-cha', 'nems', 'banh-mi', 'hot-pot'];

test.describe('Static pages', () => {
  test('/ home page loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h2').first()).toBeVisible({ timeout: 10000 });
  });

  for (const { path, heading, tag } of staticPages) {
    test(`${path} loads and shows a heading`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator(tag).first()).toBeVisible();
      await expect(page.locator(tag).first()).toHaveText(heading);
    });
  }
});

test.describe('Navbar', () => {
  test('navigation links are present on home', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /voyage/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /cuisine/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i }).first()).toBeVisible();
  });

  test('clicking Voyages navigates correctly', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /voyage/i }).first().click();
    await expect(page).toHaveURL('/voyages');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('clicking Cuisine navigates correctly', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /cuisine/i }).first().click();
    await expect(page).toHaveURL('/cuisine');
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

test.describe('Voyage detail pages', () => {
  for (const slug of voyageSlugs) {
    test(`/voyages/${slug} loads with slideshow`, async ({ page }) => {
      await page.goto(`/voyages/${slug}`);
      await expect(page.locator('h1').first()).toBeVisible();
      // Main slideshow image
      await expect(page.locator('img').first()).toBeVisible();
      // Prev/Next buttons
      await expect(page.getByRole('button', { name: /précédente|previous/i })).toBeVisible();
      await expect(page.getByRole('button', { name: /suivante|next/i })).toBeVisible();
    });
  }
});

test.describe('Voyage slideshow interactions', () => {
  test('next button advances the photo', async ({ page }) => {
    await page.goto('/voyages/ha-noi');
    const counter = page.locator('text=/1 \\//');
    await expect(counter).toBeVisible();
    await page.getByRole('button', { name: /suivante|next/i }).click();
    await expect(page.locator('text=/2 \\//').first()).toBeVisible();
  });

  test('thumbnail click jumps to correct photo', async ({ page }) => {
    await page.goto('/voyages/ha-noi');
    // Click the 3rd thumbnail
    const thumbs = page.locator('button img[alt^="thumb"]');
    await thumbs.nth(2).click();
    await expect(page.locator('text=/3 \\//').first()).toBeVisible();
  });
});

test.describe('Cuisine detail pages', () => {
  for (const slug of cuisineSlugs) {
    test(`/cuisine/${slug} loads with content`, async ({ page }) => {
      await page.goto(`/cuisine/${slug}`);
      await expect(page.locator('h1').first()).toBeVisible();
      // Back link
      await expect(page.getByRole('link', { name: /recette/i })).toBeVisible();
    });
  }
});

test.describe('Cuisine back navigation', () => {
  test('back button returns to /cuisine', async ({ page }) => {
    await page.goto('/cuisine/pho-bo');
    await page.getByRole('link', { name: /recette/i }).click();
    await expect(page).toHaveURL('/cuisine');
  });
});

test.describe('404 page', () => {
  test('unknown route shows 404', async ({ page }) => {
    await page.goto('/this-does-not-exist');
    await expect(page.locator('h1, h2').first()).toBeVisible();
    // Should show some error indication
    await expect(page.locator('body')).toContainText(/404|introuvable|not found/i);
  });
});

test.describe('Language switcher', () => {
  test('switching to English changes heading text', async ({ page }) => {
    await page.goto('/voyages');
    const frHeading = await page.locator('h1').first().textContent();
    // Find the EN toggle button
    const enBtn = page.getByRole('button', { name: /en/i });
    if (await enBtn.isVisible()) {
      await enBtn.click();
      const enHeading = await page.locator('h1').first().textContent();
      expect(enHeading).not.toBe(frHeading);
    }
  });
});
