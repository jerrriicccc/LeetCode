// 2621. Sleep

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
  return result;
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
sleep(200).then(() => console.log(Date.now() - t)); // 100
