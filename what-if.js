const comics = document.getElementsByClassName('illustration');
if(comics) {
    for(let i=0;i<comics.length; i++) {
        let c = document.createElement('center');
        let ital = document.createElement('i');
        ital.style.fontSize = "small";
        ital.append('"' + comics[i].title + '"');
        c.append(ital);
        comics[i].parentElement.insertBefore(c, comics[i].nextSibling);
        comics[i].parentElement.insertBefore(document.createElement('br'), c.nextSibling)
    }
}