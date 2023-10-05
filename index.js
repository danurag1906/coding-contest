// import moment from 'moment';

const api = `https://kontests.net/api/v1/all`;
console.log(api);

const centerDiv = document.querySelector("#center");
console.log(centerDiv);

fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data);
      for (let index = 0; index < data.length; index++) {
        let startDate = new Date(data[index].start_time);

        let endDate = new Date(data[index].end_time);

        centerDiv.innerHTML =
          centerDiv.innerHTML +
          `

        <div class="cardDiv">
            <h3 class="heading">Contest Name :<span class="headingspan">${data[index].name}<span/></h3>
            <h5 class="subheading">Site :<span class="subheadingspan"> ${data[index].site} <span/></h5>
            <p class="startTime"><span class="startTimeSpan">Start Time :</span>  ${startDate} </p>
            <p class="endTime"><span class="endTimeSpan">
                End Time :
            </span> ${endDate}</p>
            <p class="tfhours">In 24 Hours ? <span class="no">${data[index].in_24_hours}</span></p>
            <a href="${data[index].url}" target="_blank" class="articleLink">Full Article</a>
        </div>

    `;
      }
    })
    .catch((error) => {
      console.log(error);
    });
