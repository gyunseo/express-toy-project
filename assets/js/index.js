$('#add_user').submit((event) => {
  alert('Data Inserted Successfully!');
});

$('#update_user').submit(function (event) {
  let unindexed_array = $(this).serializeArray();
  event.preventDefault();
  console.log(unindexed_array);
});
