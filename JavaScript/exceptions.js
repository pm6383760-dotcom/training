function checkAge(age) {
    try {
        if (age < 18) {
            throw new Error("You must be 18 or older.");
        }

        console.log("Access granted.");
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally {
        console.log("Age check completed.");
    }
}

checkAge(45);