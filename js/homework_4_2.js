//document.getElementById("monitor").innerHTML = "I have changed!"; 

function button1()
{
    document.getElementById("monitor").innerHTML = "function checkAge(age) {<br/>return (age > 18) ? true : confirm('Родители разрешили?');<br\n>}";

    function checkAge(age)
     {
        return (age > 18) ? true : confirm('Родители разрешили?');
      }
}

function button2()
{
    document.getElementById("monitor").innerHTML = "function checkAge(age) {<br/>return (age > 18) || confirm('Родители разрешили?');<br\n>}";
    function checkAge(age)
    {
        return (age > 18) || confirm('Родители разрешили?');
      }
}