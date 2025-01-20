// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// interface Recommendation {
//     created: number;
//     lastModified: number;
//     recommender: {
//         firstName: string;
//         lastName: string;
//         occupation: string;
//         username: string;
//     };
//     relationship: string;
//     text: string;
// }

// const RecommendationsList: React.FC = () => {
//     const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     // useEffect(() => {
//     //     const fetchRecommendations = async () => {
//     //         const options = {
//     //             method: 'GET',
//     //             url: 'https://linkedin-api8.p.rapidapi.com/get-received-recommendations',
//     //             params: {
//     //                 username: 'ryanroslansky',
//     //                 start: '0',
//     //             },
//     //             headers: {
//     //                 'Accept': 'application/json',
//     //                 'Content-Type': 'application/json',
//     //                 'x-rapidapi-ua': 'RapidAPI-Playground',
//     //                 'x-rapidapi-key': 'c4285bee89msh100ec1f50d6f04fp1759d9jsncfa2b6c1a058',
//     //                 'x-rapidapi-host': 'linkedin-api8.p.rapidapi.com',
//     //             },
//     //         };

//     //         try {
//     //             const response = await axios.request(options);
//     //             console.log(response.data); 

    
//     //             if (response.data && Array.isArray(response.data.data)) {
//     //                 setRecommendations(response.data.data);
//     //             } else {
//     //                 setRecommendations([]);
//     //             }

//     //             setLoading(false);
//     //         } catch  {
//     //             setError('Erro ao carregar as recomendações');
//     //             setLoading(false);
//     //         }
//     //     };

//     //     fetchRecommendations();
//     // }, []);

    
//     if (loading) return <div>Carregando...</div>;
//     if (error) return <div>{error}</div>;

   
//     if (recommendations.length === 0) {
//         return <div>Nenhuma recomendação encontrada.</div>;
//     }

//     return (
//         <div>
//             <h1>Recomendações Recebidas</h1>
//             <ul>
//                 {recommendations.map((rec, index) => (
//                     <li key={index}>
//                         <h3>
//                             {rec.recommender.firstName} {rec.recommender.lastName}
//                         </h3>
//                         <p>{rec.recommender.occupation}</p>
//                         <p>{rec.relationship}</p>
//                         <blockquote>{rec.text}</blockquote>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default RecommendationsList;

const index = () => {
    return (
        <div>
            null
        </div>
    );
};

export default index;