$('#add_user').submit((event) => {
  alert('Data Inserted Successfully!');
});

$('#update_user').submit(function (event) {
  let unindexed_array;
  let data;
  let request;

  event.preventDefault();

  unindexed_array = $(this).serializeArray();
  console.log(unindexed_array);
  data = {};
  $.map(unindexed_array, (n, i) => {
    data[n['name']] = n['value'];
  });
  console.log(data);
  request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: 'PUT',
    data: data,
  };

  $.ajax(request).done((response) => {
    alert('Data updated successfully!');
  });
});

if (window.location.pathname == '/') {
  $ondelete = $('.table tbody td a.delete');
  $ondelete.click(function () {
    let id;
    let request;
    id = $(this).attr('data-id');
    request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: 'DELETE',
    };

    if (confirm('Do you really want to delete this record?')) {
      $.ajax(request).done((response) => {
        alert('Data deleted successfully!');
        location.reload();
      });
    }
  });
}
