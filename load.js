function loadFragment(containerId, url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(containerId).innerHTML = this.responseText;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
  loadFragment("site-header", "header.html");
  loadFragment("site-footer", "footer.html");
});
