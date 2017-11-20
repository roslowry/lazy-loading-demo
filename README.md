**** Lazily-Loading Ads ****

This serves as a demonstration for creating a website that "lazily loads" images using vanilla JavaScript. That is, any images that appear on the page will only load when the user scrolls to that part of the page. The purpose of this practice is to only load resources as they're needed, thereby creating a smoother user experience. This kind of methodology is critical for websites with high usership, where slower performance could cause impatient viewers to exit the site.

1. Open the "advertisement" folder and run "index.html" in the browser.
2. Before scrolling, please open the console, which will log which images (represented by their own respective 'id' attribute) appear in the current viewport and therefore have been logged to the page. When scrolling, the console will further log the id's of additional images as the come into the browser's viewport.

Approach:

  The index.html file includes various 'img' tags for each advertisement. They include an 'alt' attribute, which will result in those not having been scrolled into the user's viewport being represented by 'this will be an ad' (you can see this appear on the page by zooming out).

  The 'advertisement.js' file includes two event listener functions which listen to 'load' and 'scroll' events.

  - The 'load' event listener function iterates through each image represented by the 'lazy-load' class, assigning it a 'src' attribute of an iStockPhoto URL if that image is within the browser viewport (using the 'isInViewport' function), and a 'data-src' function of an iStockPhoto URL if that image is not within the browser viewport at the time the page is initially loaded. If the function ads a 'src' attribute to the image, it will also ad a 'loadedAdImage' property (assigning it to 'true') to that image, ensuring that URLs are not duplicatively loaded/reloaded when the user scrolls the page.

  - The 'scroll' event listener function also iterates through each image represented by the 'lazy-load' class, but only assigns the image a 'src' attribute if it hasn't been given one previously through the initial page load. The 'src' attribute will be given the value currently represented by the element's 'data-src' attribute, which holds the imageUrl.
