import json from "./clothes.json";

const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<clothes>
	<garment>
		<type>T-shirt</type>
		<size>L</size>
		<brand>Tiger</brand>
		<color>White</color>
	</garment>
	<garment>
		<type>Shirt</type>
		<size>M</size>
		<brand>Riley</brand>
		<color>Blue</color>
	</garment>
	<garment>
		<type>Sweater</type>
		<size>S</size>
		<brand>H&amp;M</brand>
		<color>Black</color>
	</garment>
	<garment>
		<type>Hoodie</type>
		<size>XL</size>
		<brand>FILA</brand>
		<color>Black</color>
	</garment>
	<garment>
		<type>T-shirt</type>
		<size>XS</size>
		<color>Grey</color>
	</garment>
	<garment>
		<type>Tanktop</type>
		<size>L</size>
		<brand>Vans</brand>
		<color>White</color>
	</garment>
	<garment>
		<type>Shirt</type>
		<size>M</size>
		<brand>Adidas</brand>
		<color>Pink</color>
	</garment>
	<garment>
		<type>Sweatpants</type>
		<size>L</size>
		<brand>Gymshark</brand>
		<color>Grey</color>
	</garment>
	<garment>
		<type>Sweater</type>
		<size>M</size>
		<brand>Ullared</brand>
		<color>Red</color>
	</garment>
	<garment>
		<type>T-shirt</type>
		<size>L</size>
		<brand>Nike</brand>
		<color>White</color>
	</garment>
</clothes>	
`;

const csv = `type,size,brand,color
T-shirt,L,Tiger,White
Shirt,M,Riley,Blue
Sweater,S,H&M,Black
Hoodie,XL,FILA,Black,
T-shirt,XS,Calvin Klein,Grey
Tanktop,L,Vans,White
Shirt,M,Adidas,Pink
Sweatpants,L,Gymshark,Grey
Sweater,M,Ullared,Red
T-shirt,L,Nike,White
`;

export { json, xml, csv };
