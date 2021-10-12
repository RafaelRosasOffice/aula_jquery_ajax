function consultaCep() {
  $('.barra-progresse').show()
  var cep = document.getElementById('cep').value
  var url = 'https://viacep.com.br/ws/' + cep + '/json/'
  console.log(url)
  // $ é para acessar o jQuery
  $.ajax({
    url: url,
    type: 'GET',
    success: function (response) {
      console.log(response)
      $('#logradouro').html(response.logradouro)
      $('#bairro').html(response.bairro)
      $('#localidade').html(response.localidade)
      $('#uf').html(response.uf)
      $('#titulo_cep').html('CEP ' + response.cep)

      // show para mostrar qdo apertar o botão
      $('.cep').show()
      $('.barra-progresse').hide()

      // uma forma de fazer, o # é para acessar o id, mas pode ser . para a class
      // $("#logradouro").html(response.logradouro)
      // outra forma de fazer

      // document.getElementById("logradouro").innerHTML = response.logradouro;
      // document.getElementById("bairro").innerHTML = response.bairro;
      // document.getElementById("localidade").innerHTML = response.localidade;
      // document.getElementById("uf").innerHTML = response.uf;
      // document.getElementById("ddd").innerHTML = response.ddd;

      // alert(response.logradouro)
    }
  })
}
// hide para sumir com o conteúdo
$(function () {
  $('.cep').hide()
  $('.barra-progresse').hide()
})
