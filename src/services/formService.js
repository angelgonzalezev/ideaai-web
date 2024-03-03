import axios from 'axios';

const url = 'https://chatgpt-42.p.rapidapi.com/gpt4';
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const getSpeech = async (data, user) => {
	const speechContent = generatePropmpt(data);
	const options = {
		method: 'POST',
		url,
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': RAPID_API_KEY,
			'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com',
		},
		data: {
			messages: [
				{
					role: 'user',
					content: speechContent,
				},
			],
		},
	};

	try {
		const response = await axios(options);
		const textSpeech = response.data.result;
		return textSpeech;
	} catch (error) {
		console.error(error);
	}
};

export const generatePropmpt = _data => {
	const data = {
		name: 'GenerationAI',
		description:
			'Ayudamos a los nómadas digitales a centralizar sus finanzas permitiéndoles realizar facturas y cobros en criptomonedas y recibiendo euros en su cuenta.',
		target: 'Nómadas Digitales, autónomos, freelancers.',
		geo: 'En todo el mundo. Foco en España, Latinoamérica e India.',
	};
	const header =
		'Imagina que eres una plataforma web basada en inteligencia artificial que, basándote en información sobre una idea de negocio que comparte un usuario, eres capaz de desarrollar cada uno de los puntos de un Business Model Canvas, además de hacer una recopilación de los puntos más importantes para cada uno de los apartados de Business Model Canvas. La información que ofrece el usuario es la siguiente:</br>';

	const ideaName = `Nombre de la idea: ${data.name}. </br>`;
	const ideaDescription = `Descripción de la idea: ${data.description}. </br>`;
	const ideaTarget = `Target y clientes: ${data.target}. </br>`;
	const geography = `Geografía objetivo: ${data.geo}. </br>`;

	const footer =
		'Actúa como una plataforma que utiliza inteligencia artificial y diseña un Business Model Canvas con la información aportada. Además quiero que amplíes la información de forma que el modelo negocio pueda ser realizable y añade ejemplos para cada apartado.  Muestra la información para cada uno de los apartados del Business Model Canvas en formato json y en el mismo orden en el que se completa. No añadas ningún texto diferente a la respuesta. Dame directamente la respuesta en formato json.</br> JSON:';

	return header + ideaName + ideaDescription + ideaTarget + geography + footer;
};
