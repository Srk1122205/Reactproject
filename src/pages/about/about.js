import {
    Container,
    Avatar,
    Grid
} from "@material-ui/core";
import {teamData} from "../../data/about";
import Slider from "react-slick";

export default function AboutUs() {
    return (
        <div>
            <Container>
                <h1>About us</h1>
                <img style={{ width: '100%', height: '450px', borderRadius: '10px' }} src="/images/banner.jpg" alt="" />
                <h4>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium</h4>
                <p style={{ marginBottom: '50px' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by
                the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is
                the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like
                best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims
                of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances
                accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures
      to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
            </Container>
            <div style={{ backgroundColor: 'lightgrey', height: '250px', paddingTop: '70px' }}>
                <Container>
                    <Grid container>
                        <Grid item lg={5} xs={12}>
                            <Grid container>
                                <Grid item>
                                    <Avatar style={{ height: '70px', width: '70px', marginTop: '20px' }} src='/images/avatar1.jpg'></Avatar>
                                    <h3>Mark Jecno</h3>
                                    <h4 style={{ color: '#ff4c3b' }}>Chef</h4>
                                </Grid>
                                <Grid item>
                                    <p style={{ padding: '50px 0px 0px 20px' }}>This is our professional chef designer providing <br /> services here since 2010</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2}>
                            <p style={{border: '2px solid grey', width: '2px', height: '120px', background: 'grey'}}></p>
                        </Grid>
                        <Grid item lg={5} xs={12}>
                            <Grid container>
                                <Grid item>
                                    <Avatar style={{ height: '70px', width: '70px', marginTop: '20px' }} src='/images/avatar1.jpg'></Avatar>
                                    <h3>Mark Jecno</h3>
                                    <h4 style={{ color: '#ff4c3b' }}>Chef</h4>
                                </Grid>
                                <Grid item>
                                    <p style={{ padding: '50px 0px 0px 20px' }}>This is our professional level chef providing <br /> services here since 2010</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container>
                <TeamSlider />
            </Container>
        </div>
    )
}


let TeamSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        arrows: false,
    }
    return (
        <div style={{margin: '40px 0px 80px 0px'}}>
            <h1>Our Team</h1>
                <hr />
            <Slider {...settings}>
                {
                    teamData.map(person => (
                        <div>
                            <img style={{ width: '100px', height: '100px'}} src={person.image} alt="image not found" />
                            <h3 style={{marginTop: '10px', color: '#ff4c3b'}}>{person.name}</h3>
                            <h3>{person.designation}</h3>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}