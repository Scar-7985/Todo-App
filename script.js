
let Input = document.getElementById('input');
let list = document.getElementById('list');
let Del_all = document.getElementById('Del_all');


function Submit() {

    if (Input.value == '') {
        alert('Please type something');
    } else {

        // HTML PART STARTS //

        let Data = document.createElement('div');
        Data.setAttribute('class', 'data');


        let text = document.createElement('div');
        text.setAttribute('class', 'text');

        let btn = document.createElement('div');
        btn.setAttribute('class', 'button');

        let icon1 = document.createElement('i');
        icon1.setAttribute('class', 'fa-regular fa-pen-to-square');

        let icon2 = document.createElement('i');
        icon2.setAttribute('class', 'fa-regular fa-trash-can');

        btn.appendChild(icon1);
        btn.appendChild(icon2);
        Data.appendChild(text);
        Data.appendChild(btn);


        list.appendChild(Data);

        // HTML PART ENDS //

        // Text output in list box  //
        text.innerText = Input.value;


        // EDITING PREVIOUS DATA

        icon1.addEventListener('click', () => {
            Input.value = text.innerText;
            text.innerText = Input.value;

            list.removeChild(Data);
        });


        // Delete selected data only
        icon2.addEventListener('click', () => {
            list.removeChild(Data);
        });


        // Delete all data


        Del_all.addEventListener('click', () => {
            list.removeChild(Data);
        });


        // Clearing text area  //
        Input.value = '';
    }

}




