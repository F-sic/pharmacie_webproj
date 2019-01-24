$(document).ready(function () {
  $.getJSON("http://localhost:8888/api/products?low=30")
    .done(function (data, status) {
      if (data[0]) { $(".lowProduct").show() }
      else { $(".lowProduct").hide() }
      $.each(data, function (i, obj) {
        // var com = '<tr> <td>' + obj.name + ' </td><td>  ' + obj.quantity + '</td></tr>'
        // var com = '<tr> <td>' + obj.name + ' </td><td>  ' + obj.quantity + '</td>'
        //  var but = $('<td><a> + </a></td></tr>')
        var com = '<span>' + obj.name + ' Quantity :  ' + obj.quantity
        var but = $('<button> Order </button></span> </br>')
        but.on('click', function (event) { order(obj, 100) });
        $('.listlp').append(com).append(but)
      })
    });



  $(".getAllProducts").click(function () {
    $.getJSON("http://localhost:8888/api/products/")
      .done(function (data, status) {
        $(".listAll").html("")
        $.each(data, function (i, obj) {
          //var com = $('<tr> <td>' + obj.name + ' </td><td>  ' + obj.quantity + '</td></tr>')
          // var but = $('<td><a> + </a></td></tr>')
          var com = '<span>' + obj.name + ' <i>ID: ' + obj.PID + ' </i> Stock :  ' + obj.quantity + ', <b>PRIX: ' + obj.price + '€</b> '
          var but1 = $('<button> Sell </button></span>')
          var but2 = $('<button> Order </button></span>')
          var but3 = $('<button> Delete </button></span> <br>')
          but1.on('click', function (event) { order(obj, -1, false) })
          but2.on('click', function (event) { order(obj, 100, true) })
          but3.on('click', function (event) { del(obj) })
          $('.listAll').append(com).append(but1).append(but2).append(but3)
        })
      }
      );
  });


  $(".getById").click(function () {
    var id = $(".inputId").val();
    console.log(id);
    if (id.length != 0) {
      $.getJSON("http://localhost:8888/api/products/" + id)
        .done(function (data, status) {
          $(".elementFind").html("");
          if (data.length == 0) { $('.elementFind').append('Aucun produit ne correspond a cet ID') }
          $.each(data, function (i, obj) {
            var com = '<span>' + obj.name + ' <i>ID: ' + obj.PID + ' </i> Stock :  ' + obj.quantity + ', <b>PRIX: ' + obj.price + '€</b> </br> About:' + obj.about + '</br>'
            var but1 = $('<button> Sell </button></span>')
            var but2 = $('<button> Order </button></span>')
            var but3 = $('<button> Delete </button></span> <br>')
            but1.on('click', function (event) { order(obj, -1, false) })
            but2.on('click', function (event) { order(obj, 100, true) })
            but3.on('click', function (event) { del(obj) })
            $('.elementFind').append(com).append(but1).append(but2).append(but3)
          })
        }
        );
    } else { alert('Entrer un id ex:123') }

  });

  $(".getByString").click(function () {
    var search = $(".searchString").val();
    console.log(search);
    $(".results").html("");
    if (search.length != 0) {
      $.getJSON("http://localhost:8888/api/products", { st: search })
        .done(function (data, status) {
          console.log('ok');
          if (data.length == 0) { $('.results').append('Aucun produit ne correspond a cette recherche') }
          $.each(data, function (i, obj) {
            var com = '<span>' + obj.name + ' <i>ID: ' + obj.PID + ' </i> Stock :  ' + obj.quantity + ', <b>PRIX: ' + obj.price + '€</b> </br> About:' + obj.about + '</br>'
            var but1 = $('<button> Sell </button></span>')
            var but2 = $('<button> Order </button></span>')
            var but3 = $('<button> Delete </button></span> <br>')
            but1.on('click', function (event) { order(obj, -1, false) })
            but2.on('click', function (event) { order(obj, 100, true) })
            but3.on('click', function (event) { del(obj) })
            $('.results').append(com).append(but1).append(but2).append(but3)
          })
        }
        );
    } else { alert('Entrer une chaine valide') }

  });


  $(".addNew").click(function () {
    var Aname = $(".addName").val();
    var Aprice = $(".addPrice").val();
    var Aabout = $(".addAbout").val();
    var APID = $(".addPID").val();
    var qty = $(".addQuantity").val();
    $(".added").html("");
    if (APID.length != 0) {
      $.ajax({
        url: 'http://localhost:8888/api/products/',
        type: 'POST',
        processData: false,
        contentType: 'application/json',
        data: '{"PID":"' + APID + '","name":"' + Aname + '","quantity":"' + qty + '","about":"' + Aabout + '","price":"' + Aprice + '"}',
        success: function (obj) {
          var com = '<span>' + obj.name + ' <i>ID: ' + obj.PID + ' </i> Stock :  ' + obj.quantity + ', <b>PRIX: ' + obj.price + '€</b> </br> About:' + obj.about + '</br>'
          $('.added').append(com)//.append(but1).append(but2).append(but3)
        }
      })
    } else { alert('Entrer une chaine valide') }
  });



});


function order(obj, order, bool) {
  obj.quantity += order
  $.ajax({
    url: 'http://localhost:8888/api/products/' + obj.PID,
    type: 'PUT',
    processData: false,
    contentType: 'application/json',
    data: JSON.stringify(obj),
    success: function (response) {
      if (bool == true) {
        alert('Commande de ' + order + ' unités de ' + obj.name)
      } else { alert('Vente de ' + order * -1 + ' unités de ' + obj.name) }
      location.reload();
    }
  });
}

function del(obj) {
  $.ajax({
    url: 'http://localhost:8888/api/products/' + obj.PID,
    type: 'DELETE',
    processData: false,
    contentType: 'application/json',
    success: function (response) {
      alert(obj.name + ' supprimé de l\'inventaire')
      location.reload();
    }
  });
}
