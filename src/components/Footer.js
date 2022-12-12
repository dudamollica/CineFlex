import styled from "styled-components"

export default function Footer(props) {
    const { img, title, date, hour } = props

    return (
        <FooterStyle data-test="footer">
            <div><img src={img} /></div>
            <span>{title} <br />
                {date ? <p>{date} - {hour}</p> : ""}
            </span>
        </FooterStyle >
    )
}

const FooterStyle = styled.div`
        position: fixed;
        width: 100%;
        height: 117px;
        left: 0px;
        bottom: 0px;
        background: #DFE6ED;
        border: 1px solid #9EADBA;
        display: flex;
        align-items: center;
        color: #293845;
        font-size:26px;
        p{
        margin-top:7px;
        font-size: 23px;
}
        div{
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 18px;
        margin-right: 18px;
}
        img{
        width: 48px;
        height: 72px;
}
`