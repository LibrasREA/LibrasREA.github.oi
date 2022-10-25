var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[0];

const palavras = [
   { nome: 'agenda' },
   { nome: 'bitcoin' },
   { nome: 'bug' },
   { nome: 'ciberataque' },
   { nome: 'cibersegurança' },
   { nome: 'cookies' },
   { nome: 'cyberbullying' },
   { nome: 'digital' },
   { nome: 'drone' },
   { nome: 'empresa' },
   { nome: 'engenharia' },
   { nome: 'fabrica' },
   { nome: 'google' },
   { nome: 'google classroom' },
   { nome: 'google forms' },
   { nome: 'google maps' },
   { nome: 'hardware' },
   { nome: 'hashtag' },
   { nome: 'internet' },
   { nome: 'instagram' },
   { nome: 'kindle' },
   { nome: 'link' },
   { nome: 'malware' },
   { nome: 'newsletter' },
   { nome: 'orkut' },
   { nome: 'pixel' },
   { nome: 'popup' },
   { nome: 'portal sophia' },
   { nome: 'pix' },
   { nome: 'print screen' },
   { nome: 'rede social' },
   { nome: 'site' },
   { nome: 'smart' },
   { nome: 'spam' },
   { nome: 'spotify' },
   { nome: 'streaming' },
   { nome: 'tecnologia' },
   { nome: 'tutorial' },
   { nome: 'virtual' },
   { nome: 'whatsapp' },
   { nome: 'wifi' },
   { nome: 'youtube' },
   { nome: 'zoom' },
]

const list = document.getElementById('list');

function setList(group) {
   clearList();

   for (palavra of group) {
      // const item = document.createElement('li');

      // item.classList.add('list-group-item');
      // console.log(document.createTextNode(palavra.nome));

      const text = document.createTextNode(palavra.nome);
      const link = document.createElement('a');

      link.innerHTML = `${palavra.nome}`;
      link.setAttribute('href', `${baseUrl}` + "palavras\\" + `${palavra.nome.charAt(0)}\\` + `${palavra.nome.replace(/ /g, "")}` + ".html");
      link.setAttribute('class', "dropdown-item");

      // link.setAttribute('title', `${palavra.nome}`);

      // link.appendChild(text);

      // item.appendChild(link);
      list.appendChild(link);
   }

   if (group.length == 0) {
      setNoResults();
   }
}

function clearList() {
   while (list.firstChild) {
      list.removeChild(list.firstChild);
   }

}

function setNoResults() {
   clearList();
   const link = document.createElement('a');
   // item.classList.add('list-group-item');
   link.innerHTML = "Sem resultados" + "<hr />" + "Ver todas as palavras";
   link.setAttribute('href', "listadepalavras.html");
   link.setAttribute('class', "dropdown-item");

   list.appendChild(link);
}

function getRelevancy(value, searchTerm) {
   console.log(value);
   console.log(value);
   if (value === searchTerm) {
      return 2;
   } else if (value.startsWith(searchTerm)) {
      return 1;
   } else {
      return 0;
   }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
   let value = event.target.value;
   if (value && value.trim().length > 0) {
      value = value.trim().toLowerCase();
      setList(palavras.filter((palavra) => {
         return palavra.nome.includes(value);
      }).sort((palavra1, palavra2) => {
         return getRelevancy(palavra2.nome, value) - getRelevancy(palavra1.nome, value);
      }));
   } else {
      clearList();
   }
});