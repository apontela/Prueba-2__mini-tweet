$(function () {

    $(".tweet-generator__perfil").submit(function(e) {
        let user_name = $("#nombre-de-usuario").val();
        let user_image = function previewFile() {
            var preview = document.querySelector('img');
            var file    = document.querySelector('input[type=file]').files[0];
            var reader  = new FileReader();
          
            reader.onloadend = function () {
              preview.src = reader.result;
            }
          
            if (file) {
              reader.readAsDataURL(file);
            } else {
              preview.src = "";
            }
          };
        e.preventDefault();
        $(".nombre-de-usuario").text(user_name);
        $(".imagen-de-usuario").attr("src",user_image);
        $(".plantilla-tweets").css("display", "block");
    })
    $(".imagen-de-usuario").on("load", function() {
        let source = ($(".imagen-de-usuario").attr("src"));
        $(".plantilla-publicacion:last-child .imagen-de-usuario__tweet").attr("src",source);
    })
    $(".publicar-tweet").submit(function (e) {
        e.preventDefault();
        $(".plantilla-publicacion:last-child").clone().css("display", "block").prependTo(".main__tweets").hide().fadeIn(300);
        let texto_tweet = $("#texto-tweet").val();
        $(".plantilla-publicacion:first-child .publicacion__text p").text(texto_tweet);
        let imagen_primer_tweet = $(".plantilla-publicacion:last-child .imagen-de-usuario__tweet").attr("src");
        $(".plantilla-publicacion:first-child .imagen-de-usuario__tweet").attr("src", imagen_primer_tweet);
        let user_name_tweet = $(".nombre-de-usuario").text();
        $(".plantilla-publicacion:first-child .nombre-de-usuario__tweet").text(user_name_tweet);
        $("#texto-tweet").val(null);
    })
    $(".main__tweets").on("click", ".fa-heart", this, function () {
        let counter = parseInt($(this).parent().find("small").text());
        $(this).css("color", "#EE2E31");
        counter = counter + 1;
        $(this).parent().find("small").text(counter);
    })
    $(".main__tweets").on("click", ".fa-trash", this, function () {
        let confirma = confirm("¿Estás seguro de eliminar éste mensaje?");
        if (confirma == false) {
            return
        }
        $(this).parent().parent().remove();
    })
    
})