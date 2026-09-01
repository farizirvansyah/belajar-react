import { Container, Button, Card } from "react-bootstrap"

const Dashboard = () => {
    return (
        <Container className="py-5">
            <Card className="p-4 shadow-sm">
                <h2>Welcom to Dashboard</h2>
                <p className="text-muted">Login successfully</p>
            </Card>
        </Container>
    )
}

export default Dashboard