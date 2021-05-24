window.onload = function() {
  //write your code here

  document.querySelector("#domains").innerHTML = newDomains();

  function newDomains() {
    let pro = ["the", "our"]; //i
    let adj = ["great", "big"]; //j
    let non = ["jogger", "racoon"]; //k
    let dom = [".com", ".net", ".es"]; //l

    let Domains = "";

    for (var i = 0; i < pro.length; i++) {
      for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < non.length; k++) {
          for (var l = 0; l < dom.length; l++) {
            Domains =
              Domains + ("<li>" + pro[i] + adj[j] + non[k] + dom[l] + "</li>");
          }
        }
      }
    }
    return Domains;
  }
};
