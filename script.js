function calcular(){
    const nome = document.getElementById('nome').value
    const mensal = Number(document.getElementById('rmensal').value)
    const tjuros = Number(document.getElementById('txjuros').value)
    const meses = Number(document.getElementById('nparcelas').value)

    const juros = tjuros/100
    
    var res = document.getElementById("resultado")
         
    

   
    let vf = mensal*((1+juros)**meses-1)/juros.toFixed(2)
   
  
        res.innerHTML = `<b>${nome}</b>, se você aplicar <b>R $${mensal}</b>, 
        à taxa de juros de <b>${tjuros}%</b> ao mês,
        durante <b>${meses}</b> meses,
        acumulará uma poupança de <b>R $${vf}</b>`   
    
}