# Membership system

## BE back end

### Services resource

1. api/servicesRoutes.js --done--
2. isitraukti i server.js --done--
3. tuscias GET /api/services - grazina json "all services route" --done--
4. sukurti rankiniu budu 2-3 services compass, web, mongosh --done--
5. gauti visus services esancius collekcijoje 'services'
6. POST /api/services - tuscias route ir kreipimasis isitikinti kad veikia
7. POST /api/services - su http.rest/postman siunciam objekta su duomenimis sukurti naujai paslaugai. isitikiname kad veikia.
8. DELETE /api/services/:serId - tuscias routes kuris grazina 'serId'
9. DELETE /api/services/:serId - prisinungiam prie DB ir istrinam irasa.

### Users resource

1. POST /api/users - tuscias route, isitikinam kad veikia
2. POST /api/users - siunciam duomenis su Rest client ir isitikinam kad gaunam
3. POST /api/users - prisinungiam prie DB ir sukuriam useri (service_id nusikopijuojam is esamu services)
4. GET /users/:order - tuscias route isitikinam kad veikia
5. GET /users/:order - grazinam visus userius
6. GET /users/:order - isitikinam kad gaunam 'order'
7. GET /users/:order - jei 'order' === ASC rikiuojam A-Z
8. GET /users/:order - jei 'order' === DESC rikiuojam Z-A
