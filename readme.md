# Membership system

## BE back end

### Services resource

1. api/servicesRoutes.js --done--
2. isitraukti i server.js --done--
3. tuscias GET /api/services - grazina json "all services route" --done--
4. sukurti rankiniu budu 2-3 services compass, web, mongosh --done--
5. gauti visus services esancius collekcijoje 'services' --done--
6. POST /api/services - tuscias route ir kreipimasis isitikinti kad veikia --done--
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

## FE Front end

1. susikuriam public/index.html,
2. public/js/services.js,
3. public/css/style.css

### Services.html Page

1. Create navBar
2. create static parts of design
3. fetch services from BE and console log services
4. generate cards of services (think about delete button)

### Add-Service.html Page

1. susikuriam public/add-service.html,
2. public/js/addService.js,
3. add-service.html sukuriam forma pagal dizaina
4. addService.js perimam formos valdyma ir surenkam visus ivesties elementus
5. addService.js siunciam sukure objekta su fetch kad sukurti nauja service
6. jei sukurta sekmingai, naviguojam i index.html,
7. jei ne pranesam apie klaida
