"""
Centris.ca Property Listing Automation
---------------------------------------
Automates browsing centris.ca, handles cookie consent,
scrapes property listings, and exports to CSV.

Usage:
    pip install -r requirements.txt
    playwright install chromium
    python centris_automation.py
"""

import csv
import re
import sys
from datetime import datetime
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout


BASE_URL = "https://www.centris.ca/fr/propriete~a-vendre"
OUTPUT_FILE = f"centris_listings_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
MAX_PAGES = 5  # Limit pages to scrape (set to 0 for all)


def accept_cookies(page):
    """Dismiss the cookie consent banner if present."""
    try:
        accept_btn = page.locator("button:has-text('Accepter et continuer')")
        accept_btn.wait_for(state="visible", timeout=8000)
        accept_btn.click()
        page.wait_for_timeout(1000)
        print("[+] Cookie consent accepted.")
    except PlaywrightTimeout:
        print("[*] No cookie banner found, continuing.")


def scrape_listings(page):
    """Extract property listing data from the current search results page."""
    listings = []

    # Wait for the property cards to load
    page.wait_for_selector("div.property-thumbnail-item", timeout=15000)
    cards = page.locator("div.property-thumbnail-item").all()

    for card in cards:
        try:
            # Price
            price_el = card.locator(".price span")
            price = price_el.inner_text().strip() if price_el.count() else "N/A"

            # Address
            address_el = card.locator(".address div")
            address_parts = address_el.all_inner_texts() if address_el.count() else []
            address = ", ".join(p.strip() for p in address_parts if p.strip())

            # Property type (from the category tag)
            type_el = card.locator(".category span")
            prop_type = type_el.inner_text().strip() if type_el.count() else "N/A"

            # Bedrooms
            bed_el = card.locator(".cac")
            bedrooms = bed_el.inner_text().strip() if bed_el.count() else "N/A"

            # Bathrooms
            bath_el = card.locator(".sdb")
            bathrooms = bath_el.inner_text().strip() if bath_el.count() else "N/A"

            # Listing URL
            link_el = card.locator("a.property-thumbnail-summary-link")
            href = link_el.get_attribute("href") if link_el.count() else ""
            listing_url = f"https://www.centris.ca{href}" if href and not href.startswith("http") else href

            # Photo count
            photo_el = card.locator(".photo-count")
            photos = photo_el.inner_text().strip() if photo_el.count() else "0"

            listings.append({
                "price": price,
                "address": address,
                "type": prop_type,
                "bedrooms": bedrooms,
                "bathrooms": bathrooms,
                "photos": photos,
                "url": listing_url,
            })
        except Exception as e:
            print(f"[!] Skipping a card due to error: {e}")
            continue

    return listings


def go_to_next_page(page):
    """Click the next page button. Returns True if navigation succeeded."""
    try:
        next_btn = page.locator("li.next a")
        if next_btn.count() == 0 or next_btn.is_disabled():
            return False
        next_btn.click()
        page.wait_for_load_state("networkidle", timeout=15000)
        return True
    except (PlaywrightTimeout, Exception):
        return False


def save_to_csv(listings, filename):
    """Write listings to a CSV file."""
    if not listings:
        print("[!] No listings to save.")
        return

    fieldnames = ["price", "address", "type", "bedrooms", "bathrooms", "photos", "url"]
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(listings)
    print(f"[+] Saved {len(listings)} listings to {filename}")


def main():
    all_listings = []
    page_num = 1

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)  # Set True for headless
        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            locale="fr-CA",
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/125.0.0.0 Safari/537.36"
            ),
        )
        page = context.new_page()

        print(f"[*] Navigating to {BASE_URL}")
        page.goto(BASE_URL, wait_until="domcontentloaded", timeout=30000)
        page.wait_for_timeout(3000)

        # Handle cookie consent
        accept_cookies(page)

        while True:
            print(f"\n[*] Scraping page {page_num}...")
            try:
                listings = scrape_listings(page)
                all_listings.extend(listings)
                print(f"    Found {len(listings)} listings (total: {len(all_listings)})")
            except PlaywrightTimeout:
                print(f"[!] Timed out loading page {page_num}, stopping.")
                break

            if MAX_PAGES and page_num >= MAX_PAGES:
                print(f"[*] Reached page limit ({MAX_PAGES}).")
                break

            if not go_to_next_page(page):
                print("[*] No more pages.")
                break

            page_num += 1
            page.wait_for_timeout(2000)  # polite delay

        browser.close()

    save_to_csv(all_listings, OUTPUT_FILE)
    print(f"\n[*] Done! {len(all_listings)} listings scraped across {page_num} page(s).")


if __name__ == "__main__":
    main()
