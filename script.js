const searchURL="https://www.themealbd.com/api/json/v1/1/filter.php?1=";
const lookupURL="https://www.themealbd.com/api/json/v1/1/lookup.php?i=";
async  function display()
{
    let res=await fetch(`{$searchURL}+rice`);
    let data=await res.json();
    console.log(data);
}