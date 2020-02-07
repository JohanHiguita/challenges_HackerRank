/* https://www.hackerrank.com/challenges/strange-advertising/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign */

const get_cumulative = n => {
	const get_liked = day => {
		if (day == 1) return 2
		return Math.floor((get_liked(day - 1) * 3) / 2)
    }

    if (n == 1) return get_liked(n) 
    return get_liked(n) + get_cumulative(n-1) 
    
}

const d = 5
const t = get_cumulative(d)
console.log(t)
