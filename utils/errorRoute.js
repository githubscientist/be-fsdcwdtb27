const errorRoute = (request, response, next) => {
    return response.status(404).json({ message: 'Route not found' });
}

module.exports = errorRoute;