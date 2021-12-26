import { FlexLayout } from "../FlexLayout/FlexLayout";
import { StyledCard } from "./style";

interface CardProps  {
    img: string,
    content:string,
    date: string,
    tags: JSX.Element,
    header: string,
    source: string,
    button: JSX.Element
}

export const Card = (props : CardProps) => <FlexLayout direction="row">
    <img src={props.img}/>
    <StyledCard {...props}/>
    </FlexLayout>