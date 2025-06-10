async function getData() {
  let json = [];

  for (let i = 1; i <= 162; i++) {
    const response = await fetch(`https://pkmncards.com/page/${i}/?s=type%3Apokemon&sort=date&ord=rev&display=text`);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const list = doc.getElementsByClassName("entry-content");

    for (let item of list) {
      let name = item.getElementsByClassName("name")[0].innerHTML;
      let hp = item.getElementsByClassName("hp")[0].innerHTML.split(" ")[0];
      let color = item.getElementsByClassName("color")[0].getElementsByTagName("abbr")[0].title;
      let stage = item.getElementsByClassName("stage")[0].innerHTML;
      let set = item.getElementsByClassName("release-meta")[0].getElementsByTagName("span")[0].innerHTML;

      json.push({
        name,
        hp,
        color,
        stage,
        set
      });
    }
  }

  const input = document.body.appendChild(document.createElement("input"));
  input.value = JSON.stringify(json);

  window.scrollTo(0, document.body.scrollHeight);
}

getData();
