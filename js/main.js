function showPopAndMove(popId) {
    var pop = document.getElementById(popId);
    if (pop.style.display === "none" || pop.style.display === "") {
        pop.style.display = "flex";
        moveText();
    } else {
        pop.style.display = "none";
        resetText();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const sairButtons = document.querySelectorAll(".fechar");

    sairButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const popId = button.parentElement.parentElement.id;
            fecharPop(popId);
        });
    });
});

function fecharPop(popId) {
    var pop = document.getElementById(popId);
    pop.style.display = "none";
}
$("#button").click(function() {
    $('html, body').animate({
      scrollTop: $("#anchor").offset(100000).top
    }, 2000);
  });