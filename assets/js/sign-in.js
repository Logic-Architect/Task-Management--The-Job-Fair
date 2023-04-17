console.log('Sign IN');
studentEl = document.getElementById('student');
companyEl = document.getElementById('company');

viewStudEl=document.getElementById('stud');
viewCompEl=document.getElementById('comp');

viewStudEl.addEventListener("click",displayStudentLogin);
viewCompEl.addEventListener("click",displayCompanyLogin);

function displayStudentLogin(){
    console.log('STudent display');
    studentEl.style.display='flex';
    studentEl.style.justifyContent='center';
    companyEl.style.display='none';
    viewStudEl.style.borderBottom = '1px solid grey'
    viewCompEl.style.borderBottom = '0px';
}

function displayCompanyLogin(){
    console.log('Company Display');
    studentEl.style.display='none';
    companyEl.style.display='flex';
    companyEl.style.justifyContent='center';
    viewCompEl.style.borderBottom = '1px solid grey';
    viewStudEl.style.borderBottom = '0px '
}