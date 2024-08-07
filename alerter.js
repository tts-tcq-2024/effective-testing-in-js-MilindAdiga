let alertFailureCount = 0;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return celsius > 200 ? 500 : 200;
}

function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 1;
    }
}

alertInCelcius(400.5); // This should fail
alertInCelcius(303.6); // This should fail

//Check failure count increment
const expectedFailures = 2;
if (alertFailureCount !== expectedFailures) {
    throw new Error(`Expected ${expectedFailures} failures, but got ${alertFailureCount}`);
}

console.log(`${alertFailureCount} alerts failed.`); // This should fail
console.log('All is well (maybe!)');
