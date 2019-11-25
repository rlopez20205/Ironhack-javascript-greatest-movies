/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(inputArray){
    let copy = [...inputArray];
    copy.sort( (a, b) =>{
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else if (a.title > b.title) return 1;
    else if (a.title < b.title) return -1;
  }
  )

return copy;

  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let newList = array.filter(movies => movies.director === 'Steven Spielberg');
    return newList.filter(movies => movies.genre.includes('Drama')).length;
    let newArray = array.filter(movies => movies.director === 'Steven Spielberg');
    return newArray.filter(movies => movies.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let newArray = array.map(movies => movies.title);
    let newArraySorted = newArray.sort();
    return newArraySorted.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    let avgRate = array.map(function (rate) {
        return rate.rate;
    })
    let length = avgRate.length;
    avgRate = avgRate.filter(function (element) {
        if (element !== false) {
            return element;
        }
    })
    let rates = avgRate.reduce(function (sum, num) {
        return sum + num;
    }, 0);
    let round = rates / length;
    round = +round.toFixed(2);
    if (array.length == 0) {
        return 0;
    }
    return round;
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let dramaMovies = array.filter(function (movie) {
        if (movie.genre.indexOf('Drama') !== -1) {
            return true;
        }
        return false
    });
    if (dramaMovies.length == 0) {
        return 0;
    }
    return (ratesAverage(dramaMovies));

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(inputArray) {

    return inputArray.map(function (movie) {
        let movieTime = { ...inputArray };
        let hours = 0;
        let minutes = 0;
        if (movie.duration.indexOf('h') !== -1) {
            hours = movie.duration.charAt(0)[0];
        }
        if (movie.duration.indexOf('min') !== -1) {
            if (movie.duration.indexOf(' ') !== -1) {
                minutes = movie.duration.split(' ')[1].split('min')[0];
            }
            else {
                minutes = movie.duration.split('min')[0];
            }
        }
        movieTime.duration = parseInt(hours * 60) + parseInt(minutes);
        return movieTime;
    })
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
