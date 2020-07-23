$(function ($) {
  const datepikerFrom = $('#datepicker-from');
  const datepikerTo = $('#datepicker-to');
  const datepickerClear = $('.datepicker-clear');
  const datepickerCalIcon = $('#cal-icon');

  datepikerFrom.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat: 'dd_mm_yy' 
  })
  datepikerTo.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat: 'dd_mm_yy'
  })

  datepickerClear.on('click', function(e) {
    e.preventDefault()
    datepikerFrom.val('');
    datepikerTo.val('');
  })

  datepickerCalIcon.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat: 'dd_mm_yy'
  })
});
// Toggle from list to grid

$(function($) {
  const grid = $('#grid-id');
  const listOn = $('.list__on');
  const gridOn = $('.grid__on');

  grid.on('click', function(e) {
    e.preventDefault();
    listOn.addClass('none-active');
    gridOn.addClass('active');
  })
})

// 

$(function($) {
  const list = $('#list-id');
  const gridOn = $('.grid__on');
  const listOn = $('.list__on');

  list.on('click', function(e) {
    e.preventDefault();
    gridOn.removeClass('active');
    listOn.removeClass('none-active');
  })
});
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
});