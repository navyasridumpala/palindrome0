    const digits = number.split('');
    const power = digits.length;

    // Calculate the Armstrong sum
    const armstrongSum = digits.reduce((sum, digit) => sum + Math.pow(Number(digit), power), 0);

    // Check if the number is an Armstrong number
    const isArmstrong = armstrongSum === Number(number);

    // Respond with the result
    res.send({
        number,
        isArmstrong,
        message: isArmstrong ? `${number} is an Armstrong number.` : `${number} is not an Armstrong number.`
    });
});

// Start the server on port 3001
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


