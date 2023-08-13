//Elemento
const input = document.querySelector('input');
const lista = document.querySelector ('ul');
// funcões

function handlekeyUp(e){
    if (e.key === 'Enter'){
        // Adicionar elementos LI na lista
      const newLi = document.createElement('li');
      newLi.innerHTML = input.value;
      lista.appendChild(newLi);

        // Limpar o campo de texto 
      input.value = '';
    }
}
  // EVENTO
  input.addEventListener('keyup', handlekeyUp);