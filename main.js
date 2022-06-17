const dropdown = document.querySelector('.dropdown') //point to dropdown
const dropdown_list = document.querySelector('.dropdown-list') //point to list of dropdown options
const options = document.querySelectorAll('.dropdown-list li') //point to all dropdown options elements
const selected = document.querySelector('.selected') //point to current display option

// point to all user input values
var input_name = document.getElementById('name')
var input_lastname = document.getElementById('lastname')
var input_phone = document.getElementById('phone_number')
var input_checkbox1 = document.getElementById('first_agree')
var input_checkbox2 = document.getElementById('second_agree')

// listen for dropdown click and open/close list
dropdown.addEventListener('click', ()=>{
  dropdown_list.classList.toggle('dropdown-list-open')
})

// display choosed option in display container
options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerHTML = option.innerHTML
  })
})

// form validation
function validateForm(){
  if(input_name.value.length == 0) return alert('Uzupełnij wszystkie pola')
  if(input_lastname.value.length == 0) return alert('Uzupełnij wszystkie pola')
  if(input_phone.value.length == 0) return alert('Uzupełnij wszystkie pola')
  if(!input_checkbox1.checked) return alert('Zaznacz wymagane zgody')
  if(!input_checkbox2.checked) return alert('Zaznacz wymagane zgody')
} 
