console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
myCollection = []

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
};

collection.push(album);

return album;
  

  }
  let album1 = addToCollection(myCollection, 'bad guy', 'Billie Eilish', 2021)
  let album2 = addToCollection(myCollection, 'Love Me', 'Lil Wayne', 2016)
  let album3 = addToCollection(myCollection, 'All Summer Long', 'Kid Rock', 2007)
  let album4 = addToCollection(myCollection, 'Ritmo', 'Raffla Fl', 2019);
  let album5 = addToCollection(myCollection, 'Amazing', 'Kanye West', 2012);
  let album6 = addToCollection(myCollection, 'Down', 'Marian Hill', 2018);












// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
