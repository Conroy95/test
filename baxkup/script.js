document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('days-container');
            data.forEach(day => {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day');

                // Dag titel
                const title = document.createElement('h2');
                title.textContent = `Day ${day.day}: ${day.from} to ${day.to}`;
                dayDiv.appendChild(title);

                // Hotel info
                const hotel = document.createElement('p');
                hotel.innerHTML = `<strong>Hotel:</strong> ${day.hotel.name} (${day.hotel.coordinates})`;
                dayDiv.appendChild(hotel);

                const hotelImg = document.createElement('img');
                hotelImg.src = day.hotel.image;
                hotelImg.alt = day.hotel.name;
                dayDiv.appendChild(hotelImg);

                // Stops onderweg
                const stopsTitle = document.createElement('h3');
                stopsTitle.textContent = 'Stops along the way:';
                dayDiv.appendChild(stopsTitle);

                day.stops.forEach(stop => {
                    const stopInfo = document.createElement('p');
                    stopInfo.innerHTML = `<strong>${stop.name}:</strong> (${stop.coordinates})`;
                    dayDiv.appendChild(stopInfo);

                    const stopImg = document.createElement('img');
                    stopImg.src = stop.image;
                    stopImg.alt = stop.name;
                    dayDiv.appendChild(stopImg);
                });

                container.appendChild(dayDiv);
            });
        });
});