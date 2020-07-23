$(function($) {
  const gridOff = $('.grid__off');
  const galleryOn = $('.gallery');
  const listOff = $('.list__off');
  const gridGalleryOn = $('.gallery-grid');

  gridOff.on('click', function(e) {
    e.preventDefault();

    galleryOn.addClass('ds-none');
    gridGalleryOn.removeClass('ds-none');
  })

  listOff.on('click', function(e) {
    e.preventDefault();

    gridGalleryOn.addClass('ds-none');
    galleryOn.removeClass('ds-none');
  })
})