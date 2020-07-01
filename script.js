function myFunction() {
    let first = +(document.forms.questions.elements.age.value),
        second = +(document.forms.questions.elements.expiriens.value),
        third = +(document.forms.questions.elements.skill.value),
        fourth = +(document.forms.questions.elements.sex.value),
        complete = (first + second + third + fourth);
    console.log(complete);
    if (complete <= 50) {
        alert('Вы чутка не дотягиваете до наших требований!');
    }
        else if (complete > 50 && complete< 90){
            alert('Мы свяжемся с вами в ближайшее время');
        }
        else{ 
            alert('Ждем вас завтра в нашем офисе на улице Пушкина, дом Колотушкина');
        }
    }
    