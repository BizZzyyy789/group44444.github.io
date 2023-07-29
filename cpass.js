var convertion = [];
var outputArray = [];
var textArray = [];
var characters;
document.querySelector(".togglee").style.visibility = "hidden";
document.querySelector(".K2").style.visibility = "hidden";
document.querySelector(".toggle").onclick = function leangngg(){
  document.querySelector(".togglee").style.visibility = "visible";
  document.querySelector(".K2").style.visibility = "visible";
  document.querySelector(".toggle").style.visibility = "hidden";
}
document.querySelector(".togglee").onclick = function leangngg(){
	document.querySelector(".togglee").style.visibility = "hidden";
	document.querySelector(".K2").style.visibility = "hidden";
	document.querySelector(".toggle").style.visibility = "visible";
  };
document.getElementById('F15').addEventListener('click', () => {
	document.querySelector("#o").style.visibility = "visible";
	document.querySelector("#oo").style.visibility = "hidden";
	var text = document.getElementById('F99').value;
	var lineOfText = text.split('\n');
	lineOfText.forEach(line => {
		var lineArray = [];
		var splitedLine = line.split('');
		splitedLine.forEach(character => {
			lineArray.push(character.codePointAt() || null);
		});
		textArray.push(lineArray);
	});
	textArray.forEach(textLine => {
		outputArray.push(`${textLine}`);
	});
	document.getElementById('o').innerHTML = outputArray;
});
document.getElementById("F16").addEventListener('click', () =>
{
	document.querySelector("#oo").style.visibility = "visible";
	document.querySelector("#o").style.visibility = "hidden";
	const asciiInput = document.getElementById('F9').value;
            const asciiCodes = asciiInput.split(',').map(code => parseInt(code.trim()));
             characters = asciiCodes.map(code => 
			{
                return isNaN(code) ? '' : String.fromCharCode(code);
            }).join('');
     document.getElementById('oo').innerText = `Characters is:   ${characters}`;
});

document.querySelector(".F6").style.visibility = "hidden";
document.querySelector("#F8").style.visibility = "hidden";
document.querySelector("#F10").style.visibility = "hidden";
document.querySelector("#F11").style.visibility = "hidden";
document.querySelector("#o").style.visibility = "hidden";
document.querySelector("#oo").style.visibility = "hidden";

document.querySelector(".btnfos-3").onclick = function leang()
{
	document.querySelector(".F6").style.visibility = "visible";
	document.querySelector("#F8").style.visibility = "visible";
	document.querySelector("#F10").style.visibility = "visible";
	document.querySelector("#F11").style.visibility = "visible";
	document.querySelector("#o").style.visibility = "hidden";
    document.querySelector("#oo").style.visibility = "hidden";
	document.querySelector("#F9").style.visibility = "hidden";
	document.querySelector("#F99").style.visibility = "hidden";
	document.querySelector("#F14").style.visibility = "visible";
	document.querySelector("#F15").style.visibility = "hidden";
	document.querySelector("#F16").style.visibility = "hidden";
	document.querySelector("#F2").style.visibility = "hidden";
	document.querySelector("#F3").style.visibility = "hidden";
	document.querySelector("#F40").style.visibility = "hidden";
	document.querySelector(".btnfos").style.visibility = "hidden";
	document.querySelector("#img-2").style.visibility = "hidden";
}
document.querySelector("#F17").onclick = function leangg()
{
	document.querySelector(".F6").style.visibility = "hidden";
	document.querySelector("#F8").style.visibility = "hidden";
	document.querySelector("#F10").style.visibility = "hidden";
	document.querySelector("#F11").style.visibility = "hidden";
	document.querySelector("#o").style.visibility = "hidden";
	document.querySelector("#oo").style.visibility = "hidden";
	document.querySelector("#F14").style.visibility = "hidden";
	document.querySelector("#F9").style.visibility = "hidden";
	document.querySelector("#F99").style.visibility = "hidden";
	document.querySelector("#F15").style.visibility = "hidden";
	document.querySelector("#F16").style.visibility = "hidden";
	document.querySelector("#F2").style.visibility = "visible";
	document.querySelector("#F3").style.visibility = "visible";
	document.querySelector("#F40").style.visibility = "visible";
	document.querySelector(".btnfos").style.visibility = "visible";
	document.querySelector("#img-2").style.visibility = "visible";
}
let check;
document.querySelector("#F10").onclick = function leanggg()
{
	check = prompt("Please Input Your No : ");
	parseInt(check);
			if(check == 0)
			{
				return;
			}
	document.querySelector(".F6").style.visibility = "visible";
	document.querySelector("#F8").style.visibility = "hidden";
	document.querySelector("#F10").style.visibility = "hidden";
	document.querySelector("#F11").style.visibility = "hidden";
	document.querySelector("#o").style.visibility = "hidden";
	document.querySelector("#oo").style.visibility = "hidden";
	document.querySelector("#F14").style.visibility = "hidden";
	document.querySelector("#F9").style.visibility = "hidden";
	document.querySelector("#F15").style.visibility = "visible";
	document.querySelector("#F16").style.visibility = "hidden";
	document.querySelector("#F99").style.visibility = "visible";
}
let checkk;
document.querySelector("#F11").onclick = function leanggg()
{
	checkk = prompt("Please Input Your No : ");
	parseInt(checkk);
			if(checkk == 0)
			{
				return;
			}
	document.querySelector(".F6").style.visibility = "visible";
	document.querySelector("#F8").style.visibility = "hidden";
	document.querySelector("#F10").style.visibility = "hidden";
	document.querySelector("#F11").style.visibility = "hidden";
	document.querySelector("#o").style.visibility = "hidden";
	document.querySelector("#oo").style.visibility = "hidden";
	document.querySelector("#F14").style.visibility = "hidden";
	document.querySelector("#F9").style.visibility = "visible";
	document.querySelector("#F16").style.visibility = "visible";
	document.querySelector("#F15").style.visibility = "hidden";
	document.querySelector("#F99").style.visibility = "hidden";
		}
document.querySelector("#l7").style.visibility = "hidden";
document.querySelector("#l8").style.visibility = "hidden";	
document.querySelector("#l9").style.visibility = "hidden";	
document.querySelector("#l10").style.visibility = "hidden";
document.querySelector("#l1").onclick = function k()
{
	document.querySelector("#l7").style.visibility = "visible";
	document.querySelector("#l8").style.visibility = "visible";	
	document.querySelector("#l1").style.visibility = "hidden";
	document.querySelector("#l2").style.visibility = "hidden";	
	document.querySelector("#l3").style.visibility = "hidden";
	document.querySelector("#l4").style.visibility = "hidden";
	document.querySelector("#l5").style.visibility = "hidden";	
	document.querySelector("#l6").style.visibility = "hidden";
	document.querySelector("#l10").style.visibility = "visible";
}
document.querySelector("#l2").onclick = function k()
{
	document.querySelector("#l7").style.visibility = "visible";
	document.querySelector("#l9").style.visibility = "visible";	
	document.querySelector("#l1").style.visibility = "hidden";
	document.querySelector("#l2").style.visibility = "hidden";	
	document.querySelector("#l3").style.visibility = "hidden";
	document.querySelector("#l4").style.visibility = "hidden";
	document.querySelector("#l5").style.visibility = "hidden";	
	document.querySelector("#l6").style.visibility = "hidden";
	document.querySelector("#l10").style.visibility = "visible";
}

document.querySelector("#l10").onclick = function k()
{
	document.querySelector("#l7").style.visibility = "hidden";
	document.querySelector("#l8").style.visibility = "hidden";	
	document.querySelector("#l9").style.visibility = "hidden";
	document.querySelector("#l10").style.visibility = "hidden";
	document.querySelector("#l1").style.visibility = "visible";
	document.querySelector("#l2").style.visibility = "visible";	
	document.querySelector("#l3").style.visibility = "visible";
	document.querySelector("#l4").style.visibility = "visible";
	document.querySelector("#l5").style.visibility = "visible";	
	document.querySelector("#l6").style.visibility = "visible";
}

document.querySelector(".L1").style.visibility = "hidden";
document.querySelector(".h0").style.visibility = "hidden";
document.querySelector("#F2").style.visibility = "visible";
document.querySelector("#F3").style.visibility = "visible";
document.querySelector("#F40").style.visibility = "visible";
document.querySelector(".btnfos").style.visibility = "visible";
document.querySelector("#img-2").style.visibility = "visible";

document.querySelector(".K3").onclick = function j()
{
	document.querySelector("#F2").style.visibility = "visible";
	document.querySelector("#F3").style.visibility = "visible";
	document.querySelector("#F40").style.visibility = "visible";
	document.querySelector(".btnfos").style.visibility = "visible";
	document.querySelector("#img-2").style.visibility = "visible";
	document.querySelector(".L1").style.visibility = "hidden";
	document.querySelector(".L2").style.visibility = "hidden";
	document.querySelector(".h0").style.visibility = "hidden";
	document.querySelector("#h1").style.visibility = "hidden";
	document.querySelector("#h11").style.visibility = "hidden";
	document.querySelector("#h2").style.visibility = "hidden";

	document.querySelector("#l1").style.visibility = "hidden";
	document.querySelector("#l2").style.visibility = "hidden";
	document.querySelector("#l3").style.visibility = "hidden";
	document.querySelector("#l4").style.visibility = "hidden";
	document.querySelector("#l5").style.visibility = "hidden";
	document.querySelector("#l6").style.visibility = "hidden";
	document.querySelector("#l7").style.visibility = "hidden";
	document.querySelector("#l8").style.visibility = "hidden";
	document.querySelector("#l9").style.visibility = "hidden";
	document.querySelector("#l10").style.visibility = "hidden";

}
document.querySelector(".K4").onclick = function o()
{
	document.querySelector(".L1").style.visibility ="visible";
	document.querySelector(".h0").style.visibility = "hidden";
	document.querySelector("#F2").style.visibility = "hidden";
	document.querySelector("#F3").style.visibility = "hidden";
	document.querySelector("#F40").style.visibility = "hidden";
	document.querySelector(".btnfos").style.visibility = "hidden";
	document.querySelector("#img-2").style.visibility = "hidden";
	document.querySelector(".h0").style.visibility = "hidden";
	document.querySelector("#h1").style.visibility = "hidden";
	document.querySelector("#h11").style.visibility = "hidden";
	document.querySelector("#h2").style.visibility = "hidden";
	
	document.querySelector("#l1").style.visibility = "visible";
	document.querySelector("#l2").style.visibility = "visible";
	document.querySelector("#l3").style.visibility = "visible";
	document.querySelector("#l4").style.visibility = "visible";
	document.querySelector("#l5").style.visibility = "visible";
	document.querySelector("#l6").style.visibility = "visible";
}
document.querySelector(".K6").onclick = function o()
{
	document.querySelector(".h0").style.visibility ="visible";
	document.querySelector(".h0").style.visibility = "hidden";
	document.querySelector("#F2").style.visibility = "hidden";
	document.querySelector("#F3").style.visibility = "hidden";
	document.querySelector("#F40").style.visibility = "hidden";
	document.querySelector(".btnfos").style.visibility = "hidden";
	document.querySelector("#img-2").style.visibility = "hidden";
	
	document.querySelector("#l1").style.visibility = "hidden";
	document.querySelector("#l2").style.visibility = "hidden";
	document.querySelector("#l3").style.visibility = "hidden";
	document.querySelector("#l4").style.visibility = "hidden";
	document.querySelector("#l5").style.visibility = "hidden";
	document.querySelector("#l6").style.visibility = "hidden";
	document.querySelector("#l7").style.visibility = "hidden";
	document.querySelector("#l8").style.visibility = "hidden";
	document.querySelector("#l9").style.visibility = "hidden";
	document.querySelector("#l10").style.visibility = "hidden";
	
	document.querySelector(".h0").style.visibility = "visible";
	document.querySelector("#h1").style.visibility = "visible";
	document.querySelector("#h11").style.visibility = "visible";
	document.querySelector("#h2").style.visibility = "visible";
}
document.getElementById("l8").onclick = function checkkkkk()
{
if(check == document.querySelector("#l7").value)
{
	const date = new Date();
	let input = document.querySelector("#F99").value;
	alert(`"ID:${check} "\n" INPUT: ${input} "\n" OUTPUT:${outputArray}   "\n" DATE :${date}`);
}
else if(checkk	 == document.querySelector("#l7").value)
{

	const date = new Date();
	let inputt = document.querySelector("#F9").value;
	alert(`"ID:${checkk} "\n" INPUT: ${inputt} "\n" OUTPUT:${characters}   "\n" DATE:${date}`);
}
}

document.getElementById("l9").onclick = function checkkkkkk()
{
if(check == document.querySelector("#l7").value)
{
	input = 0;
	outputArray = 0;
	alert("The Value Have been Summit Delete.....!");
}
else if(checkk == document.querySelector("#l7").value)
{
	inputt = 0;
    characters = 0;
	alert("The Value Have been Summit Delete.....!");
}
}
