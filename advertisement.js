var ads = document.getElementsByClassName('lazy-load')
var stockAds = [
  "https://media.istockphoto.com/photos/facebook-notifications-picture-id458732563",
  "https://media.istockphoto.com/photos/blank-billboard-xxl-picture-id168374156",
  "https://media.istockphoto.com/photos/brand-strategy-picture-id480144634",
  "https://media.istockphoto.com/photos/times-square-billboard-on-the-buildings-picture-id499872775",  "https://media.istockphoto.com/photos/facebook-notifications-picture-id458732563",
  "https://media.istockphoto.com/photos/blank-billboard-xxl-picture-id168374156",
  "https://media.istockphoto.com/photos/brand-strategy-picture-id480144634",
  "https://media.istockphoto.com/photos/times-square-billboard-on-the-buildings-picture-id499872775"
]

var loadedAdElements = [];

addEventListener('load', function(){
  var currentAd, currentStockAd;
  Array.prototype.forEach.call(ads, function(currentAd, index){
    currentStockAd = stockAds[index];
    currentAd.id = index
    currentAd['data-src'] = currentStockAd
    if (isInViewport(currentAd)) {
      currentAd.src = currentStockAd;
      currentAd.loadedAdImage = true;
      console.log('Ad ' + currentAd.id + ' is loading to the DOM on the initial page load.')
    } else {
      currentAd['data-src'] = currentStockAd
      loadedAdElements.push(currentAd.id)
    }
  })
})

addEventListener('scroll', function(){
  Array.prototype.forEach.call(ads, function(currentAd, index){
    if (isInViewport(currentAd) && (!currentAd.loadedAdImage)) {
      console.log('Ad ' + currentAd.id + ' is lazily loading to the DOM!')
      var imageUrl = currentAd['data-src'];
      currentAd.src = imageUrl
      currentAd.loadedAdImage = true;
    }
  })
})

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
