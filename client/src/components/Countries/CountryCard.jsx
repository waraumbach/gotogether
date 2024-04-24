import { Card, CardBody, CardText, CardTitle, CardSubtitle, CardLink } from "reactstrap"

const CountryCard = ({maps, name, flags, capital}) => {
    console.log(maps, name, flags, capital)
    return (
        <>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                       {name.common}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {capital && capital[0]}
                    </CardSubtitle>
                </CardBody>
                <img
                    alt="Card cap"
                    src={flags.png}
                    width="100%"
                />
                <CardBody>
                    <CardText>
                        {flags.alt}
                    </CardText>
                    <CardLink target="_blank" href={maps.googleMaps}>
                        Location
                    </CardLink>
                </CardBody>
            </Card>
        </>
    )
}

export default CountryCard