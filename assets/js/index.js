$('#add_user').submit((event) => {
  alert('Data Inserted Successfully!');
});

$('#update_user').submit((event) => {
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  console.log(unindexed_array);
});
