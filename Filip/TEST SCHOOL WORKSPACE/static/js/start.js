function allAdds(input_one, input_two, input_type) {
    if (input_type == "+") {
        return input_one + input_two;

    } else if (input_type == "-") {
        return input_one - input_two;

    } else if (input_type == "*") {
        return input_one * input_two;

    } else if (input_type == "/") {
        return input_one / input_two;

    } else if (input_type == "**") {
        return input_one ** input_two;

    } else if (input_type == "%") {
        return input_one % input_two;
    } else {
        return 0;
    }
}

while (true) {
    var type_list = parseInt(prompt("Type 1 if you want to open calculator,\nType 2 if you want to open square root calculator,\nType 3 if you want to open square area calculator,\nType 4 if you want to open rectangle area calculator,\nType 5 if you want to open cuboid area calculator,\nType 6 if you want to open circle perimeter calculator,\nType 7 if you want to open circle area calculator.\n󠀠\nType 8 if you want to open km car calculator"));

    if (type_list == 2) {
        try {
            var input_one = parseInt(prompt("Podaj swoją liczbę: "));

        } catch(err) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");

            console.log(err);
        }

        alert(`√${input_one} = ${Math.sqrt(input_one)}`)

    } else if (type_list == 3) {
        try {
            var input_one = parseInt(prompt("Podaj swoją liczbę: "));

            alert(`${input_one}² = ${input_one * 2}`)

        } catch(err) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");

            console.log(err);
        }

    } else if (type_list == 4) {
        try {
            var input_one = parseInt(prompt("Podaj swoją liczbę: "));

            var input_two = parseInt(prompt("Podaj swoje drugą liczbę: "));

            alert(`P = ${input_one * 2}${sup(2)}`)

        } catch(err) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");

            console.log(err);
        }

    } else if (type_list == 5) {
        try {
            var input_one = parseInt(prompt("Podaj swoją pierwszą liczbę: "));

            var input_two = parseInt(prompt("Podaj swoje drugą liczbę: "));
            
            var input_three = parseInt(prompt("Podaj swoje trzecią liczbę: "));

            alert(`P = ${((input_one * 2) * input_two) + ((input_two * 2) * input_three) + ((input_three * 2) * input_one)}³`)

        } catch(err) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");

            console.log(err);
        }

    } else if (type_list == 6) {
        try {
            var input_one = parseFloat(prompt("Podaj promień koła: "));

            alert(`P = ${(Math.PI * input_one) * 2}`)

        } catch(err) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");

            console.log(err);
        }

    } else if (type_list == 7) {
        try {
            var input_one = parseFloat(prompt("Podaj promień koła: "));

            alert(`L = ${2 * Math.PI * input_one}`)

        } catch(err) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");

            console.log(err);
        }



    } else if (type_list == 8) {
        try {
            var input_one = parseFloat(prompt("Podaj dystans przejechania autem: "));

            var input_two = parseFloat(prompt("Podaj spalanie paliwa na 100km: "));

            var input_three = parseFloat(prompt("Podaj cenę paliwa: "));

            alert(`${(((input_one * input_two) / 100) * input_three).toFixed(2)}zł`)

        } catch(err) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");

            console.log(err);
        }

    } else if (type_list == 666) {
        while (true) {
            alert("666")
        }
    
    } else if (type_list == 1) { 
        try {
            var input_one = parseInt(prompt("Podaj swoją pierwszą liczbę: "));

            var input_two = parseInt(prompt("Podaj swoje drugą liczbę: "));

            var input_type = prompt("Podaj swój sposób obliczenia: ");

        } catch(err) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");

            console.log(err);
        }

        if (allAdds(input_one, input_two, input_type) == 0) {
            alert("Oops, wygląda na to że zrobiłeś coś źle..");
        } else {
            alert(`${input_one} ${input_type} ${input_two} = ${allAdds(input_one, input_two, input_type)}`)
        }
    }
}

