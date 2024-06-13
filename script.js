
let dadJoke=document.getElementById('dadJoke');
let btn=document.getElementById('btn');

let jokes= ['What do you call a lazy kangaroo? A pouch potato.',
'Did you hear about the restaurant on the moon? Great food, no atmosphere.',
'Why did the scarecrow win an award? Because he was outstanding in his field.',
'What do you call a fish with no eyes? Fsh!',
'Why did the bicycle fall over? Because it was two tired.',
'What do you call a cow with no legs? Ground beef! (This one might be a moo-vement in bad taste...)',
'Why did the golfer wear two pairs of pants? In case he got a hole in one!',
"I used to be addicted to soap, but I'm clean now.",
'What did the left eye say to the right eye? Between you and me, something smells!',
"What do you call a cheese that isn't yours? Nacho cheese!"
]

btn.addEventListener('click', ()=>{
    let randomNum = Math.floor(Math.random()*10);
    console.log(randomNum);
    dadJoke.innerHTML = jokes[randomNum];
})