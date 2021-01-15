// Project 5: Creating a CV Screener In JavaScript.
console.log('Welcome to CV Screener');

const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'subham sharma',
        age: 28,
        city: 'bangalore',
        language: 'javascript',
        framework: 'angular',
        image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
        name: 'cameela camelo',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
        name: 'sumit',
        age: 23,
        city: 'haridwar',
        language: 'java',
        framework: 'node js',
        image: 'https://randomuser.me/api/portraits/men/57.jpg'
    },
    {
        name: 'gaurav',
        age: 56,
        city: 'shimala',
        language: 'html',
        framework: 'react js',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
        name: 'aditya thakre',
        age: 34,
        city: 'hooghly',
        language: 'cpp',
        framework: 'gaming',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
]


// CV Iterator

function cvIteraator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }

        },
        back: function (){
            return nextIndex >= 0 ?
                { value: profiles[--nextIndex], done: false } :
                { done: true } 
        }
    };

}
// function cvIteraator(profiles) {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < profiles.length ?
//                 { value: profiles[nextIndex++], done: false } :
//                 { done: true }

//         }
//     };

// }


// button listner for next button

candidates = cvIteraator(data);
// console.log(candidates);
nextCV();

const next = document.getElementById('next');
next.addEventListener('click', nextCV);


const back = document.getElementById('back');
back.addEventListener('click', backCV);




function nextCV() {
    const currentCandidate = candidates.next().value;


    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
                                    <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                    <li class="list-group-item">Age: ${currentCandidate.age}</li>
                                    <li class="list-group-item">City: ${currentCandidate.city}</li>
                                    <li class="list-group-item">Language: ${currentCandidate.language}</li>
                                    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
                            </ul>`
    }
    else {
        alert('end of application');
        window.location.reload();
    }
}


function backCV() {
    const currentCandidate = candidates.back().value;
    // console.log(currentCandidate);


    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
                                    <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                    <li class="list-group-item">Age: ${currentCandidate.age}</li>
                                    <li class="list-group-item">City: ${currentCandidate.city}</li>
                                    <li class="list-group-item">Language: ${currentCandidate.language}</li>
                                    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
                            </ul>`
    }
    else {
        alert('end of application');
        window.location.reload();
    }
}