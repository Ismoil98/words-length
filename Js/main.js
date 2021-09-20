/////////////////////////////////////////
// 1-misol

//Select DOM elements
var elForm1 = document.querySelector('.form1');
var elInput1 = document.querySelector('.form1__input');
var elResultBox1 = document.querySelector('.result-box1');

//change text in words
function findLongest(text) {
    var words = text.split(' ') 
    var result = '';

    for (var word of words) {
        if (word.length > result.length) {
            result = word;
        }
    }
    return result;

};

// preventDefault form1
elForm1.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var userInput1 = elInput1.value.trim()
    elResultBox1.textContent ='Matndagi eng uzun so\'z: ' + findLongest(userInput1);
});



/////////////////////////////////////////
// 2-misol

//Select DOM elements
var elForm2 = document.querySelector('.form2');
var elInput2 = document.querySelector('.form2__input');
var elResultBox2 = document.querySelector('.result-box2');

//function summ
function summ(numbers) {
    var sonlar =numbers.split(' ');
    var result = 0;

    for (var num of sonlar) {
        result += Number(num);
    }
    return result;
}

// preventDefault form2
elForm2.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var sonn = elInput2.value.trim();
  elResultBox2.textContent = 'Yig\'indi: ' + summ(sonn);
});