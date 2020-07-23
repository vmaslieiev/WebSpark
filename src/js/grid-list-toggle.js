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
})