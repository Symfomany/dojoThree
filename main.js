function countPhrase() {
  const phrase = "";

  // your code here
  const stdin = process.openStdin();

  console.log("Ma question préférée?");

  //ecouter l'entrée utilisateur
  stdin.addListener("data", answer => {
    let reponse = answer.toString();
    let tabl = [];
    let compteur = 0;

    let obj = {};

    //console.log(reponse);
    for (const element of reponse) {
      tabl.push(element);
      //console.log(tabl);
      obj[element] = 0;
    }
    console.log(obj);

    for (const element of reponse) {
      let lettre = element;
      for (let i = 0; i < element.length; i++) {
        //lettre = tabl[i];
        //console.log(element.indexOf(lettre));
        // if (lettre == tabl[i]) {
        obj[lettre] = 1;
        compteur += 1;
        //console.log(compteur);
        // }
        //compteur = 0;
      }
      console.log(obj);

      // for (let i = 0; i < reponse.length; i++) {
      //   if (tabl[i] === element) {
      //     compteur += 1;
      //     //         console.log(compteur);
      //   }
      // }
    }

    // console.log(reponse[0]);
  });

  return {};
}
countPhrase();
module.exports = countPhrase;
