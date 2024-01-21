const shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
]

function renderShows(shows) {
    const container = document.querySelector('.main__container');
  
    shows.forEach(show => {
      const showDiv = document.createElement('div');
      showDiv.className = 'main__container__show';
  
      const dateSection = createShowSection('DATE', show.date);
      showDiv.appendChild(dateSection);
  
      const venueSection = createShowSection('VENUE', show.venue);
      showDiv.appendChild(venueSection);
  
      const locationSection = createShowSection('LOCATION', show.location);
      showDiv.appendChild(locationSection);
  
      const buttonDiv = document.createElement('div');
      buttonDiv.className = 'main__container__show__section__button';
      const button = document.createElement('button');
      button.className = 'button';
      button.textContent = 'BUY TICKETS';
      buttonDiv.appendChild(button);
  
      showDiv.appendChild(buttonDiv);
  
      container.appendChild(showDiv);
    });
  }
  
  function createShowSection(title, content) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'main__container__show__section';
  
    const pTitle = document.createElement('p');
    pTitle.className = 'main__container__show__section__t';
    pTitle.textContent = title;
  
    const pContent = document.createElement('p');
    pContent.className = 'main__container__show__section__p';
    pContent.style.fontWeight = 'bold';
    pContent.textContent = content;
  
    sectionDiv.appendChild(pTitle);
    sectionDiv.appendChild(pContent);
  
    return sectionDiv;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderShows(shows);
  });
  