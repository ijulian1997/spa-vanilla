const resolveRoutes = (route) => {
	// we know this because this API only has 256 characters 
	if(route.length <= 3 )  {
		let validRoute = route === '/' ? route : '/:id';
		return validRoute;
	}
	return `/${route}`;
}

export default resolveRoutes;