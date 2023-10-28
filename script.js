function showNike() {
    document.getElementById("questions").style.display = "block";
    document.getElementById("brandName").innerHTML = "Nike";
    document.getElementById("nikeShoe").style.display = "block";
    document.getElementById("adidasShoe").style.display = "none";
  }

  function showAdidas() {
    document.getElementById("questions").style.display = "block";
    document.getElementById("brandName").innerHTML = "Adidas";
    document.getElementById("nikeShoe").style.display = "none";
    document.getElementById("adidasShoe").style.display = "block";
  }

  function submitReview() {
    var quality = document.getElementById("quality").value;
    var design = document.getElementById("design").value;
    // Faça algo com os valores, como enviar para um banco de dados
    alert("Avaliação enviada com sucesso!");
  }