import { Card, Button} from 'react-bootstrap'; 
const CardBank = ({header, title, text, body, status, bgcolor, txtcolor}) => {

    const classes = () => {
        const bg = bgcolor ? ` bg-${bgcolor}` : ''; 
        const txt = txtcolor ? ` text-${txtcolor}` : ' text-white';
        return `card mb-3 ${bg} ${txt}`;   
    }

    return (
        <Card style={{ width: '18rem' }} className={classes()}>
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title && (<strong className="card-title">{title}</strong>)}</Card.Title>
                <Card.Text>
                    {text && (<p className="card-text">{text}</p>)}
                    {body}
                    {status && (<div className="createStatus">{status}</div>)}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
}
 
export default CardBank;