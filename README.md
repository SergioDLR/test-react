Desafio corresponde en obtener datos del endpoint declarado 
y renderizar las cards con los datos que el component requiere

Se dejará declarado el endpoint y un ejemplo de su response.

La prueba se realizará dentro de los componentes "Test" y "Card", además no
se podrán añadir dependencias
Los estilos se dejaron preparados con el fin de no ocupar tiempo de test.

Endpoint:
https://randomuser.me/api/?results=9&exc=gender,location,login,dob,registered,id

//response:
{
	"results": [
		{
			"name": {
				"title": "Ms",
				"first": "Valentina",
				"last": "Engdal"
			},
			"email": "valentina.engdal@example.com",
			"phone": "71541772",
			"cell": "47903916",
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/45.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
			},
			"nat": "NO"
		}
  ],
	"info": {
		"seed": "bf8f329b66a00704",
		"results": 9,
		"page": 1,
		"version": "1.3"
	}
}