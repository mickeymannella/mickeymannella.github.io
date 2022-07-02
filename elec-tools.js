// constants for calculation
var ft_per_m = 3.28084 // ft/m
var cu_resistivity = 1.72*10**-8 //ohm-meter
var al_resistivity = 2.65*10**-8 //ohm-meter

// Functions for various calculations
function threePhasePower(ev){
   	var voltage = document.getElementById("voltage");
    console.log(voltage.value);
	var amps = document.getElementById("amps");
    console.log(amps.value);
    var pf = document.getElementById("pf");
    console.log(pf.value);
    
    var power = 1.73 * voltage.value * amps.value * pf.value
    console.log(power);

    var power_para = document.getElementById('pow-val');
    if (power_para == null) {
        var new_para = document.createElement('p');
        new_para.id = 'pow-val';
        var new_content = document.createTextNode(power + ' Watts');
        new_para.appendChild(new_content);

        var power_form = document.getElementById("power");
        var pow = power_form.insertAdjacentElement('afterend', new_para);
    } else {
        power_para.textContent = power + ' Watts';
    }
}

function voltageDrop() {
    var distance = document.getElementById("distance");
    var horsepower = document.getElementById("horsepower");
    var voltage = document.getElementById("voltage");
    var powerFactor = document.getElementById("power-factor");
    var percentage = document.getElementById("percentage");

    var wattsPerHorsepower = 746.3;

    var watts = wattsPerHorsepower * horsepower;

    var amps = watts / (Math.sqrt(3) * (voltage* (1-percentage)) * powerFactor); 

    var awg = ["14 awg",
               "12 awg",
               "10 awg",
               "8 awg",
               "6 awg",
               "4 awg",
               "2 awg",
               "1 awg",
               "1/0 awg",
               "2/0 awg",
               "3/0 awg",
               "4/0 awg",
               "250 MCM",
               "500 MCM",
               "600 MCM",
               "750 MCM",];
    var cuAwgIndex = null;
    var alAwgIndex = null;
    if (amps > 20 && amps < 25) {
        cuAwgIndex = 0;
    }
}


var el = document.getElementById("calc");
console.log('begin');
el.addEventListener("click", threePhasePower, false);
