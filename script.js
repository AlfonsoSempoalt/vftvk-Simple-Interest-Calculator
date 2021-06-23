function compute()
{
    let p = document.getElementById("principal").value;
    let rate = parseFloat(document.getElementById("rate").value);
    let years = document.getElementById("years").value;
    if(p==='' || rate==='' || years.value===''){
        alert('enter a positive number')
    }else if(parseFloat(p)>0){
        let totalAmount= calculateTax(p,rate,years);
        addResults(p,rate,years,totalAmount);
    }else{
        alert('enter a positive number')
    }
}

const calculateTax=(quantity,rate,years)=>{
    return ((parseFloat(quantity))/100)*parseFloat(rate)*parseFloat(years);
}

const rateUpdate=()=>{
    let rate = document.getElementById("rate").value;
    console.log(rate);
    document.getElementById("rateValue").innerText=rate+"%";
}

const addResults = (p,rate,years,amount)=>{
    let paymentDate= new Date();
    paymentDate.setFullYear((paymentDate.getFullYear()+parseInt(years)),paymentDate.getMonth(),paymentDate.getDay())
    document.getElementById('results').innerHTML = `<p>if you deposit:<mark>${p}</mark> </p>
    <p>at an interest rate of: <mark>${rate}</mark></p>
    <p>you will receive an amount of: <mark>${amount}</mark></p>
    <p>in the year: <mark>${paymentDate.getFullYear()}</mark></p> `;
}