const comic = document.getElementById('comic');
if(comic) {
    let p = document.createElement('p');
    p.append(comic.children[0].title);
    comic.append(p);
}