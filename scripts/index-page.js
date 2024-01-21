const commentsForm = document.getElementById('commentsForm');
const commentsList = document.getElementById('commentsList');

const comments = [
    {name: 'Connor Walton',
    timestamp: '02/17/2021', 
    text: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.`
  },
  { 
    name: 'Emilie Beach', 
    timestamp: '01/09/2021', 
    text: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.`
  },
  { 
    name: 'Miles Acosta', 
    timestamp: '12/20/2020', 
    text: `I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`
  }
];

function formatDate(date) {
    const d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDay() + 1),
        year = d.getFullYear();

    return [month.padStart(2, '0'), day.padStart(2, '0'), year].join('/');
}

commentsForm.addEventListener("submit",function(event) {
    event.preventDefault();
    const commentsNameVal = event.target.name.value;
    const commentsContentVal = event.target.comment.value;

    if (commentsNameVal !== '' && commentsContentVal !== '') {
        comments.unshift({
            name: commentsNameVal,
            timestamp: formatDate(new Date()),
            text: commentsContentVal,
        });
        renderComments();
        event.target.reset();
    }   else {
        alert('Please add comment');
    }
});

function renderComments() {
    commentsList.innerHTML = '';
    comments.forEach(function (comment) {
        const commentsLi = document.createElement('li');
        const commentName = document.createElement('h3');
        commentName.innerText = comment.name; 
        commentName.className = 'comment-name';
        const commentDate = document.createElement('p');
        commentDate.innerText = comment.timestamp;
        commentDate.className = 'comment-date';
        const commentContent = document.createElement('p');
        commentContent.innerText = comment.text;
        commentContent.className = 'comment-text';

        commentsLi.appendChild(commentName);
        commentsLi.appendChild(commentDate);
        commentsLi.appendChild(commentContent);
        commentsList.appendChild(commentsLi);
    });
}
renderComments();