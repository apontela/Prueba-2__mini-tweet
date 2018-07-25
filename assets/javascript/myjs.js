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
})