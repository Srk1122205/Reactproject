import { Container, Grid, Card, CardActionArea, CardContent } from "@material-ui/core";
import Slider from "react-slick";
import {productsDb as products} from "../../data/products";


function SampleNextArrow({ className, style, onClick }) {
    
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightgrey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow({ className, style, onClick }) {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightgrey" }}
            onClick={onClick}
        />
    );
 
}

export default function RelatedProducts() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        arrows: false,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    }
    return (
        <div>
            <Container>
                <h2>Related Products</h2>
                <Slider {...settings}>
                    


                        {
                            products.map(product => (
                                <div>
                                    <Card style={{ margin: '20px 0px 20px 4px', width: '200px'}}>
                                        <CardActionArea>
                                            <CardContent>
                                                <img style={{ width: '100%' }} src={product.image} alt="image not found" />
                                                <h3>{product.title}</h3>
                                                <h3>Rs. {product.price}</h3>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            ))
                        }
                </Slider>
            </Container>
        </div>
    )
}