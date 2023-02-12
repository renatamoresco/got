async function fetchCharacters() {
    const url = `https://thronesapi.com/api/v2/Characters`;
    const dados = await fetch(url);
    const characters = await dados.json();
  
    const list = document.getElementById("list");
    for (const character of characters) {
      const listItem = document.createElement("li");
      // add an class to the list item
      listItem.classList.add("list-item");
  
      const link = document.createElement("a");
      link.href = `./pages/character.html?id=${character.id}`;

      link.textContent = `${character.firstName} * ${character.lastName}`;

      listItem.appendChild(link);
      list.appendChild(listItem);
    }
  
    // //If next page exists, create a button to fetch it.
    // if (characters.next) {
    //   const nextPage = page + 1;
    //   const button = document.createElement("button");
    //   button.textContent = "Load More";
    //   button.onclick = () => fetchCharacters(nextPage);
    //   list.appendChild(button);
    // }
  }
  // async function fetchCharacterData() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const url = urlParams.get("url");
  //   const dados = await fetch(url);
  //   const character = await dados.json();
  
  //   const name = document.getElementById("name");
  //   name.textContent = character.name;
  // }
  async function fetchCharacterData() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const dados = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
    const character = await dados.json();
  
    const fullName = document.getElementById("fullName");
    fullName.textContent = character.fullName;

    const title = document.getElementById("title");
    title.textContent = character.title;
  
    const family = document.getElementById("family");
    family.textContent = character.family;
  
    
    const image = document.getElementById("image");
    image.src = character.imageUrl;

  }









// var elementoUm = document.createElement(Name);
// var elementoDois = document.createElement(House);
// var elementoTres = document.createElement(Title);


// const preencherFormulario = (personagem) => {
//     document.getElementById("name").innerHTML = personagem.firstName;
//     document.getElementById("title").innerHTML = personagem.title;
//     document.getElementById("family").innerHTML = personagem.family
//     document.getElementById("profileImage").src = personagem.imageUrl;
// } 

// const preencherFormulario1 = (personagem1) => {
//     document.getElementById("name1").innerHTML = personagem1.firstName;
//     document.getElementById("title1").innerHTML = personagem1.title;
//     document.getElementById("family1").innerHTML = personagem1.family
//     document.getElementById("profileImage1").src = personagem1.imageUrl;
// }

// const preencherFormulario2 = (personagem2) => {
//     document.getElementById("name2").innerHTML = personagem2.firstName;
//     document.getElementById("title2").innerHTML = personagem2.title;
//     document.getElementById("family2").innerHTML = personagem2.family
//     document.getElementById("profileImage2").src = personagem2.imageUrl;
// }

// const preencherFormulario3 = (personagem3) => {
//     document.getElementById("name3").innerHTML = personagem3.firstName;
//     document.getElementById("title3").innerHTML = personagem3.title;
//     document.getElementById("family3").innerHTML = personagem3.family
//     document.getElementById("profileImage3").src = personagem3.imageUrl;
// }

// const preencherFormulario4 = (personagem4) => {
//     document.getElementById("name4").innerHTML = personagem4.firstName;
//     document.getElementById("title4").innerHTML = personagem4.title;
//     document.getElementById("family4").innerHTML = personagem4.family
//     document.getElementById("profileImage4").src = personagem4.imageUrl;
// }

// const preencherFormulario5 = (personagem5) => {
//     document.getElementById("name5").innerHTML = personagem5.firstName;
//     document.getElementById("title5").innerHTML = personagem5.title;
//     document.getElementById("family5").innerHTML = personagem5.family
//     document.getElementById("profileImage5").src = personagem5.imageUrl;
// }




// async function buscar() { 
//     const url = `https://thronesapi.com/api/v2/Characters/0`;
//         const dados = await fetch(url);
//         const personagem = await dados.json();
//         preencherFormulario(personagem);

//         const url1 = `https://thronesapi.com/api/v2/Characters/1`;
//         const dados1 = await fetch(url1);
//         const personagem1 = await dados1.json();
//         preencherFormulario1(personagem1);

//         const url2 = `https://thronesapi.com/api/v2/Characters/2`;
//         const dados2 = await fetch(url2);
//         const personagem2 = await dados2.json();
//         preencherFormulario2(personagem2);

//         const url3 = `https://thronesapi.com/api/v2/Characters/3`;
//         const dados3 = await fetch(url3);
//         const personagem3 = await dados3.json();
//         preencherFormulario3(personagem3);

//         const url4 = `https://thronesapi.com/api/v2/Characters/4`;
//         const dados4 = await fetch(url4);
//         const personagem4 = await dados4.json();
//         preencherFormulario4(personagem4);

//         const url5 = `https://thronesapi.com/api/v2/Characters/5`;
//         const dados5 = await fetch(url5);
//         const personagem5 = await dados5.json();
//         preencherFormulario5(personagem5);

// }       