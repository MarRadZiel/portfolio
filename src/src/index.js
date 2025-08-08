require('./styles.scss');
require('./localization.js');

var Flickity = require('flickity');
require('flickity-imagesloaded');

var $carousels = new Array();

// Initialize section carousels
var $sectionCarousels = getAll('.section-carousel');
if ($sectionCarousels.length > 0) {
    $sectionCarousels.forEach(function ($el) {
        // Initialize each carousel one time only
        if ($carousels.length === 0) {
            $carousels.push(initCarousel($el.id, adaptiveHeight=false, autoPlay=true, wrapAround=true, setGallerySize=false, flex=true, carouselEl=$el));
        }
        else {
            var index = $carousels.findIndex(c => c.element.id == $el.id);
            if (index === -1) {
                $carousels.push(initCarousel($el.id, adaptiveHeight=false, autoPlay=true, wrapAround=true, setGallerySize=false, flex=true, carouselEl=$el));
            }
        }
    });
}

// Initialize collapsibles
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    });
}

// Modals

var rootEl = document.documentElement;
var $modals = getAll('.modal');

var $modalTriggers = getAll('.modal-trigger');
if ($modalTriggers.length > 0) {
    $modalTriggers.forEach(function ($el) {
        $el.addEventListener('click', function () {
            var target = $el.dataset.target;
            openModal(target);
        });
    });
}

var $modalCloses = getAll('.modal-card-head .delete, .modal-card-foot .modal-close-button');
if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            closeModals();
        });
    });
}


async function fetchVimeoTitle(videoId) {
  const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.title;
}

async function loadAllVimeoTitles() {
  const wrappers = document.querySelectorAll('.vimeo-wrapper');

  for (const wrapper of wrappers) {
    const videoId = wrapper.dataset.videoid;
    const titleElement = wrapper.querySelector('.vimeo-title');

    try {
      const title = await fetchVimeoTitle(videoId);
      titleElement.textContent = title;
    } catch (error) {
      //titleElement.textContent = 'Nie udało się pobrać tytułu';
      //console.error(`Błąd dla video ${videoId}:`, error);
    }
  }
}

document.addEventListener('DOMContentLoaded', loadAllVimeoTitles);



function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
    var carouselId = target + '-carousel';

    var $el = document.querySelector('#' + carouselId);
    if ($el) {
        // Initialize each carousel one time only
        if ($carousels.length === 0) {
            $carousels.push(initCarousel(carouselId, adaptiveHeight=false, autoPlay=true, wrapAround=true, setGallerySize=false, flex=true, carouselEl=$el));
        }
        else {
            var index = $carousels.findIndex(c => c.element.id == carouselId);
            if (index === -1) {
                $carousels.push(initCarousel(carouselId, adaptiveHeight=false, autoPlay=true, wrapAround=true, setGallerySize=false, flex=true, carouselEl=$el));
            }
        }
    }
}

function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
        // Pause videos
        var iframes = $el.querySelectorAll("iframe");
        for (const iframe of iframes) {
            if (iframe.contentWindow) {
                var player = new Vimeo.Player(iframe);
                player.pause();
            }
        }
    });
}

// Functions

function initCarousel(id, adaptiveHeight=true, autoplay=false, wrapAround=false, setGallerySize=true, flex=false, carouselEl=null) {
    if(flex && carouselEl!=null){
        const flckty = new Flickity('#' + id, {
            on: {
                ready: () => {
                    carouselEl.classList.add('flexy-carousel');
                }
            },
            freeScroll: false,
            imagesLoaded: false,
            autoPlay: autoplay,
            wrapAround: wrapAround,
            setGallerySize: setGallerySize,
            lazyLoad: true,
            adaptiveHeight: adaptiveHeight // https://github.com/metafizzy/flickity/issues/11
        });
        flckty.on('select', function(index) {
            var iframes = flckty.element.querySelectorAll("iframe");
            for (const iframe of iframes) {
                if (iframe.contentWindow) {
                    var player = new Vimeo.Player(iframe);
                    player.pause();
                }
            }
        });
        return flckty;
    }
    else {
        return new Flickity('#' + id, {
            freeScroll: false,
            imagesLoaded: false,
            autoPlay: autoplay,
            wrapAround: wrapAround,
            setGallerySize: setGallerySize,
            lazyLoad: true,
            adaptiveHeight: adaptiveHeight // https://github.com/metafizzy/flickity/issues/11
        });
    }
}

function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

function resizeCarousels(){
    flkty.resize();
}

function select_language(language) {
    $("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });
}