var data = [
    { "id": "1", "name": "Tandori Flame", "location": "Brampton", "type": "Debit", "value":120, "month": 1 },
    { "id": "2", "name": "Indian Sweet House", "location": "Misssisauga", "type": "Debit", "value": 80,"month": 2 },
    { "id": "3", "name": "Sawan South Indian Restaurant", "location": "Brampton", "type": "Debit", "value": 130,"month": 4 },
    { "id": "4", "name": "Rent Deposit", "location": "Toronto", "type": "Credit", "value": 1300,"month": 1 },
    { "id": "5", "name": "Simply South ( Vegetarian )", "location": "Waterloo", "type": "Debit", "value": 45,"month": 1 },
    { "id": "6", "name": "Rent Deposit", "location": "Toronto", "type": "Credit", "value": 1350,"month": 2 },

];




$(document).ready(function(){
  data.forEach(function(item)
  {
    var element = $('<div class="headings">'+ item.name + '</div> <div class="items">' + item.location + '</div>' +'<div class types>' + item.value +'</div>' + '<div class months>' + item.month + '</div>');
   $("body").append(element);



 });

});
for (var key in arrData) {
        var name = data[key].name;
        var loc = data[key].loc;
        var type = data[key].type;
        var month = data[key].month;
        var value = data[key].value;
        var badge = document.createElement('div');
        badge.className = 'badge';
        var htmlStr =
            '<div>' + name +
            '<small class="location">' + loc + '</small>' + '</div>';
        if (type == 'Credit') {
            htmlStr = htmlStr + '<p class="type--credit"> $' + value + '</p>';
        } else {
            htmlStr = htmlStr + '<p class="type--debit"> $' + value + '</p>';
        }
        badge.innerHTML = htmlStr;
        document.getElementById("dashboard--transaction--list").appendChild(badge);
    }
