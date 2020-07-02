let age = +prompt('Сколько вам лет?');
if (age >= 18) {
 alert('Доступ к материалам открыт!');
} else if (age <= 12) {
alert('В доступе отказано!');
} else if (age > 12 || age < 18) {
alert('Вам доступна ознакомительная версия!');
}
else {
alert('чтото пошло не так! Попробуйте снова!');
}



//function myFunction() {
   // let first = +(document.forms.questions.elements.age.value),
      //  second = +(document.forms.questions.elements.expiriens.value),
       // third = +(document.forms.questions.elements.skill.value),
       // fourth = +(document.forms.questions.elements.sex.value),
       // complete = (first + second + third + fourth);
  //  console.log(complete);
   // if (complete <= 50) {
     //   alert('Вы чутка не дотягиваете до наших требований!');
   // }
       // else if (complete > 50 && complete< 90){
        //    alert('Мы свяжемся с вами в ближайшее время');
       // }
       // else{ 
         //   alert('Ждем вас завтра в нашем офисе на улице Пушкина, дом Колотушкина');
       // }
  //  }
    