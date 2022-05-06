const stateSelectElement = document.querySelector('#cuf');
const citySelectElement = document.querySelector('#icidade');

window.addEventListener('load', () => {
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  .then(res => res.json())
  .then(data => {
    let statesByRegion = {
      'Centro-Oeste': [],
      'Nordeste': [],
      'Norte': [],
      'Sudeste': [],
      'Sul': [],
    };

    data.forEach(item => {
      const { sigla, nome, regiao } = item;

      statesByRegion[regiao.nome].push({
        nome,
        sigla,
      });
    });

    Object.keys(statesByRegion).forEach(region => {
      const optGroup = document.createElement('optgroup');
      optGroup.setAttribute('label', region);

      statesByRegion[region].sort((a, b) => a.nome.localeCompare(b.nome))
      .forEach(state => {
        const { nome, sigla } = state;

        const opt = document.createElement('option');
        opt.setAttribute('value', sigla);
        opt.innerHTML = nome;

        optGroup.appendChild(opt);
      });

      stateSelectElement.appendChild(optGroup);
    });
  });
});

stateSelectElement.addEventListener('change', event => {
  citySelectElement.value = '';

  citySelectElement.innerHTML = `
    <option value="" selected hidden>Escolha uma opção</option>
  `;

  const selectedState = event.currentTarget.value;

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
  .then(res => res.json())
  .then(data => {
    data.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(item => {
      const { sigla, nome } = item;

      const opt = document.createElement('option');
      opt.setAttribute('value', sigla);
      opt.innerHTML = nome;

      citySelectElement.appendChild(opt);
    })
  });
});