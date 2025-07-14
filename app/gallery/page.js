import Image from "next/image";
import dog from "../../assets/dog.webp"

const GalleryPage = () => {
    return (
        <div>
            <h2 className="text-center mt-5">Regular Image Tag</h2>
            <img className="mx-auto" width={300} height={400} src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525" alt="dog dog"></img>
            
            <h2 className="text-center mt-32">Next JS Optimized Image</h2>
            <Image className="mx-auto" src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525" alt="dog dog dog" height={300} width={400}></Image>
           
           
            <h2 className="text-center mt-32">Local Image</h2>
            <Image className="mx-auto" src={dog} alt="dog dog dog" height={200} width={300}></Image>
        </div>
    );
};

export default GalleryPage;