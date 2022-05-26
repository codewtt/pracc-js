const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

books.forEach(index => {
    if (index.rented === 0) {
        return console.log(true);}
    else {
        return console.log(false)
}});


console.log("Quel est livre le plus emprunté ?");

books.sort(function compare(a, b) {
    if (a.rented > b.rented)
       return -1;
    if (a.rented < b.rented)
       return 1;
    return 0;
  });
console.log(books[0]);

console.log("le livre le moins emprunté est :");

books.sort(function compare(a, b) {
    if (a.rented < b.rented)
       return -1;
    if (a.rented > b.rented)
       return 1;
    return 0;
});
console.log(books[0]);




console.log("Trouve le livre avec l'ID: 873495")
    let resultat = books.find(index => index.id === 873495);

console.log(resultat);


console.log("Supprime le livre avec l'ID: 133712")
    let books_to_delete = books.find(element => element.id = 133712);

books.splice(books_to_delete, 1);

console.log(books);