module.exports = (error, request, response, next) => {
    console.log("### Error handler ###");
    console.log(error);
    response.sendStatus(500);
};
