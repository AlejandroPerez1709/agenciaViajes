/* eslint-disable react/prop-types */

export const BannerImg = ({img}) => {

    console.log(img)
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition:"center",
        height: "400px"
    }
    console.log(bgImage)

    return(
        <div data-aos='zoom-in' className="h-[400px] w-full" style={bgImage}>
            
        </div>
    )
}