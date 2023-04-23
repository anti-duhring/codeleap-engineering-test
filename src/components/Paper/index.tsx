import styled from "styled-components"
import Header from "./Header";

type Props = {
    children?: React.ReactElement | never[] | React.ReactElement[] | string | string[];
    header?: React.ReactElement | never[] | React.ReactElement[] | string | string[];
}
const Paper = (props: Props) => {
    return (
        <Container>
            {props.header && 
                <Header>
                    {props.header}
                </Header>
            }
            <Content hasHeader={Boolean(props.header)}>
                {props.children}
            </Content>
        </Container>
    )
}

export default Paper

const Container = styled.div`
    background-color: white;
    margin: 1rem;
`
const Content = styled.div<{ hasHeader: boolean }>`
    padding: 1rem;
    border: 1px solid #999999;
    border-radius: ${(props) => props.hasHeader? '0 0 16px 16px' : '16px'};
`