// https://www.hackerrank.com/challenges/picking-numbers/problem

const a = [4,2,3,4,4,9,98,98,3,3,3,4,2,98,1,98,98,1,1,4,98,2,98,3,9,9,3,1,4,1,98,9,9,2,9,4,2,2,9,98,4,98,1,3,4,9,1,98,98,4,2,3,98,98,1,99,9,98,98,3,98,98,4,98,2,98,4,2,1,1,9,2,4]

const r = pickingNumbers(a)
console.log("result", r)

function pickingNumbers(a) {

	//1.order
	a.sort(function(a, b) {
		return a - b;
	});
	console.log(a)
	const last_index = a.lastIndexOf(0)

	//return last_index
	
	
	//2.get zeros
	let prepared_arr
	let amount_zeros = 0
	if(last_index != -1){
		prepared_arr = a.slice(last_index + 1, a.length)
		amount_zeros = last_index + 1
	}else{
		prepared_arr = a
	}

	//3. add (-1)
	prepared_arr.push(-1);

	let last = 0
	let prelast = 0
	let aux_last = 0
	let aux_prelast = 0
	let prev = 0

	let initial_result = prepared_arr.reduce(function(acum, current, i, arr) {
		if (i == 0) i = 1
		prev = arr[i - 1]

		if (prev == current) {
			last++
			return acum
		} else {
			
			if (last + prelast > acum) {
				aux_last = last
				aux_prelast = prelast
				if (current - prev > 1) {
					last = 1
					prelast = 0
				} else {
					prelast = last
					last = 1
				}
				return aux_last + aux_prelast
			}else{
				if (current - prev > 1) {
					last = 1
					prelast = 0
				}else{
					prelast = last
					last = 1
				}

				return acum
			}
		}
	}, 0)
	const out = initial_result + amount_zeros
	return out
	
}
