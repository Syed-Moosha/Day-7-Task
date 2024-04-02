// // 1.Solving problems using array functions on rest countries data //(https://restcountries.com/v3.1/all).
// a.Get all the countries from Asia continent /region using Filter function
/*
const request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send();
  request.onload=function(){
      var data = request.response;
      var result = JSON.parse(data)
    //   console.log(result)
      var res = result.filter((ele)=>ele.region==="Asia");
        res.forEach((ele)=>console.log(ele.name.common));
      }
*/

// b.Get all the countries with a population of less than 2 lakhs using Filter function
/*
const request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send();
  request.onload=function(){
      var data = request.response;
      var result = JSON.parse(data)
    //   console.log(result);
      var res = result.filter((ele)=>ele.population<200000);
        res.forEach((ele)=>console.log(ele.name.common));
      }
*/

// c.Print the following details name, capital, flag, using forEach function

/*
const request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send();
  request.onload=function(){
      var data = request.response;
      var result = JSON.parse(data)
      result.forEach((ele)=>console.log("'country name': "+ele.name.common+" 'Capital' "+ele.capital+" 'flag': "+ele.flag));
      }
      */

// d.Print the total population of countries using reduce function
/*
const request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send();
  request.onload=function(){
      var data = request.response;
      var result = JSON.parse(data)
      var res = result.reduce((sum,i)=>{return sum+i.population},0);
      console.log(res)
       }
*/
// e.Print the country that uses US dollars as currency.

/*const request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send();
  request.onload=function(){
      var data = request.response;
      var result = JSON.parse(data)
      var curr  = result.filter((ele)=>ele.currencies && ele.currencies.USD)
      curr.forEach((value)=>console.log(value.name.common))
      }*/