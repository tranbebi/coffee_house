import Image from "next/image"
import Header from "../component/header"

export default function Product() {
    const story = [
        {
            id: 1,
            name: "Product 1",
            image: "/img/story_1.jpg",
        },
        {
            id: 2,
            name: "Product 2",
            image: "/img/story_2.jpg",
        },
        {
            id: 3,
            name: "Product 3",
            image: "/img/story_3.jpg",
        },
        {
            id: 4,
            name: "Product 4",
            image: "/img/story_4.jpg",
        },
        {
            id: 5,
            name: "Product 5",
            image: "/img/story_5.jpg",
        },


    ]
    return (
        <>
            <div className='contents-wrapper font-karlar max-w-screen-2xl text-base mx-auto px-8'>
                <Header></Header>
            </div>
            {/* start story  */}
            <div className="flex justify-center my-5">
                <div className="container">
                    <div className="flex gap-4 justify-center">
                        {story.map((item, index) => (
                            <div key={index} className="relative w-[201px] h-[371px] rounded-[10px] overflow-hidden transition-all duration-1000 hover:w-[301px] "> {/* Bo góc và hiệu ứng hover */}
                                <Image
                                    src={item.image} 
                                    alt={item.name || "Mô tả hình ảnh"} 
                                    layout="fill" 
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* end story */}

            {/* start product */}
        </>
    )
}