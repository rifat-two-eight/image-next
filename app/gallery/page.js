import Image from "next/image";

const GalleryPage = () => {
    return (
        <div>
            <h2>Regular Image Tag</h2>
            <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525" alt="dog dog"></img>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Next JS Optimized Image</h2>
            <Image src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525" alt="dog dog dog" height={300} width={400}></Image>
        </div>
    );
};

export default GalleryPage;