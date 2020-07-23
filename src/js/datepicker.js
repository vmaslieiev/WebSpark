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
})