

import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const { id } = useParams();
    const services = useLoaderData();


    const service = services.find(service => service.id === Number(id));

    if (!service) {
        return <div>Service not found</div>;
    }

    return (



        <div className="w-[70%] mx-auto">
            <Helmet>
                <title>DonateBlood | Services</title>
            </Helmet>

            <img className="rounded-md mt-6 mb-5 shadow-md mx-auto lg:h-[300px] md:h-[280px] h-[220px] w-[100%]" src={`${service.image}`} alt={service.name} />

            <h2 className="mb-3 md:mb-6 text-center text-xl md:text-4xl font-bold">{service.name}</h2>
            <p className="text-justify text-sm text-gray-600"> {service.description}</p>
            <p className="text-xl font-bold">Price: Free of Cost{service.price}</p>

        </div>
    );
};

export default CardDetails;


































