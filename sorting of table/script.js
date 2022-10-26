
var myArray = [
    { 'slno': '1', 'productname': 'Nokia 1100', 'mrp': '1700', 'discount': '10', 'price': '0' },
    { 'slno': '2', 'productname': 'Black berry', 'mrp': '50000', 'discount': '8', 'price': '0' },
    { 'slno': '3', 'productname': 'Iphone 14 pro', 'mrp': '150000', 'discount': '20', 'price': '0' },
    { 'slno': '4', 'productname': 'lg', 'mrp': '40000', 'discount': '12', 'price': '0' },
    { 'slno': '5', 'productname': 'Micromax', 'mrp': '12000', 'discount': '0', 'price': '0' },
    { 'slno': '6', 'productname': 'Redmi note10', 'mrp': '23000', 'discount': '8', 'price': '0' },
]

$('th').on('click',function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    
    if(order == "desc"){
        $(this).data('order','asc')
        myArray = myArray.sort((a, b) => a[column] > b[column]? 1 : -1)
    }
    else{
        $(this).data('order','desc')
        myArray = myArray.sort((a, b) => a[column] < b[column]? 1 : -1)
    }
    buildTable(myArray)
})

buildTable(myArray);
function buildTable(data) {
    var table = document.getElementById('myTable');
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
        <td>${data[i].slno}</td>
        <td>${data[i].productname}</td>
        <td>${data[i].mrp}</td>
        <td>${data[i].discount}</td>
        <td>${data[i].price}</td>
  </tr>`
        table.innerHTML += row
        }
}