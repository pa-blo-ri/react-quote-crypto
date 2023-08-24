import styled from "@emotion/styled"

const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 10px;
`
const Subcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin: 5px 0;
`
const Text = styled.p`
    font-size: 18px;
    margin: 10px 0px;
    span{
        font-weight: 700;
    }
`
const Price = styled.p`
    font-size: 24px;
    margin: 10px 0px;
    span{
        font-weight: 700;
    }
`
const Image = styled.img`
    display: block;
    width: 120px;
    margin-top: 10px;
`

const Result = ({ quote }) => {

    console.log(quote)

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = quote

    return (
        <Container>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Logo cryptocurrency"
            />
            <Subcontainer>
                <Price>Quote is: <span>{PRICE}</span></Price>
                <Text>Highest price: <span>{HIGHDAY}</span></Text>
                <Text>Lowest price: <span>{LOWDAY}</span></Text>
                <Text>Change % 24hs: <span>{CHANGEPCT24HOUR ? CHANGEPCT24HOUR : 'NAN'}</span></Text>
                <Text>Updated: <span>{LASTUPDATE}</span></Text>
            </Subcontainer>
        </Container>
    )
}

export default Result
