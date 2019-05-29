
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.querySelector('#blah').setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
  }
  setTimeout(() => {
  var myImg = document.querySelector(".im");
  var realWidth = myImg.naturalWidth;
  if(realWidth < 600){
    alert("Select Another because Original width=" + realWidth);
  }
  else if(realWidth > 600 ){
    alert("Please crop the image because image width size is =" + realWidth);
  }
  else{
    alert("Image is of currect width");
  }
}, 1000);
}
