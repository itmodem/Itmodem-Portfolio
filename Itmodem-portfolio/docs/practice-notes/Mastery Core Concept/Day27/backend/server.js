const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received"), 5000);
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(err => console.error(err));