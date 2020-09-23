window.addEventListener('load',() =>{
    const params = (new URL(document.location)).searchParams;
    const name = params.get('Firstname');
    const middle = params.get('Middlename');
    const last = params.get('Lastname');
    const gender = params.get('Gender');
    const email = params.get('email');
    const DateOfBirth = params.get('DateOfBirth');
    const address = params.get('Address');
    const phone = params.get('phone');

  

    document.getElementById('Firstname').innerHTML = name;
    document.getElementById('Middlename').innerHTML = middle;
    document.getElementById('Lastname').innerHTML = last;
    document.getElementById('Gender').innerHTML = gender;
    document.getElementById('email').innerHTML = email;
    document.getElementById('DateOfBirth').innerHTML = DateOfBirth;
    document.getElementById('Address').innerHTML = address;
    document.getElementById('phone').innerHTML = phone;
    
})